// pages/settings.js
import { useState } from 'react';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Apply dark mode styling or save to local storage here
    if (typeof window !== 'undefined') {
      if (!isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  return (
    <div className={`flex flex-col items-center justify-start min-h-screen p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-4xl font-bold mt-4 mb-6">Settings</h1>
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Theme Settings</h2>
          <div className="flex items-center space-x-4">
            <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
              <span className="mr-2">Dark Mode</span>
              <input
                type="checkbox"
                id="darkModeToggle"
                checked={isDarkMode}
                onChange={handleToggleDarkMode}
                className="form-checkbox h-6 w-6 text-teal-500"
              />
            </label>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg">Change Password</span>
              <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                Update
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg">Email Notifications</span>
              <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                Update
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg">Profile Settings</span>
              <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
