// pages/recordings.js
import { useRouter } from 'next/router';
import { useState } from 'react';
import AllRecordingTile from '../components/AllRecordingTile';
import { RecordingList } from '../components/RecordingTile';

const Recordings = () => {
  const router = useRouter();
  const [showAllRecordings, setShowAllRecordings] = useState(false);

  const handleNavigation = (path) => {
    router.push(path);
  };

  const toggleShowAllRecordings = () => {
    setShowAllRecordings(!showAllRecordings);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mt-4 mb-8 text-center">Recordings</h1>
      <div className="mb-6">
        <button
          onClick={() => handleNavigation('/inbound')}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-4 hover:bg-blue-600"
        >
          Inbound
        </button>
        <button
          onClick={() => handleNavigation('/outbound')}
          className="bg-green-500 text-white py-2 px-4 rounded mr-4 hover:bg-green-600"
        >
          Outbound
        </button>
        <button
          onClick={toggleShowAllRecordings}
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          {showAllRecordings ? 'Hide All Recordings' : 'Show All Recordings'}
        </button>
      </div>
      {/* Section for All Recordings */}
      <div className="w-full mb-6">
        {showAllRecordings ? (
          <RecordingList /> // Display RecordingList when showAllRecordings is true
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4"></h2>
            <AllRecordingTile /> {/* Display AllRecordingTile when showAllRecordings is false */}
          </>
        )}
      </div>
    </div>
  );
};

export default Recordings;
