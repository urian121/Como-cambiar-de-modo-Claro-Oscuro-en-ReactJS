import { useState, useEffect } from "react";

export default function DarkMode() {
  // Estado para controlar el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  // useEffect se utiliza para aplicar efectos secundarios cuando cambia darkMode
  useEffect(() => {
    const body = document.body; // Referencia al elemento <body> del documento
    const toggle = document.querySelector(".toggle-inner"); // Referencia al elemento con clase .toggle-inner

    // Aplica la clase 'dark-mode' al elemento <body> si darkMode es true, y la quita si es false
    body.classList.toggle("dark-mode", darkMode);
    // Aplica la clase 'toggle-active' al elemento con clase '.toggle-inner' si darkMode es true, y la quita si es false
    toggle.classList.toggle("toggle-active", darkMode);

    // useEffect se utiliza para aplicar efectos secundarios cuando cambia darkMode
  }, [darkMode]); // Se ejecuta cada vez que darkMode cambia

  // Función para alternar el estado de darkMode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div id="toggle" className="toggle" onClick={toggleDarkMode}>
      <div className="toggle-inner" />
      <input type="checkbox" />
      <label></label>
    </div>
  );
}
