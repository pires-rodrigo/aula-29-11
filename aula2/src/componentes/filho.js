export default function Filho(props) {
    function responderPai(){
        props.respostaProPai("oi consegui emprego, não precisa de mesada")
    }

    return (
        <div>
            <h2>Componente Filho</h2>
            <spam>Aviso: {props.msg}</spam> <br/>
            <spam>Nome: {props.dados.nome}</spam> <br/> 
            <spam>Idade: {props.dados.idade}</spam>

             {/* arrow function - só é executada quando é chamada */}
            <button onClick={()=>props.respostaProPai('olá')}>Responder ao pai</button>
            <button onClick={responderPai}>Responder de novo</button>
        </div>
    )
}