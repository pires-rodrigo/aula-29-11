import Filho from "./filho";

export default function() {
    function respostaFilho(texto){
        alert(texto)
    }
    return (
       <div>
            <h2>Componente pai</h2>
            <Filho
                msg='olá filho, suspendi a mesada'
                dados={{nome:'maria',idade:50}}
                respostaProPai={respostaFilho}
                />

       </div>
    )
}