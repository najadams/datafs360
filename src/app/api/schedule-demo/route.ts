import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate body content
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // ... inside POST ...

    const { error: supabaseError } = await supabase
      .from('demo_requests')
      .insert([
        { 
          first_name: body.firstName, 
          last_name: body.lastName, 
          email: body.email,
          created_at: new Date().toISOString()
        },
      ]);

    if (supabaseError) {
      console.error('Supabase Error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to schedule demo' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Demo request scheduled successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
