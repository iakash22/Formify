import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const SignIn = ({dark}) => {
    const [visible, setVisible] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log("Data: ", data);
    }
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, [])
    return (
        <div className='flex transition-colors duration-200 ease-linear dark:bg-black flex-row-reverse xl:justify-evenly 
                        items-center justify-center h-screen overflow-hidden'>
            <div
                data-aos="fade-right"
                className='w-[600px] self-center xl:block hidden'>
                <img
                    src={!dark ? "https://formifyy.vercel.app/static/media/signin2.59ca44de.svg" : "https://formifyy.vercel.app/static/media/signin1.e6507e2c.svg" }
                    className='xl:mt-8'
                />
            </div>
            <div 
                data-aos="fade-left"
                className='bg-white dark:bg-myblack lg:w-96 w-80 pt-10 pb-8 px-10 shadow-customshadow2 rounded-lg'>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete='false'
                    className='mb-0 space-y-6'
                >
                    <div>
                        <div className='mb-2'>
                            <label
                                htmlFor="email"
                                className='block text-sm font-medium text-myblack dark:text-white'>
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete='off'
                                {...register('email', { required: true })}
                                className='w-full border mt-1 border-gray-300 dark:border-gray-500 dark:bg-myblack 
                                        dark:text-white px-3 py-2 rounded-lg shadow-sm focus:outline-none'
                            />
                            {errors.email && <span className='text-[10px] text-greenText1'>Please fill the required fields</span>}
                        </div>
                        <div className='mb-2'>
                            <label
                                htmlFor="password"
                                className='block text-sm font-medium text-myblack dark:text-white'>
                                Password
                            </label>
                            <div className='mt-1 relative'>
                                <input
                                    type={visible ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    autoComplete='off'
                                    {...register('password', { required: true })}
                                    className='w-full border border-gray-300 dark:border-gray-500 dark:bg-myblack 
                                        dark:text-white px-3 py-2 rounded-lg shadow-sm focus:outline-none'
                                />
                                {
                                    visible ?
                                        <AiFillEye
                                            onClick={() => setVisible(false)}
                                            className='absolute translate-x-[-40%] -translate-y-[1.85rem] right-1 h-5 w-5 -ml-8 dark:text-white text-black'
                                        />
                                        :
                                        <AiFillEyeInvisible
                                            onClick={() => setVisible(true)}
                                            className='absolute translate-x-[-40%] -translate-y-[1.85rem] right-1 h-5 w-5 -ml-8 dark:text-white text-black '
                                        />
                                }
                                {errors.email && <span className='text-[10px] text-greenText1'>Please fill the required fields</span>}
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center flex-col items-center gap-y-1'>
                        <button
                            type='submit'
                            className='w-2/4 flex justify-center py-3 px-4 border border-transparent bg-greenBg shadow-xl 
                                        font-semibold text-white text-center text-lg rounded-lg duration-300 ease focus:outline-none 
                                        font-Nunito  focus:border-greenBg transition-opacity dark:text-black'
                        >
                            Sign In
                        </button>
                        <Link to={'/forgot-password'}>
                            <span className='text-sm font-Nunito font-semibold dark:text-white'>
                                Forgot password?
                            </span>
                        </Link>
                    </div>
                    <div className='text-center cursor-default font-Nunito dark:text-white'>
                        <span>Don't have an account? </span>
                        <Link to={'/signup'} className='font-semibold'>Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
