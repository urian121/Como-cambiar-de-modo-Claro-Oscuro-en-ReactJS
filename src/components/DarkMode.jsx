import { useState, useEffect } from "react";
import "../assets/css/darkmode.css";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");

    body.classList.toggle("dark-mode", darkMode);
    toggle.classList.toggle("toggle-active", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <div id="toggle" onClick={toggleDarkMode}>
        <div className="toggle-inner" />
      </div>
    </header>
  );
}