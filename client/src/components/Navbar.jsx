import React from 'react'
import { MdDarkMode, MdSunny } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {TiThMenu} from 'react-icons/ti'


const Navbar = ({ dark, setDark, setMenu}) => {
    return (
        <div className='transition-colors duration-200 ease-linear bg-white z-40 dark:bg-black 
                        fixed top-0 w-full flex justify-between  items-center lg:px-14 lg:py-6 px-7 py-4'>
            <Link to={'/'}>
                <div 
                    className=' dark:text-white font-extrabold font-Montserrat lg:text-4xl text-3xl'>
                        {'<formify>'}
                </div>
            </Link>

            <div className='flex justify-between items-center'>
                <div 
                    className='relative lg:mr-11 mr-5 cursor-pointer dark:bg-white bg-black flex justify-between items-center
                                p-1 gap-2 rounded-3xl' 
                    onClick={() => {
                            setDark(!dark);
                            localStorage.setItem('mode', JSON.stringify(dark ? "light" : "dark"));
                        }
                    }>
                    <MdSunny
                        className='h-3 w-3 lg:w-5 lg:h-5'
                        fill='#f5d313'
                    />
                    <MdDarkMode
                        className='h-3 w-3 lg:w-5 lg:h-5'
                        fill='#f5d313'
                    />
                    <div
                        className={`lg:w-6 lg:h-6 w-5 h-5 cursor-pointer   
                                    bg-white dark:bg-black transition-transform transform 
                                    duration-200 ease-linear absolute lg:top-0.5 rounded-full 
                                    dark:lg:translate-x-[100%] dark:translate-x-[0.9rem] translate-x-0`}
                    >
                    </div>
                </div>

                <Link to={'/signin'}>
                    <button className='font-bold lg:text-xl lg:block hidden font-Nunito dark:text-white 
                                        hover:scale-95 transition-transform duration-300 transform ease-in-out'
                    >
                        Sign In
                    </button>
                </Link>

                <Link to={'signup'}>
                    <button className='rounded-3xl lg:ml-11 lg:block hidden font-bold text-white font-Nunito 
                                        dark:text-black lg:text-xl text-base bg-greenBg lg:px-6 lg:py-2 px-3 py-1
                                        shadow-[0px_0px_20px_1px_rgba(23,195,31,0.63)] hover:shadow-[0px_0px_30px_5px_rgba(5,226,14,0.63)] 
                                        transition-shadow ease-in duration-300'
                    >
                        Sign Up
                    </button>
                </Link>
                
                <TiThMenu 
                    onClick={() => setMenu(true)}
                    className='lg:hidden dark:text-white h-6 w-6 cursor-pointer'
                />
            </div>
        </div>
    )
}

export default Navbar
