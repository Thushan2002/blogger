import React, { useState, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("ART");
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "<p>Write your post here...</p>",
    editorProps: {
      attributes: {
        class: "prose prose-lg focus:outline-none max-w-none",
      },
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleTriggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real app, you would upload the image to a server here
      // and get back a URL to store in your database
      const imageUrl = image; // This would be the uploaded image URL

      const newPost = {
        title,
        category,
        image: imageUrl,
        desc: editor.getHTML(),
        excerpt: editor.getText().slice(0, 150) + "...", // Create excerpt
        createdAt: new Date().toISOString(),
      };

      console.log("New Post:", newPost);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Post created successfully!");
      // Reset form
      setTitle("");
      setCategory("ART");
      setImage(null);
      setImageFile(null);
      editor.commands.setContent("<p>Write your post here...</p>");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("There was an error creating your post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const addImage = () => {
    const url = window.prompt("Enter image URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const url = window.prompt("Enter URL");
    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  if (!editor) return null;

  return (
    <>
      <Navbar />
      <div className="write-container">
        <div className="write-card">
          <h2>Create a New Post</h2>
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="form-group">
              <label htmlFor="title">Post Title</label>
              <input
                id="title"
                type="text"
                placeholder="Enter a compelling title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="ART">Art</option>
                <option value="SCIENCE">Science</option>
                <option value="TECHNOLOGY">Technology</option>
                <option value="CINEMA">Cinema</option>
                <option value="DESIGN">Design</option>
                <option value="FOOD">Food</option>
              </select>
            </div>

            {/* Editor Toolbar */}
            <div className="editor-header">
              <div className="editor-toolbar">
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  className={editor.isActive("bold") ? "active" : ""}
                  title="Bold">
                  <span className="icon">B</span>
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  className={editor.isActive("italic") ? "active" : ""}
                  title="Italic">
                  <span className="icon">I</span>
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                  className={editor.isActive("underline") ? "active" : ""}
                  title="Underline">
                  <span className="icon">U</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                  className={
                    editor.isActive("heading", { level: 1 }) ? "active" : ""
                  }
                  title="Heading 1">
                  <span className="icon">H1</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                  className={
                    editor.isActive("heading", { level: 2 }) ? "active" : ""
                  }
                  title="Heading 2">
                  <span className="icon">H2</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor.chain().focus().setTextAlign("left").run()
                  }
                  className={
                    editor.isActive({ textAlign: "left" }) ? "active" : ""
                  }
                  title="Align Left">
                  <span className="icon">←</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor.chain().focus().setTextAlign("center").run()
                  }
                  className={
                    editor.isActive({ textAlign: "center" }) ? "active" : ""
                  }
                  title="Align Center">
                  <span className="icon">↔</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor.chain().focus().setTextAlign("right").run()
                  }
                  className={
                    editor.isActive({ textAlign: "right" }) ? "active" : ""
                  }
                  title="Align Right">
                  <span className="icon">→</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                  className={editor.isActive("bulletList") ? "active" : ""}
                  title="Bullet List">
                  <span className="icon">•</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    editor.chain().focus().toggleOrderedList().run()
                  }
                  className={editor.isActive("orderedList") ? "active" : ""}
                  title="Numbered List">
                  <span className="icon">1.</span>
                </button>
                <button
                  type="button"
                  onClick={setLink}
                  className={editor.isActive("link") ? "active" : ""}
                  title="Add Link">
                  <span className="icon">🔗</span>
                </button>
                <button type="button" onClick={addImage} title="Add Image">
                  <span className="icon">🖼️</span>
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().undo().run()}
                  disabled={!editor.can().undo()}
                  title="Undo">
                  <span className="icon">↩️</span>
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().redo().run()}
                  disabled={!editor.can().redo()}
                  title="Redo">
                  <span className="icon">↪️</span>
                </button>
              </div>
              <div className="character-count">
                {editor.storage.characterCount?.characters()} characters
              </div>
            </div>

            {/* Editor */}
            <div className="editor-wrapper">
              <EditorContent editor={editor} />
            </div>

            {/* Image Upload */}
            <div className="form-group">
              <label>Featured Image</label>
              <div className="image-upload-container">
                <button
                  type="button"
                  className="image-upload-btn"
                  onClick={handleTriggerFileInput}>
                  Choose Image
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden-file-input"
                />
                {imageFile && (
                  <span className="file-name">{imageFile.name}</span>
                )}
              </div>
            </div>

            {/* Image Preview */}
            {image && (
              <div className="image-preview">
                <p>Image Preview:</p>
                <img src={image} alt="preview" />
                <button
                  type="button"
                  className="remove-image-btn"
                  onClick={() => {
                    setImage(null);
                    setImageFile(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}>
                  Remove Image
                </button>
              </div>
            )}

            {/* Publish Button */}
            <button
              type="submit"
              className="publish-btn"
              disabled={isSubmitting || !title.trim() || editor.isEmpty}>
              {isSubmitting ? "Publishing..." : "Publish Post"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Write;
