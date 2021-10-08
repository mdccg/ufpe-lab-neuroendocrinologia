import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './../components/Header';
import Footer from './../components/Footer';

import Home from './../pages/Home';
import Equipe from './../pages/Equipe';
import Contato from './../pages/Contato';
import Pesquisa from './../pages/Pesquisa';
import Tecnicas from './../pages/Tecnicas';
import Publicacoes from './../pages/Publicacoes';
import Financiamento from './../pages/Financiamento';

const routes = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/equipe" component={Equipe} />
      <Route exact path="/contato" component={Contato} />
      <Route exact path="/tecnicas" component={Tecnicas} />
      <Route exact path="/publicacoes" component={Publicacoes} />
      <Route exact path="/nossa-pesquisa" component={Pesquisa} />
      <Route exact path="/financiamento" component={Financiamento} />
    </Switch>

    <Footer />
  </BrowserRouter>
);

export default routes;