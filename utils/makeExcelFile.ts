import Excel from 'exceljs'
import { Columns, Transcos } from '@prisma/client'
import { prisma } from './db'
import path from 'path'
import { SmartDsn } from '@fibre44/dsn-parser/lib/dsn'
/**
 * 
 * @param uuid 
 * @param dsnDatas 
 * @returns void
 * Cette fonction va récupérer le paramétrage de l'extraction dans la base de données
 * A partir des données de l'extraction, la fonction va extraire les valeurs de l'objet DSNDatas
 * La fonction va écrire les données dans un fichier Excel
 */
export const makeExcelFile = async (uuid: string, dsnDatas: SmartDsn[], extractionId: string) => {

    try {
        const patchProject = path.join(process.cwd() + "/tmp/", uuid)
        //Etape 1 on récupére le paramétrage de l'extraction à réaliser
        const extraction = await prisma.extractions.findFirst({
            where: {
                id: extractionId
            },
            include: {
                sheet: true,
            }
        })
        //Gestion à revoir car là on charge toutes les transcos
        const transcoList = await prisma.transcos.findMany()
        await prisma.$disconnect()
        if (extraction) {
            const fileName = extraction.fileName
            //Etape 2 on instancie l'objet Excel
            const workbook = new Excel.Workbook();
            //Un fichier peut contenir X feuilles, on tourne par feuille
            for (let sheetActive of extraction.sheet) {
                let row: any = {}
                let extractionType = sheetActive.type
                //On ajoute la feuille
                workbook.addWorksheet(sheetActive.name, { properties: { tabColor: { argb: 'FFC0000' } } });
                //Une feuille contient X columns
                let sheet = workbook.getWorksheet(sheetActive.name)
                let columsPrisma = await prisma.columns.findMany({
                    where: {
                        sheetId: sheetActive.id
                    }
                })
                //On ajoute les colonnes à la feuille
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
                //En fonction du type d'extraction on fera des traitements différents
                switch (extractionType) {
                    //Traitement uniquement des salariés
                    case 'Individu':
                        for (let dsn of dsnDatas) {
                            let employeeList = dsn.employees
                            let rowListEmployee = await makeDynamicObject(employeeList, columsPrisma, transcoList)
                            for (let row of rowListEmployee) {
                                sheet.addRow(row)
                            }
                        }
                        break
                    case 'Contract':
                        for (let dsn of dsnDatas) {
                            let employeeList = dsn.employees
                            for (let contract of employeeList) {
                                let contractList = contract.workContracts
                                let rowListContract = await makeDynamicObject(contractList, columsPrisma, transcoList)
                                for (let row of rowListContract) {
                                    sheet.addRow(row)
                                }
                            }

                        }
                        break
                    case 'AggregateContribution':
                        for (let dsn of dsnDatas) {
                            let establishmentList = dsn.society.establishments
                            for (let establishementAggreagteContribution of establishmentList) {
                                let aggregateContributionList = establishementAggreagteContribution.aggreagreContribution
                                let rowListAggregateContributionList = await makeDynamicObject(aggregateContributionList, columsPrisma, transcoList)
                                for (let row of rowListAggregateContributionList) {
                                    sheet.addRow(row)
                                }
                            }
                        }
                        break
                    case 'Contact':
                        for (let dsn of dsnDatas) {
                            let contactList = dsn.contact
                            let rowListContact = await makeDynamicObject(contactList, columsPrisma, transcoList)
                            for (let row of rowListContact) {
                                sheet.addRow(row)
                            }

                        }
                        break
                    case 'Mutual':
                        for (let dsn of dsnDatas) {
                            let employeeList = dsn.employees
                            for (let mutual of employeeList) {
                                let mutualList = mutual.mutual
                                let rowListMutual = await makeDynamicObject(mutualList, columsPrisma, transcoList)
                                for (let row of rowListMutual) {
                                    sheet.addRow(row)
                                }
                            }

                        }
                        break
                    case 'Establishment':
                        for (let dsn of dsnDatas) {
                            let establishmentList = dsn.society.establishments
                            let rowListEstablishment = await makeDynamicObject(establishmentList, columsPrisma, transcoList)
                            for (let row of rowListEstablishment) {
                                sheet.addRow(row)
                            }
                        }

                        break
                    case 'Individu/Contract':
                        const employeesWorkContractList: {}[] = []
                        for (let dsn of dsnDatas) {
                            let siren = dsn.society.siren
                            let employeeList = dsn.employees
                            for (let employee of employeeList) {
                                for (let contract of employee.workContracts) {
                                    let employeeWorkContract = {
                                        siren,
                                        ...employee,
                                        ...contract
                                    }
                                    employeesWorkContractList.push(employeeWorkContract)
                                }
                            }
                            let rowListEmployeeWorkContrat = await makeDynamicObject(employeesWorkContractList, columsPrisma, transcoList)
                            for (let row of rowListEmployeeWorkContrat) {
                                sheet.addRow(row)
                            }
                        }

                        break

                }

            }
            try {
                await workbook.xlsx.writeFile(`${patchProject}/${fileName}`);

            } catch (e) {
                throw new Error(`Erreur écriture du fichier Excel`)
            }

        } else {
            throw new Error(`Nous n'avons pas trouvé le paramétrage de l'extraction dans la base de données`)
        }
        return
    } catch (e: any) {
        throw new Error(e)
    }

}
/**
 * La fonction va extraire les données DSN à partir des informations contenues dans columPrisma
 * @param dsnDatas 
 * @param columsPrisma 
 * @param transcoList 
 * @returns 
 *
 */
const makeDynamicObject = async (dsnDatas: {}[], columsPrisma: Columns[], transcoList: Transcos[]) => {
    let rowList = []
    let datasList = dsnDatas
    let row: any = {}
    for (let data of datasList) {
        row = {}
        //On récupère les clés de la ligne en cours
        let keys = Object.keys(data)
        for (let column of columsPrisma) {
            //column.key correspond au nom des colonnes
            //column.dsnKey correspond au nom de la clé dans les données DSN
            let right = column.right
            let left = column.left
            //Toutes les données DSN ne sont pas obligatoires. Donc on doit tester si la clé existe
            let findKey = keys.find(k => k === column.dsnKey)
            let defaultValue = column?.defaultValue
            if (findKey) {
                let dataRow: any = data
                let transcoFind = transcoList.find(transco => transco.columnsId === column.id && transco.dsnValue === dataRow[column.dsnKey])
                if (left) {
                    row[column.key] = dataRow[column.dsnKey.slice(left)]
                }
                if (right) {
                    row[column.key] = dataRow[column.dsnKey.slice(right * -1)]
                }
                if (transcoFind) {
                    row[column.key] = transcoFind.newValue
                }
                if (!left && !right && !transcoFind) {
                    row[column.key] = dataRow[column.dsnKey]
                }

            } else if (defaultValue) {
                row[column.key] = defaultValue
            }
        }
        if (row) {
            rowList.push(row)
        }


    }
    return rowList
}