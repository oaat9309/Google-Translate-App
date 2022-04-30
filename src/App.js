import Arrows from "./components/Arrows";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { useState } from "react";
import axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(null);
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Polish");
  const [languages, setLanguages] = useState(null);

  const getLanguages = () => {
    const options = {
      method: "GET",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
      headers: {
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        "X-RapidAPI-Key": "4b0a967fb3msh833759461bb33cap191f9ejsna6000c498368",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setLanguages(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextBox
            selectedLanguage={inputLanguage}
            style="input"
            setShowModal={setShowModal}
          />
          <Modal />
          <div className="arrow-container" onClick={handleClick}></div>
          <Arrows />
          <TextBox selectedLanguage={outputLanguage} style="output" />
        </>
      )}
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
