import React from 'react';

const ArticleList = ({ articles, onEdit, onDelete }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} className="mb-4">
          <h2 className="font-bold text-xl mb-2">{article.title}</h2>
          <p className="text-gray-700">{article.content}</p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mr-2" onClick={() => onEdit(article)}>Edit</button>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700" onClick={() => onDelete(article)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
