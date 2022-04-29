import { useState } from "react";

const Modal = () => {
  const [searchedLanguage, setSearchedLanguage] = useState("");
  const handleChange = (e) => {
    setSearchedLanguage(e.target.value);
  };

  return (
    <div className="option-list">
      <div className="search-bar">
        <input value={searchedLanguage} onChange={handleChange} />
      </div>
    </div>
  );
};

export default Modal;
