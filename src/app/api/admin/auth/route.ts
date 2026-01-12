import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const USERS_FILE = path.join(process.cwd(), 'src/data/admin-users.json');

// Helper to read users
function readUsers() {
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  return JSON.parse(data);
}

// POST - Login with email and password
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }
    
    const users = readUsers();
    const user = users.find((u: any) => 
      u.email.toLowerCase() === email.toLowerCase() && 
      u.password === password &&
      u.active === true
    );
    
    if (user) {
      // Return user info without password
      const { password: _, ...userWithoutPassword } = user;
      return NextResponse.json({ 
        authenticated: true,
        user: userWithoutPassword
      });
    }
    
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}

// GET - Verify current session
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }
    
    const users = readUsers();
    const user = users.find((u: any) => u.id === userId && u.active === true);
    
    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      return NextResponse.json({ 
        authenticated: true,
        user: userWithoutPassword
      });
    }
    
    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 500 });
  }
}
