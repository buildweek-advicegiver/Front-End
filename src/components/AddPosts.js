import React, { useState } from "react";
import { Form, Description, Textarea, Select, Input, SubmitButton, Label, QuestionHeader } from "./StyledPosts";

const AddPosts = props => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    posttype: "",
    postid:""
  });

  const inputHandler = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();

    props.add(input);
      setInput({
          title: "",
          description: "",
          posttype: "",
          postid: ""
      });
  };

  return (
    <Form onSubmit={submitHandler}>
      <QuestionHeader>Ask A Question</QuestionHeader>
      <div>
        <Label htmlFor="Name">
          Title:{" "}
        </Label>
        <Input
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
        <Select 
          name="posttype"
          type="" 
          onChange={inputHandler} 
          value={input.posttype} >
            <option value="">Select Category</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Relationship">Relationship</option>
            <option value="Career">Career</option>
            <option value="Misc">Misc.</option>
        </Select>
      </div>
      <div>
        <Description>
          <Textarea
            rows="10" 
            cols="60"
            name="description"
            type="text"
            value={input.description}
            onChange={inputHandler}
          />
        </Description>
      </div>
      <SubmitButton>Submit Question</SubmitButton>
    </Form>
  );
};

export default AddPosts;
// rows="10" cols="30" <--note for textarea instead of input, but check if project works with input
//Mariam Farrukh