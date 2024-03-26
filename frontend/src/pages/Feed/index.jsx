import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import FeedPostC from "./components/FeedPostC";

const Feed = () => {
  const navigate = useNavigate();
  const [feedPosts, setFeedPosts] = useState([]);
  const [postProps, setPostProps] = useState({ post_title: "", post_desc: "" });
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
    <div className="flex column center home-page">
      <div className="flex row center nav-bar">
        <button onClick={()=>{
          navigate("/");
        }}>Feed Posts</button>
        <button onClick={()=>{
          navigate("/JobPosts");
        }}>Job Posts</button>
        <button onClick={()=>{
          navigate("/Profile");
        }}>Profile</button>
      </div>
      <div className="flex column center rounded half-width post-form">
      <input
              className="full-width rounded"
              type="text"
              placeholder="Post Title"
              onChange={(e) => {
                setPostProps({
                  ...postProps,
                  post_title: e.target.value,
                });
              }}
            />
            <input
              className="full-width rounded"
              type="text"
              placeholder="Post Description"
              onChange={(e) => {
                setPostProps({
                  ...postProps,
                  post_desc: e.target.value,
                });
              }}
            />
        <button onClick={async()=> {
          try {
            const response = await axios.post(
              "http://localhost/linkedin-clone/backend/db_apis/feedApis/postFeed.php",
              new URLSearchParams(postProps).toString(),
              {
                  headers: {
                      "Content-Type": "application/x-www-form-urlencoded"
                  }
              }
            );

            console.log(response.data);
            // if (response.data.status === "success") {
            //   navigate("/Feed");
            // }
          } catch (error) {
            console.error(error);
          }
        }}>Post a Feed
        </button>
      </div>
      {feedPosts.map((feedPost) => (
        <FeedPostC feedPost={feedPost} key={feedPost.feed_post_id} />
      ))}
    </div>
  );
};

export default Feed;
