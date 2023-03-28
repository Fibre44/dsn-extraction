// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
type Data = {
    name?: string
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        if (req.method != 'POST') {
            res.status(400).json({ error: `Vous devez envoyer une requete POST` })
            return
        }
        const prisma = new PrismaClient()
        await prisma.extraction.create({
            data: {
                title: 'dsn',
                description: 'Un test',
                columns: {
                    create: [
                        {
                            key: 'softwareName',
                            header: 'softwareName'
                        },
                        {
                            key: 'provider',
                            header: 'provider'
                        },
                    ]
                }

            },

        })
        const extraction = await prisma.extraction.findMany()
        await prisma.$disconnect()

        res.status(200).json({ extraction })

    } catch (e: string) {
        res.status(500).json({ error: e })
    }
}
