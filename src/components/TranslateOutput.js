import React from "react";
import uuid from "react-uuid";

function TranslateOutput(props) {
  let translations = [];
  if (props.input) {
    const letters = props.input.split("");
    for (const letter of letters) {
      translations.push(
        require("../assets/individial_signs/" + letter.toLowerCase() + ".png")
      );
    }
  }

  const translationsList = translations.map((t) => (
    <img key={uuid()} src={t}></img>
  ));

  return (
    <div>
      <div className="box"></div>
      <div className="translationImages">{translationsList}</div>
    </div>
  );
}

export default TranslateOutput;
