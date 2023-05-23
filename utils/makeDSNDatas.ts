import { DsnParser } from "@fibre44/dsn-parser"
import path from 'path';
import { readdir } from 'fs/promises';
import { ContactObject, DsnObject, SmartDsn } from "@fibre44/dsn-parser/lib/dsn";
/**
 * Retroune un object avec les données consolidées des différentes DSN
 * @param uuid 
 * @returns
 */

export const makeDSNDatas = async (uuid: string, consolidate: boolean) => {
    //On analyse les DSN
    const dsnDatas = await readDsn(uuid)
    //On trie le tableau des DSN. 
    let dsnListSort = dsnDatas.sort()
    let dsnDatasSort = dsnListSort.sort(function (a, b) {
        return parseFloat(a.month) - parseFloat(b.month);
    })
    //Si consolidate = true alors on doit consolider les données par salariés
    if (consolidate) {
        let dsnDatasList: SmartDsn[] = []
        const contactList: ContactObject[] = []
        let employeeSet = new Set()
        let societySet = new Set()
        let contactSet = new Set<ContactObject>()
        let dsnDatasSociety
        for (let dsnDatas of dsnDatasSort) {
            //On remet à blanc la liste des employées à injecter
            const employeeList = []
            let dsnInfo: DsnObject = {
                softwareName: dsnDatas.softwareName,
                provider: dsnDatas.provider,
                softwareVersion: dsnDatas.softwareName,
                dsnVersion: dsnDatas.dsnVersion,
                type: dsnDatas.type,
                totalRows: dsnDatas.totalRows,
                month: dsnDatas.month,
            }
            //Etape 1 on consolide les informations société
            let siren = dsnDatas.society.siren
            if (!societySet.has(siren)) {
                societySet.add(siren)
                dsnDatasSociety = dsnDatas.society
            }
            //Etape 2 on consolide les salariés
            //On tourne par employé
            for (let dsnDatasEmployee of dsnDatas.employees) {
                let employeeNumSS = dsnDatasEmployee.numSS ? dsnDatasEmployee.numSS : dsnDatasEmployee.ntt
                //Si on a jamais traité le salarié on doit l'ajouter
                if (employeeNumSS) {
                    if (!employeeSet.has(employeeNumSS)) {
                        //On ajoute les informations initiale
                        let employeesDatas = { ...dsnDatasEmployee }
                        employeeSet.add(employeeNumSS)
                        employeeList.push(employeesDatas)
                    }
                    //Etape suivante on ajoute les nouveaux contracts
                }
            }
            //Etape 3 on consolide les contacts
            for (let contact of dsnDatas.contact) {
                if (!contactSet.has(contact)) {
                    contactSet.add(contact)
                    contactList.push(contact)
                }
            }

            //Si tout est ok ajoute la DSN
            if (dsnDatasSociety && employeeList && dsnInfo) {
                let dsnData: SmartDsn = {
                    ...dsnInfo,
                    contact: contactList,
                    society: {
                        ...dsnDatasSociety,
                        establishments: [
                            ...dsnDatas.society.establishments
                        ]
                    },
                    employees: employeeList
                }
                dsnDatasList.push(dsnData)
            }
        }
        return dsnDatasList

    }

    else {

        return dsnDatasSort
    }

}

const readDsn = async (uuid: string) => {
    const patchProject = path.join(process.cwd() + "/tmp/", uuid)
    const files = await readdir(patchProject);
    const dsnList = []
    //Cette boucle enregistre les données des fichiers dsn dans un object Javascript
    for (const file of files) {
        let filePatch = path.join(patchProject, file)
        let dsnParser = new DsnParser()
        //On parse le fichier et on supprime le fichier après lecture
        await dsnParser.asyncInit(filePatch, { controleDsnVersion: true, deleteFile: true })
        let dsnDatas = dsnParser.smartExtraction
        //On tourne par employéee pour obtenir la liste de ses contrats de travails + ses blocs changements

        dsnList.push(dsnDatas)
    }

    return dsnList
}
