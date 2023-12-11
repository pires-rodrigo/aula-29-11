import Search from "./search";

export default function TableContato() {
    const contatos = [
        { id: 1, nome: 'maria', email: 'maria@gmail.com' },
        { id: 2, nome: 'jose', email: 'jose@gmail.com' }
    ]

    return (
        <>
            <h2 className="text-center">Consulta Contato</h2>
            <hr />
            <Search />

            <table className="table">
                <thead>
                    <tr className="border border-dark">
                        <th className="border border-dark">Id</th>
                        <th className="border border-dark">Nome</th>
                        <th className="border border-dark">Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        contatos.map(ct =>
                            <tr>
                                <td> {ct.id}</td>
                                <td> {ct.nome}</td>
                                <td> {ct.email}</td>
                            </tr>)
                    }

                </tbody>
            </table>
        </>
    )
}
