import { useState, useEffect } from "react";

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
    <div id="toggle" className="toggle" onClick={toggleDarkMode}>
      <div className="toggle-inner" />
      <input type="checkbox" />
      <label></label>
    </div>
  );
}
