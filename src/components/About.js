import React from 'react'
import wallpaper from '../images/laptop.png'

function About() {
    return (
        <div>
            <div className='flex flex-col lg:flex-row items-center justify-center mx-6 lg:mx-64 lg:mt-16'>
                <img className='w-72 lg:w-96 rounded-md my-12 lg:mr-12' title='HTML5' src={wallpaper} alt='HTML 5' />
                <div className='flex flex-col justify-center items-center'>
                    <h3 className='text-xl font-bold text-blue-700'>ABOUT ME</h3>
                    <p className='text-gray-500 text-lg p-4 text-center lg:h-auto'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML,
                        CSS, JavaScript, React, and Tailwind. I'm very good at learning new technologies,
                        I excel in designing and maintaining
                        responsive websites that offer a smooth user experience. My expertise lies in crafting
                        dynamic, engaging interfaces through writing clean and optimized code and utilizing
                        cutting-edge development tools and techniques. I am also a team player who thrives in
                        collaborating with cross-functional teams to produce outstanding web applications.</p>
                </div>
            </div>
        </div>
    )
}

export default About
