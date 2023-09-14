import React from 'react'
import Connect from '../Connect'

function Process() {
    return (
        <div className="container min-w-full grid gap-y-10 sm:px-10 xl:px-20">

            <div className="grid text-center my-4">
                <p className='text-2xl text-[#545B77] underline'>How we can get your collection ready</p>
            </div>

            <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-10 xl:grid-cols-4 ">

                <div className="grid  text-center place-items-center gap-y-5">
                    <img src="/Images/Group 23180.png" alt="" className='p-1 w-16' />
                    <div className='grid gap-y-3 border-2 border-[#545B77] rounded-md px-3 py-2  min-h-[200px] md:min-h-[250px] '   >
                        <p className='text-[#545B77] text-xl font-medium'>Brand profiling and requirement</p>
                        <p className='text-[#545B77]'>After working out your conceptualized requirements and receiving your submission, we put forward a custom price estimate for your order.</p>
                    </div>
                </div>

                <div className="grid  text-center place-items-center gap-y-5">
                    <img src="/Images/Group 23186.png" alt="" className='p-1 w-16' />
                    <div className='grid gap-y-3 border-2 border-[#545B77] rounded-md px-3 py-2 min-h-[200px] md:min-h-[250px]'>
                        <p className='text-[#545B77] text-xl font-medium'>AI driven design catalogue</p>
                        <p className='text-[#545B77]'>Our revolutionary AI-driven design catalogue! With our cutting-edge technology, we've transformed the design process by using artificial intelligence to create stunning designs that perfectly match your style and preferences.</p>
                    </div>
                </div>

                <div className="grid  text-center place-items-center gap-y-5">
                    <img src="/Images/Group 23185.png" alt="" className='p-1 w-16' />
                    <div className='grid gap-y-3 border-2 border-[#545B77] rounded-md px-3 py-2 min-h-[200px] md:min-h-[250px]'>
                        <p className='text-[#545B77] text-xl font-medium'>Quality Checks & Control</p>
                        <p className='text-[#545B77]'>We follow a rigorous quality check via a dedicated quality control team and product development advisor and ensure you face fewer disruptions related to your order’s quality before packaging..</p>
                    </div>
                </div>

                <div className="grid  text-center place-items-center gap-y-5">
                    <img src="/Images/Group 23184.png" alt="" className='p-1 w-16' />
                    <div className='grid gap-y-3 border-2 border-[#545B77] rounded-md px-3 py-2 min-h-[200px] md:min-h-[250px]'>
                        <p className='text-[#545B77] text-xl font-medium'>Delivery</p>
                        <p className='text-[#545B77]'>It's the final stage when we handle the packaging and shipping paperwork and arrange 24X7 end-to-end logistics solutions for your order to be shipped to your doorstep within 21 days.</p>
                    </div>
                </div>
            </div>

            <div>
                <Connect />
            </div>
        </div>
    )
}

export default Process