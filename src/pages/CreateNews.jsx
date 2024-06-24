import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateNews() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "KONI Kulon Progo",
    avatar: "",
    post_date: "",
    image: "",
  });

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      alert("silahkan login sebagai Editor");
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data to be submitted:", formData);
    try {
      const response = await fetch("http://localhost:3000/api/v1/berita", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });
      if (response.ok) {
        alert("Berita berhasil dibuat!");
        navigate("/berita");
      } else {
        alert("Gagal membuat berita");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error to POST data");
    }
  };

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
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: base64Image,
      }));
    };
    reader.onerror = (error) => console.error("Error reading image:", error);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Create News</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter the news title"
              required
            />
            <div>
              <label
                htmlFor="post_date"
                className="block text-sm font-medium text-gray-700"
              >
                Post Date
              </label>
              <input
                type="date"
                id="post_date"
                name="post_date"
                value={formData.post_date}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content1"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="6"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter the news content"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content2"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="6"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter the news content"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content3"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="6"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter the news content"
              required
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
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNews;
