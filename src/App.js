import React from 'react'
import { Route }  from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Login from "./components/Login.js";





function App () {

  

  return (

    <div className="App">
      <AppRouter />
      

      <Login />

    </div>

    
  )
}
export default App