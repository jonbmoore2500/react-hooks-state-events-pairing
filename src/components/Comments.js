import React from "react"
import Comment from "./Comment.js"

function Comments({comments, dispStatus}) {
    
    const numOfComments = comments.length
    const commentsDisplay = dispStatus ? comments.map((comment) => (
        <Comment comment={comment}/>
    )) : null

return (
    <div className="commentsDiv">
        <h1>{numOfComments} Comments</h1>
        {commentsDisplay}
    </div>
)
}

export default Comments