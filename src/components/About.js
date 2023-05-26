import React from 'react'
import wallpaper from '../images/laptop.png'
import NavBarXs from './NavBarXs'

function About() {
    return (
        <div>
            <div className='relative'>
                <div className=' absolute z-40 flex flex-col lg:flex-row items-center justify-center mx-6 md:mt-20 lg:mx-48 lg:mt-24'>
                    <img className='w-72 lg:w-96 rounded-md my-12' title='Laptop Img' src={wallpaper} alt='Laptop Img' />
                    <div className='flex flex-col justify-center items-center'>
                        <h3 className='text-xl font-bold text-blue-700'>ABOUT ME</h3>
                        <p className='text-gray-500 text-base lg:text-xl md:text-2xl p-6 md:mx-8 text-center lg:h-auto'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML,
                            CSS, JavaScript, React, and Tailwind. I'm very good at learning new technologies,
                            I excel in designing and maintaining
                            responsive websites that offer a smooth user experience. My expertise lies in crafting
                            dynamic, engaging interfaces through writing clean and optimized code and utilizing
                            cutting-edge development tools and techniques. I am also a team player who thrives in
                            collaborating with cross-functional teams to produce outstanding web applications.</p>
                    </div>
                </div>
                <div className='fixed z-50'>
                    <NavBarXs />
                </div>
            </div>
        </div>
    )
}

export default About
