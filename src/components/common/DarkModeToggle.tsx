// components/DarkModeToggle.tsx
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.remove(isDarkMode ? "dark" : "light");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button
      onClick={toggleDarkMode}
      variant="ghost"
      size="icon"
      className="p-2
      "
    >
      {isDarkMode ? (
        <Sun/>
      ) : (
        <Moon/>
      )}
    </Button>
  );
};

export default DarkModeToggle;
