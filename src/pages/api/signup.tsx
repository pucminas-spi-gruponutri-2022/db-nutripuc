// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

type loginData = {
  email: string
  name: string
  crn: string
  password: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<loginData>) {
  const prisma = new PrismaClient()

  if (req.method === 'GET') {
    throw Error('Method not allowed!')
  }

  const loginData = req.body
  console.log(loginData)

  try {
    const professional = await prisma.professional.create({
      data: {
        name: loginData.name,
        crn: loginData.crn,
        email: loginData.email,
        password: loginData.password,
      },
    })
    return res.json(professional)
  } catch (error) {
    throw Error('Error creating Professional!')
  }
}
