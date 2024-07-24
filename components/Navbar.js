import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { FaBars, FaQuestionCircle } from 'react-icons/fa'; // Import the question mark icon

const Navbar = ({ toggleSidebar }) => {
  const { data: session } = useSession();

  const redirectToGitHub = (type) => {
    if (type === 'signIn') {
      window.location.href = 'https://github.com/login'; // GitHub Sign In URL
    } else if (type === 'signUp') {
      window.location.href = 'https://github.com/join'; // GitHub Sign Up URL
    }
  };

  return (
    <nav className="bg-gradient-to-r from-green-700 via-teal-700 to-blue-700 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl hover:text-gray-300 focus:outline-none"
        >
          <FaBars />
        </button>
        <div className="flex-grow text-center">
          <h1 className="text-2xl font-bold">AI Voice Caller Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          {!session ? (
            <div className="flex space-x-4 items-center">
              <FaQuestionCircle
                className="text-white text-xl cursor-pointer hover:text-gray-300"
                onClick={() => alert('Help information goes here')} // Replace with actual help functionality
                aria-label="Help"
              />
              <button
                onClick={() => redirectToGitHub('signIn')}
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition-colors duration-300"
              >
                Sign In
              </button>
              <button
                onClick={() => redirectToGitHub('signUp')}
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link href="/profile" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition-colors duration-300">
                Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition-colors duration-300"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
