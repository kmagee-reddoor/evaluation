import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({ success: true }, { status: 200 })
}


