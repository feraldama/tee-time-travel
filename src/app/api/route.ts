export async function GET() {
  const data = {
    message: 'API Portal de Transparencia'
  }

  return new Response(JSON.stringify(data), { status: 200 })
}
