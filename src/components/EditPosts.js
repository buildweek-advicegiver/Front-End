import React, { useState } from "react";
import { Card, CardTitle, CardPost, CardEditButton, Button, Label, Form } from "./StyledPosts";

const EditPosts = props => {
  const { title, post, id } = props.post;

  const [input, setInput] = useState({
    info:"",
    title: title,
    post: post,
    id: id
  });

  const [editing, setEditing] = useState(false);

  const [deleting, setDeleting] = useState(false);

  const handleEdit = e => {
    setEditing(!editing);
  };

  const handleDelete = e => {
    setDeleting(!deleting);
    props.remove(input)
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
    <Form onSubmit={handleUpdate}>
      <h2>Edit Question</h2>
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
    </Form>
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
      <div>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </Card>
  );
};

export default EditPosts;
//Mariam Farrukh