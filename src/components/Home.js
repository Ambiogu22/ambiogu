import React from 'react'
import html5 from '../images/html5.png'
import css3 from '../images/css3.png'
import javascript from '../images/javascript.png'
import react from '../images/React.png'
import tailwind from '../images/tailwind.png'
import profilePic from '../images/profilePic.png'
import NavBarXs from './NavBarXs'

function Home() {
    return (
        <div className='relative'>
            <div className='absolute z-40'>
                <div className='flex flex-col lg:flex-row justify-center w-screen items-center mt-16 md:mt-24 lg:gap-48'>
                    <img src={profilePic} alt='Profile Pic' className='w-20' />
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='text-4xl lg:text-5xl font-semibold p-4 mt-8 text-center'>Front-End React Developer</h3>
                        <p className='text-gray-500 text-2xl lg:text-xl p-4 text-center'>Hi. I'm Ambioris Gomez. A passionate Front-end React Developer</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-12 mt-8 lg:mt-16'>
                    <h3 className='text-xl underline lg:no-underline underline-offset-4 font-semibold mb-8'>Tech Stack</h3>
                    <div className='flex mx-12 lg:flex-row gap-4 mb-12'>
                        <div className='lg:p-2 lg:bg-white rounded-full flex items-center justify-center lg:hover:shadow-lg lg:hover:bg-gray-50 lg:rounded-lg transition-all duration-300 cursor-pointer'><img className='w-20 lg:w-12' title='HTML5' src={html5} alt='HTML 5' /></div>
                        <div className='lg:p-2 lg:bg-white rounded-full flex items-center justify-center lg:hover:shadow-lg lg:hover:bg-gray-50 lg:rounded-lg transition-all duration-300 cursor-pointer'><img className='w-20 lg:w-10' title='CSS3' src={css3} alt='CSS3' /></div>
                        <div className='lg:p-2 lg:bg-white rounded-full flex items-center justify-center lg:hover:shadow-lg lg:hover:bg-gray-50 lg:rounded-lg transition-all duration-300 cursor-pointer'><img className='w-16 lg:w-10' title='JavaScript' src={javascript} alt='JavaScript' /></div>
                        <div className='lg:p-2 lg:bg-white rounded-full flex items-center justify-center lg:hover:shadow-lg lg:hover:bg-gray-50 lg:rounded-lg transition-all duration-300 cursor-pointer'><img className='w-20 lg:w-12' title='React' src={react} alt='React' /></div>
                        <div className='lg:p-2 lg:bg-white rounded-full flex items-center justify-center lg:hover:shadow-lg lg:hover:bg-gray-50 lg:rounded-lg transition-all duration-300 cursor-pointer'><img className='w-20 lg:w-12' title='Tailwins' src={tailwind} alt='Tailwind' /></div>
                    </div>
                </div>
            </div>
            <div className='fixed z-50'>
                <NavBarXs />
            </div>
        </div>
    )
}

export default Home
