import React from "react"
import {Route,Routes} from "react-router-dom"
import HomePage from "./pages/HomePage/homepage.jsx"
import NavBar from "./Components/NavBar/NavBar.jsx"

function App() {


  return (
    <>
    
    <Routes>
      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/Nav" element={<NavBar/>}/>
    </Routes>
    
        
    
    </>
  )
}

export default App
