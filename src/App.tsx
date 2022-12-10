import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { getAccounts, getInstitutions, generateLink, getTransaccions, destroyLink, getAllLinks } from './api/data';
import Banks from './pages/banks/Banks';

import RoutesApp from './RoutesApp';

function App() {
  

  return (
    <div className="App">
      <RoutesApp/>
    </div>
  )
}

export default App
