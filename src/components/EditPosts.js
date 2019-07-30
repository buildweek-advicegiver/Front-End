import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 5em;
  padding: 0.5em;
  background-color: #f5f5f5;
  height: 20em;
`;
const CardTitle = styled.div`
  display: flex;
  align-items: center
  flex-direction: column;
`;

const CardPost = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1em;
  width: auto;
`;

const CardEditButton = styled.div`
  display: flex;
  justfy-content: center;
`;

const Button = styled.button`
  border: none;

`;
const Label = styled.label`
  font-size: 1.5em;
`;

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
    //** */Add in axios post request when back-end's completed **//
    props.update(input);
    setEditing(false);
  };

  return editing ? (
    <form onSubmit={handleUpdate}>
      <h1>Add Question</h1>
      <div>
        <Label htmlFor="Title">
          Title:{" "}
        </Label>
          <input
            placeholder="Title"
            type="text"
            value={input.title}
            onChange={inputHandler}
            info="title"
          />
      </div>
      <div>
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
    <Card>
      <CardTitle>
        <h3>Title</h3>
          <p>{title}</p>
      </CardTitle>
      <CardPost>
        <h3>Post</h3>
          <p>{post}</p>
      </CardPost>
      <CardEditButton>
        <Button onClick={handleEdit}>Edit</Button>
      </CardEditButton>
    </Card>
  );
};

export default EditPosts;
//Mariam Farrukh