import React from "react";
import LetterButton from "./LetterButton";

function Keyboard() {
  const tabLetter = "azertyuiopqsdfghjklmwxcvbn".split("");
  const handleCheck = (e) => {
    alert("click effectué");
    console.log(e);
    console.log(e.target.textContent);
    let letterbtn = e.target.textContent;
    let tabWord = ["a", "b", "c"];
    for (let i = 0; i <= tabWord.length; i++) {
      if (tabWord[i] === letterbtn) {
        console.log("cela marche ");
      }
    }
  };
  return (
    <div>
      {tabLetter.map((letter) => {
        return (
          <LetterButton letter={letter} handleCheck={(e) => handleCheck(e)} />
        );
      })}
    </div>
  );
}

export default Keyboard;
