import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./CommentsForm";

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "@sk",
        remarks: "great Job", 
        rating: 5
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);

    };

    return (
        <div>
            <h3>All Comments</h3>
            {comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                    <span>{comment.remarks}</span> &nbsp;&nbsp;
                    <span>(rating = {comment.rating})</span>&nbsp;&nbsp;
                    <p>- {comment.username}</p>
                </div>
            ))}
            
            <CommentsForm addNewComment={addNewComment}/>
        </div>
    )
}