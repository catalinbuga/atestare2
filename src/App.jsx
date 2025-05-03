import React, { useState, useEffect } from "react";
import { words } from "./constants/words";
import { stages } from "./constants/stages";
import { letters } from "./constants/letters";

import WordDisplay from "./components/WordDisplay"; 
import "./index.css";

const App = () => {
  const [cuvant, setCuvant] = useState("");
  const [litereGhicite, setLitereGhicite] = useState([]);
  const [greseli, setGreseli] = useState(0);

  const maxGreseli = stages.length - 1;

  useEffect(() => {
    resetareJoc();
  }, []);

  const resetareJoc = () => {
    const cuvantAleatoriu = words[Math.floor(Math.random() * words.length)];
    setCuvant(cuvantAleatoriu);
    setLitereGhicite([]);
    setGreseli(0);
  };

  const gestioneazaClickLitera = (litera) => {
    if (litereGhicite.includes(litera)) return;

    setLitereGhicite((prev) => [...prev, litera]);
    if (!cuvant.includes(litera)) setGreseli((prev) => prev + 1);
  };

  const jocTerminat = greseli >= maxGreseli;
  const estePierzator = greseli === maxGreseli;
  const esteCastigator = cuvant.split("").every((litera) => litereGhicite.includes(litera));

  return (
    <div className="container">
      <h1>
        {estePierzator ? "AI PIERDUT": esteCastigator ? "AI CASTIGAT" : "JOCUL SPANZURATOAREA"}
      </h1>
      <img src={stages[greseli]} alt="SpAnzuratoarea" />

      <WordDisplay cuvant={cuvant} litereGhicite={litereGhicite} />

      <div>
        {letters.map((litera) => (
          <button
            key={litera}
            onClick={() => gestioneazaClickLitera(litera)}
            disabled={litereGhicite.includes(litera) || jocTerminat || esteCastigator}
          >
            {litera}
          </button>
        ))}
      </div>

      {(jocTerminat || esteCastigator) && (
        <button onClick={resetareJoc}>Joacă din nou</button>
      )}
    </div>
  );
};

export default App;