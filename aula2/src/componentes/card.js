export default function Card(props) {
    function excluir() {
        fetch(`http://localhost:8080/contatos/${props.contato.id}`,
            {
                method: 'DELETE'
            })
            .then(x => alert('Contato excluído com sucesso'))
    }

    return (
        <div className="card mt-3 col-sm-4 col-md-2">
            <img src="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg"
                className="card-img-top" alt={props.contato.nome}></img>
            <div className="card-body">
                <div>
                    <span className="fw-bold">Nome: </span>
                    <span className="text-danger">{props.contato.nome}</span>
                </div>

                <div>
                    <span className="fw-bold">Email: </span>
                    <span className="text-danger">{props.contato.email}</span>
                </div>

                <div>
                    <span className="fw-bold">Fone: </span>
                    <span className="text-danger">{props.contato.fone}</span>
                </div>
            </div>
            <div className="mt-3 d-flex justify-content-between">
                <button className="btn btn-outline-primary">Editar</button>
                <button onClick={excluir} className="btn btn-outline-danger">Excluir</button>
            </div>

        </div>


    )
}