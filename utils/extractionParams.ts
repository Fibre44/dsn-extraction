import { prisma } from "./db"
export const extractionParams = async (extractionId: string) => {

    const extractionParams = await prisma.extractions.findFirst({
        where: {
            id: extractionId
        }
    })
    await prisma.$disconnect()
    return extractionParams

}