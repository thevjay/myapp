import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Welcome to My Website</h1>
        <p className="text-lg md:text-xl mb-8">
          Your journey starts here! Please register or log in to continue.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to={'/register'}
            className="px-6 py-3 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition duration-300 shadow-lg"
          >
            Register
          </Link>
          <Link
            to={'/login'}
            className="px-6 py-3 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-300 shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
