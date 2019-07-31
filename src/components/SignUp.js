import React, { useState } from "react";
import { Sign, Context, SignupBtn, Header } from "./StyledWidgets";
import axios from "axios";

////ALEXIS'S SIGN-UP FORM WORK

export default function SignUp(props) {
    console.log(props);
    const [user, setUser] = useState({firstname: '', lastname: '', username:'', email: '', password: ''});

    function handleChange(event) {
        const updatedUser = {...user, [event.target.name]: event.target.value};
        console.log('handleChange', event.target.name, event.target.value, updatedUser);

        setUser(updatedUser);
    }

    function handleSubmit(e) {
        e.preventDefault();
        //** */Add in axios post request when back-end's completed **//
        axios.post('https://theadvice-giver.herokuapp.com/signup')
        
        //handle success
        .then(res => {

           console.log(res);
        })

        //handle error
        .catch(err => console.dir(err));
      
          e.preventDefault();
      
        console.log('user state', user);
    }

// {/* //     {/* ///Alexis */}
//       {/* {/* <SignUp newUser={newUser}/>
//         {users.map(user => (
//           <Display user={user} />
//         ))} 

    return (

        <Sign>
            <form onSubmit={handleSubmit}>
                <Context>

                    <Header>
                    <h2>Sign Up</h2>
                    </Header>

                    <div className="form-group">
                        <label>First Name: </label>
                            <input
                                type="firstname"
                                name= "firstname"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.firstname}
                            />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                            <input
                                type="lastname"
                                name= "lastname"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.lastname}
                            />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                            <input
                                type="username"
                                name= "username"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.username}
                            />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                            <input
                                type="email"
                                name= "email"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.email}
                            />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                            <input
                                type="password"
                                name= "password"
                                className="form-group"
                                placeholder=""
                                onChange={handleChange}
                                value={user.password}
                            />
                    </div>

                    <SignupBtn className="btn btn-primary">Submit</SignupBtn>

                </Context>

            </form>

        </Sign>
           
    );
}