import React from 'react'
import { useTheme } from '../hooks/use-theme';

const ThemeToggler = () => {
  const { mode, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>{mode === 'light' ? 'DarkMode' : 'LightMode'}</button>
}

export default ThemeToggler