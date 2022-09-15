import React from "react"

function Comments({comments}) {
    const numOfComments = comments.length


return (
    <div className="commentsDiv">
        <h1>{numOfComments} Comments</h1>
        {comments.map((comment) => (
            <div key={comment.id}>
                <h4>{comment.user}</h4>
                <h5>{comment.comment}</h5>
            </div>
        ))}
    </div>
)
}

export default Comments