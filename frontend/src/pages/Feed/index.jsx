import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import FeedPostC from "./components/FeedPostC";

const Feed = () => {
  const [feedPosts, setFeedPosts] = useState([]);

  const loadFeedPosts = async () => {
    try {
      const response = await axios.get("http://localhost/linkedin-clone/backend/db_apis/feedApis/getAllFeeds.php");
      setFeedPosts(response.data.feed_posts);
      localStorage.setItem("feedPosts", JSON.stringify(response.data.feed_posts));
    } catch (error) {
      console.error("Error loading feed posts:", error);
    }
  };

  useEffect(() => {
    loadFeedPosts();
  }, []);
  // console.log(feedPosts);
  return (
    <div className="flex row page home-page">
      {feedPosts.map((feedPost) => (
        <FeedPostC feedPost={feedPost} key={feedPost.feed_post_id} />
      ))}
    </div>
  );
};

export default Feed;
