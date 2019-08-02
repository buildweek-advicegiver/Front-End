import React, { useState } from 'react'

import { LoginBtn, LoginImg, Body} from "./StyledWidgets";

import axios from 'axios';





// Kelly


export default function Login(props) {

    
    console.log(props)

    const [member, setMember] = useState({username: '', password: ''});


    function handleChange(event) {

        const updateMember = {...member, [event.target.name]: event.target.value};


        setMember(updateMember);

        console.log(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        
        console.log('member state', member);





        // Link to backend

        axios.post('https://theadvice-giver.herokuapp.com/login', `grant_type=password&username=${member.username}&password=${member.password}`, {
     headers: {
       // btoa is converting our client id/client secret into base64
       Authorization: `Basic ${btoa('ferko:ferko')}`,
       'Content-Type': 'application/x-www-form-urlencoded'
     }
   })
     .then(res => {
         console.log(res, 'working!');
         
       localStorage.setItem('token', res.data.access_token);
    //    this.props.history.push('/users');
     })
     .catch(err => console.dir(err));


    }


    


// Returns


    
    return(

        <Body>
            <div className ="CoverImg">  

        <form className='LoginForm' onSubmit={handleSubmit}  >         

            <div className='LoginCenter'>  

                <h3>Login to your account to begin using Advice for Life</h3>    
                
                <label > Username </label>
                <input type='text' name='username' placeholder='Username' onChange={handleChange}
                value={member.username}
                />
                
                <label > Password </label>
                <input type='password' name='password' placeholder='Password' onChange={handleChange}
                value={member.password}
                />



                {/* inline eventlistener */}
                <LoginBtn type="submit" onClick={()=>{ alert('Welcome Back! We missed you!'); }}>Login</LoginBtn>            


                
                

            </div>
            

        </form>

        

        </div>

        </Body>


        

        
    )
}


