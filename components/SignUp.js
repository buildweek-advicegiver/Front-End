import React, { useState } from "react";

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
        console.log('user state', user);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
            </div>
        </form>
    )
}