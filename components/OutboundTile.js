import { Box, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, Divider } from '@chakra-ui/react';
import { FaBars, FaTrash, FaArchive } from 'react-icons/fa'; // Added icons for actions

const dummyOutboundData = [
  { id: 1, title: 'Outbound Call 1', color: 'bg-red-200', duration: '3:00' },
  { id: 2, title: 'Outbound Call 2', color: 'bg-purple-200', duration: '2:45' },
  { id: 3, title: 'Outbound Call 3', color: 'bg-teal-200', duration: '4:20' },
];

const getTileWidth = (duration) => {
  const [minutes, seconds] = duration.split(':').map(Number);
  const totalSeconds = minutes * 60 + seconds;
  return Math.min(Math.max(totalSeconds / 60 * 100, 100), 500); // Adjust these values based on your design
};

const OutboundTile = ({ outbound }) => {
  const handleDelete = () => {
    // Add your delete logic here
    console.log(`Deleting ${outbound.title}`);
  };

  const handleArchive = () => {
    // Add your archive logic here
    console.log(`Archiving ${outbound.title}`);
  };

  return (
    <Box
      className={`${outbound.color} p-4 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 cursor-pointer flex flex-col items-center justify-center relative`}
      style={{ width: `${getTileWidth(outbound.duration)}px`, height: '150px', marginLeft: '20px' }}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FaBars />} // Use the fries menu icon
          variant="outline"
          size="sm"
          position="absolute"
          top="4px"
          right="4px"
          aria-label="Options"
        />
        <MenuList>
          <MenuItem icon={<FaTrash />} onClick={handleDelete} color="red.500">Delete</MenuItem>
          <Divider />
          <MenuItem icon={<FaArchive />} onClick={handleArchive} color="teal.500">Archive</MenuItem>
        </MenuList>
      </Menu>
      <Text fontSize="xl" fontWeight="bold" mb={2} textAlign="center">
        {outbound.title}
      </Text>
      <Text fontSize="md" textAlign="center" mb={4}>
        Duration: {outbound.duration}
      </Text>
    </Box>
  );
};

export const OutboundList = () => {
  return (
    <div className="flex flex-col items-start p-4">
      {dummyOutboundData.map((outbound) => (
        <div key={outbound.id} className="mb-4 relative"> {/* Ensure relative positioning for the menu */}
          <OutboundTile outbound={outbound} />
          <div className="w-full border-t border-gray-800 mt-2 opacity-50"></div> {/* Updated border color */}
        </div>
      ))}
    </div>
  );
};

export default OutboundTile;
