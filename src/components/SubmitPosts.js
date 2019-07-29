import React from 'react'

const Posts = props => {
    const [input, setInput] = useState({
        info:""
        title: "",
        post: "",
        id: null
    });

    const inputHandler = e => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();
        props.add({ ...input, id: Math.random() });
        setInput({
            text:""
            title: "",
            post: "",
            id: null
        });
      };

    return(

        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="Title">
                    Title:{""}
                    <input
                        info="title"
                        type="text"
                        value={input.title}
                        onChange={inputHandler}
                    />
                </label>
                <label htmlFor="Post">
                    Post:{""}
                    <input 
                        info="post"
                        type="text"
                        value={input.post}
                        onChange={inputHandler}
                    />
                </label>
            </div>
            <button>Submit</button>
        </form>
    )
}


export default Posts
// rows="10" cols="30" <--note for textarea instead of input, but check if project works with input
//Mariam Farrukh