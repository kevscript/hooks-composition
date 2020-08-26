import React, { useState } from 'react';
import { useAuth } from '../hooks/use-auth';

const HomePage = () => {
  const [name, setName] = useState('')
  const { user, login, logout } = useAuth()

  if (!user.isAuth) {
      return (
        <div>
          <h1>No user authenticated</h1>
          <input type="text" onChange={e => setName(e.target.value)} value={name}/>
          <button onClick={e => login(name)}>Login</button>
        </div>
      )
    }

  return (
    <div>
      <h1>hello { user.username }</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default HomePage