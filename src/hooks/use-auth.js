import React, { useState, useEffect, useContext, createContext } from 'react'

// hook
const useAuthProvider = () => {
  const [user, setUser] = useState({ username: null, isAuth: false });

  const login = (name) => {
    setUser({ username: name, isAuth: true })
    window.localStorage.setItem('test-user', name)
  }

  const logout = () => {
    setUser({ username: null, isAuth: false })
    window.localStorage.removeItem('test-user')
  }

  useEffect(() => {
    const savedUser = window.localStorage.getItem('test-user')
    if (savedUser) setUser({ username: savedUser, isAuth: true })
  }, [])

  return { user, login, logout }
}

// context
const authContext = createContext()

export const AuthProvider = ({ children }) => {
  const auth = useAuthProvider()
  return (
    <authContext.Provider value={auth}>
      { children }
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}
