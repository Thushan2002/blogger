import React from "react";
import { Route, Routes } from "react-router-dom";
import "../src/index.css";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register";
import Write from "./assets/pages/Write";
import Single from "./assets/pages/Single";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regitser" element={<Register />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:id" element={<Single />} />
      </Routes>
    </div>
  );
};

export default App;
