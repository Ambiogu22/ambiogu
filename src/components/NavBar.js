import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <div className='p-8 bg-gray-200 flex flex-row gap-6 font-semibold text-md md:text-xl lg:text-lg md:pl-12'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar
