import React, { useState } from 'react';

const Toggle = () => {
    const [selectedOption, setSelectedOption] = useState('Employee');

    const toggleOption = () => {
      setSelectedOption(selectedOption === 'Employee' ? 'Admin' : 'Employee');
    };
  
    return (
      <div className="relative z-[99] text-sm w-fit rounded-full gap-3 flex mb-3">
        <button
          onClick={toggleOption}
          className={`px-4 py-2 rounded-full ${
            selectedOption === 'Employee'
              ? 'bg-blue-500 text-white '
              : 'bg-white text-gray-700'
          } transition-all duration-300 ease-in-out`}
        >
          Employee
        </button>
        <button 
          onClick={toggleOption}
          className={`px-6 py-2 rounded-full ${
            selectedOption === 'Admin'
            ? 'bg-blue-500 text-white'
            : 'bg-white text-gray-700'
          } transition-all duration-300 ease-in-out`}
        >
          Admin
        </button>
        
      </div>
    );

};

export default Toggle;
