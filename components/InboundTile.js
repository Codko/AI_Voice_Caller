import { Box, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, Divider } from '@chakra-ui/react';
import { FaBars, FaTrash, FaArchive } from 'react-icons/fa'; // Added icons for actions

const dummyInboundData = [
  { id: 1, title: 'Inbound Call 1', duration: '2:15', color: 'bg-yellow-200' },
  { id: 2, title: 'Inbound Call 2', duration: '3:30', color: 'bg-blue-200' },
  { id: 3, title: 'Inbound Call 3', duration: '4:05', color: 'bg-green-200' },
];

const getTileWidth = (duration) => {
  const [minutes, seconds] = duration.split(':').map(Number);
  const totalSeconds = minutes * 60 + seconds;
  return Math.min(Math.max(totalSeconds / 60 * 100, 100), 500); // Adjust these values based on your design
};

const InboundTile = ({ inbound }) => {
  const handleDelete = () => {
    // Add your delete logic here
    console.log(`Deleting ${inbound.title}`);
  };

  const handleArchive = () => {
    // Add your archive logic here
    console.log(`Archiving ${inbound.title}`);
  };

  return (
    <Box
      className={`${inbound.color} p-4 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 cursor-pointer flex flex-col items-center justify-center relative`}
      style={{ width: `${getTileWidth(inbound.duration)}px`, height: '150px', marginLeft: '20px' }}
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
        {inbound.title}
      </Text>
      <Text fontSize="md" textAlign="center" mb={4}>
        Duration: {inbound.duration}
      </Text>
    </Box>
  );
};

export const InboundList = () => {
  return (
    <div className="flex flex-col items-start p-4">
      {dummyInboundData.map((inbound) => (
        <div key={inbound.id} className="mb-4 relative"> {/* Ensure relative positioning for the menu */}
          <InboundTile inbound={inbound} />
          <div className="w-full border-t border-gray-800 mt-2 opacity-50"></div> {/* Updated border color */}
        </div>
      ))}
    </div>
  );
};

export default InboundTile;
