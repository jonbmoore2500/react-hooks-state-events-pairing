import React from "react"
import Comment from "./Comment.js"

function Comments({comments, dispStatus, removeClick}) {
    
    const numOfComments = comments.length
    
    function onRemoveClick(removalId) {
        removeClick(removalId)
    }
    
    const commentsDisplay = dispStatus ? comments.map((comment) => (
        <Comment comment={comment} onRemoveClick={onRemoveClick}/>
    )) : null
    
return (
    <div className="commentsDiv">
        <h1>{numOfComments} Comments</h1>
        {commentsDisplay}
    </div>
)
}

export default Comments