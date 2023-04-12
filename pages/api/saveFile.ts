// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createFolderProjet, createFolderTmp } from '../../utils/createFolder';
import { formData } from '../../utils/formData';
import { makeUUID } from '../../utils/makeUUID';
import { makeDSNDatas } from '../../utils/makeDSNDatas';
import { removeFolder } from '../../utils/removeFolder';
import path from 'path';
import { extractionParams } from '../../utils/extractionParams';
import { makeExcelFile } from '../../utils/makeExcelFile';
export const config = {
    api: {
        bodyParser: false,
    },
};

type Data = {
    message?: string
    error?: string | any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        //Etape 1 on verifie que le répértoire tmp existe
        createFolderTmp()
        //Etape 2 on ajoute un répértoire pour les fichiers
        const uuid = makeUUID()
        createFolderProjet(uuid)
        //Etape 3 on sauvegarde les fichiers. Attention à bien supprimer les fichiers en cas d'erreur/succès
        const parseFormData = await formData(req, uuid, true)
        const fields = parseFormData.fields
        const extractionId = fields.extractionId
        if (!extractionId) {
            removeFolder(path.join(process.cwd(), `/tmp/${uuid}`))
            return res.status(400).json({ error: `Nom de l'extraction absent` })
        }
        if (extractionId instanceof Array) {
            removeFolder(path.join(process.cwd(), `/tmp/${uuid}`))
            return res.status(400).json({ error: `Le body ne doit peut pas contenir plusieurs valeurs` })
        }
        console.log(`id = ${extractionId}`)
        const extractionParamsPrisma = await extractionParams(extractionId)

        if (!extractionParamsPrisma) {
            removeFolder(path.join(process.cwd(), `/tmp/${uuid}`))
            return res.status(404).json({ error: `L'id de l'extraction n'existe pas` })
        }
        //Etape 4 on extrait les données de la DSN
        const datasDsn = await makeDSNDatas(uuid, extractionParamsPrisma.consolidate)
        //Etape 5 on va lance l'extraction
        try {
            await makeExcelFile(uuid, datasDsn, extractionId)

        } catch (e) {
            return res.status(404).json({ error: e })
        }
        //removeFolder(path.join(process.cwd(), `/tmp/${uuid}`))

        res.status(200).json({ message: 'Enregistrement des donnnées' })


    } catch (e) {
        //En cas d'erreur on supprime tout
        removeFolder(path.join(process.cwd(), `/tmp/`))
        res.status(500).json({ error: 'Oups un problème inconnu est survenu' })
    }

}
