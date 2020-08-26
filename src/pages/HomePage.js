import React, { useState } from 'react';
import { useAuth } from '../hooks/use-auth';
import { useTheme } from '../hooks/use-theme';

const HomePage = () => {
  const [name, setName] = useState('')
  const { user, login, logout } = useAuth()
  const { mode, toggleTheme } = useTheme()

  if (!user.isAuth) {
      return (
        <div>
          <button onClick={toggleTheme}>{mode === 'light' ? 'DarkMode' : 'LightMode'}</button>
          <h1>No user authenticated</h1>
          <input type="text" onChange={e => setName(e.target.value)} value={name}/>
          <button onClick={e => login(name)}>Login</button>
        </div>
      )
    }

  return (
    <div>
      <button onClick={toggleTheme}>{mode === 'light' ? 'DarkMode' : 'LightMode'}</button>
      <h1>hello { user.username }</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default HomePage