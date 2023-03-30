import { getSession } from 'next-auth/react'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function authMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  const session = await getSession({ req })

  if (!session) {
    res.writeHead(302, {
      Location: '/signin'
    })
    res.status(401).end(`No access without connecting!`)
  } else {
    next()
  }
}
