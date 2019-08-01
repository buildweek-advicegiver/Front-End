import React, { useState } from "react";
import { Form } from "./StyledPosts";
import axios from "axios";

const AddPosts = props => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    posttype: "",
  });

  const inputHandler = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    //*Add in axios post request when back-end's completed*//
    axios.post('https://theadvice-giver.herokuapp.com/post/add', {headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`}
    });

    props.add({ ...input});
      setInput({
          title: "",
          description: "",
          posttype: "",
      });
  };

  return (
    <Form onSubmit={submitHandler}>
      <h2>Ask A Question</h2>
      <div>
        <label htmlFor="Name">
          Title:{" "}
        </label>
        <input
            type="text"
            value={input.title}
            onChange={inputHandler}
            name="title"
          />
      </div>
      <div>
        <label>
          Category:{" "}
        </label>
        <select 
          name="posttype"
          type="" 
          onChange={inputHandler} 
          value={input.posttype} >
            <option value="">Select Category</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Relationship">Relationship</option>
            <option value="Career">Career</option>
            <option value="Misc">Misc.</option>
        </select>
      </div>
      <div>
        <label htmlFor="Description">
          Description:{" "}
        </label>
          <textarea
            rows="10" 
            cols="30"
            name="description"
            type="text"
            value={input.description}
            onChange={inputHandler}
          />
      </div>
      <button>Submit Question</button>
    </Form>
  );
};

export default AddPosts;
// rows="10" cols="30" <--note for textarea instead of input, but check if project works with input
//Mariam Farrukh