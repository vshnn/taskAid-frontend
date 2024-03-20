import React from "react";
import { Home, Settings, Bell, CircleUserRound } from "lucide-react"
import { NavLink } from 'react-router-dom'

export default  function Usernavbar() {
 
  return (
    <nav className="flex justify-between pt-10">
      <NavLink className='hover:text-slate-400 flex gap-2 font-medium text-xl' to='/#'>
        <Home/>/Dashboard {/*TODO : change based on current path*/}
      </NavLink>
      <ul className="flex gap-10 mb-4  ">
        <li>
            <input className="pl-3 py-0.5 border-blue-500 hover:border-red-500 bg-white rounded-2xl font-thin text-black" placeholder="search here"></input>
        </li>
        <li>
         <NavLink className='hover:text-slate-400' to='/settings'><Settings/></NavLink>
        </li>
        <li>
         <NavLink className='hover:text-slate-400' to='/notification'><Bell/></NavLink>
        </li>
        <li>
         <NavLink className='hover:text-slate-400' to='/profile'><CircleUserRound/></NavLink>
        </li> 
      </ul>
    </nav>
  );

}

