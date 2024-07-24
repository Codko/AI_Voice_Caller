import { useState } from 'react';
import { Box, Text, IconButton, Menu, MenuButton, MenuList, MenuItem, Divider } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FaBars, FaEdit, FaTrash, FaArchive } from 'react-icons/fa'; // Ensure these icons are correctly imported
import CampaignForm from './CampaignForm'; // Ensure CampaignForm is correctly exported from its file

// Dummy data for campaigns
const dummyData = [
  { id: 1, title: 'Add New Campaign', color: 'bg-blue-200', isAddNew: true },
  { id: 2, title: 'hello', color: 'bg-green-200', startDate: '2024-01-01', endDate: '2024-01-10' },
  { id: 3, title: 'donation', color: 'bg-yellow-200', startDate: '2024-02-01', endDate: '2024-02-15' },
  { id: 4, title: 'testing', color: 'bg-red-200', startDate: '2024-03-01', endDate: '2024-03-20' },
  { id: 5, title: 'Testing 2', color: 'bg-purple-200', startDate: '2024-04-01', endDate: '2024-04-30' },
];

const CampaignTile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  const handleEdit = (id) => {
    console.log(`Editing campaign with id ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log(`Deleting campaign with id ${id}`);
    // Add your delete logic here
  };

  const handleArchive = (id) => {
    console.log(`Archiving campaign with id ${id}`);
    // Add your archive logic here
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"> {/* Further increased gap here */}
      {dummyData.map((campaign) => (
        <div className="w-full mb-6" key={campaign.id}> {/* Increased bottom margin here */}
          <Box
            className={`${campaign.color} p-4 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105 cursor-pointer flex flex-col items-center justify-center relative`}
            style={{ width: '300px', height: '300px' }} // Set width and height for square shape
            onClick={campaign.isAddNew ? openForm : undefined} // Open form only if it's the "Add New Campaign" tile
          >
            {!campaign.isAddNew && (
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<FaBars />} // Stairs menu icon
                  variant="outline"
                  size="sm"
                  position="absolute"
                  top="4px"
                  right="4px"
                  aria-label="Options"
                  _hover={{ bg: 'gray.100' }} // Modern hover effect
                  zIndex="docked" // Ensure the menu button is above other elements
                />
                <MenuList
                  p={2} // Added padding inside the menu list
                  borderRadius="md" // Optional: rounded corners for the menu
                  boxShadow="md" // Optional: shadow effect to make it stand out
                >
                  <MenuItem icon={<FaEdit />} onClick={() => handleEdit(campaign.id)} color="blue.500">
                    Edit
                  </MenuItem>
                  <MenuItem icon={<FaArchive />} onClick={() => handleArchive(campaign.id)} color="teal.500">
                    Archive
                  </MenuItem>
                  <Divider />
                  <MenuItem icon={<FaTrash />} onClick={() => handleDelete(campaign.id)} color="red.500">
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
            {campaign.isAddNew ? (
              <>
                <Text fontSize="xl" fontWeight="bold" mb={4} textAlign="center">
                  {campaign.title}
                </Text>
                <IconButton
                  aria-label="Add New Campaign"
                  icon={<AddIcon />}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent form opening on icon button click
                    openForm();
                  }}
                  colorScheme="teal"
                  size="lg"
                  style={{ fontSize: '3rem', width: '100px', height: '100px' }} // Larger icon
                />
              </>
            ) : (
              <>
                <Text fontSize="xl" fontWeight="bold" mb={2} textAlign="center">
                  {campaign.title}
                </Text>
                <Text mb={2} textAlign="center">
                  <span className="font-semibold">Start Date:</span> {campaign.startDate}
                </Text>
                <Text mb={2} textAlign="center">
                  <span className="font-semibold">End Date:</span> {campaign.endDate}
                </Text>
                <Text textAlign="center">
                  <span className="font-semibold">Started by:</span> Admin
                </Text>
              </>
            )}
          </Box>
        </div>
      ))}
      {isOpen && <CampaignForm open={isOpen} onClose={closeForm} />}
    </div>
  );
};

export default CampaignTile;
