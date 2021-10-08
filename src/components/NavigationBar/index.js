import { Link } from 'react-router-dom';
import './styles.css';

function Pagina({ rota = '/', children }) {
  return (
    <li>
      <Link className="ancora" to={rota}>{children}</Link>
    </li>
  );
}

function NavigationBar() {
  return (
    <nav>
      <ul>
        <Pagina rota="/">Home</Pagina>
        <Pagina rota="/nossa-pesquisa">Nossa pesquisa</Pagina>
        <Pagina rota="/equipe">Equipe</Pagina>
        <Pagina rota="/tecnicas">Técnicas</Pagina>
        <Pagina rota="/publicacoes">Publicações</Pagina>
        <Pagina rota="/financiamento">Financiamento</Pagina>
        <Pagina rota="/contato">Contato</Pagina>
      </ul>
    </nav>
  );
}

export default NavigationBar;