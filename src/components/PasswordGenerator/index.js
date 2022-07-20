import { useState } from "react";
import "./style.css";

function PasswordGenerator() {

  const [passwordLength, setPasswordLength] = useState(8);
  const [digitsLength, setDigitsLength] = useState(2);
  const [symbolsLength, setSymbolsLength] = useState(2);

  return (
    <>
      <div className="slider">
        <label htmlFor="password-length">Tamanho</label>
        <input
        id="password-length"
        type="range"
        min={4}
        max={64}
        value={passwordLength}
        onChange={({ target }) => setPasswordLength(parseInt(target.value))}
        />
        <span>{passwordLength}</span>
      </div>

      <div className="slider">
        <label htmlFor="digits-length">Dígitos</label>
        <input
          id="digits-length"
          type="range"
          min={0}
          max={10}
          value={digitsLength}
          onChange={({ target }) => setDigitsLength(parseInt(target.value))}
        />
        <span>{digitsLength}</span>
      </div>

      <div className="slider">
        <label htmlFor="symbols-length">Símbolos</label>
        <input
          id="symbols-length"
          type="range"
          min={0}
          max={10}
          value={symbolsLength}
          onChange={({ target }) => setSymbolsLength(parseInt(target.value))}
        />
        <span>{symbolsLength}</span>
      </div>
    </>
  );
}

export default PasswordGenerator;
