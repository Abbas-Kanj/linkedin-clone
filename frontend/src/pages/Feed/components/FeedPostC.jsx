import React from "react";
import { useNavigate } from "react-router-dom";

const FeedPostC = ({ feedPost }) => {
    // const navigate = useNavigate();
    const {feed_post_id, post_title, post_desc} = feedPost
    
  return (
    <div className="feedPost-card rounded flex column center">
      <div>
        <h2>{post_title}</h2>
      </div>
      <div>
        <p>{post_desc}</p>
      </div>
    </div>
  )
}

export default FeedPostC
