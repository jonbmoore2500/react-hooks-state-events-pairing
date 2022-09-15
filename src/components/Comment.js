import React, {useState} from "react"

function Comment({comment, onRemoveClick}) {
    const [dispUpvotes, setDispUpvotes] = useState(0)
    const [dispDownvotes, setDispDownvotes] = useState(0)
    
    
    return (
    <div key={comment.id}>
            <h3>{comment.user}</h3>
            <h4>{comment.comment}</h4>
            <button onClick={() => setDispUpvotes(dispUpvotes + 1)}>{dispUpvotes} 👍</button>
            <button onClick={() => setDispDownvotes(dispDownvotes + 1)}>{dispDownvotes} 👎</button>
            <button onClick={() => onRemoveClick(comment.id)}>Remove Comment</button>
    </div>
    )
}


export default Comment