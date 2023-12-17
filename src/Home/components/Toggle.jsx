import React, { useState } from 'react';

const Toggle = ({ onRoleChange }) => {
  const [selectedRole, setSelectedRole] = useState('employee');

  const toggleOption = () => {
    const newRole = selectedRole === 'employee' ? 'admin' : 'employee';
    setSelectedRole(newRole);
    onRoleChange(newRole);
  };
  
  return (
    <div className=" border-white border-2 relative z-[99] text-xs w-fit bg-white rounded-full mb-3">
      <button
        onClick={toggleOption}
        className={`px-4 py-2 rounded-full ${
          selectedRole === 'employee'
            ? 'bg-blue-500 text-white '
            : 'bg-white text-gray-700'
        } transition-all duration-200 ease-in-out`}
      >
        Employee
      </button>
      <button 
        onClick={toggleOption}
        className={`px-4 py-2 rounded-full ${
          selectedRole === 'admin'
          ? 'bg-blue-500 text-white'
          : 'bg-white text-gray-700'
        } transition-all duration-200 ease-in-out `}
      >
        Admin
      </button>
      
    </div>
  );

};

export default Toggle;

