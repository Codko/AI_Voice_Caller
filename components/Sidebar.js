import Link from 'next/link';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { FaHome, FaBullhorn, FaCalendarAlt, FaMicrophone, FaBook, FaCog, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Sidebar = ({ isCollapsed }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const userName = session?.user?.name || 'User';

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <div className={`fixed top-0 left-0 bg-gradient-to-b from-green-500 via-teal-500 to-blue-500 text-white h-screen p-6 flex flex-col shadow-lg transition-width duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="flex-grow space-y-8">
        <div className="mb-8 text-center flex flex-col items-center">
          <Image 
            src="/logo2.png" 
            alt="AI Voice Caller Logo" 
            width={isCollapsed ? 50 : 75} 
            height={isCollapsed ? 50 : 75} 
            className="hover:scale-105 transition-transform duration-300"
          />
          {!isCollapsed && (
            <div className="mt-4 text-lg font-semibold flex items-center space-x-2">
              <FaUser className="hover:text-yellow-400" />
              <span className="hover:text-yellow-400">{userName}</span>
            </div>
          )}
        </div>
        <div>
          <Link href="/dashboard" legacyBehavior>
            <a className={`block px-4 py-2 rounded flex items-center transition-colors duration-300 ${isCollapsed ? 'justify-center' : 'space-x-2'} ${isActive('/dashboard') ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-400 hover:text-black'}`}>
              <FaHome className="hover:text-black" />
              {!isCollapsed && <span className="hover:text-black">Dashboard</span>}
            </a>
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <Link href="/campaigns" legacyBehavior>
            <a className={`block px-4 py-2 rounded flex items-center transition-colors duration-300 ${isCollapsed ? 'justify-center' : 'space-x-2'} ${isActive('/campaigns') ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-400 hover:text-black'}`}>
              <FaBullhorn className="hover:text-black" />
              {!isCollapsed && <span className="hover:text-black">Campaigns</span>}
            </a>
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <Link href="/appointments" legacyBehavior>
            <a className={`block px-4 py-2 rounded flex items-center transition-colors duration-300 ${isCollapsed ? 'justify-center' : 'space-x-2'} ${isActive('/appointments') ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-400 hover:text-black'}`}>
              <FaCalendarAlt className="hover:text-black" />
              {!isCollapsed && <span className="hover:text-black">Appointments</span>}
            </a>
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <Link href="/recordings" legacyBehavior>
            <a className={`block px-4 py-2 rounded flex items-center transition-colors duration-300 ${isCollapsed ? 'justify-center' : 'space-x-2'} ${isActive('/recordings') ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-400 hover:text-black'}`}>
              <FaMicrophone className="hover:text-black" />
              {!isCollapsed && <span className="hover:text-black">Recordings</span>}
            </a>
          </Link>
          <div className="border-t border-gray-200 my-2"></div>
          <Link href="/knowledge-base" legacyBehavior>
            <a className={`block px-4 py-2 rounded flex items-center transition-colors duration-300 ${isCollapsed ? 'justify-center' : 'space-x-2'} ${isActive('/knowledge-base') ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-400 hover:text-black'}`}>
              <FaBook className="hover:text-black" />
              {!isCollapsed && <span className="hover:text-black">Knowledge Base</span>}
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-auto space-y-4">
        <Link href="/settings" legacyBehavior>
          <a className={`block px-4 py-2 rounded flex items-center transition-colors duration-300 ${isCollapsed ? 'justify-center' : 'space-x-2'} ${isActive('/settings') ? 'bg-yellow-400 text-black' : 'hover:bg-yellow-400 hover:text-black'}`}>
            <FaCog className="hover:text-black" />
            {!isCollapsed && <span className="hover:text-black">Settings</span>}
          </a>
        </Link>
        {session && (
          <button
            onClick={() => signOut()}
            className="w-full bg-red-500 text-white px-4 py-2 rounded flex items-center justify-center space-x-2 hover:bg-red-600 transition-colors duration-300"
          >
            <FaSignOutAlt />
            {!isCollapsed && <span>Sign Out</span>}
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
