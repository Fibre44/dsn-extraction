import { PrismaClient } from "@prisma/client"
import SheetForm from "../../../../components/sheetForm"
type Params = {
    slug: string[]
}
export default async function ExampleClientComponent({ params }: { slug: string[] }) {
    let extractionId = null
    let sheet = null
    let fields = null
    if (params?.slug[0]) {
        extractionId = params.slug[0]
        const prisma = new PrismaClient()
        sheet = await prisma.sheets.findMany({
            where: {
                extractionId: extractionId
            }
        })
        fields = await prisma.dsnFields.findMany()
        await prisma.$disconnect()
    }
    return <div>
        <ul>
            {sheet ? sheet.map(sheet => <li key={sheet.id}>{sheet.name}</li>) : ''}
        </ul>
        <SheetForm extractionId={extractionId} />
    </div>
}
