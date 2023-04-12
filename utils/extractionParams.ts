import { PrismaClient } from '@prisma/client'

export const extractionParams = async (extractionId: string) => {
    const prisma = new PrismaClient()
    const extractionParams = await prisma.extractions.findFirst({
        where: {
            id: extractionId
        }
    })
    await prisma.$disconnect()
    return extractionParams

}