import React, { useState } from 'react'
import { Route }  from "react-router-dom";
import Login from './components/Login.js';
import SignUp from "./components/SignUp";
import Display from "./components/Display";
import EditPosts from "./components/EditPosts.js";
import AddPosts from "./components/AddPosts.js";

function App () {

  const [users, setUsers] = useState([]);
  console.log(setUsers);

  function newUser(user) {
    setUsers([...users, user])
  }


  const [posts, setPosts] = useState([]);

  const submitPost = post => setPosts([...posts, post]);
  const update = updatedPost =>
    setPosts([...posts.map(post => {
        if (post.id === updatedPost.id) {
          return updatedPost;
        }
        return post;
      })
    ]);

  return (

    <div className="App">
      <h1> TESTING </h1>

      {/* ///Alexis */}
      <SignUp newUser={newUser}/>
      {users.map(user => (
        <Display user={user} />
      ))}

      

      {/* <Route exact path="/" component={SignUp}/> */}
      <Login />

      <div>
        {posts.map((post, i) => (
          <EditPosts post={post} key={i} update={update} />
        ))}
        <AddPosts add={submitPost} />
      </div>

    </div>

    
  )
}
export default App