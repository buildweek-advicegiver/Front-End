import React from 'react'
import { Switch, Route } from 'react-router-dom';
// import WelcomePage from './WelcomePage';
// import { Link } from "react-router-dom";
import SignUp from './SignUp';


export default function AppRouter() {
  return <div className="app-router">
    
    
      <Switch>
        
          <Route path='/signup' component={SignUp} />
          
          {/* <Route component={WelcomePage} /> */}
        
      </Switch>
      
    
    
  </div>

}
