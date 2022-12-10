import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getAccounts, getInstitutions, generateLink, getTransaccions, destroyLink, getAllLinks } from './api/data';

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    getInstitutions()
     
    
    
    
    //generateLink('erebor_mx_retail','bnk100','full') its work !
  },[])

  const clearLinks= async()=>{
      destroyLink("9ef7bb0f-416b-4380-a7b7-52a1ede0c88f")
    // if (links.length>0) await links.forEach( (element:any) => {
    // destroyLink(element.id)
    // });
    //.then(e=>e.forEach((e:any)=>destroyLink(e.id)))
   
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={clearLinks}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
