import { NextResponse } from 'next/server'

export async function GET() {
  const healthCheckResult = {
    status: 'ok',
    timestamp: new Date().toISOString()
  }

  return NextResponse.json(healthCheckResult, { status: 200 })
}
