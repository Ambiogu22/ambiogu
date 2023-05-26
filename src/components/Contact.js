import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faPhone } from '@fortawesome/free-solid-svg-icons'
import NavBarXs from './NavBarXs'

function Contact() {
    return (
        <div className='relative' >
            <div className='absolute z-40 mt-12 flex flex-col justify-center items-center gap-16'>
                <div className='flex flex-col justify-center items-center gap-6 md:mt-12'>
                    <h3 className='text-2xl font-bold text-blue-700'>CONTACT</h3>
                    <p className='text-lg font-semibold'>Looking forward to hearing from you.</p>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center w-screen gap-16 md:gap-24 lg:gap-48 md:mt-8'>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className='text-4xl lg:text-3xl text-blue-700 p-6 bg-gray-100 rounded-full shadow-lg' />
                        <h3 className='text-2xl lg:text-xl font-semibold'>Email</h3>
                        <p className='text-gray-500 text-lg lg:text-base'>ambio22620@gmail.com</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <FontAwesomeIcon icon={faPhone} className='text-4xl lg:text-3xl text-blue-700 p-6 bg-gray-100 rounded-full shadow-lg' />
                        <h3 className='text-2xl lg:text-xl font-semibold'>Phone</h3>
                        <p className='text-gray-500 text-lg lg:text-base'>973-330-7899</p>
                    </div>
                </div>
            </div>
            <div className='fixed z-50'>
                <NavBarXs />
            </div>
        </div>
    )
}

export default Contact
