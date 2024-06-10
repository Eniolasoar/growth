import React from 'react';

function Hero() {
    return (
        <div className='flex-col sm:flex  w-[80%] mx-auto mt-[80px]'>
            <div className='space-y-5 w-full sm:w-[80%]'>
                <h1 className='text-black100 font-poppins font-medium text-[64px] leading-[110%] tracking-[-2px]'>A powerful solution to grow your startup.Fast!</h1>
                <p className='text-black100 font-poppins text-[20px] w-full sm:w-[67%] leading-[160%]'>Organise, collaborate, and track progress seamlessly with our one-stop-shop startup growth tool.</p>
                <div className='flex-col flex sm:flex-row gap-5 w-full sm:w-[70%] items-center '>
                    <button className='text-white bg-lightBlue hover:darkBlue px-[32px] py-[16px] rounded-md'>Get Started</button>
                    <button className='px-[32px] py-[16px] rounded-md bg-lightGray hover:bg-lightBlue  flex items-center gap-4'>
                        <img src="/images/location.png" alt="Location logo" />
                        <span className='text-black100'>Book a demo</span>
                    </button>
                </div>
            </div>

            <div className='mt-[-120px]'>
            <img src="/images/hero-bg.png" alt="Hero image" />

            </div>
            </div>
        
    );
}

export default Hero;