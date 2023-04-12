import { PrismaClient } from "@prisma/client"
import { ExtractionList } from "../../../components/extractionList"
export default async function Home() {
    const prisma = new PrismaClient
    const extraction = await prisma.extractions.findMany()
    await prisma.$disconnect()
    return (<>
        <ExtractionList extractions={extraction} />

    </>
    )
}
