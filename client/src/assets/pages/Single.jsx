import React from "react";
import { useParams } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Single = () => {
  const { id } = useParams();

  // Example post data (you can fetch this from backend later)
  const post = {
    id: id,
    title: "The Evolution of Abstract Art",
    desc: "A deep dive into how abstract art has shaped modern expression. This article explores the history, techniques, and artists who shaped the world of abstract art.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    category: "ART",
    owner: {
      name: "John Doe",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      username: "john123",
    },
  };

  // Example logged-in user (later this comes from auth context)
  const currentUser = "john123";

  const isOwner = currentUser === post.owner.username;

  return (
    <>
      <Navbar />
      <div className="single-container">
        <div className="single-card">
          <img className="single-image" src={post.image} alt={post.title} />

          <div className="single-content">
            <span className="single-category">{post.category}</span>
            <h1>{post.title}</h1>
            <p className="single-desc">{post.desc}</p>

            <div className="single-owner">
              <img src={post.owner.photo} alt={post.owner.name} />
              <div>
                <h4>{post.owner.name}</h4>
                <span>@{post.owner.username}</span>
              </div>
            </div>

            {isOwner && (
              <div className="single-actions">
                <button className="edit-btn">
                  <FaEdit /> Edit
                </button>
                <button className="delete-btn">
                  <FaTrash /> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Single;
