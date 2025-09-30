import { NextResponse } from 'next/server'

import kv from '@/lib/kv'

export async function POST(req: Request) {
  try {
    const { ...everything } = await req.json()
    
    const timestamp = new Date().toISOString();
    kv.set( timestamp, JSON.stringify(everything));
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
