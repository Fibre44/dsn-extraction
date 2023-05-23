"use client"
export default function SheetForm({ extractionId }: { extractionId: string }) {
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (e.target) {
            const data = {
                name: e.target.sheet.value,
                extractionId,
                color: 'FFC0000'
            }
            const response = await fetch('/api/sheet', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)

            })
            if (response.ok) {
                const reponseData: { name: { id: string } } = await response.json()
            }
        }
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="sheet">Ajouter une feuille</label>
        <input type="text" name="sheet" id="sheet"></input>
        <button className="btn btn-primary" type='submit'>Button</button>

    </form>

}