// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 to-gray-300 text-center p-6 space-y-6">
      <style jsx>{`
        @keyframes breathing {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .breathing-animation {
          animation: breathing 0.5s ease-in-out infinite;
        }
      `}</style>
      <Image 
        src="/logo_aivoicecaller.png" 
        alt="AI Voice Caller Logo" 
        width={200} // Adjust the width as needed
        height={200} // Adjust the height as needed
        className="hover:scale-110 transition-transform duration-300 breathing-animation"
      />
      <h1 className="text-5xl font-bold text-gray-800">Welcome to AI Voice Caller</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        AI Voice Caller is your ultimate solution for managing and automating your voice communications. Enhance your productivity and efficiency with our cutting-edge AI technology.
      </p>
      <div className="space-x-4">
        <Link href="/dashboard">
          <span className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">Go to Dashboard</span>
        </Link>
        <Link href="/campaigns">
          <span className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300">View Campaigns</span>
        </Link>
      </div>
      <div className="mt-10">
        <Image 
          src="/Welcome-Logo.jpg" 
          alt="Welcome Image" 
          width={600} // Adjust the width as needed
          height={400} // Adjust the height as needed
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
