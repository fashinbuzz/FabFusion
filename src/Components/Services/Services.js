import React from 'react'
import Connect from '../Connect'

function Services() {
    return (
        <div className="container min-w-full grid gap-y-10 md:px-10 xl:px-20">

            <div className="grid text-center my-4">
                <p className='text-2xl text-[#545B77] underline'>What we offer</p>
            </div>


            <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 ">
                <div className=' lg:max-w-[550px] ' >
                    <img src="/Images/service3.png" alt="" className='' />
                </div>
                <div className='  bg-[#F3F6FF] text-center px-5 py-2 shadow-md md:max-h-[200px] '>
                    <p className='text-lg text-[#545B77] mb-5 font-medium'>Design</p>
                    <p className='text-sm    text-[#545B77]'>At FashinBuzz, innovation is at the core of what we do. we also provide state-of-the-art design solutions for garments that leverage the latest software and AI technologies.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 place-items-center sm:grid-cols-2   ">
                <div className='sm:order-2 lg:max-w-[550px] lg:flex justify-end items-center' >
                    <img src="/Images/service2.png" alt="" className='' />
                </div>
                <div className='  bg-[#F3F6FF] text-center px-5 py-2 shadow-md md:max-h-[200px] '>
                    <p className='text-lg text-[#545B77] mb-5 font-medium'>Manufacturing</p>
                    <p className='text-sm    text-[#545B77]'>we have harnessed the transformative capabilities of AI to revolutionize our manufacturing processes, ensuring the production of high-quality products that meet and exceed industry standards. </p>
                </div>
            </div>

            <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 ">
                <div className=' lg:max-w-[550px] ' >
                    <img src="/Images/service1.png" alt="" className='' />
                </div>
                <div className='  bg-[#F3F6FF] text-center px-5 py-2 shadow-md md:max-h-[200px] '>
                    <p className='text-lg text-[#545B77] mb-5 font-medium'>Delivery</p>
                    <p className='text-sm    text-[#545B77]'>Experience lightning-fast delivery with us! At FashinBuzz, we take pride in providing the quickest delivery times in the industry, and we have the statistics to prove it. </p>
                </div>
            </div>



            <div className='min-w-full'>
                <Connect />
            </div>

        </div>
    )
}

export default Services