import React from "react"

function VideoData({data}) {
    return (
        <div>
            <h1>{data.title}</h1>
            <h3>{data.views} Views | Uploaded {data.createdAt}</h3>
        </div>
    )
}

export default VideoData