import { Extractions } from "@prisma/client"
import Link from "next/link"

type Props = Extractions[]
export const ExtractionList = ({ extractions }: Props) => {
    return <div className="w-full max-w-xs my-2">

        {extractions.map(extractionParams => <ExtractionRow key={extractionParams.id} extraction={extractionParams} />)}
    </div>

}

const ExtractionRow = ({ extraction }: Extractions) => {

    return < div className="card w-96 bg-primary text-primary-content" >
        <div className="card-body">
            <h2 className="card-title">{extraction.title}</h2>
            <p>{extraction.description}</p>
            <div className="card-actions justify-end">
                <Link href={`extraction/${extraction.id}`}> <button className="btn">Consulter le paramétrage</button></Link>

            </div>
        </div>
    </div >
}

