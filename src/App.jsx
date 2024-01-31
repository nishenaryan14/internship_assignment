// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    try {
      const res = await axios.get("https://api.tvmaze.com/search/shows?q=all");
      setShows(res.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home shows={shows} />} />
        <Route path="detail/:id" element={<Detail shows={shows} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
