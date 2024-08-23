import Data from "./meusComponentes/Data.jsx";

function App() {
  return (
    <div className="App">
      <Data texto="Data e hora atuais: " timeZone="-3" ></Data>
      <Data texto="Data e hora em Londres: " timeZone="1" ></Data>
      <Data texto="Data e hora em Nova York: " timeZone="-4" ></Data>
    </div>
  );
}

export default App;
