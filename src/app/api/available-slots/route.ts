export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const date = searchParams.get('date');

  const response = await fetch(
    `${process.env.N8N_AVAILABLE_SLOTS_WEBHOOK}?date=${date}`,
  );

  const data = await response.json();

  return Response.json(data);
}
