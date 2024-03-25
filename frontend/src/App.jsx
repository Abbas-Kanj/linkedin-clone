import "./styles/utilities.css";
import "./styles/colors.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
// import Home from "./pages/Home";
// import Quiz from "./pages/Quiz";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Authentication />} />
          {/* <Route path="/quiz" element={<Quiz />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
