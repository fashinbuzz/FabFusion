import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (

        <div className="grid grid-cols-1 gap-y-5 text-white py-4 px-2 bg-[#545B77] sm:grid-cols-4 gap-5 xl:px-20">
            <div className='grid gap-y-2  border-black'>
                <p>FashinBuzz</p>
                <div className='flex justify-start items-center gap-2'>
                    {/* <img src="/Images/Group 23130.png" alt="" className='p-1 w-8'/> */}
                    <i class="fa fa-phone text-white" aria-hidden="true"></i>
                    <a href="tel:+918460800999" className='text-sm'>+91 84608 00999</a>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    {/* <img src="/Images/Group 23130.png" alt="" className='p-1 w-8'/> */}
                    <i class="fa fa-envelope text-white" aria-hidden="true"></i>
                    <Link to={'mailto:help@fashinbuzz.com'} className='text-sm'>help@fashinbuzz.com</Link>
                </div>
            </div>

            <div className='grid gap-y-1  text-xs '>
                <h3 className='border-b-[0.5px] text-base'>What we are?</h3>
                <Link to="/about">
                    <div className='flex shrink-0 justify-start  text-sm items-center   lg:text-xl xl:text-xl 2xl:text-2xl'>
                        <p className=''>About Us</p>
                    </div>
                </Link>
                <Link to="/blog">
                    <div className='flex shrink-0 justify-start  text-sm items-center   lg:text-xl xl:text-xl 2xl:text-2xl'>
                        <p className='  '>Blog</p>
                    </div>
                </Link>
                <Link to="/mail">
                    <div className='flex shrink-0 justify-start  text-sm items-center   lg:text-xl xl:text-xl 2xl:text-2xl'>
                        <p className='  '>Connect with us</p>
                    </div>
                </Link>
            </div>
            <div className='grid gap-y-1  text-xs '>
                <h3 className='border-b-[0.5px] text-base'>What we provide?</h3>
                <Link to="/category">
                    <div className='flex shrink-0 justify-start  text-sm items-center mb-3    lg:text-xl xl:text-xl 2xl:text-2xl'>
                        <p className='font-light  '>Product Categories</p>
                    </div>
                </Link>
                <Link to="/service">
                    <div className='flex shrink-0 justify-start  text-sm items-center mb-3    lg:text-xl xl:text-xl 2xl:text-2xl'>
                        <p className='font-light  '>Our Services</p>
                    </div>
                </Link>
                <Link to="/process">
                    <div className='flex shrink-0 justify-start  text-sm items-center mb-3    lg:text-xl xl:text-xl 2xl:text-2xl'>
                        <p className='font-light  '>Our Process</p>
                    </div>
                </Link>
            </div>

            <div className='grid grid-cols-3 place-items-center pb-3 gap-y-1  border-black'>
                <img src="/Images/Group 23132.png" alt="" className='w-6 xl:w-12' />
                <img src="/Images/Group 23133.png" alt="" className='w-6 xl:w-12' />
                <img src="/Images/Group 23131.png" alt="" className='w-6 xl:w-12' />
            </div>
        </div>

    )
}

export default Footer