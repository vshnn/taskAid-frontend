import { useState } from "react"
import { Link, Navigate, Router } from "react-router-dom"
import Toggle from "../components/Toggle"


const Login = () =>{
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [organization_id, setOrganization_id] = useState('')
    const [role, setRole] = useState('employee') 
        
    const handleSignIn = async (e) => {
        e.preventDefault();
        const data = { username, password, organization_id, role };
        console.log(data);

        const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(data)
        });

        const result = await res.json();
        console.log(result);

        if (result!= "failure") {
            alert("Login Successful");
            //localStorage.setItem('token', cookies.jwt);
            window.location.href = "/dashboard";
        } else {
            alert("Invalid credentials");
        }

       
        
    };



    return(
        <section className='relative z-[99] my-6 flex justify-center w-screen'>
            <div className="w-3/4 md:max-w- sm:max-w-md rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6">
                    <h1 className=" mb-6 text-lg text-center font-semibold  text-gray-900 md:text-2xl dark:text-white">
                        Hello Again!
                    </h1>
                    <Toggle onRoleChange={setRole}/>
                    <form className="space-y-2" onSubmit={handleSignIn}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username or email</label>
                            <input type="text" name="email" id="email" onChange={e => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring--600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" onChange={e => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                        </div>
                        <div>
                            <label for="organization_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization ID</label>
                            <input type="text"  name="organization_id" id="organization_id" onChange={e => setOrganization_id(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="GJfgQ521Op" required=""/>
                        </div> 
                        <div className="flex items-center justify-end">
                            
                            <Link to="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</Link>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don&apos;t have an account yet? <Link to="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login