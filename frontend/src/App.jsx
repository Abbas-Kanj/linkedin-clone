import "./styles/utilities.css";
import "./styles/colors.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Feed from "./pages/Feed"
import JobPosts from "./pages/JobPosts"
import Profile from "./pages/Profile"

import { useEffect } from "react";

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Authentication />} />
          <Route path="/" element={<Feed />} />
          <Route path="/JobPosts" element={<JobPosts />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
