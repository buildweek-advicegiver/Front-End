import React, { useState } from 'react'
import { Route }  from "react-router-dom";
import Login from './components/Login.js';
import SignUp from "./components/SignUp";
import Display from "./components/Display";

function App () {

  const [users, setUsers] = useState([]);
  console.log(setUsers);

  function newUser(user) {
    setUsers([...users, user])
  }

  return (

    <div className="App">
      <h1> TESTING </h1>

      {/* ///Alexis */}
      <SignUp newUser={newUser}/>
      {users.map(user => (
        <Display user={user} />
      ))}
      {/* <Route exact path="/" component={SignUp}/> */}
      <Login />
    </div>

    
  )
}
export default App