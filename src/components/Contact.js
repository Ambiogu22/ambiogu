import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-8 mt-12'>
                <h3 className='text-xl font-bold text-blue-700'>CONTACT</h3>
                <p className='text-2xl font-semibold text-center'>Looking forward to hearing from you.
                </p>
                <div className='flex flex-col justify-center items-center gap-28 mt-16'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className='text-3xl lg:text-2xl text-blue-700' />
                        <h3 className='font-semibold text-xl'>Mail</h3>
                        <h3 className='text-lg lg:text-sm text-gray-500'>ambio22620@gmail.com</h3>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <FontAwesomeIcon icon={faPhone} className='text-3xl lg:text-2xl text-blue-700' />
                        <h3 className='font-semibold text-xl'>Phone</h3>
                        <h3 className='text-lg lg:text-sm text-gray-500'>973-330-7899</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
