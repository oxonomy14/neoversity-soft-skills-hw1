// src/api/testimonials/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(`${process.env.N8N_TESTIMONIALS_WEBHOOK}`, {
      cache: 'no-store',
    });

    const testimonials = await response.json();

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Testimonials API error:', error);
    return NextResponse.json(
      { error: 'Failed to load testimonials' },
      { status: 500 },
    );
  }
}
