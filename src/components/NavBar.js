import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { NavMenu } from '../App'

function NavBar() {
    const { showMenu, setShowMenu } = useContext(NavMenu)
    return (
        <div>
            <div className='hidden md:flex'>
                <div className='p-6 bg-gray-100 flex flex-row gap-12 justify-end font-semibold lg:font-bold text-md md:text-xl lg:text-base md:pl-12 w-screen shadow-md'>
                    <Link to='/' className='p-2 lg:hover:shadow-lg lg:hover:bg-gray-200 lg:rounded-lg transition-all duration-300 cursor-pointer'>Home</Link>
                    <Link to='/about' className='p-2 lg:hover:shadow-lg lg:hover:bg-gray-200 lg:rounded-lg transition-all duration-300 cursor-pointer'>About</Link>
                    <Link to='/projects' className='p-2 lg:hover:shadow-lg lg:hover:bg-gray-200 lg:rounded-lg transition-all duration-300 cursor-pointer'>Projects</Link>
                    <Link to='/contact' className='p-2 lg:hover:shadow-lg lg:hover:bg-gray-200 lg:rounded-lg transition-all duration-300 cursor-pointer'>Contact</Link>
                </div>
            </div>
            {!showMenu &&
                <div>
                    <div className='md:hidden p-6 bg-gray-50 flex flex-row gap-12 justify-between font-semibold text-md md:text-xl lg:text-lg md:pl-12 w-screen'>
                        <Link to='/' className='text-xl'>Ambioris.dev</Link>
                        <FontAwesomeIcon icon={faBarsStaggered} className='text-2xl ' onClick={() => { setShowMenu(!showMenu) }} />
                    </div>
                </div>
            }
        </div>
    )
}

export default NavBar
