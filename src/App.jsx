import Navbar from './pages/Navbar.jsx'
import About from './pages/About.jsx'
import Footer from './pages/Footer.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/signup.jsx'
import {Route, Routes, Outlet, Navigate } from 'react-router-dom'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx'





const App = () =>{

  return(
    <Routes>
      <Route path='/' element={<HomeLayout/>}>
        <Route index element = {<About />}/>
        <Route path="/about" element = {<About/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Route>
      <Route path='/dashboard' element={<DashboardLayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>  
    </Routes>
  )  
}

function HomeLayout(){
  return (
  <div className="min-h-screen bg-slate-950 overflow-hidden flex flex-col">
    <Navbar/>
    <Outlet/>
    <Footer />
    <div className=" z-[9] pointer-events-none absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
  </div>
  )
}

function DashboardLayout(){
  return(
    <div class="min-h-screen bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
    <Outlet/>
    </div>
  )
}


export default App

{/* //<div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
//<div class="min-h-screen bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div> */}