import React, { useState } from "react";

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
    <form onSubmit={submitHandler}>
      <h1>Add Question</h1>
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
      </div>
      <button type="submit">Submit Question</button>
    </form>
  );
};

export default AddPosts;
// rows="10" cols="30" <--note for textarea instead of input, but check if project works with input
//Mariam Farrukh