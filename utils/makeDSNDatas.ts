import { DsnParser } from "@fibre44/dsn-parser"
import path from 'path';
import { readdir } from 'fs/promises';
import { ContactObject, DsnObject, SmartDsn } from "@fibre44/dsn-parser/lib/dsn";
import { createFolderUtf } from "./createFolder";
import fs from 'node:fs/promises'
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
/**
 * La fonction va lire les données des DSN pour retourner les donnnées sous la forme d'un objet
 * @param uuid 
 * @returns 
 */

const readDsn = async (uuid: string) => {
    try {
        await convertUtf8(uuid)

    } catch {
        console.error('Erreur conversion en utf-8')
        throw new Error('Erreur conversion en utf-8')
    }
    const patchProject = path.join(process.cwd(), 'tmp', uuid, 'utf8')
    console.log(patchProject)
    const files = await readdir(patchProject);
    console.log(files)
    const dsnList = []
    //Cette boucle enregistre les données des fichiers dsn dans un object Javascript
    for (let file of files) {
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

/**
 * La fonction va convertir les fichiers DSN en ascii au format utf8
 * @param uuid 
 */

const convertUtf8 = async (uuid: string) => {
    const patchProject = path.join(process.cwd() + "/tmp/", uuid)
    const files = await readdir(patchProject);
    //on ajoute le dossier utf8
    createFolderUtf(uuid)
    for (let file of files) {
        let filePatchAscii = path.join(patchProject, file)
        try {
            let readFileAnsi = await fs.readFile(filePatchAscii, 'ascii')

            let filePatchUtf8 = path.join(process.cwd(), 'tmp', uuid, 'utf8', file)
            await fs.writeFile(filePatchUtf8, readFileAnsi, { encoding: 'utf-8' })

        } catch (e) {
            console.error(`Erreur lecture/écriture ${file}`)
        }
    }
    return



}