import React, {useState} from "react"

function Buttons({upvotes, downvotes, onHideClick}) {
    const [dispUpvotes, setDispUpvotes] = useState(upvotes)
    const [dispDownvotes, setDispDownvotes] = useState(downvotes)
    const [hideBtnStatus, setHideBtnStatus] = useState(true)
    const hideBtnText = hideBtnStatus ? "Hide Comments" : "Unhide Comments"
    
    function handleUpvote() {
        setDispUpvotes(dispUpvotes + 1)
    }
    function handleDownvote() {
        setDispDownvotes(dispDownvotes + 1)
    }
    function handleClick() {
        onHideClick(!hideBtnStatus)
        setHideBtnStatus(!hideBtnStatus)
    }
    return (
        <div className="buttonsDiv">
            <button onClick={handleUpvote}>{dispUpvotes} 👍</button>
            <button onClick={handleDownvote}>{dispDownvotes} 👎</button>
            <br></br>
            <button onClick={handleClick}>{hideBtnText}</button>
        </div>
    )
}

export default Buttons