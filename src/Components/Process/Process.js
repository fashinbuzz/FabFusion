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
                        <p className='text-[#545B77] text-xl font-medium'>Brand Profiling and Customized Pricing</p>
                        <p className='text-[#545B77]'>Once we thoroughly understand your brand's unique requirements and specifications, we move forward to create a tailored pricing proposal for your order. This personalized pricing estimate is crafted after careful consideration of your conceptualized needs and your submission, ensuring that it aligns perfectly with your brand's objectives and expectations.</p>
                    </div>
                </div>

                <div className="grid  text-center place-items-center gap-y-5">
                    <img src="/Images/Group 23186.png" alt="" className='p-1 w-16' />
                    <div className='grid gap-y-3 border-2 border-[#545B77] rounded-md px-3 py-2 min-h-[200px] md:min-h-[250px]'>
                        <p className='text-[#545B77] text-xl font-medium'>Revolutionizing Design with AI-Powered Catalogue</p>
                        <p className='text-[#545B77]'>Welcome to our groundbreaking AI-driven design catalogue! Our innovative technology has redefined the design experience, utilizing artificial intelligence to craft exquisite designs that seamlessly align with your unique style and preferences. Explore the future of design with us.</p>
                    </div>
                </div>

                <div className="grid  text-center place-items-center gap-y-5">
                    <img src="/Images/Group 23185.png" alt="" className='p-1 w-16' />
                    <div className='grid gap-y-3 border-2 border-[#545B77] rounded-md px-3 py-2 min-h-[200px] md:min-h-[250px]'>
                        <p className='text-[#545B77] text-xl font-medium'>Stringent Quality Control Measures</p>
                        <p className='text-[#545B77]'>Our commitment to excellence is reflected in our rigorous quality checks, overseen by a dedicated team of quality control experts and product development advisors. These measures are in place to minimize any disruptions related to the quality of your order before it reaches the packaging stage, ensuring a seamless and top-tier experience for you.</p>
                    </div>
                </div>

                <div className="grid  text-center place-items-center gap-y-5">
                    <img src="/Images/Group 23184.png" alt="" className='p-1 w-16' />
                    <div className='grid gap-y-3 border-2 border-[#545B77] rounded-md px-3 py-2 min-h-[200px] md:min-h-[250px]'>
                        <p className='text-[#545B77] text-xl font-medium'>Efficient Delivery Services</p>
                        <p className='text-[#545B77]'>In the concluding phase of our process, we take charge of meticulous packaging, handle all shipping paperwork, and orchestrate round-the-clock end-to-end logistics solutions to ensure the timely delivery of your order to your doorstep, guaranteeing a delivery window of on time.</p>
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