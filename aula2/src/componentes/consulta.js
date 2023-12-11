import { useEffect } from "react"
import { useState } from "react"
import Card from "./card"

export default function Consultar() {
    const [contatos, setContatos] = useState([])
    function consultar() {
        fetch('http://localhost:8080/contatos')
            .then(data => data.json())
            .then(response => setContatos(response))
    }

    useEffect(consultar, [])

    return (
        <div>
            <h2>Consulta de contatos</h2>
            <div className="d-flex flex-wrap">
                {
                    contatos.map(ct => <Card contato={ct} />)
                }
            </div>

            
        </div>
    )
}