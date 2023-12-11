import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Agenda</h1>

      <nav>
        <Link to='/contatos/cadastrar'>Cadastro</Link> &nbsp;
        <Link to='/contatos/consultar'>Consulta</Link> &nbsp;
        <Link to='/contatos/:idContato'>Detalhes</Link> &nbsp;
      </nav>

      <main>
          <Outlet></Outlet>        
      </main>
    </div>
  );
}

export default App;