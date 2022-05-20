import "./App.css";
import { useState } from "react";
import Keyboard from "./Components/Keyboard";

function App() {
  const [randomWord, setRandomWord] = useState("javascript");
  const handleCheck = (e) => {
    alert("le mot a trouver est " + randomWord);
    console.log(e);
  };

  return (
    <main>
      <Keyboard handleCheck={(e) => handleCheck(e)} />
    </main>
  );
}

export default App;
