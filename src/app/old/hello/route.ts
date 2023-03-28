import { createFolderTmp, createFolderProjet } from "../../../../utils/createFolder";
import { makeUUID } from "../../../../utils/makeUUID";
import { formData } from "../../../../utils/formData";
import type { NextApiRequest, NextApiResponse } from 'next'
import { readdir } from 'node:fs/promises';
import { dsnParser } from "../../../../utils/dsnParser";
import path from "path";
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function GET(request: NextApiRequest) {
  //Etape 1 on verifie que le répértoire tmp existe
  createFolderTmp()
  //Etape 2 on ajoute un répértoire pour les fichiers
  const uuid = makeUUID()
  createFolderProjet(uuid)
  //Etape 3 on sauvegarde les fichiers  
  const parseFormData = await formData(request, uuid, true)
  const exportType = parseFormData.fields.export

  //Etape 4
  const patchProject = path.join(process.cwd() + "/tmp/", uuid)
  const files = await readdir(patchProject);

  const dsnList = []
  for (const file of files) {
    let filePatch = path.join(patchProject, file)
    let dsn = await dsnParser(filePatch)

    dsnList.push(dsn)

  }

  return new Response(JSON.stringify(dsnList))

}
