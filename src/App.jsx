import Data from "./meusComponentes/Data/Data.jsx";
import Jogador from "./meusComponentes/Contador/Jogador.jsx"
import JogadorV2 from "./meusComponentes/ContadorV2/JogadorV2.jsx";
import style from "./index.module.scss"

function App() {

  return (
    <div className="App">
      <div className={style.clock}>
        <Data texto="Data e hora atuais: " timeZone="-3" ></Data>
        <Data texto="Data e hora em Londres: " timeZone="1" ></Data>
        <Data texto="Data e hora em Nova York: " timeZone="-4" ></Data>
      </div>
      <Jogador nome="Jogador Objeto"></Jogador>
      <JogadorV2 nome="Jogador Função"></JogadorV2>
    </div>
  );
}

export default App;
