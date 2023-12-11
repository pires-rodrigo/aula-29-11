export default function CadContato() {
    return (
        <>
            <h2 className='text-center'> Novo usuário</h2>
            <label className='form-label'>Informe nome</label>
            <input className='form-control' type="text" placeholder='Informe nome' />

            <label className='form-label'>Informe email</label>
            <input className='form-control' type="text" placeholder='Informe nome' />

            <label className='form-label'>Informe telefone</label>
            <input className='form-control' type="text" placeholder='Informe nome' />

            <div className='mt-3 d-flex justify-content-between'>
                <button className='btn btn-primary'>Salvar</button>
                <button className='btn btn-danger'>Cancelar</button>
            </div>
        </>
    )


}