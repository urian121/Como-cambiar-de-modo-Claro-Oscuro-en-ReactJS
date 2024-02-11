import { useState } from "react";
import "../App.css"; // Asegúrate de importar tu archivo CSS

function ModoOscuroToggle() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div className={modoOscuro ? "dark-mode" : "light-mode"}>
      <button
        className={modoOscuro ? "dark-mode-button" : "light-mode-button"}
        onClick={toggleModoOscuro}>
        {modoOscuro ? "Desactivar" : "Activar"} Modo Oscuro
      </button>
    </div>
  );
}

export default ModoOscuroToggle;
