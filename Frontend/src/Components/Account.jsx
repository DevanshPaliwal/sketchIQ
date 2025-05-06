import React, { useState, useEffect } from 'react';
import { User, Calendar, Edit, Save } from 'lucide-react';
import axios from 'axios';

const Account = () => {
  axios.defaults.withCredentials = true;

  // State for user data
  const [userData, setUserData] = useState({
    username: '',
    createdAt: '',
  });

  // State for editing username
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [newUsername, setNewUsername] = useState('');

  // State for changing password
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
  });

  // Fetch user data from backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/account');
        // const response = await axios.post('https://2426-2401-4900-547d-5007-893c-cffe-5f2a-269a.ngrok-free.app/account');
        const { username, created_at } = response.data;

        setUserData({
          username,
          createdAt: created_at ? new Date(created_at).toLocaleDateString() : 'N/A',
        });
        setNewUsername(username); // Initialize the editable username
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Account not logged in!');
      }
    };

    fetchUserData();
  }, []);

  // Save the updated username
  const saveUsername = async () => {
    try {
      const response = await axios.put('http://localhost:5000/account/update-username', {
        username: newUsername,
      });
      // const response = await axios.put('https://2426-2401-4900-547d-5007-893c-cffe-5f2a-269a.ngrok-free.app/account/update-username', {
      //   username: newUsername,
      // });
      alert(response.data.message);
      setIsEditingUsername(false); // Exit edit mode
      setUserData((prev) => ({ ...prev, username: newUsername })); // Update locally
    } catch (error) {
      console.error('Error updating username:', error);
      alert('Failed to update username.');
    }
  };

  // Handle password change
  const changePassword = async () => {
    try {
      const response = await axios.put('http://localhost:5000/account/change-password', passwords);
      // const response = await axios.put('https://2426-2401-4900-547d-5007-893c-cffe-5f2a-269a.ngrok-free.app/account/change-password', passwords);
      alert(response.data.message);
      setPasswords({ currentPassword: '', newPassword: '' }); // Reset form
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Failed to change password.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Profile Overview */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex items-center space-x-4 border-b p-6 pb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <User className="text-blue-600" size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Account Information</h2>
              <p className="text-gray-500">View and manage your profile</p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Username Section */}
            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <User className="mr-2 text-blue-600" size={20} />
                Username
              </h3>
              {isEditingUsername ? (
                <div className="flex space-x-4 items-center">
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="border p-2 rounded-md"
                  />
                  <button onClick={saveUsername} className="px-4 py-2 bg-green-500 text-white rounded-md">
                    <Save size={16} />
                  </button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">{userData.username}</p>
                  <button
                    onClick={() => setIsEditingUsername(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    <Edit size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Join Date Section */}
            <div>
              <h3 className="text-lg font-semibold flex items-center">
                <Calendar className="mr-2 text-blue-600" size={20} />
                Join Date
              </h3>
              <p className="text-gray-700">{userData.createdAt}</p>
            </div>

            {/* Change Password Section */}
            <div>
              <h3 className="text-lg font-semibold">Change Password</h3>
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  value={passwords.currentPassword}
                  onChange={(e) => setPasswords((prev) => ({ ...prev, currentPassword: e.target.value }))}
                  className="w-full border p-2 rounded-md"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  value={passwords.newPassword}
                  onChange={(e) => setPasswords((prev) => ({ ...prev, newPassword: e.target.value }))}
                  className="w-full border p-2 rounded-md"
                />
                <button
                  onClick={changePassword}
                  className="px-4 py-2 bg-purple-500 text-white rounded-md"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
