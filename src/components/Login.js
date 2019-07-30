import React, { useState } from 'react'
import styled from 'styled-components'
import { LoginBtn, LoginImg, divContainer } from "./StyledWidgets";









export default function Login(props) {

    
    console.log(props)

    const [member, setMember] = useState({username: '', password: ''});


    function handleChange(event) {
        setMember(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        
        console.log('member state', member);
    }










// Returns


    
    return(
        
        <form onSubmit={handleSubmit} >

            <divContainer>
                
                
                <label> Username </label>
                <input type='username' placeholder='Username' onChange={handleChange}
                value={member.username}
                />
                
                <label> Password </label>
                <input type='password' placeholder='Password' onChange={handleChange}
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




// Kelly Moreira