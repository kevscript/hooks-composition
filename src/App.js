import React from 'react';
import { GlobalStyles } from './styles/global'

import UserAuth from './components/UserAuth'
import ThemeToggler from './components/ThemeToggler'
import PokeData from './components/PokeData'

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ThemeToggler />
      <UserAuth />
      <PokeData />
    </div>
  )
}

export default App;
