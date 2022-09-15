import video from "../data/video.js";
import React, {useState} from "react"
import Buttons from "./Buttons.js"
import VideoData from "./VideoData.js"
import Comments from "./Comments.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoData data={video}/>
      <Buttons />
      <Comments />
    </div>
  );
}

export default App;
