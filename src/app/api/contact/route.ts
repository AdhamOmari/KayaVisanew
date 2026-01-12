import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, visa_type, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically send an email or save to a database
    // For now, we'll just log the data and return success
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      visa_type,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate sending email (in production, use nodemailer or similar)
    // await sendEmail({ to: 'info@kayavisa.org', from: email, subject: `Contact Form: ${visa_type}`, body: message });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully. We will contact you within 24 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
