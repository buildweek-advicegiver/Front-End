import React, { useState } from 'react'
import EditPosts from "./EditPosts.js";
import AddPosts from "./AddPosts.js";
import axios from "axios";
import { FullDiv } from "./StyledPosts";

function Posts () {
    const [posts, setPosts] = useState([]);


        


    const submitPost = post => {
        setPosts([...posts, post]);
        axios.post('https://theadvice-giver.herokuapp.com/post/add', {post}, {headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`}})
            .then(res => {
                setPosts(res.data)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const update = updatedPost =>
    setPosts([...posts.map(post => {
        if (post.id === updatedPost.id) {
            return updatedPost;
        } else{
        return post;
        }})
    ]);
    const remove = removePost =>
    setPosts([...posts.filter(post => {
        if (post.id === removePost.id) {
            return false;
        } else{
        return true;
        }})
    ]);

    return (
        <FullDiv className="PostPage">
            <div>
                {posts.map((post, i) => (
                    <EditPosts post={post} key={i} update={update} remove={remove} />
                ))}
                <AddPosts add={submitPost} />
            </div>
      </FullDiv>
    )
}

export default Posts;
//Mariam Farrukh

// useEffect(() => {
//     axios.post('https://theadvice-giver.herokuapp.com/post/add'), {headers: {
//     Authorization: `Bearer ${localStorage.getItem('token')}`}}
//         .then(res => {
//             setPosts(res.data)
//             console.log(res);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }), [];