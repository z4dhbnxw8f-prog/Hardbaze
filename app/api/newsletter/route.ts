import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required.' },
        { status: 400 },
      );
    }

    if (!BREVO_API_KEY || !BREVO_LIST_ID) {
      return NextResponse.json(
        {
          error:
            'Brevo environment variables are not configured yet. Add BREVO_API_KEY and BREVO_LIST_ID.',
        },
        { status: 500 },
      );
    }

    const payload = {
      email,
      listIds: [Number(BREVO_LIST_ID)],
      updateEnabled: true,
    };

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return NextResponse.json(
        {
          error:
            errorBody || 'Brevo rejected the subscription request.',
        },
        { status: response.status },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Something went wrong while subscribing.',
      },
      { status: 500 },
    );
  }
}
