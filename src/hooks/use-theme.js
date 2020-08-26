import React, { useState, useEffect, useContext, createContext } from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'


//hook
const useThemeProvider = () => {
  const [mode, setMode] = useState('light')

  const toggleTheme = () => {
    setMode(m => m === 'light' ? 'dark' : 'light')
    window.localStorage.setItem('test-theme', `${mode === 'light' ? 'dark' : 'light'}`)
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('test-theme')
    if (savedTheme) setMode(savedTheme)
  }, [])

  return { mode, toggleTheme }
}

//context
const themeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const theme = useThemeProvider()
  return (
    <themeContext.Provider value={theme}>
      <Provider theme={theme.mode === 'dark' ? darkTheme : lightTheme}>
        { children }
      </Provider>
    </themeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(themeContext)
}