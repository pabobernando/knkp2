import React, { useState, useEffect } from "react";

function CMS() {
  const [image, setImage] = useState(null);
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});
  const [newArticle, setNewArticle] = useState({ title: "", content: "", image: null, author:"", publishedDate: "" });
  const [editing, setEditing] = useState(false);


  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await fetch("http://103.193.176.29:3000/api/v1/article");
    const data = await response.json();
    setArticles(data);
  };

  const handleNewArticleChange = (event) => {
    const { name, value } = event.target;
    setNewArticle((prevState) => ({ ...prevState, [name]: value }));
    
  };

  const handleNewArticleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://103.193.176.29:3000/api/v1/article", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
    });
    const data = await response.json();
    setNewArticle({ title: "", content: "", image: "", author:"", publishedDate: ""});
    setArticles((prevState) => [...prevState, { _id: data, ...newArticle }]);
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setEditing(false);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleEditCancel = () => {
    setEditing(false);
  };

  const handleEditArticleChange = (event) => {
    const { name, value } = event.target;
    setSelectedArticle((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleEditArticleSubmit = async (event) => {
    event.preventDefault();
    console.log("Selected article:", selectedArticle); // add this line to log the selectedArticle state
    await fetch(`http://103.193.176.29:3000/api/v1/article/${selectedArticle._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedArticle),
    });
    setEditing(false);
    fetchArticles();
  };

  const handleDeleteClick = async () => {
    await fetch(`http://103.193.176.29:3000/api/v1/article/${selectedArticle._id}`, {
      method: "DELETE",
    });
    setSelectedArticle({});
    fetchArticles();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const blob = new Blob([reader.result]);
      setImage(blob);
    };
  };

  return (
  <>
  <div className="bg-gray-200">
  <div className="flex h-screen p-5">
    <div className="bg-gray-100 w-1/3">
      <div className="w-full">
        <h1 className="text-center text-2xl font-bold mb-4">Articles Editor</h1>
        <ul className="border rounded-md overflow-y-auto h-96">
          {articles.map((article) => (
            <li
              key={article._id}
              className={`p-4 cursor-pointer ${
                article._id === selectedArticle._id ? "bg-blue-100" : ""
              }`}
              onClick={() => handleArticleClick(article)}
            >
              <h2 className="text-lg font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600">
                {article.content.substring(0, 100)}...
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="bg-white w-2/3">
    <div className="border rounded-md overflow-y-auto h-full">
      <div className="w-full p-4">
        {selectedArticle._id ? (
          <>
            <h2 className="text-xl font-bold mb-2">{selectedArticle.title}</h2>
            <p className="text-gray-600">{selectedArticle.content}</p>
            {!editing && (
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
                  onClick={handleEditClick}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={handleDeleteClick}
                >
                  Delete
                </button>
              </div>
            )}
            {editing && (
              <form onSubmit={handleEditArticleSubmit}>
  <div className="mt-4">
    <label htmlFor="title" className="block font-medium mb-2">
      Title
    </label>
    <input
      type="text"
      id="title"
      name="title"
      value={selectedArticle.title}
      onChange={handleEditArticleChange}
      className="w-full border rounded-md py-2 px-3 mb-2"
      required
    />
  </div>
  <div className="mt-4">
    <label htmlFor="content" className="block font-medium mb-2">
      Content
    </label>
    <textarea
      id="content"
      name="content"
      value={selectedArticle.content}
      onChange={handleEditArticleChange}
      className="w-full border rounded-md py-2 px-3 mb-2"
      required
    />
  </div>
  <div className="mt-4">
    <label htmlFor="image" className="block font-medium mb-2">
      Image
    </label>
    <input
      type="text"
      id="image"
      name="image"
      value={selectedArticle.image}
      onChange={handleEditArticleChange}
      className="w-full border rounded-md py-2 px-3 mb-2"
    />
  </div>
  <div className="mt-4">
    <label htmlFor="author" className="block font-medium mb-2">
      Author
    </label>
    <input
      type="text"
      id="author"
      name="author"
      value={selectedArticle.author}
      onChange={handleEditArticleChange}
      className="w-full border rounded-md py-2 px-3 mb-2"
    />
  </div>
  <div className="mt-4">
    <label htmlFor="publishedDate" className="block font-medium mb-2">
      Published Date
    </label>
    <input
      type="date"
      id="publishedDate"
      name="publishedDate"
      value={selectedArticle.publishedDate}
      onChange={handleEditArticleChange}
      className="w-full border rounded-md py-2 px-3 mb-2"
    />
  </div>
  <div className="flex justify-end mt-4">
    <button
      className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2"
      onClick={handleEditCancel}
    >
      Cancel
    </button>
    <button
      type="submit"
      className="px-4 py-2 bg-green-500 text-white rounded-md"
    >
      Save
    </button>
  </div>
</form>
            )}
          </>
        ) : (
          <>
          <h2 className="text-xl font-bold mb-2">Create New Article</h2>
<form onSubmit={handleNewArticleSubmit}>
  <div className="mt-4">
    <label htmlFor="title" className="block font-medium mb-2">
      Title
    </label>
    <input
      type="text"
      id="title"
      name="title"
      value={newArticle.title}
      onChange={handleNewArticleChange}
      className="w-full border rounded-md py-2 px-3 mb-2"
      required
    />
  </div>
  <div className="mt-4">
    <label htmlFor="content" className="block font-medium mb-2">
      Content
    </label>
    <textarea
      id="content"
      name="content"
      value={newArticle.content}
      onChange={handleNewArticleChange}
      className="w-full border rounded-md py-2 px-3 mb-2"
      required
    />
  </div>
  <div className="mt-4">
    <label htmlFor="content" className="block font-medium mb-2">
      Cover Image
    </label>
  <input
  type="file"
  id="image"
  name="image"
  onChange={handleImageUpload}
  value={newArticle.image}
  className="w-full border rounded-md py-2 px-3 mb-2"
/>
</div>

  <div className="mt-4">
    <label htmlFor="author" className="block font-medium mb-2">
      Author
    </label>
    <input
      type="text"
      id="author"
      name="author"
      value={newArticle.author}
      onChange={handleNewArticleChange}
      className="w-full border rounded-md py-2 px-3 mb-2"
    />
  </div>
  <div className="mt-4">
    <label htmlFor="publishedDate" className="block font-medium mb-2">
      Published Date
    </label>
    <input
      type="date"
      id="publishedDate"
      name="publishedDate"
      value={newArticle.publishedDate}
      onChange={handleNewArticleChange}
      className="w-full border rounded-md py-2 px-3 mb-2"
    />
  </div>
  <div className="flex justify-end mt-4">
    <button
      type="submit"
      className="px-4 py-2 bg-green-500 text-white rounded-md"
    >
      Create
    </button>
  </div>
</form>
          </>
        )}
      </div>
      </div>
    </div>
  </div> 
</div>
<div className="bg-white py-4 text-center">Koni Kulon Progo 2023</div>
</>
  );
}
export default CMS;
