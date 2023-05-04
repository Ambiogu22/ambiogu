import React from 'react'
import gym from '../images/gym.PNG'
import services from '../images/services.PNG'

function Projects() {
    return (
        <div className='mx-4 mb-12'>
            <div className='flex flex-col justify-center items-center gap-6 mt-12'>
                <h3 className='text-xl font-bold text-blue-700'>PORTFOLIO</h3>
                <p className='text-2xl font-semibold text-center'>Each project is a unique piece of development</p>
                <div className='p-2 bg-gray-100 rounded-lg flex flex-col lg:flex-row justify-center items-center gap-2 lg:mx-64'>
                    <a href='https://rad-platypus-aa710c.netlify.app/' target='_blank' rel="noopener noreferrer"><img className='rounded-md p-4 lg:w-full' title='HTML5' src={gym} alt='GYM' /></a>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='text-2xl font-bold'>GYM</h3>
                        <p className='text-gray-500 text-lg p-4 text-center'>A gym website is a comprehensive resource for fitness information, class schedules,
                            membership options, and tools to help users achieve their fitness goals.</p>
                        <div className='flex flex-row gap-8 mb-6'><h2 className='p-2 bg-white rounded-md text-lg'>React</h2><h2 className='p-2 bg-white rounded-md text-lg'>Tailwind</h2></div>
                    </div>
                </div>
                <div className='p-2 bg-gray-100 rounded-lg flex flex-col lg:flex-row justify-center items-center gap-2 lg:mx-64'>
                    <a href='https://joyful-cuchufli-4e9ead.netlify.app/' target='_blank' rel="noopener noreferrer"><img className='rounded-md p-4 lg:w-full' title='HTML5' src={services} alt='Services' /></a>
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='text-2xl font-bold'>Phone Services</h3>
                        <p className='text-gray-500 text-lg p-4 text-center'>A website for a phones, internet, wireless company that offers diffent services on this area,
                            plans, smartphones, etc. Find great deals on top brands & choose from a wide  variety of phones.</p>
                        <div className='flex flex-row gap-8 mb-6'><h2 className='p-2 bg-white rounded-md text-lg'>React</h2><h2 className='p-2 bg-white rounded-md text-lg'>Tailwind</h2>
                            <h2 className='p-2 bg-white rounded-md text-lg'>useContext</h2></div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Projects
