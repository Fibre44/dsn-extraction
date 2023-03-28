import Excel from 'exceljs'
import { PrismaClient } from '@prisma/client'
import { DSNDatas } from './makeDSNDatas'
import path from 'path'
/**
 * 
 * @param uuid 
 * @param dsnDatas 
 * @returns void
 * Cette fonction va récupérer le paramétrage de l'extraction dans la base de données
 * A partir des données de l'extraction, la fonction va extraire les valeurs de l'objet DSNDatas
 * La fonction va écrire les données dans un fichier Excel
 */
export const extraction = async (uuid: string, dsnDatas: DSNDatas[], extractionName: string) => {

    try {
        const patchProject = path.join(process.cwd() + "/tmp/", uuid)
        //Etape 1 on récupére l'extraction
        const prisma = new PrismaClient()
        const extraction = await prisma.extraction.findFirst({
            where: {
                title: extractionName
            },
            include: {
                sheet: true,
            }
        })
        if (extraction) {
            const fileName = extraction.fileName
            //Etape 2 on instancie l'objet
            const workbook = new Excel.Workbook();
            //Un fichier peut contenir X feuilles
            for (let sheetActive of extraction.sheet) {
                //On ajoute la feuille
                workbook.addWorksheet(sheetActive.name, { properties: { tabColor: { argb: 'FFC0000' } } });
                //Une feuille contient X columns
                let sheet = workbook.getWorksheet(sheetActive.name)
                let columsPrisma = await prisma.columns.findMany({
                    where: {
                        sheetId: sheetActive.id
                    }
                })
                if (columsPrisma) {
                    let columsList = []
                    for (let columnActive of columsPrisma) {
                        columsList.push({
                            header: columnActive.header,
                            key: columnActive.key,
                            width: 10,
                            outlineLevel: 1
                        })
                    }
                    sheet.columns = columsList
                }

                //Gestion des données
                //On va tourner par dsn
                for (let dsn of dsnDatas) {
                    let employee = dsn.employee
                    let row: any = {}
                    //On va tourner par colonne poour créer une ligne
                    //Attention l'objet peut avoir des clés différentes en fonction des salariés
                    for (let colums of columsPrisma) {
                        let keys = Object.keys(employee)
                        //On va tester si l'employée à bien la clé
                        let findKey = keys.find(k => k === colums.key)
                        //Gestion à revoir TS ne laisse pas écrire employee[findKey] 
                        let employeeAny: any = {}
                        employeeAny = employee
                        if (findKey) {
                            row[colums.key] = employeeAny[findKey]
                        } else {
                            row[colums.key] = ''
                        }
                    }
                    sheet.addRow(row)
                }

            }

            await prisma.$disconnect()
            try {
                await workbook.xlsx.writeFile(`${patchProject}/${fileName}`);

            } catch (e) {
                throw `Erreur écriture du fichier Excel`
            }

        } else {
            throw `Nous n'avons pas trouvé le paramétrage de l'extraction dans la base de données`
        }
        return
    } catch (e) {
        throw e
    }






}