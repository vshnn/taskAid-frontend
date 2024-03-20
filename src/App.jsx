import React from 'react'
import Navbar from './Home/pages/Navbar.jsx'
import About from './Home/pages/About.jsx'
import Footer from './Home/pages/Footer.jsx'
import Login from './Home/pages/Login.jsx'
import Signup from './Home/pages/Signup.jsx'
import {Route, Routes, Outlet, Navigate } from 'react-router-dom'
import Contact from './Home/pages/Contact.jsx'
import Dashboard from './Dashboard/pages/Dashboard.jsx'
import ErrorPage from './Error-page.jsx'
import { AuthProvider } from './auth.jsx'
import { RequireAuth } from './RequireAuth.jsx'
import Sidebar from './user/Sidebar.jsx'
import Usernavbar from './user/Usernavbar.jsx'
import Userprofile from './user/Userprofile.jsx'
import Userdashboard from './user/Userdashboard.jsx'
import Members from './user/Members.jsx'


const App = () =>{

  return(
    <AuthProvider>
    <Routes>
      <Route path='/' element={<HomeLayout/>}>
        <Route index element = {<About />}/>
        <Route path="/about" element = {<About/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Route>
      <Route path='/dashboard' element={
        <RequireAuth>
          <DashboardLayout/>
        </RequireAuth>
      }>
        <Route index element = {<Dashboard/>}/>
      </Route>
      <Route path='/dashboard/user' element={<UserLayout/>}>
        <Route index element = {<Userdashboard/>} />
        <Route path='/dashboard/user/profile' element={<Userprofile/>}/>
        <Route path='/dashboard/user/dashboard' element={<Userprofile/>}/>
        <Route path='/dashboard/user/projects' element={<Userprofile/>}/>
        <Route path='/dashboard/user/tasks' element={<Userprofile/>}/>
        <Route path='/dashboard/user/chat' element={<Userprofile/>}/>
        <Route path='/dashboard/user/members' element={<Members/>}/>
        <Route path='/dashboard/user/settings' element={<Userprofile/>}/>
      </Route>
      <Route path='/*' element={<ErrorPage/>}/>  
    </Routes>
    </AuthProvider>
  )  
}

function HomeLayout(){
  return (
  <div className="min-h-screen bg-slate-950 flex flex-col overflow-x-hidden">
    <Navbar/>
    <Outlet/>
    <Footer />
    <div className=" z-[9] pointer-events-none absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  </div>
  )
}

function DashboardLayout(){
  return(
    <div className="min-h-screen bg-gradient-to-t from-black via-black to-gray-900 overflow-x-hidden">
    <Outlet/>
    </div>
  )
}

function UserLayout(){
  return(
    <div className="min-h-screen bg-[#17191C] text-white ">
      <div className='flex'>
        <Sidebar/>
        <div className='mx-10 w-full'>
        <Usernavbar />
        <Outlet/>
        </div>
      </div>
      
    </div>
  )
}

export default App
