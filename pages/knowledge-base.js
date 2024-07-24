import React, { useState } from 'react';

const KnowledgeBase = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">Training Data</h1>
      
      <div className="mb-6 w-full max-w-md">
        <label className="block text-lg mb-2" htmlFor="website-link">Add your website link here:</label>
        <input
          type="text"
          id="website-link"
          className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
          placeholder="Enter your website link"
        />
      </div>
      
      <div className="mb-6 w-full max-w-md">
        <label className="block text-lg mb-2">Upload Documents</label>
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="w-full h-64 border-2 border-dashed border-gray-500 rounded-lg flex items-center justify-center text-center bg-gray-800 text-white"
        >
          <p>Drag and drop your documents here to train the voice assistant (Format Supported: pdf, docx, txt)</p>
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.docx,.txt"
        />
        {file && (
          <p className="mt-2 text-center">{file.name}</p>
        )}
      </div>
    </div>
  );
};

export default KnowledgeBase;
