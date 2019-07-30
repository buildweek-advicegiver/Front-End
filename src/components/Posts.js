import React, { useState } from 'react'
import EditPosts from "./components/EditPosts.js";
import AddPosts from "./components/AddPosts.js";
import {FullDiv} from "./StyledPosts.js";

function Posts () {
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
    
    return(
        <FullDiv className="App">
            <div>
                {posts.map((post, i) => (
                    <EditPosts post={post} key={i} update={update} />
                ))}
                <AddPosts add={submitPost} />
            </div>
      </FullDiv>
    )
}

export default Posts;
//Mariam Farrukh