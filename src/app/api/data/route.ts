import { auth } from '@core/auth'
import { NextResponse } from 'next/server'

export const GET = auth(function GET(req: any) {
  if (req.auth) return NextResponse.json(req.auth)
  return NextResponse.json({ message: 'Not Authenticated' }, { status: 401 })
})
