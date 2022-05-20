import React from "react";

function LetterButton(props) {
  return (
    <button className="btn" onClick={(e) => props.handleCheck(e)}>
      {props.letter}
    </button>
  );
}

export default LetterButton;
