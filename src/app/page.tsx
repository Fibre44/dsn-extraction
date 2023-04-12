'use client'
import type { Extractions } from "@prisma/client"

import { useEffect, useState, useRef } from "react"

export default function Home() {
  const form = useRef(null)

  const [extractionList, setExtractionList] = useState<Extractions[]>([])
  const [error, setError] = useState(false)
  useEffect(function () {
    setError(false)
    fetch('/api/extraction', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': "application/json"
      },
      method: 'GET',
    }).then(response => {
      if (response.ok) {
        response.json().then(responseJSON => { setExtractionList(responseJSON.extractionList) })
      } else {
        setError(true)

        throw ('Erreur lors de la récupération des données')
      }
    }).catch(e => { console.error(e) })
  }, [])

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.current) {
      const formData = new FormData(form.current)
      const response = await fetch('/api/saveFile', {
        method: 'POST',
        body: formData,
      });
    }
  }
  return <div className="w-full max-w-xs">
    <form ref={form} className="form-control" encType='multipart/form-data' onSubmit={handleSubmit}>
      <label className="label" htmlFor="file">
        Envoyer vos fichiers DSN
      </label>
      <input className="file-input file-input-bordered file-input-primary w-full max-w-xs" id="dsn" type="file" name="dsn" multiple required></input>

      <label className="label" htmlFor="extraction">
        Choisir un type d'extraction
      </label>
      <select name="extractionId" id="extractionId" className="select select-primary w-full max-w-xs">
        {extractionList ? extractionList.map(extraction => <option key={extraction.id} value={extraction.id}>{extraction.title}</option>) : <option value=''>Pas de valeur</option>}
      </select>
      <button type="submit" className="btn">Envoyer les DSN</button>
    </form>

  </div>

}
