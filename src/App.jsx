import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Pocetna from "./components/Pocetna"
import Lokacija from "./components/Lokacija"
import Kontakt from "./components/Kontakt"
import Navigacija from "./Navigacija"
import "./App.css"


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Navigacija/>}>
          <Route index element={<Pocetna />} />
          <Route path="/lokacija" element={<Lokacija/>}/>
          <Route path="/kontakt" element={<Kontakt/>}/>
          </Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App