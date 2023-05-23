'use client'
import { useRef } from "react"
import { useRouter } from 'next/navigation';
export default function Home() {
    const form = useRef(null)
    const router = useRouter();

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const body = JSON.stringify(Object.fromEntries(data))
        try {
            const response = await fetch('/api/extraction', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': "application/json"
                },
                method: 'POST',
                body

            })
            if (response.ok) {
                const reponseData: { name: { id: string } } = await response.json()
                const id = reponseData.name.id
                if (id) {
                    router.push(`extraction/${reponseData.name.id}`)
                } else {
                    throw 'Erreur de création'
                }
            }
        } catch (e) {
            console.error(e)
        }
    }
    return <form ref={form} className="form-control" onSubmit={handleSubmit}>
        <label className="label" htmlFor="title">
            Titre de l&apos;extraction
        </label>
        <input type="text" placeholder="Indiquer votre titre" className="input input-bordered input-secondary w-full max-w-xs" id="title" name="title"></input>
        <label className="label" htmlFor="description">
            Saisir une description
        </label>
        <input type="text" placeholder="Saisir votre description" className="input input-bordered input-secondary w-full max-w-xs" id="description" name="description"></input>
        <label className="label" htmlFor="fileName">
            Nom du fichier
        </label>
        <input type="text" placeholder="Saisir le nom du fichier de sortie" className="input input-bordered input-secondary w-full max-w-xs" id="fileName" name="fileName"></input>
        <label className="label" htmlFor="software">
            Nom du logiciel
        </label>
        <input type="text" placeholder="Saisir le nom du logiciel" className="input input-bordered input-secondary w-full max-w-xs" id="software" name="software"></input>
        <label className="label" htmlFor="software">
            Extraction de type consolidé
        </label>
        <input type="checkbox" className="checkbox checkbox-primary" id="consolidate" name="consolidate"></input>
        <button className="btn btn-primary" type='submit'>Button</button>

    </form>


}
