import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, message, token } = await req.json()
    if (!token) {
      return NextResponse.json({ success: false, error: 'Missing token' }, { status: 400 })
    }
    const secret = process.env.RECAPTCHA_SECRET_KEY
    if (!secret) {
      return NextResponse.json({ success: false, error: 'Recaptcha secret not configured' }, { status: 500 })
    }

    const params = new URLSearchParams()
    params.append('secret', secret)
    params.append('response', token)

    const googleRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
    const data = await googleRes.json()
    if (!data.success) {
      return NextResponse.json({ success: false, error: 'Invalid recaptcha' }, { status: 400 })
    }

    // TODO: Handle form submission (e.g., send email)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
