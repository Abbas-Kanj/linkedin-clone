import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
// import FeedPostCard from "./components/FeedPostCard";
import FeedPostCard from "./components/FeedPostCard";


const Feed = () => {

  const [feedPosts, setfeedPosts] = useState([]);


  const loadFeedPosts = async () => {
    const response = await axios.get("http://localhost/linkedin-clone/backend/db_apis/feedApis/getAllFeeds.php");

    setfeedPosts(response.data);

    localStorage.setItem("Feed_posts", JSON.stringify(response.data));
  };

  useEffect(() => {
    loadFeedPosts();
  }, []);

  return <div className="flex row page home-page">
    {feedPosts.map((feedPost)=> {
      return <FeedPostCard feedPost={feedPost} key={feedPost.feed_post_id}/>
    })}
  </div>;
};

export default Feed;

