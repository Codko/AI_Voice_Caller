import { useState } from 'react';
import { Box, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, Divider } from '@chakra-ui/react';
import { FaBars, FaTrash, FaArchive } from 'react-icons/fa'; // Added icons for actions

// Dummy data for recordings
const dummyData = [
  { id: 1, title: 'Recording 1', color: 'bg-blue-200', duration: '2:30' },
  { id: 2, title: 'Recording 2', color: 'bg-green-200', duration: '3:45' },
  { id: 3, title: 'Recording 3', color: 'bg-yellow-200', duration: '4:10' },
  { id: 4, title: 'Recording 4', color: 'bg-red-200', duration: '1:25' },
  { id: 5, title: 'Recording 5', color: 'bg-purple-200', duration: '5:00' },
];

const getTileWidth = (duration) => {
  const [minutes, seconds] = duration.split(':').map(Number);
  const totalSeconds = minutes * 60 + seconds;
  return Math.min(Math.max(totalSeconds / 60 * 100, 100), 500); // Adjust these values based on your design
};

const RecordingTile = ({ recording }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Add logic to play or pause the recording
  };

  const handleDelete = () => {
    // Add your delete logic here
    console.log(`Deleting ${recording.title}`);
  };

  const handleArchive = () => {
    // Add your archive logic here
    console.log(`Archiving ${recording.title}`);
  };

  return (
    <Box
      className={`${recording.color} p-4 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 cursor-pointer flex flex-col items-center justify-center relative`} // Added relative for menu positioning
      style={{ width: `${getTileWidth(recording.duration)}px`, height: '150px', marginLeft: '20px' }} // Set width based on duration, height, and margin
      onClick={togglePlay} // Toggle play state on click
    >
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FaBars />} // Fries menu icon
          variant="outline"
          size="sm"
          position="absolute"
          top="4px"
          right="4px"
          aria-label="Options"
          _hover={{ bg: 'gray.100' }} // Modern hover effect
        />
        <MenuList>
          <MenuItem icon={<FaTrash />} onClick={handleDelete} color="red.500">Delete</MenuItem>
          <Divider />
          <MenuItem icon={<FaArchive />} onClick={handleArchive} color="teal.500">Archive</MenuItem>
        </MenuList>
      </Menu>
      <Text fontSize="xl" fontWeight="bold" mb={2} textAlign="center">
        {recording.title}
      </Text>
      <Text fontSize="md" textAlign="center" mb={4}>
        Duration: {recording.duration}
      </Text>
    </Box>
  );
};

export const RecordingList = () => {
  return (
    <div className="flex flex-col items-start p-4">
      {dummyData.map((recording, index) => (
        <div key={recording.id} className="mb-4 relative"> {/* Ensure relative positioning for the menu */}
          <RecordingTile recording={recording} />
          {/* Add a separator line */}
          {index < dummyData.length - 1 && (
            <div className="w-full border-t border-gray-800 mt-2"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecordingTile;
