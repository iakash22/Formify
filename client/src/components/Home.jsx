import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sidebar from './Sidebar';
const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])
    return (
        <>
            <div className='dark:bg-black transition-colors duration-200 ease-linear flex 
                        lg:mt-20 mt-0 justify-center  items-center flex-col text-center h-screen'
            >
                <h1
                    data-aos="fade"
                    className='text-4xl lg:font-bold font-semibold lg:text-6xl dark:text-white'>Make
                    <span className='dark:text-greenText1 text-greenText2'>{' <form> '}</span>
                    our problem. Not yours.
                </h1>
                <p
                    data-aos="fade"
                    className='lg:leading-8 md:text-lg lg:mt-8 mt-4 font-Nunito text-grayLight
                            dark:text-grayDark font-medium lg:text-2xl text-sm'
                >
                    {"Formify completely automates your HTML <form> "}
                    <br />
                    So you can focus on your most important work.
                    <br />
                    Easy to set-up & free to use.
                </p>
                <img
                    data-aos="fade"
                    src="https://formifyy.vercel.app/static/media/hero.64035d0a.svg"
                    alt="hero"
                    className='lg:h-80 lg:w-80 h-72 w-72 lg:mt-0 md:mt-5 mt-10'
                />
            </div>

            <div className='h-screen flex flex-col lg:justify-evenly justify-around dark:bg-black'>
                <div
                    data-aos="fade-up"
                    className='container mx-auto dark:bg-black font-Roboto text-center lg:px-0 px-6'
                >
                    <p className='font-bold lg:text-5xl text-3xl dark:text-white'>
                        Stress free HTML forms.
                    </p>
                    <p className='lg:mt-8 mt-2 text-grayLight dark:text-grayDark lg:leading-8 leading-normal
                                    font-medium font-Nunito lg:text-2xl text-lg lg:px-0 px-4'>
                        Collect form submissions from your HTML form without any backend code
                        <br />
                        and enjoy our best features that will save you a lot of time.
                    </p>
                </div>

                <div
                    data-aos="fade-up"
                    className='container dark:bg-black mx-auto lg:my-0 -mt-32 lg:px-44
                                px-5 flex lg:flex-row flex-col justify-evenly items-center font-Roboto w-full'
                >
                    <div className='flex flex-col lg:mt-0 mt-4 text-center lg:text-left justify-start lg:w-2/4 w-full'>
                        <p className='lg:text-4xl text-3xl font-semibold dark:text-white'> Easy to setup.</p>
                        <p className='lg:mt-8 mt-2 text-grayLight dark:text-grayDark lg:leading-normal leading-6
                                        font-medium font-Nunito lg:text-2xl text-base lg:px-0 px-2'>
                            Get your unique endpoint URL from formify.
                            <br />
                            Add name attribute to each of your input field.
                            <br />
                            Start collecting submissions.
                        </p>
                    </div>
                    <div className='lg:w-2/4 w-full lg:mt-0 mt-10 flex dark:bg-black items-center 
                                    lg:justify-end justify-center'>
                        <code className='text-left lg:text-sm text-xs dark:text-white dark:bg-myblack
                                        lg:leading-8 leading-normal px-8 py-4 rounded-xl shadow-customshadow2'>
                            {"<form "}
                            <strong>action="</strong>
                            <span className='text-greenText1'>
                                https://formify-backend.onrender.com/f/XXXXXX
                            </span>
                            <strong>"</strong>
                            <br />
                            {`method="POST" accept-charset="UTF-8">`}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{`<input type="email" name="email">`}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{`<input type="file" name="photo">`}
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;{"<"}
                            <strong>{`button type="submit">Submit</button>`}</strong>
                            <br />
                            {"</form"}
                        </code>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
