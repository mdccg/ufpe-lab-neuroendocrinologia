import './styles.css';

import TubosEnsaio from './../../assets/images/tubos-de-ensaio.webp';

function Pesquisa() {
  return (
    <main id="pesquisa">
      <div id="cabecalho">
        <h3>Pesquisa</h3>
        <p>Nós estudamos os efeitos andrógenos e estrógenos no cérebro humano.</p>
      </div>

      <div id="corpo">
        <article id="textos">
          <h4>Visão geral da pesquisa</h4>

          <p>Estudamos a importância dos hormônios reprodutivos e adrenais no sistema nervoso
            humano. Um foco particular de nossa pesquisa é entender como os hormônios, por meio
            de suas interações com o cérebro, influenciam a expressão de funções cognitivas de 
            alto nível, como a memória. Tentamos identificar funções específicas que são moduladas
            por hormônios em diferentes estágios do ciclo de vida, desde o desenvolvimento
            pré-natal até a velhice, e definir os princípios endócrinos que governam como, quando
            e por que esses efeitos ocorrem.</p>

          <p>Nossa pesquisa varia de estudos de indivíduos saudáveis a estudos de pessoas com
            doenças endócrinas, a estudos de pessoas que tomam hormônios exogenamente (por
            exemplo, terapia de reposição de estrogênio em mulheres na pós-menopausa). As
            técnicas que usamos para revelar as relações hormônio-comportamento incluem
            observações comportamentais (por exemplo, análise de vídeo, rastreamento ocular),
            tarefas especializadas para medir a função cognitiva, testes neuropsicológicos,
            combinados com genotipagem e imunoensaios para medir os níveis hormonais. Um
            laboratório de imunoensaio no local nos permite quantificar diretamente os
            hormônios esteróides. Fomos um dos primeiros laboratórios na América do Norte a
            implementar o uso de saliva humana para a medição precisa dos níveis de hormônio
            biodisponível.</p>
        </article>

        <div id="imagem">
          <img src={TubosEnsaio} alt="Tubos de ensaio" />
        </div>
      </div>
    </main>
  );
}

export default Pesquisa;