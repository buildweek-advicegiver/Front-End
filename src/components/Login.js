import React, { useState } from 'react'

import { LoginBtn, LoginImg } from "./StyledWidgets";

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
        
        <form onSubmit={handleSubmit} >

            <divContainer>
                
                
                <label> Username </label>
                <input type='text' name='username' placeholder='Username' onChange={handleChange}
                value={member.username}
                />
                
                <label> Password </label>
                <input type='password' name='password' placeholder='Password' onChange={handleChange}
                value={member.password}
                />
                <LoginBtn type="submit">Login</LoginBtn>

                <div>
                    <LoginImg src='https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80'/>
                </div>
                

            </divContainer>

        </form>
    )
}


