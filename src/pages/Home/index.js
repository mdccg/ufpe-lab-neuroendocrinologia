import './styles.css';

import CampusRecife from './../../assets/images/campus-recife.jpg';
import PlataformaMultiusuario from './../../assets/images/plataforma-multiusuario.jpeg';

function Home() {
  return (
    <main id="home">
      <div id="boas-vindas">
        <h3>
          Bem-vindo ao<br />
          Laboratório de Neuroendocrinologia
        </h3>
        <figure>
          <figcaption>Nosso laboratório está localizado na Universidade Federal de Pernambuco, câmpus Recife, <abbr title="Pernambuco">PE</abbr> ― Brasil</figcaption>
          <img src={CampusRecife} alt="Câmpus Recife" />
        </figure>
      </div>
      <div id="link-plataforma-multiusuario">
        <a href="http://www.lnem.com.br/">
          <img src={PlataformaMultiusuario} alt="Consórcio para Pesquisa de Interface" />
        </a>
      </div>
    </main>
  );
}

export default Home;