import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card, CardTitle, CardPost} from "./StyledPosts";


function FeedA() {
    const[feed, setFeed] = useState({});

    useEffect(() => {
        axios.get('https://theadvice-giver.herokuapp.com/post/feed')
            .then(res => {
                console.log(res);
                const feedInfo = res.data;
                setFeed(feedInfo);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <Card>
            <CardTitle>
                <h3>Title</h3>
                    <p>{feed.title}</p>
            </CardTitle>
            <div>
                <h4>Category</h4>
                    <p>{feed.posttype}</p>
            </div>
            <CardPost>
                <h3>Description</h3>
                    <p>{feed.description}</p>
            </CardPost>
        </Card>
    )
}

export default FeedA;