import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <nav className=' w-full sm:w-4/5  px-3 sm:px-0 py-6 flex justify-between mx-auto cursor-pointer'>
        <div className='text-lg sm:text-3xl font-medium'><NavLink to='/'>taskAid📑</NavLink></div>
        <div className=''>
            <ul className='flex gap-3 md:gap-10 sm:gap-4 justify-between text-sm sm:text-base text-gray-500'>
                <li>
                    <NavLink className='hover:text-white' to='/'>About</NavLink>
                </li>
                <li>
                    <NavLink className='hover:text-white' to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink className='hover:text-white' to='/signup'>Sign Up</NavLink>
                </li>
                <li>
                    <NavLink className='hover:text-white' to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Navbar;
