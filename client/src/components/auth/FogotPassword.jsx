import React,{useEffect} from 'react'
import {useForm} from 'react-hook-form'
import Aos from 'aos'
import 'aos/dist/aos.css'

const FogotPassword = ({dark}) => {
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
            duration: 2000
        });
    }, [])
    return (
        <div className='flex transition-colors duration-200 ease-linear dark:bg-black xl:justify-evenly
                        items-center justify-center h-screen'>
            <img
                data-aos="fade"
                src="https://formifyy.vercel.app/static/media/fpassword1.836d8a28.svg" 
                alt="img"
                className='w-[600px] xl:block hidden'
            />
            <div
                data-aos="flip-right"
                className='bg-white dark:bg-myblack lg:w-96 w-80 pt-10 pb-8 px-10 shadow-customshadow1 dark:shadow-customshadow2
                            rounded-lg'
            >
                <form
                    autoComplete='off'
                    className='mb-0 space-y-6'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <h1 className='dark:text-white font-Nunito mb-5 text-2xl font-bold text-center'>
                            Enter your email
                        </h1>
                        <div className='mb-2'>
                            <input 
                                type="email" 
                                name='email'
                                id='email'
                                autoComplete='off'
                                {...register('email', {required : true})}
                                className='w-full text-center border border-gray-300 dark:border-gray-500
                                            dark:bg-myblack dark:text-white px-3 py-2 rounded-lg shadow-sm 
                                            focus:outline-none' 
                            />
                            {errors.email && <span>Please enter your email</span>}
                        </div>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <button 
                            type="submit"
                            className='w-2/4 flex justify-center py-3 px-4 border border-transparent bg-greenBg 
                                        hover:opacity-95 shadow-xl font-semibold text-white text-center text-lg 
                                        rounded-lg duration-300 ease focus:outline-none font-Nunito focus:border-greenBg
                                        transition-opacity dark:text-black'
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default FogotPassword
