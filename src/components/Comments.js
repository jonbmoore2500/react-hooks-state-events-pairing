import React from "react"

function Comments({comments, dispStatus}) {
    
    const numOfComments = comments.length
    const commentsDisplay = dispStatus ? comments.map((comment) => (
        <div key={comment.id}>
            <h4>{comment.user}</h4>
            <h5>{comment.comment}</h5>
        </div>
    )) : null

return (
    <div className="commentsDiv">
        <h1>{numOfComments} Comments</h1>
        {commentsDisplay}
    </div>
)
}

export default Comments