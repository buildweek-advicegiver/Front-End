import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";


export default function PrivateRoute({ component: Component, ...rest }) {

    return (
  
      <div>
        <Route {...rest} render={() => {
          if (localStorage.getItem('token'))
            return <Component />
          return <Redirect to='/login'/>
        }}/>
      </div>
  
    )
  
  }
