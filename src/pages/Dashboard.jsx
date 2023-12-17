import React from 'react';
import Sidebar
 from './dashboard/Sidebar';
 import { SidebarItem } from './dashboard/Sidebar';
import Navbar from './dashboard/Navbar';
import{
  LayoutDashboard,MessagesSquare,ClipboardList,CalendarDays,Users,Settings,FolderOpenDot
} from "lucide-react"
import Home from './dashboard/Home';
import { Route, Routes, Navigate } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="h-screen  max-w-full  flex p-3  bg-gradient-to-t from-black via-black to-gray-900">
   
    <Sidebar>
     <SidebarItem icon={<LayoutDashboard size={22} color='black'/> } text="Dashboard" active />

     <SidebarItem icon={<FolderOpenDot  size={22} color='white'/> } text="Projects" active />

     <SidebarItem icon={<ClipboardList size={22} color='white'/> } text="tasks" active />
     <SidebarItem icon={<MessagesSquare  size={22} color='white'/> } text="Chat" active />
     <SidebarItem icon={<CalendarDays  size={22} color='white'/> } text="Calendar" active />
     <SidebarItem icon={<LayoutDashboard  size={22} color='white'/> } text="Members" active />
     <SidebarItem icon={<Settings  size={22} color='white'/> } text="Settings" active />



    </Sidebar> 

    <div className=' flex-1 w-full '>
  <Navbar />

 
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/settings"  />
        
        </Routes>
    

  </div>

   </div>
    );
}

export default Dashboard;