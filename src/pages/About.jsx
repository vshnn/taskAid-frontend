import React from "react"
import { Link } from 'react-router-dom'

const About = () =>(
    <section className='relative z-[99] py-10 w-4/5 mx-auto '>
        <h1 className='text-6xl text-left  '>TaskAid : Your All in One Project Management Solution</h1>
        <p className="pt-10 text-3xl w-3/4 text-left font-light">Effortlessly manage tasks, boost collaboration, and supercharge productivity.</p>
        <button className="rounded-full p-3 mt-10 border-2 cursor-pointer"><Link to="/signup">Get Started</Link></button>
    </section>
)

export default About