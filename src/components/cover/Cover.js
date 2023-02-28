import React from "react";
import "./Cover.css"
import coverVideo from "../../media/videocover.mp4"

function Cover() {
    return ( 
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Wine & Sun</h1>
            <p>Exclusive Lodge</p>
        </div>
     );
}

export default Cover;