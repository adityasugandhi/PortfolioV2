import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_2Q2quzhj_4QTkad4DdQ6MghKdoUiEWtwX');

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['adityasugandhi.work@outlook.com'],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Reply To:</strong> 
              <a href="mailto:${email}" style="color: #007acc;">${email}</a>
            </p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #ffffff; border: 1px solid #ddd; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
${message}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #666; font-size: 14px; text-align: center;">
            This message was sent from your portfolio contact form at 
            <a href="https://adityasugandhi.dev" style="color: #007acc;">adityasugandhi.dev</a>
          </p>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { status: 500 }
      );
    }

    console.log('Contact form email sent successfully:', data);
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}