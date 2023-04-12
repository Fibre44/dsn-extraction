import { DsnParser } from "@fibre44/dsn-parser"
import path from 'path';
import { readdir } from 'fs/promises';
import { ChangeWockContractObject, DsnObject, EmployeeObject, EstablishmentObject, MutualEmployeeObject, SocietyObject, WorkContractObject, atObject } from '@fibre44/dsn-parser/lib/dsn';

export type DSNDatas = {
    dsn: DsnObject
    datas: {
        employee: EmployeeObject[]
        contrats: WorkContractObject[]
        changeContracts?: ChangeWockContractObject[]
        establishmentList: EstablishmentObject[],
        mutualEmployeeList: MutualEmployeeObject[],
        rateAtList: atObject[],
    }
}

type DsnFilterSort = {
    dsn: DsnObject,
    society: SocietyObject
}
/**
 * 
 * @param uuid 
 * @returns La fonction retourne un tableau d'objects de type DSNDAtas. 
 * Un object de type DSNDatas contient les informations du salarié ainsi qu'un tableau de l'ensemble de ses contrats de travails + ses blocs changements
 */

export const makeDSNDatas = async (uuid: string, consolidate: boolean) => {
    const patchProject = path.join(process.cwd() + "/tmp/", uuid)
    const files = await readdir(patchProject);
    const dsnList: DsnFilterSort[] = []
    const dsnDatasList: DSNDatas[] = []
    //Cette boucle enregistre les données des fichiers dsn dans un object Javascript
    for (const file of files) {
        let filePatch = path.join(patchProject, file)
        let dsnParser = new DsnParser()
        //On parse le fichier et on supprime le fichier après lecture
        await dsnParser.asyncInit(filePatch, { controleDsnVersion: true, deleteFile: true })
        //On tourne par employéee pour obtenir la liste de ses contrats de travails + ses blocs changements
        let dsnInfo = {
            dsn: dsnParser.dsn,
            society: dsnParser.society
        }
        dsnList.push(dsnInfo)
        let employeeList = dsnParser.employee
        let contratsList = dsnParser.workContract
        let changeContractsList = dsnParser.changWorkContract
        let establishmentList = dsnParser.establishment
        let mutualEmployeeList = dsnParser.employeeMutual
        let rateAtList = dsnParser.rateAt
        //Si consolidate = true alors on doit consolider les données par salariés
        dsnDatasList.push({
            dsn: dsnParser.dsn,
            datas: {
                employee: employeeList,
                contrats: contratsList,
                changeContracts: changeContractsList,
                establishmentList,
                mutualEmployeeList,
                rateAtList
            }
        })
    }
    //On trie le tableau des DSN. 
    let dsnListSort = dsnList.sort()
    let dsnDatasSort = dsnListSort.sort(function (a, b) {
        return parseFloat(a.dsn.month) - parseFloat(b.dsn.month);
    })
    if (consolidate) {
        const dsnDatasSortList: DSNDatas[] = [] //Contiendra les nouveaux éléments à return
        let employeeSet = new Set() //Controle si un salarié existe déjà
        let establishmentSet = new Set()
        let mutualEmployeeSet = new Set()
        let atSet = new Set()
        let employeeContractSet = new Set()
        //On tourne sur la variable des DSN triées afin de pouvoir traiter les informations dans un ordre chronologique
        for (let dsnDatas of dsnDatasSort) {
            let employeeListConsolidate: EmployeeObject[] = [] //stocke la liste des employés consolidée
            let workContractListConsolidate: WorkContractObject[] = []
            let workContractChangeListConsolidate: ChangeWockContractObject[] = []
            let establishmentConsolidateList: EstablishmentObject[] = []
            let mutualEmployeeConsolidateList: MutualEmployeeObject[] = []
            let rateAtList: atObject[] = []
            let siren = dsnDatas.society.siren
            let dsnDatasFilter = dsnDatasList.filter(dsn => dsn.dsn.month === dsnDatas.dsn.month && dsn.dsn.totalRows === dsnDatas.dsn.totalRows)
            for (let datas of dsnDatasFilter) {
                let employeeList = datas.datas.employee
                let contractList = datas.datas.contrats
                let changeContractList = datas.datas.changeContracts
                let establishmentList = datas.datas.establishmentList
                let mutualList = datas.datas.mutualEmployeeList
                //Gestion des salariés
                for (let employee of employeeList) {
                    let numSSorNTT = employee.numSS ? employee.numSS : employee.ntt
                    let employeeContract = contractList.filter(contract => contract.numSS === numSSorNTT)
                    //On test si on a déjà traité le salarié
                    if (!employeeSet.has(numSSorNTT)) {
                        employeeListConsolidate.push(employee)
                        employeeSet.add(numSSorNTT)
                    }
                    //On ajoute son contrat initial
                    if (employeeContract[0]) {
                        let contractKey = siren + employeeContract[0].employeeId + employeeContract[0].contractId
                        if (!employeeContractSet.has(contractKey)) {
                            employeeContractSet.add(contractKey)
                            workContractListConsolidate.push(employeeContract[0])
                        }
                    }
                    //On ajoutera un nouveau contrat uniquement si on a un bloc changement
                    let employeeChangeContractList = changeContractList?.filter(change => change.numSS === numSSorNTT)
                    if (employeeChangeContractList != undefined) {
                        employeeChangeContractList.forEach(change => workContractChangeListConsolidate.push(change))
                        //On ajoute un nouveau contrat uniquement si on a un bloc changement
                        for (let change of employeeChangeContractList) {
                            let contractDateChange = employeeContract.find(contract => contract.date === change.date)
                            if (contractDateChange) {
                                workContractListConsolidate.push(contractDateChange)
                            }
                        }
                    }
                    //On ajoute les affiliations mutuelles
                    for (let mutual of mutualList) {
                        if (!mutualEmployeeSet.has(mutual)) {
                            mutualEmployeeSet.add(mutual)
                            mutualEmployeeConsolidateList.push(mutual)
                        }
                    }
                    //On ajoute les taux AT
                    for (let rateAt of rateAtList) {
                        if (!atSet.has(rateAt)) {
                            atSet.add(rateAt)
                            rateAtList.push(rateAt)
                        }
                    }
                }
                //Gestion des établissements
                for (let establishment of establishmentList) {
                    if (!establishmentSet.has(establishment.nic)) {
                        establishmentSet.add(establishment.nic)
                        establishmentConsolidateList.push(establishment)
                    }
                }
            }
            dsnDatasSortList.push({
                dsn: dsnDatas.dsn,
                datas: {
                    employee: employeeListConsolidate,
                    contrats: workContractListConsolidate,
                    changeContracts: workContractChangeListConsolidate,
                    establishmentList: establishmentConsolidateList,
                    mutualEmployeeList: mutualEmployeeConsolidateList,
                    rateAtList
                }

            })
        }
        return dsnDatasSortList

    } else {

        return dsnDatasList
    }

}