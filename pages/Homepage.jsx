import React, { useState } from "react";
import messages from "../data/messages.json";

const Homepage = () => {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [tone, setTone] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !occasion || !tone) {
      setGeneratedMessage("Per favore completa tutti i campi!");
      return;
    }

    const occasionData = messages[occasion];
    if (occasionData && occasionData[tone]) {
      const options = occasionData[tone];
      const randomMessage = options[Math.floor(Math.random() * options.length)];
      const personalized = randomMessage.replace("{name}", name);
      setGeneratedMessage(personalized);
    } else {
      setGeneratedMessage(
        "Nessun messaggio disponibile per questa combinazione 😢"
      );
    }
  };

  return (
    <>
      {" "}
      <h1 className="col-12 title text-center">VIS</h1>
      <hr />
      <div className="container my-5">
        <div className="row">
          {/* Sezione LOGO */}
          <div className="col-12 col-md-6">
            <img src="imgs/vis-logo.png" className="img-fluid" alt="VIS Logo" />
          </div>

          {/* Sezione BOT */}
          <div className="col-12 col-md-6 text-center">
            <h2 className="form-title">Auguri di compleanno creativi</h2>
            <p className="form-text">
              Devi fare gli auguri ma sei a corto di idee? Non preoccuparti VIS
              è qui per te!
            </p>
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Nome */}
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                className="form-control mb-3"
                placeholder="Inserisci il nome del festeggiato"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* Occasione */}
              <label htmlFor="Occasione">Occasione</label>
              <select
                id="Occasione"
                className="form-select mb-3"
                onChange={(e) =>
                  setOccasion(e.target.options[e.target.selectedIndex].text)
                }
              >
                <option>Seleziona l'occasione</option>
                <option>Compleanno</option>
                <option>Anniversario</option>
                <option>Natale</option>
                <option>Pasqua</option>
                <option>San Valentino</option>
                <option>Laurea</option>
                <option>Onomastico</option>
                <option>Matrimonio</option>
              </select>
              {/* Tono */}
              <label htmlFor="Tono">Tono</label>
              <select
                id="Tono"
                className="form-select mb-3"
                onChange={(e) =>
                  setTone(e.target.options[e.target.selectedIndex].text)
                }
              >
                <option>Seleziona il tono</option>
                <option>Simpatico</option>
                <option>Romantico</option>
                <option>Filosofico</option>
                <option>Poetico</option>
                <option>Giovane</option>
                <option>Motivazionale</option>
              </select>
              {/* Bottone */}
              <button className="btn btn-warning" type="submit">
                Genera Augurio
              </button>

              {generatedMessage && (
                <div className="messaggio-generato alert mt-3 text-center">
                  <p className="mb-2">{generatedMessage}</p>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => {
                      navigator.clipboard.writeText(generatedMessage);
                    }}
                  >
                    📋 Copia messaggio
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
