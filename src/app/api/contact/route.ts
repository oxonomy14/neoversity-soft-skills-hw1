// api/contact/route.ts

import type { ContactFormData } from '@/types/contact-form.types';

async function sendToN8N(data: ContactFormData) {
  const webhookUrl = process.env.N8N_WEBHOOK;

  if (!webhookUrl) {
    throw new Error('N8N_WEBHOOK is not defined');
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to send data to n8n');
  }

  return response.json();
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const result = await sendToN8N(data);

    return Response.json({
      success: true,
      orderId: result.orderId,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: 'Something went wrong',
      },
      {
        status: 500,
      },
    );
  }
}
