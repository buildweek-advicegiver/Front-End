import React, { useState } from "react";
import { Form } from "./StyledPosts";

const AddPosts = props => {
  const [input, setInput] = useState({
    info:"",
    title: "",
    description: "",
    id: null
  });

  const inputHandler = e => {
    setInput({ ...input, [e.target.getAttribute('info')]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    //*Add in axios post request when back-end's completed*//
    props.add({ ...input, id: Math.random() });
    setInput({
        info:"",
        title: "",
        description: "",
        id: null
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
            info="title"
          />
      </div>
      <div>
        <label htmlFor="Description">
          Description:{" "}
        </label>
          <textarea
            rows="10" 
            cols="30"
            type="text"
            value={input.description}
            onChange={inputHandler}
            info="description"
          />
      </div>
      <button>Submit Question</button>
    </Form>
  );
};

export default AddPosts;
// rows="10" cols="30" <--note for textarea instead of input, but check if project works with input
//Mariam Farrukh