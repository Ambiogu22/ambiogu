import React from 'react'
import html5 from '../images/html5.png'
import css3 from '../images/css3.png'
import javascript from '../images/javascript.png'
import react from '../images/React.png'
import tailwind from '../images/tailwind.png'

function Home() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center lg:mt-16'>
                <h3 className='text-4xl font-semibold p-4 mt-8 text-center'>Front-End React Developer</h3>
                <p className='text-gray-500 text-2xl p-4 text-center'>Hi. I'm Ambioris Gomez. A passionate Front-end React Developer</p>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-12 mt-8 lg:mt-16'>
                <h3 className='text-2xl underline lg:no-underline underline-offset-4 font-semibold mb-8'>Tech Stack</h3>
                <div className='flex flex-col lg:flex-row gap-8 mb-12'>
                    <div className='p-12 lg:p-0 bg-gray-50 lg:bg-white rounded-full flex items-center justify-center'><img className='w-28 lg:w-12' title='HTML5' src={html5} alt='HTML 5' /></div>
                    <div className='p-12 lg:p-0 bg-gray-50 lg:bg-white rounded-full flex items-center justify-center'><img className='w-20 lg:w-10' title='CSS3' src={css3} alt='CSS3' /></div>
                    <div className='p-12 lg:p-0 bg-gray-50 lg:bg-white rounded-full flex items-center justify-center'><img className='w-20 lg:w-10' title='JavaScript' src={javascript} alt='JavaScript' /></div>
                    <div className='p-12 lg:p-0 bg-gray-50 lg:bg-white rounded-full flex items-center justify-center'><img className='w-28 lg:w-12' title='React' src={react} alt='React' /></div>
                    <div className='p-12 lg:p-0 bg-gray-50 lg:bg-white rounded-full flex items-center justify-center'><img className='w-28 lg:w-12' title='Tailwins' src={tailwind} alt='Tailwind' /></div>
                </div>
            </div>
        </div>
    )
}

export default Home
