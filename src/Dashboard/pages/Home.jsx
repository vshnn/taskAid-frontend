import React from 'react';
import Cookies from 'js-cookie';

const Home = () => {
  const details = JSON.parse(Cookies.get("taskaid_details"));
  return (
    <>
    <div className='px-40 py-5 text-white text-4xl flex-col'>
       <h1>Welcome {details.name}</h1>
    </div>
    <div className='h-3/5 mx-40 text-white rounded-md bg-gray-600 hover:bg-violet-500 transition-all duration-200'></div>
    </>
 
  );
}

export default Home;
 