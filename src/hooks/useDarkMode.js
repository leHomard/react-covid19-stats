import { useState, useEffect } from "react";

const defaultMode = "light";

export const useDarkMode = initialValue => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || initialValue
  );

  const toggleMode = () => {
    const nextMode = mode === "light" ? "dark" : defaultMode;
    setMode(nextMode);
  };

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return [mode, toggleMode];
};
