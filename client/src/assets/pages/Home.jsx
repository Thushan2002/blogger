import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Posts from "./Posts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Posts />
      <Footer />
    </div>
  );
};

export default Home;
