import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate body content briefly
    if (!body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ... inside POST ...

    const { error: supabaseError } = await supabase
      .from('contacts')
      .insert([
        { 
          email: body.email, 
          message: body.message,
          created_at: new Date().toISOString()
        },
      ]);

    if (supabaseError) {
      console.error('Supabase Error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to save contact request' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Contact request received successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
