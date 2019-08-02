import React, { useState } from "react";
import { Card, CardTitle, CardPost, CardEditButton, Button, Label, Form } from "./StyledPosts";

const EditPosts = props => {
  const { title, description, posttype } = props.post;

  const [input, setInput] = useState(
    props.post
  );

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
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleUpdate = e => {
    e.preventDefault();
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
            name="title"
            type="text"
            value={input.title}
            onChange={inputHandler}
          />
      </div>
      <div>
        <Label htmlFor="posttype">
          Category:{" "}
        </Label>
          <select 
            name="posttype"
            type="" 
            onChange={inputHandler} 
            value={input.posttype} required>
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
          <textarea
            rows="10" 
            cols="30"
            type="text"
            value={input.description}
            onChange={inputHandler}
            name="description"
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
      <div>
        <h4>Category</h4>
          <p>{posttype}</p>
      </div>
      <CardPost>
        <h3>Description</h3>
          <p>{description}</p>
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