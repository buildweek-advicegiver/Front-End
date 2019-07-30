import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const AddPosts = props => {
  const [input, setInput] = useState({
    info:"",
    title: "",
    post: "",
    id: null
  });

  const inputHandler = e => {
    setInput({ ...input, [e.target.getAttribute('info')]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    //** */Add in axios post request when back-end's completed **//
    props.add({ ...input, id: Math.random() });
    setInput({
        info:"",
        title: "",
        post: "",
        id: null
    });
  };

  return (
    <Form onSubmit={submitHandler}>
      <h1>Add Question</h1>
      <Form.Field>
        <label htmlFor="Name">
          Title:{" "}
          </label>
        <input
            type="text"
            value={input.title}
            onChange={inputHandler}
            info="title"
          />
      </Form.Field>
      <Form.Field>
        <label htmlFor="Post">
          Post:{" "}
        </label>
          <textarea
            rows="10" 
            cols="30"
            type="text"
            value={input.post}
            onChange={inputHandler}
            info="post"
          />
      </Form.Field>
      <Button type="submit">Submit Question</Button>
    </Form>
  );
};

export default AddPosts;
// rows="10" cols="30" <--note for textarea instead of input, but check if project works with input
//Mariam Farrukh