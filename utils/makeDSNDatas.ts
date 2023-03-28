import { DsnParser } from "@fibre44/dsn-parser"
import path from 'path';
import { readdir } from 'fs/promises';
import { ChangeWockContractObject, EmployeeObject, WorkContractObject } from '@fibre44/dsn-parser/lib/dsn';

export type DSNDatas = {
    employee: EmployeeObject
    contrats: WorkContractObject[]
    changeContracts?: ChangeWockContractObject[]
}
/**
 * 
 * @param uuid 
 * @returns La fonction retourne un tableau d'objects de type DSNDAtas. 
 * Un object de type DSNDatas contient les informations du salarié ainsi qu'un tableau de l'ensemble de ses contrats de travails + ses blocs changements
 */

export const makeDSNDatas = async (uuid: string) => {
    const patchProject = path.join(process.cwd() + "/tmp/", uuid)
    const files = await readdir(patchProject);

    const dsnDatas: DSNDatas[] = []
    for (const file of files) {
        let filePatch = path.join(patchProject, file)
        let dsnParser = new DsnParser()
        //On parse le fichier et on supprime le fichier après lecture
        await dsnParser.asyncInit(filePatch, { controleDsnVersion: true, deleteFile: true })
        //On tourne par employéee pour obtenir la liste de ses contrats de travails + ses blocs changements
        for (let employee of dsnParser.employee) {
            let workContractEmployee = dsnParser.workContract.filter(workContract => workContract.numSS === employee.numSS)
            let workContractChange = dsnParser.changWorkContract.filter(changeWorkContract => changeWorkContract.numSS === employee.numSS)
            let dsnDatasEmployee: DSNDatas = {
                employee: employee,
                contrats: workContractEmployee,
                changeContracts: workContractChange
            }
            dsnDatas.push(dsnDatasEmployee)
        }
    }

    return dsnDatas
}