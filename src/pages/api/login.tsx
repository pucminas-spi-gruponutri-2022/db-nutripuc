// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

type loginValidation = {
  email: string
  password: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient()

  if (req.method === 'GET') {
    throw Error('Method not allowed!')
  }

  const loginValidation = req.body

  try {
    const user = await prisma.professional.findFirst({
      where: {
        email: loginValidation.email,
      },
    })

    if (!user) return res.json({ message: 'user doest not exists' })

    if (user.password !== loginValidation.password) return res.json({ message: 'credentials are wrong' })

    return res.status(201).json({ message: 'authenticated' })
  } catch (error) {
    throw Error('Error creating Professional!')
  }
}
