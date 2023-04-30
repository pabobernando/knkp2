import React, { useState } from 'react';

const ArticleForm = ({ onSubmit, article }) => {
  const [title, setTitle] = useState(article ? article.title : '');
  const [content, setContent] = useState(article ? article.content : '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="title" className="block font-bold mb-2">Title:</label>
        <input type="text" id="title" className="w-full p-2 border border-gray-400" value={title} onChange={(event) => setTitle(event.target.value)} required />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block font-bold mb-2">Content:</label>
        <textarea id="content" className="w-full p-2 border border-gray-400" rows="8" value={content} onChange={(event) => setContent(event.target.value)} required />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Save</button>
      </div>
    </form>
  );
};

export default ArticleForm;
