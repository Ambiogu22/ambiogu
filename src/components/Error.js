import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div>
            <div className='flex flex-col justify-start items-center gap-8'>
                <div className='flex flex-row justify-start items-start gap-2 mt-40'>
                    <FontAwesomeIcon icon={faCircleExclamation} className='text-4xl text-gray-600' />
                    <h3 className='text-xl font-semibold'>Page not found</h3>
                </div>
                <div>
                    <Link to='/' className='p-2 font-semibold text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:shadow-md'>Home Page</Link>
                </div>
            </div>
        </div>
    )
}

export default Error
