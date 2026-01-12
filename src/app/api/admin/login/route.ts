import { NextResponse } from 'next/server';
import adminUsers from '@/data/admin-users.json';

// Simple auth API - In production, use proper authentication like NextAuth.js
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Find user in admin-users.json
    const user = adminUsers.find(
      (u) => u.email === email && u.password === password && u.active
    );

    if (user) {
      // Create a simple token (in production, use JWT)
      const token = Buffer.from(`${email}:${Date.now()}`).toString('base64');
      
      const response = NextResponse.json({ 
        success: true, 
        message: 'Login successful',
        user: { email: user.email, name: user.name, role: user.role }
      });

      // Set cookie
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 24 hours
      });

      return response;
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Invalid credentials' 
      }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Server error' 
    }, { status: 500 });
  }
}
