import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")); // Parse the user object

    const navigate = useNavigate()

    const handleLogout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/')
    }

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex-shrink-0 text-2xl font-bold">
              <Link to="/">MyApp</Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                { 
                    token ? 
                    <button 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
                    onClick={handleLogout}
                >
                        Logout
                </button>
                    :
                        <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                }
                {
                    token ? 
                        
                            <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Dashboard</Link>
                    
                    :
                    <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
