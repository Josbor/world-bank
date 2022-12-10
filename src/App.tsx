import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { getAccounts, getInstitutions, generateLink, getTransaccions, destroyLink, getAllLinks } from './api/data';
import Banks from './pages/Banks';

function App() {
  

  return (
    <div className="App">
      <Banks></Banks>
    </div>
  )
}

export default App
