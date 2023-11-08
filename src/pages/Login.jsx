import React from "react"
import { Link } from "react-router-dom"
import Toggle from "../components/Toggle"
import selectedOption from "../components/Toggle"

const Login = () =>(
    <section className='relative z-[99] my-6 flex justify-center w-screen'>
        <div className="w-3/4 md:max-w-lg sm:max-w-md rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            
            <div className="p-8">
                
                <h1 className=" mb-6 text-xl text-center font-bold  text-gray-900 md:text-2xl dark:text-white">
                    Hello Again!
                </h1>
                {/* <p className="font-thin text-center  text-sm mb-4">Welcome back you've been missed</p> */}
                <Toggle/>
                <form className="space-y-4" action="#">
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email or username</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring--600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                    </div>
                    
                    <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div>
                        <label for="organization_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization ID</label>
                        <input type="text" name="organization_id" id="organization_id" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="GJfgQ521Op" required=""/>
                    </div>
                    <div className="flex items-center justify-end">
                        
                        <Link to="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</Link>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don't have an account yet? <Link to="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    </section>
)

export default Login