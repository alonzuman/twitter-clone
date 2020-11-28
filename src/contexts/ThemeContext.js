import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [background, setBackground] = useState('');
  const [fontSize, setFontSize] = useState(3);
  const [color, setColor] = useState('blue');
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const currentBackground = localStorage.getItem('background');

    if (!currentBackground) {
      localStorage.setItem('background', 'default');
      document.body.classList = 'default';
      document.body.style.backgroundColor = 'var(--bg-00)';
      setBackground('default')
    } else {
      document.body.classList = currentBackground;
      document.body.style.backgroundColor = 'var(--bg-00)';
      setBackground(currentBackground);
    }
  }, [background])

  const handleBackgroundChange = (type) => {
    localStorage.setItem('background', type);
    setBackground(type)
  }

  useEffect(() => {
    const currentFontSize = localStorage.getItem('fontSize');

    if (!currentFontSize) {
      localStorage.setItem('fontSize', '3')
      document.body.classList.add(`font-${currentFontSize}`);
      setFontSize('3');
    } else {
      for (let i = 0; i < 5; i++) {
        document.body.classList.remove(`font-${i + 1}`);
      }
      document.body.classList.add(`font-${currentFontSize}`);
      setFontSize(currentFontSize);
    }
  }, [fontSize])

  const handleFontChange = (e) => {
    localStorage.setItem('fontSize', e.target.value);
    setFontSize(e.target.value);
  }

  const handleColorChange = (color) => {
  }

  const openDialog = () => setIsMoreOpen(true)
  const closeDialog = () => setIsMoreOpen(false)

  const value = {
    isMoreOpen,
    fontSize,
    handleFontChange,
    color,
    handleColorChange,
    background,
    handleBackgroundChange,
    openDialog,
    closeDialog,
    setBackground
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
