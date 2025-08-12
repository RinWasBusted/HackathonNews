import { useState, useEffect } from "react";

const THEME_STORAGE_KEY = "hackathon-news-theme";

// Themes definition
const themes = {
  light: {
    "--primary-color": "#ffffff",
    "--secondary-color": "#1a1a1a",
    "--accent-color": "#6941C6",
    "--background-color": "#ffffff",
    "--text-color": "#1a1a1a",
  },
  dark: {
    "--primary-color": "#1a1a1a",
    "--secondary-color": "#ffffff",
    "--accent-color": "#6941C6",
    "--background-color": "#1a1a1a",
    "--text-color": "#ffffff",
  },
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme && themes[savedTheme] ? savedTheme : "light";
  });

  const applyTheme = (themeName) => {
    const themeColors = themes[themeName];
    if (!themeColors) return;

    const root = document.documentElement;

    Object.entries(themeColors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
  };

  const setTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  useEffect(() => {
    applyTheme(currentTheme);
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  }, [currentTheme]);

  return {
    currentTheme,
    toggleTheme,
    setTheme,
    isLight: currentTheme === "light",
    isDark: currentTheme === "dark",
  };
};

export default useTheme;
