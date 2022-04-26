import Arrows from "./components/Arrows";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [inputLanguage, setInputLanguage] = useState("English");
  const [outputLanguage, setOutputLanguage] = useState("Polish");

  const handleClick = () => {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  };
  return (
    <div className="app">
      <TextBox selectedLanguage={inputLanguage} style="input" />
      <div className="arrow-container" onClick={handleClick}></div>
      <Arrows />
      <TextBox selectedLanguage={outputLanguage} style="output" />
    </div>
  );
}

export default App;
