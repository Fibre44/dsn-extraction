// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Sheets, PrismaClient } from '@prisma/client'
type Data = {
    name?: Sheets
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        console.log('test')
        if (req.method = 'POST') {
            const name: string = req.body.name
            const extractionId: string = req.body.extractionId
            const color: string = req.body.color
            const type: string = req.body.type
            if (name && extractionId && color && type) {
                const prisma = new PrismaClient
                const extraction = await prisma.extractions.findUnique({
                    where: {
                        id: extractionId
                    }
                })
                if (!extraction) {
                    res.status(404).json({ error: `L'extraction n'existe pas` })
                }
                const newSheet = await prisma.sheets.create({
                    data: {
                        name,
                        color,
                        type,
                        extractionId

                    }
                })

                await prisma.$disconnect()
                res.status(200).json({ name: newSheet })

                await prisma.$disconnect()

            } else {
                res.status(400).json({ error: `Requete incomplète` })
            }

        } else {
            res.status(400).json({ error: 'Erreur dans le body' })
        }

    } catch (e: any) {

        res.status(500).json({ error: e })
    }
}
