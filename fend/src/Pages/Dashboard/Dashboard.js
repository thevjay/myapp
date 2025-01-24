import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/allusers`
      );
      console.log(response?.data?.user);
      const { user } = response?.data;
      console.log(user);
      setUsers(user);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">All Users</h2>
        <div className="divide-y divide-gray-700">
          {users.map((user, index) => (
            <div
              key={index}
              className="py-4 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium">{user.username}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
              <p className="text-sm text-gray-500">ID: {user._id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
