import fs from 'fs'

export const removeFolder = (patch: string) => {

    fs.rm(patch, { recursive: true }, (err) => {
        if (err) {
            // File deletion failed
            console.error(err.message);
            return;
        }
        console.log(`Suppression du répértoire ${patch}`);

    })
}