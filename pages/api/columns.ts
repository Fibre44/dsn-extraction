// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Columns, PrismaClient } from '@prisma/client'
type Data = {
    name?: Columns
    error?: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {

        if (req.method = 'POST') {
            const bloc = req.body.bloc
            const key = req.body.key
            const header = req.body.header
            const width = parseInt(req.body.width)
            const sheetId = req.body.sheetId
            const dsnKey = req.body.dsnKey
            if (bloc && key && header && width && sheetId && dsnKey) {
                const prisma = new PrismaClient
                const sheet = await prisma.sheets.findUnique({
                    where: {
                        id: sheetId
                    }
                })
                if (!sheet) {
                    res.status(404).json({ error: `La feuille n'existe pas` })
                }
                const newSheet = await prisma.columns.create({
                    data: {
                        bloc,
                        key,
                        dsnKey,
                        header,
                        width,
                        sheetId
                    }
                })

                await prisma.$disconnect()
                res.status(200).json({ name: newSheet })

                await prisma.$disconnect()
            } else (
                res.status(400).json({ error: 'Requete incomplète' })
            )

        }

    } catch (e: any) {

        res.status(500).json({ error: e })
    }
}
