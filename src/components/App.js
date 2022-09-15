import video from "../data/video.js";
import React, {useState} from "react"
import Buttons from "./Buttons.js"
import VideoData from "./VideoData.js"
import Comments from "./Comments.js"

function App() {
  console.log("Here's your data:", video);
  const [hideBtnStatus, setHideBtnStatus] = useState(true)
  const [commentsToDisp, setCommentsToDisp] = useState(video.comments)
  
  function removeClick(removalId) {
    let newComments = commentsToDisp.filter((comment) => comment.id !== removalId)
    setCommentsToDisp(newComments)
  }
  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoData data={video}/>
      <Buttons upvotes={video.upvotes} downvotes={video.downvotes} hideBtnStatus={hideBtnStatus} setHideBtnStatus={setHideBtnStatus}/>
      <Comments comments={commentsToDisp} dispStatus={hideBtnStatus} removeClick={removeClick}/>
    </div>
  );
}

export default App;
