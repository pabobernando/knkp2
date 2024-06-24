import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditNews() {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await fetch(
          `http://localhost:3000/api/v1/berita/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }

        const data = await response.json();
        setNewsData(data);
        setTitle(data.title);
        setContent(data.content);
        setCategory(data.category);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setError("Failed to fetch news data");
      }
    };

    fetchNewsData();
  }, [id]);

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await fetch(
        `http://localhost:3000/api/v1/berita/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, content, category }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save news data");
      }

      navigate("/Berita");
    } catch (error) {
      console.error("Error saving news data:", error);
      setError("Failed to save news data");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!newsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-news">
      <h2>Edit News</h2>
      <form onSubmit={handleSave}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditNews;
