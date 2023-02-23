import React from "react";

/**
 *
 * @param {*} props
 * @returns
 */
function TranslateOutput(props) {
  let translations = [];
  if (props.input) {
    const letters = props.input.split("");
    for (const letter of letters) {
      if (letter === " ") {
        require("../../assets/individial_signs/empty.png");
        translations.push(require("../../assets/individial_signs/empty.png"));
      } else {
        translations.push(
          require("../../assets/individial_signs/" +
            letter.toLowerCase() +
            ".png")
        );
      }
    }
  }

  const translationsList = translations.map((t, i) => (
    <img className="translationImage" key={i} src={t} alt=""></img>
  ));

  return (
    <div>
      <div className="box"></div>
      <div className="translationImages">{translationsList}</div>
    </div>
  );
}

export default TranslateOutput;
