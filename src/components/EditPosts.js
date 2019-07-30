import React, { useState } from "react";

const EditPosts = props => {
  const { title, post, id } = props.post;

  const [input, setInput] = useState({
    info:"",
    title: title,
    post: post,
    id: id
  });
  const [editing, setEditing] = useState(false);

  const handleEdit = e => {
    setEditing(!editing);
  };

  const inputHandler = e => {;
    setInput({ ...input, [e.target.getAttribute('info')]: e.target.value });
  };

  const handleUpdate = e => {
    e.preventDefault();
    props.update(input);
    setEditing(false);
  };

  return editing ? (
    <form onSubmit={handleUpdate}>
      <h1>Add Question</h1>
      <div>
        <label htmlFor="Title">
          Title:{" "}
          <input
            type="text"
            value={input.title}
            onChange={inputHandler}
            info="title"
          />
        </label>
        <label htmlFor="Post">
          Post:{" "}
          <textarea
            rows="10" 
            cols="30"
            type="text"
            value={input.post}
            onChange={inputHandler}
            info="post"
          />
        </label>
      </div>
      <button>Submit Question</button>
    </form>
  ) : (
    <div>
      <h3>Title</h3>
      <p>{title}</p>
      <h3>Post</h3>
      <p>{post}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default EditPosts;
//Mariam Farrukh