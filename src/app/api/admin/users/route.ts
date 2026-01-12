import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'src/data/admin-users.json');

// Helper to read users
function readUsers() {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  return JSON.parse(data);
}

// Helper to write users
function writeUsers(users: any[]) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// GET - List all users (super-admin only)
export async function GET(request: Request) {
  try {
    const users = readUsers();
    
    // Remove passwords from response
    const usersWithoutPasswords = users.map((u: any) => {
      const { password, ...userWithoutPassword } = u;
      return userWithoutPassword;
    });
    
    return NextResponse.json(usersWithoutPasswords);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

// POST - Create new user (super-admin only)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const users = readUsers();
    
    // Check if email already exists
    if (users.some((u: any) => u.email.toLowerCase() === body.email.toLowerCase())) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }
    
    // Generate new ID
    const maxId = users.length > 0 
      ? Math.max(...users.map((u: any) => parseInt(u.id))) 
      : 0;
    const newId = (maxId + 1).toString();
    
    // Create new user
    const newUser = {
      id: newId,
      email: body.email,
      password: body.password,
      name: body.name,
      role: body.role || 'sub-admin',
      createdAt: new Date().toISOString(),
      active: body.active !== undefined ? body.active : true,
    };
    
    users.push(newUser);
    writeUsers(users);
    
    // Return without password
    const { password: _, ...userWithoutPassword } = newUser;
    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

// PUT - Update user (super-admin only)
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const users = readUsers();
    
    const index = users.findIndex((u: any) => u.id === body.id);
    if (index === -1) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    // Check if email is taken by another user
    if (body.email && users.some((u: any, i: number) => 
      i !== index && u.email.toLowerCase() === body.email.toLowerCase()
    )) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }
    
    // Update user (preserve createdAt)
    users[index] = {
      ...users[index],
      ...body,
      id: users[index].id,
      createdAt: users[index].createdAt,
    };
    
    writeUsers(users);
    
    // Return without password
    const { password: _, ...userWithoutPassword } = users[index];
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

// DELETE - Delete user (super-admin only)
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 });
    }
    
    const users = readUsers();
    
    // Prevent deleting the last super-admin
    const user = users.find((u: any) => u.id === id);
    if (user && user.role === 'super-admin') {
      const superAdmins = users.filter((u: any) => u.role === 'super-admin' && u.active);
      if (superAdmins.length <= 1) {
        return NextResponse.json({ error: 'Cannot delete the last super admin' }, { status: 400 });
      }
    }
    
    const filteredUsers = users.filter((u: any) => u.id !== id);
    
    if (filteredUsers.length === users.length) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    
    writeUsers(filteredUsers);
    
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
