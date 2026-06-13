import { useState, useEffect } from "react";
import ContadorDisplay from "../../components/NumeroContadorDisplay";

export default function megasena() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [num, setNum] = useState(["?", "?", "?", "?", "?", "?"]);

  function randomNumbers() {
    handleIncrementClick();
  }

  function handleIncrementClick() {
    const nextCounters = num.map((c, i) => {
      const min = 1;
      const max = 60;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });
    setNum(nextCounters);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Mega Sena</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ContadorDisplay numero={num[0]} />
        <ContadorDisplay numero={num[1]} />
        <ContadorDisplay numero={num[2]} />
        <ContadorDisplay numero={num[3]} />
        <ContadorDisplay numero={num[4]} />
        <ContadorDisplay numero={num[5]} />
      </div>

      <button onClick={randomNumbers}>Gerar Numeros</button>
    </div>
  );
}
