import React from 'react'
import '../Style.css';
import Connect from '../Connect';

function About() {
    return (
        <div className="container min-w-full grid sm:px-10 xl:px-20 gap-10">
            <div className="grid bg-[#F3F6FF] text-[#545B77] text-center px-3 py-10 gap-y-5 ">
                <p className='text-3xl font-medium'>Our Story</p>
                <p className='text-xs md:text-base xl:text-lg'>FashinBuzz was established in 2022 with the aim of assisting eCommerce and independent fashion brands in conquering the obstacles of conceptualizing new trends and identifying the ideal sourcing partner. We realized that there was a pressing need for a technology-driven design-to-delivery fashion-sourcing solution to meet these requirements.</p>
                <p className='text-xs md:text-base xl:text-lg'> Since our founding, we have collaborated with numerous eCommerce brands, delivering limitless fashion sourcing with the fastest turnaround time and lowest MOQs. Our services make fashion sourcing hassle free with end-to-end design to delivery solutions, making us an ideal partner to fuel your brand growth.</p>
            </div>

            <div className="grid grid-cols-1 gap-5 my-5 sm:grid-cols-2 xl:gap-10">
                <div className='background1 text-center text-[#545B77] border px-12 py-5 rounded-md'>
                    <p className='text-xl font-medium md:text-base xl:text-3xl'>VISION</p>
                    <p className='text-xs xl:text-xl'>We aim to simplify the process of building a successful, sustainable fashion business making it accessible and hassle-free for all.</p>
                </div>
                <div className='background2 text-center text-[#545B77] border px-12 py-5 rounded-md'>
                    <p className='text-xl font-medium md:text-base xl:text-3xl'>MISSION</p>
                    <p className='text-xs xl:text-xl'>Our mission is to become the brain of fashion manufacturing, revolutionizing and simplifying the industry by providing a tech driven, one-stop solution for all fashion sourcing needs while empowering Indian SME manufacturers and making the industry more sustainable.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 mb-10 sm:grid-cols-2">
                <div className='p-5 bg-[#F3F6FF] h-[300px]'>
                    <img src="/Images/Group 23214.png" alt="" className='object-contain max-w-full max-h-full' />
                </div>
                <div className=' bottom-0   bg-white text-center px-5 py-2 shadow-md'>
                    <p className='text-2xl text-[#545B77] mb-5'>Our Team</p>
                    <p className=' text-[#545B77] text-xs md:text-base xl:px-10 xl:text-xl'>We believe - ‘Strength lies in diversity, not similarities’. Hence, we have created a diverse team comprising technologists, fashion designers, artists, researchers, marketers, and creative people. To pursue excellence, we provide a good working environment where they are inspired to curate tech-driven solutions and give their best while exploring the utmost creativity.</p>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 ">
                <div className='p-5 bg-[#F3F6FF] h-[300px]  flex justify-center items-center sm:order-2'>
                    <img src="/Images/Group 23216.png" alt="" className='object-contain max-w-full max-h-full' />
                </div>
                <div className=' bottom-0   bg-white text-center px-5 py-2 shadow-md'>
                    <p className='text-2xl text-[#545B77] mb-5'>Co-Founder</p>
                    <p className=' text-[#545B77] text-xs md:text-base xl:px-10 xl:text-base'>Name are a dynamic duo of serial entrepreneurs, who are revolutionizing the fashion manufacturing industry with their tech-driven solutions. Ankit's and Ritesh's extensive experience in building businesses and fashion industry has helped them create ZYOD, a one-stop-shop for all fashion sourcing needs. They are dedicated to leveraging technology to simplify the process of building and growing a fashion brand. With a vision of creating a world where fashion entrepreneurship is accessible and easy for everyone, Ankit and Ritesh are paving the way for the fashion industry's future.
                    </p>
                </div>


            </div>

            <div className='mt-10'>
                <Connect />
            </div>
        </div>
    )
}

export default About