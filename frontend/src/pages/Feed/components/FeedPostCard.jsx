import React from "react";
import { useNavigate } from "react-router-dom";

const FeedPostCard = ({ feedPost }) => {

    // const navigate = useNavigate();
    const {feed_post_id, post_title, post_desc} = feedPost

  return (
    <div className="feedPost-card flex column center">
      <div>
        <h1>{post_title}</h1>
      </div>
      <div>
        <p>{post_desc}</p>
      </div>
    </div>
  )
}

export default FeedPostCard
