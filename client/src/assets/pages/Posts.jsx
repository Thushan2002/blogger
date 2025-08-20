import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: "The Evolution of Abstract Art",
      desc: "A deep dive into how abstract art has shaped modern expression.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      category: "ART",
    },
    {
      id: 2,
      title: "Exploring Quantum Physics",
      desc: "An introduction to quantum mechanics and its mind-bending concepts.",
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b5bb4cb",
      category: "SCIENCE",
    },
    {
      id: 3,
      title: "The Rise of AI in Everyday Life",
      desc: "How artificial intelligence is transforming industries and daily routines.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      category: "TECHNOLOGY",
    },
    {
      id: 4,
      title: "The Future of Cinema",
      desc: "From streaming to VR, the new ways we experience movies.",
      image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66",
      category: "CINEMA",
    },
    {
      id: 5,
      title: "Minimalist Design Trends",
      desc: "Why simplicity in design continues to captivate audiences worldwide.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      category: "DESIGN",
    },
    {
      id: 6,
      title: "The Art of Italian Cuisine",
      desc: "Exploring traditional Italian food and its global influence.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      category: "FOOD",
    },
    {
      id: 7,
      title: "Street Art Revolution",
      desc: "How graffiti and street art are shaping urban culture.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e21",
      category: "ART",
    },
    {
      id: 8,
      title: "Climate Change & Science",
      desc: "The latest research on climate change and global warming.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      category: "SCIENCE",
    },
    {
      id: 9,
      title: "Tech Gadgets of 2025",
      desc: "A look at the most innovative tech gadgets hitting the market.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "TECHNOLOGY",
    },
    {
      id: 10,
      title: "Cinematic Storytelling",
      desc: "The techniques filmmakers use to create immersive experiences.",
      image: "https://images.unsplash.com/photo-1517602387-7eda3a5d9ae3",
      category: "CINEMA",
    },
  ];

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div
          className={`post-row ${post.id % 2 === 0 ? "even" : "odd"}`}
          key={post.id}>
          {/* Image */}
          <div className="post-image">
            <img src={post.image} alt={post.title} />
          </div>

          {/* Content */}
          <div className="post-content">
            <span className="post-category">{post.category}</span>
            <h3>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.desc}</p>
            <Link to={`/post/${post.id}`} className="read-more">
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
