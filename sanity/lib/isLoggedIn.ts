import 'server-only'

import { cookies } from 'next/headers'

import { client } from './client'

export async function isLoggedIn(): Promise<boolean> {
  const c = await cookies()
  const cookieValue =
    c.get('sanitySession')?.value || c.get('__session')?.value

  if (!cookieValue) {
    return false
  }

  const authClient = client.withConfig({ token: cookieValue })
  try {
    const user = await authClient.users.getById('me')
    return !!user
  } catch {
    return false
  }
}
