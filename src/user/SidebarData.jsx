// Desc: Sidebar data for user dashboard
import React from "react";
import { UserRound } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { FolderOpenDot } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';
import { Users } from 'lucide-react';
import { Settings } from 'lucide-react';


export const SidebarData = [
  {
    title: "Profile",
    path: "/dashboard/user/profile",
    icon: <UserRound/>
  },
  {
    title: "Dashboard",
    path: "/dashboard/user",
    icon: <LayoutDashboard/>
  },
  {
    title: "Projects",
    path: "/dashbaord/user/projects",
    icon: <FolderOpenDot/>
  },
  {
    title: "Tasks",
    path: "/dashboard/user/tasks",
    icon: <CheckCircle/>
  },
  {
    title: "Chat",
    path: "/dashboard/user/chat",
    icon: <MessagesSquare/>
  },
  {
    title: "Members",
    path: "/dashboard/user/members",
    icon: <Users/>
  },
  {
    title: "Settings",
    path: "/dashboard/user/settings",
    icon: <Settings/>
  }
];
