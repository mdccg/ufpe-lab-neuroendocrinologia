import { useState, useEffect } from 'react';
import './styles.css';

import Logotipo from './../../assets/images/lnem.jpg';

import NavigationBar from './../NavigationBar';

function Header() {
  const [height, setHeight] = useState(0);

  function getHeight() {
    const header = document.querySelector('header');
    return header.offsetHeight;
  }

  useEffect(() => {
    let height = getHeight();
    setHeight(height);

    document.body.onresize = function() {
      let height = getHeight();
      setHeight(height);
    }
  }, []);
  
  return (
    <>
      <header>
        <div id="cabecalho">
          <img src={Logotipo} alt="Logotipo" />

          <hgroup>
            <h1>Laboratório de Neuroendocrinologia e Metabolismo</h1>
            <h2>Dayane Aparecida Gomes</h2>
            <h2>Eduardo Carvalho Lira</h2>
          </hgroup>
        </div>
        
        <NavigationBar />
      </header>
      
      <div style={{ width: '100%', height }}>&nbsp;</div>
    </>
  );
}

export default Header;