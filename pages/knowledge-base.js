import React, { useState } from 'react';

const KnowledgeBase = () => {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [trainingProgress, setTrainingProgress] = useState(0);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFile(newFile);
      setUploadedFiles(prevFiles => [...prevFiles, newFile]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFile = e.dataTransfer.files[0];
    if (newFile) {
      setFile(newFile);
      setUploadedFiles(prevFiles => [...prevFiles, newFile]);
    }
  };

  // Dummy function to simulate progress
  const simulateTrainingProgress = () => {
    setTrainingProgress(prev => (prev >= 100 ? 100 : prev + 10));
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

      <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Uploaded Documents</h2>
        {uploadedFiles.length > 0 ? (
          <ul className="list-disc pl-5">
            {uploadedFiles.map((uploadedFile, index) => (
              <li key={index} className="text-lg mb-2">{uploadedFile.name}</li>
            ))}
          </ul>
        ) : (
          <p>No documents uploaded yet.</p>
        )}
      </div>

      <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Training Progress</h2>
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold">{trainingProgress}%</span>
            <button
              onClick={simulateTrainingProgress}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Simulate Training
            </button>
          </div>
          <div className="w-full h-4 bg-gray-600 rounded">
            <div
              className="h-full bg-green-500 rounded"
              style={{ width: `${trainingProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
