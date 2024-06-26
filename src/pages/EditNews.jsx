import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditNews() {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState({
    content1: "",
    content2: "",
    content3: "",
  });
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
          `https://api.konikulonprogo.com/api/v1/berita/${id}`,
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
        setDescription(data.deskription);
        setContent({
          content1: data.content1 || "",
          content2: data.content2 || "",
          content3: data.content3 || "",
        });
        setAvatar(data.avatar);
        setImage(data.image);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setError("Failed to fetch news data");
      }
    };

    fetchNewsData();
  }, [id]);

  const handleSave = async (event) => {
    event.preventDefault();
    const combinedContent = `${content.content1}|||${content.content2}|||${content.content3}`;
    const formData = {
      title,
      description,
      content: combinedContent,
      avatar,
      image,
    };
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      console.log("Send Data :", formData);

      const response = await fetch(
        `https://api.konikulonprogo.com/api/v1/berita/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
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

  const handleImageUpload = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (!file) {
      console.error("No image selected");
      return;
    }

    if (file.size > 1024 * 1024 * 5) {
      console.error("Image size exceeds the limit of 5MB");
      return;
    }

    if (!file.type.match("image/.*")) {
      console.error("Invalid image format. Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const base64Image = event.target.result.replace(
        /^data:image\/\w+;base64,/,
        ""
      );
      console.log(base64Image);
      if (name === "avatar") {
        setAvatar(base64Image);
      } else if (name === "image") {
        setImage(base64Image);
      }
    };
    reader.onerror = (error) => console.error("Error reading image:", error);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Edit News</h2>
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label>Content</label>
            <textarea
              value={content.content1}
              onChange={(e) =>
                setContent({ ...content, content1: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label>Content</label>
            <textarea
              value={content.content2}
              onChange={(e) =>
                setContent({ ...content, content2: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label>Content</label>
            <textarea
              value={content.content3}
              onChange={(e) =>
                setContent({ ...content, content3: e.target.value })
              }
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="avatar"
              className="block text-sm font-medium text-gray-700"
            >
              Avatar
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleImageUpload}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Upload the avatar image"
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageUpload}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Upload the image"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditNews;
