import React from 'react'
import gym from '../images/gym.PNG'
import services from '../images/services.PNG'
import teslaClone from '../images/teslaClone.png'
import NavBarXs from './NavBarXs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Projects() {
    return (
        <div className='relative'>
            <div className='absolute z-40'>
                <div className='flex flex-col justify-center items-center gap-6 mt-12 pb-6'>
                    <h3 className='text-xl font-bold text-blue-700'>PORTFOLIO</h3>
                    <p className='text-xl font-semibold text-center'>Each project is a unique piece of development</p>
                    <div className='flex flex-col justify-center items-center md:mx-16 md:mt-8 gap-6'>
                        <div className='p-2 bg-gray-100 rounded-lg flex flex-col lg:flex-row justify-center items-center gap-2 lg:mx-64'>
                            <a href='https://beautiful-nasturtium-7b3a16.netlify.app/' target='_blank' rel="noopener noreferrer"><img className='rounded-md p-4 lg:w-full' title='Tesla Clone' src={teslaClone} alt='Tesla Clone' /></a>
                            <div className='flex flex-col justify-center items-center my-4'>
                                <h3 className='text-2xl font-bold'>Tesla Clone</h3>
                                <p className='text-gray-500 text-lg p-4 text-center'>This is a clone of the Tesla official website, I started this project because I wanted show my skills and prove
                                    that I can work on real world applications.</p>
                                <div className='flex flex-row gap-8 mb-6'>
                                    <h2 className='px-4 py-2 bg-white rounded-md text-lg shadow-lg font-semibold'>React</h2>
                                    <h2 className='px-4 py-2 bg-white rounded-md text-lg shadow-lg font-semibold'>Tailwind</h2>
                                </div>
                                <div className='flex justify-center items-center gap-2 hover:text-blue-600 transition-all duration-300'>
                                    <a href='https://beautiful-nasturtium-7b3a16.netlify.app/' target='_blank' rel="noopener noreferrer"><h2 className='text-xl font-semibold'>Live Demo</h2></a><a href='https://beautiful-nasturtium-7b3a16.netlify.app/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                </div>
                            </div>
                        </div >
                        <div className='p-2 bg-gray-100 rounded-lg flex flex-col lg:flex-row justify-center items-center gap-2 lg:mx-64'>
                            <a href='https://rad-platypus-aa710c.netlify.app/' target='_blank' rel="noopener noreferrer"><img className='rounded-md p-4 lg:w-full' title='GYM' src={gym} alt='GYM' /></a>
                            <div className='flex flex-col justify-center items-center my-4'>
                                <h3 className='text-2xl font-bold'>GYM</h3>
                                <p className='text-gray-500 text-lg p-4 text-center'>A gym website is a comprehensive resource for fitness information, class schedules,
                                    membership options, and tools to help users achieve their fitness goals.</p>
                                <div className='flex flex-row gap-8 mb-6'>
                                    <h2 className='px-4 py-2 bg-white rounded-md text-lg shadow-lg font-semibold'>React</h2>
                                    <h2 className='px-4 py-2 bg-white rounded-md text-lg shadow-lg font-semibold'>Tailwind</h2>
                                </div>
                                <div className='flex justify-center items-center gap-2 hover:text-blue-600 transition-all duration-300'>
                                    <a href='https://rad-platypus-aa710c.netlify.app/' target='_blank' rel="noopener noreferrer"><h2 className='text-xl font-semibold'>Live Demo</h2></a><a href='https://rad-platypus-aa710c.netlify.app/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 bg-gray-100 rounded-lg flex flex-col lg:flex-row justify-center items-center gap-2 lg:mx-64'>
                            <a href='https://joyful-cuchufli-4e9ead.netlify.app/' target='_blank' rel="noopener noreferrer"><img className='rounded-md p-4 lg:w-full' title='Services' src={services} alt='Services' /></a>
                            <div className='flex flex-col justify-center items-center my-4'>
                                <h3 className='text-2xl font-bold'>Phone Services</h3>
                                <p className='text-gray-500 text-lg p-4 text-center'>A website for a phones, internet, wireless company that offers diffent services on this area,
                                    plans, smartphones, etc. Find great deals on top brands & choose from a wide  variety of phones.</p>
                                <div className='flex flex-row gap-8 mb-6'>
                                    <h2 className='px-4 py-2 bg-white rounded-md text-lg shadow-lg font-semibold'>React</h2>
                                    <h2 className='px-4 py-2 bg-white rounded-md text-lg shadow-lg font-semibold'>Tailwind</h2>
                                    <h2 className='px-4 py-2 bg-white rounded-md text-lg shadow-lg font-semibold'>useContext</h2>
                                </div>
                                <div className='flex justify-center items-center gap-2 hover:text-blue-600 transition-all duration-300'>
                                    <a href='https://joyful-cuchufli-4e9ead.netlify.app/' target='_blank' rel="noopener noreferrer"><h2 className='text-xl font-semibold'>Live Demo</h2></a><a href='https://joyful-cuchufli-4e9ead.netlify.app/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
            <div className='fixed z-50'>
                <NavBarXs />
            </div>
        </div>
    )
}

export default Projects
