import React, {useState} from "react";

export default function OnChange(){

    const [name, setName] = useState("Guest");
    const [comments, setComments] = useState("No comments yet");

    function handleName(e){
        setName(e.target.value);
    }

    function handleComments(e){
        setComments(e.target.value);
    }

    return(<>

        <input value={name} onChange={handleName}></input>
        <p>Name : {name}</p>

        <textarea value = {comments} onChange={handleComments}></textarea>
        <p>Comments : {comments}</p>
    </>);
}
