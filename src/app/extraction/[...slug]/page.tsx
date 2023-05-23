import { PrismaClient } from "@prisma/client"
import Link from "next/link"
type Params = {
    slug: string[]
}
export default async function extraction({ params }: { params: Params }) {
    const [extractionId, sheetId, columnId] = params.slug
    let sheets = null
    let columns = null
    let transcos = null
    const prisma = new PrismaClient()
    const dsnSegment = await prisma.dsnFields.findMany()
    await prisma.$disconnect()

    if (extractionId) {
        const prisma = new PrismaClient()
        sheets = await prisma.sheets.findMany({
            where: {
                extractionId: extractionId
            }
        })
        await prisma.$disconnect()
    }
    if (sheetId) {
        const prisma = new PrismaClient()
        columns = await prisma.columns.findMany({
            where: {
                sheetId: sheetId
            }
        })
        await prisma.$disconnect()
    }
    if (columnId) {
        const prisma = new PrismaClient()
        transcos = await prisma.transcos.findMany({
            where: {
                columnsId: columnId
            }
        })
        await prisma.$disconnect()
    }

    return <div className="w-full flex flex-col h-5">
        <div>
            <div className="tabs w-full ">
                {sheets ? sheets.map(sheet => <Link key={sheet.id} className="tab tab-sm tab-lifted" href={`/extraction/${extractionId}/${sheet.id}`}>{sheet.name}</Link>) : ''}
            </div>
        </div>
        {columns ? <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>Nom de la colonne</th>
                    <th>Segment DSN</th>
                    <th>Valeur par default</th>
                    <th>Largeur</th>
                    <th>Extraction à droite</th>
                    <th>Extraction à gauche</th>
                </tr>
            </thead>
            <tbody>
                {columns ? columns.map(column =>
                    <tr key={column.id}>
                        <th>{column.header}</th>
                        <th>{dsnSegment.find(dsn => dsn.field === column.dsnKey)?.structure ? dsnSegment.find(dsn => dsn.field === column.dsnKey)?.structure : 'Colonne vide'}</th>
                        <th>{column.defaultValue}</th>
                        <th>{column.width}</th>
                        <th>{column.left}</th>
                        <th>{column.right}</th>

                    </tr>) : ''}
            </tbody>
        </table> : ''}


    </div>
}
