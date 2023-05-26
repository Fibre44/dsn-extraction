// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Extractions, PrismaClient } from '@prisma/client'
type Data = {
    extraction?: Extractions
    extractionList?: Extractions[]
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const method = req.method
        const prisma = new PrismaClient
        switch (method) {
            case 'POST':
                const body = req.body
                if (!body.consolidate) {
                    body.consolidate = false
                }
                const newExtraction = await prisma.extractions.create({
                    data: body
                })
                await prisma.$disconnect()
                res.status(200).json({ extraction: newExtraction })
                break
            case 'GET':
                const extractionsList = await prisma.extractions.findMany()
                await prisma.$disconnect()
                res.status(200).json({ extractionList: extractionsList })
                break
            default:
                await prisma.$disconnect()
                res.status(400).json({ error: 'Mauvaise méthode' })
        }


    } catch (e: any) {
        res.status(500).json({ error: e })
    }
}
