import React, { useState } from "react";

////ALEXIS'S SIGN-UP FORM WORK

export default function SignUp(props) {
    console.log(props);
    const [user, setUser] = useState({name: '', email: '', password: ''});

    function handleChange(event) {
        const updatedUser = {...user, [event.target.name]: event.target.value};
        console.log('handleChange', event.target.name, event.target.value, updatedUser);

        setUser(updatedUser);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.newUser(user);
        console.log('user state', user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input
                type="name"
                className="form-group"
                placeholder=""
                onChange={handleChange}
                value={user.name}
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                type="email"
                className="form-group"
                placeholder=""
                onChange={handleChange}
                value={user.email}
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                type="password"
                className="form-group"
                placeholder=""
                onChange={handleChange}
                value={user.password}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    );
}