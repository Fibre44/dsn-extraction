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
    const columnnParam = columns?.find(column => column.id === columnId)
    return <div className="w-full">
        <div>
            <ul className="menu menu-horizontal bg-base-100 rounded-box">
                {sheets ? sheets.map(sheet => <li key={sheet.id} ><Link className={sheet.id === sheetId ? "tab tab-lg tab-lifted tab-active" : "tab tab-lg tab-lifted"} href={`/extraction/${extractionId}/${sheet.id}`}>{sheet.name}</Link></li>) : ''}
            </ul>
        </div>
        <div className="grid grid-cols-2">
            <div >
                <ul className="menu bg-base-100 w-56">
                    {columns ? columns.map(column =>
                        <li key={column.id}><Link key={column.id} className={column.id === columnId ? "active" : ""} href={`/extraction/${extractionId}/${sheetId}/${column.id}`}>{column.header}</Link></li>
                    ) : ''}
                </ul>

            </div>
            <div>
                {columnnParam ?
                    <ul>
                        <li key={columnnParam.id}>Segment DSN :{dsnSegment.find(dsn => dsn.field === columnnParam.dsnKey)?.structure ? dsnSegment.find(dsn => dsn.field === columnnParam.dsnKey)?.structure : 'Colonne vide'}</li>
                        <li key={columnnParam.defaultValue}>Valeur par default : {columnnParam.defaultValue}</li>
                        <li key={columnnParam.width}>Largeur de la colonne : {columnnParam.width}</li>
                        <li key={columnnParam.left}>Gauche : {columnnParam.left}</li>
                        <li key={columnnParam.right}>Droite : {columnnParam.right}</li>
                        {transcos ? transcos.map(transco =>
                            <>
                                <li key={transco.id}>Valeur DSN : {transco.dsnValue}</li>
                                <li key={transco.id}>Valeur transco : {transco.newValue}</li>
                            </>
                        )
                            : ""}
                    </ul>
                    :
                    <p></p>}
            </div>
        </div>





    </div>
}
