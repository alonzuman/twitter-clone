import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    if (!currentTheme) {
      localStorage.setItem('theme', 'light');
      document.body.classList = 'light';
      document.body.style.backgroundColor = 'var(--bg-00)';
      setTheme('light')
    } else {
      document.body.classList = currentTheme;
      document.body.style.backgroundColor = 'var(--bg-00)';
      setTheme(currentTheme);
    }
  }, [theme])

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
    setTheme(currentValue => currentValue === 'dark' ? 'light' : 'dark')
  }

  const value = {
    theme,
    toggleTheme,
    setTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
