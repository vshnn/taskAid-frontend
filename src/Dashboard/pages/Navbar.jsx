import React from "react";
import {Home,Settings,Bell} from "lucide-react"
import { NavLink } from 'react-router-dom'

export default  function Navbar() {
 
  return (
    <nav className="nav p-5  w-2/3 xl:w-full rounded-lg  flex justify-between  bg-transparent text-white font-extrabold  ">
      <a href="/" className=" flex"   >
     <Home/>/Dashboard
      </a>
      <ul className="flex space-x-12 mb-4  ">
        <li>
            <input className="p-1 border-blue-500 hover:border-red-500 bg-slate-100 rounded-xl" placeholder="search here"></input>
        </li>
       

        <li>
         <NavLink className='hover:text-white' to='/settings'><Settings/></NavLink>
        </li>
        <li>
         <NavLink className='hover:text-white' to='/notification'><Bell/></NavLink>
        </li>

      
        <li>
          <a href="profile">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
          
          </a>
        </li>
      </ul>
    </nav>
  );

}

