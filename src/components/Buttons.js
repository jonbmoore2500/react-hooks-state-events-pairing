import React, {useState} from "react"

function Buttons({upvotes, downvotes, hideBtnStatus, setHideBtnStatus}) {
    const [dispUpvotes, setDispUpvotes] = useState(upvotes)
    const [dispDownvotes, setDispDownvotes] = useState(downvotes)
    
    const hideBtnText = hideBtnStatus ? "Hide Comments" : "Unhide Comments"
    
    function handleClick() {
        setHideBtnStatus(!hideBtnStatus)
    }
    return (
        <div className="buttonsDiv">
            <button onClick={() => setDispUpvotes(dispUpvotes + 1)}>{dispUpvotes} 👍</button>
            <button onClick={() => setDispDownvotes(dispDownvotes + 1)}>{dispDownvotes} 👎</button>
            <br></br>
            <button onClick={handleClick}>{hideBtnText}</button>
        </div>
    )
}

export default Buttons