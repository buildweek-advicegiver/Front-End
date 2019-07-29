import React from "react";

export default function Display(props) {

console.log("Welcome", props);

    return (
        <div className="Team">
            <h1>This is a test for SignUp...</h1>
        
            <h3>Name: {props.user.name}</h3>
            <h3>Email: {props.user.email}</h3>
            
        </div>
    );
}