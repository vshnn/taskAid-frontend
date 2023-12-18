import React from "react";
import Sidebar from "./Sidebar.jsx";
import { SidebarItem } from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import { Route, Routes, Navigate } from "react-router-dom";

import {
  LayoutDashboard,
  MessagesSquare,
  ClipboardList,
  CalendarDays,
  Users,
  Settings,
  FolderOpenDot,
} from "lucide-react";


const Dashboard = () => {
  return (
    <div className="h-screen  max-w-full  flex p-3 ">
      <Sidebar >
        <SidebarItem
          icon={<LayoutDashboard size={22} color="black" />}
          text="Dashboard"
          active
        />

        <SidebarItem
          icon={<FolderOpenDot size={22} color="white" />}
          text="Projects"
          active
        />

        <SidebarItem
          icon={<ClipboardList size={22} color="white" />}
          text="tasks"
          active
        />
        <SidebarItem
          icon={<MessagesSquare size={22} color="white" />}
          text="Chat"
          active
        />
        <SidebarItem
          icon={<CalendarDays size={22} color="white" />}
          text="Calendar"
          active
        />
        <SidebarItem
          icon={<LayoutDashboard size={22} color="white" />}
          text="Members"
          active
        />
        <SidebarItem
          icon={<Settings size={22} color="white" />}
          text="Settings"
          active
        />
      </Sidebar>

      <div className=" flex-1 w-full min-h-full ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
