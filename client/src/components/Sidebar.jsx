import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Sidebar = ({ menu, setMenu }) => {
    return (
        <div className={`duration-300 ease-in-out lg:hidden h-screen flex flex-col justify-start items-end 
                        fixed w-full z-50 top-0 ${menu ? 'right-0' : '-right-full'} py-6 px-6 transition-all dark:bg-black bg-white
                        dark:text-white`}>
            <RiCloseFill
                onClick={() => setMenu(false)}
                fontSize={'150px'}
                className=' dark:text-white h-6 w-6 self-end'
            />

            <Link
                to={'/signin'}
                className='font-bold font-Montserrat text-center text-3xl w-full mt-20'
                onClick={() => setMenu(false)}
            >
                Sign In
            </Link>
            <Link
                to={'/signup'}
                className='font-bold font-Montserrat text-center text-3xl w-full mt-10'
                onClick={() => setMenu(false)}
            >
                Sign Up
            </Link>
        </div>
    )
}

export default Sidebar
