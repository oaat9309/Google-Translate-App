import Arrows from "./components/Arrows";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="app">
      <TextBox style="input" />
      <Arrows />
      <TextBox style="output" />
    </div>
  );
}

export default App;
