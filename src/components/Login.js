import React, { useState } from 'react'



export default function Login(props) {
    console.log(props)

    const [member, setMember] = useState({email: '', password: ''});


    function handleChange(event) {
        const loginUser = {...member, [event.target.name]: event.target.value};
        

        setMember(loginUser);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        console.log('member state', member);
    }


    const styles= {
        width: "80rem",
        display: "flex",
        justifyContent: "center",
        
    }

    return(
        
        <form onSubmit={handleSubmit}>

            <div className="loginInfo">
                <h1> -----I am login----- </h1>
                <label>Email</label>
                <input type='email' placeholder='youremail@email.com' onChange={handleChange}
                value={member.email}
                />
                <label>Password</label>
                <input type='password' placeholder='password' onChange={handleChange}
                value={member.password}
                />
                <button type="submit">Login</button>

                <div className='loginImg'>
                    <img style ={styles} src='https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80'/>
                </div>
                

            </div>

        </form>
    )
}




// Kelly Moreira