import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Editar() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')

    const {idContato} = useParams()

    function salvar() {

        let obj = { id: idContato, nome, email, fone }

        fetch(`http://localhost:8080/contatos/${idContato}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            })
            .then(x => alert('Contato criado com sucesso'))
    }

    useEffect(() => {
        fetch(`http://localhost:8080/contatos/${idContato}`)
        .then(data => data.json())
        .then(response => {
            setNome(response.nome)
            setEmail(response.email)
            setFone(response.fone)
        })
    })
    return (
        <div className="container">
            <h2 className="text-center">Editar Contato: {idContato}</h2>
            <label className="form-label">Informe o nome</label>

            <input className="form-control" type="text"
                placeholder="Informe o nome" value={nome} onChange={txt =>
                    setNome(txt.target.value)} />

            <label className="form-label">Informe o email</label>
            <input className="form-control" type="text" placeholder="Informe o email" value={email} onChange={txt => setEmail(txt.target.value)} />

            <label className="form-label">Informe o telefone</label>
            <input className="form-control" type="text" placeholder="Informe o telefone" value={fone} onChange={txt => setFone(txt.target.value)} />

            <div className="mt-3 d-flex justify-content-between">
                <button onClick={salvar}
                    className="btn btn-primary">Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div>


            {/* {`${nome} ${email} ${fone}`} */}

        </div>
    )
}