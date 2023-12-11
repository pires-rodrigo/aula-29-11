import { useEffect, useState } from "react"

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')

    function salvar(){

        let obj={nome, email, fone}

        fetch('http://localhost:8080/contatos',
        {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(obj)
        })
        .then(x => alert('Contato criado com sucesso'))
    }

    return (
        <div className="container">
            <h2 className="text-center">Novo contato</h2>
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