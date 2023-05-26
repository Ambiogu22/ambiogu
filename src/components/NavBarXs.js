import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { NavMenu } from '../App'

function NavBarXs() {
    const { showMenu, setShowMenu } = useContext(NavMenu)
    return (
        <div className='relative md:hidden'>
            {showMenu &&
                <div className='relative'>
                    <div className='absolute flex z-50 justify-end items-end'>
                        <FontAwesomeIcon icon={faXmark} className='text-3xl p-8' onClick={() => { setShowMenu(!showMenu) }} />
                    </div>
                    <div className='md:hidden flex flex-col gap-12 font-semibold text-2xl justify-center items-center w-screen h-screen fixed z-40 bg-white'>
                        <Link to='/' onClick={() => { setShowMenu(!showMenu) }}>Home</Link>
                        <Link to='/about' onClick={() => { setShowMenu(!showMenu) }}>About</Link>
                        <Link to='/projects' onClick={() => { setShowMenu(!showMenu) }}>Projects</Link>
                        <Link to='/contact' onClick={() => { setShowMenu(!showMenu) }}>Contact</Link>
                    </div>
                </div>
            }
        </div >
    )
}

export default NavBarXs
