import React from 'react'
import Connect from '../Connect'

function Blog() {
    return (
        <div className="container min-w-full">
            <div className="grid grid-cols-1 bg-[#545B77] py-5 px-3 md:grid-cols-2">
                <div>
                    <p className='text-3xl text-white font max-w-[400px]'>5 Factors to Consider while Choosing Clothing Manufacturers</p>
                </div>
                <div className=''>
                    <div className='max-w-[300px] bg-white text-[#545B77] px-5 py-2'>
                        <p className='font-medium '>Abhay Raviya</p>
                        <p className='underline'>5 Factors to Consider</p>
                        <p className='text-sm'>*while Choosing Clothing Manufacturers</p>
                    </div>
                </div>
                <div className='text-white my-3 '>
                    <p className='border-t border-white text-xs pt-1'>by abhay raviya</p>
                    <p className='text-xs'> Aug 21, 2023 — 2 min read</p>
                </div>
            </div>
            <div className="grid bg-[#545B77]  place-items-center md:px-10 py-2 ">
                <div className='max-w-[800px] py-5 px-3 text-sm bg-white opacity-30 xl:text-xl xl:py-10 xl:px-10'>

                    <p>Are you looking for the perfect wholesale clothing manufacturer to partner with for your store? With so many options on the market, it can be overwhelming to choose one that fits all of your needs. But fear not! In this blog post, we've gathered the top 5 factors you should consider when selecting a wholesale clothing manufacturer. From quality and pricing to customer service and production time - we've got you covered! So get ready to make an informed decision and take your business to new heights with the right manufacturing partner by your side.</p>

                    <p className='mt-8'>
                        <span className='font-medium'>1.Location</span><br />
                        There are a few factors to consider when choosing wholesale clothing manufacturers for your store. The first is location. You will want to find manufacturers that are located close to your target market. This will help reduce shipping costs and lead time. Additionally, it is important to consider the manufacturing capabilities of the factories in the area. Make sure they have the ability to produce the volume and type of clothing you need.
                    </p>

                    <p className='mt-8'>
                        <span className='font-medium'>1.Location</span><br />
                        There are a few factors to consider when choosing wholesale clothing manufacturers for your store. The first is location. You will want to find manufacturers that are located close to your target market. This will help reduce shipping costs and lead time. Additionally, it is important to consider the manufacturing capabilities of the factories in the area. Make sure they have the ability to produce the volume and type of clothing you need.
                    </p>

                    <p className='mt-8'>
                        <span className='font-medium'>1.Location</span><br />
                        There are a few factors to consider when choosing wholesale clothing manufacturers for your store. The first is location. You will want to find manufacturers that are located close to your target market. This will help reduce shipping costs and lead time. Additionally, it is important to consider the manufacturing capabilities of the factories in the area. Make sure they have the ability to produce the volume and type of clothing you need.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-y-3 place-items-center my-10 md:grid-cols-2'>
                <div className='text-[#545B77] flex justify-start items-center'>
                    <div>
                        <p className='text-sm lg:text-lg'>Name</p>
                        <p className='text-sm lg:text-lg'>Complex Landscape of Sustainable Fashion </p>
                        <p className='text-xs lg:text-base'>while Choosing Clothing Manufacturers</p>
                    </div>
                    <div className='p-1 w-16'>
                        <img src="/Images/Blog.png" alt="" />
                    </div>
                </div>
                <div className='text-[#545B77]'>
                    <p className='underline'>Older Post</p>
                    <p className='text-sm md:text-base lg:text-xl'>Navigating the Complex Landscape of Sustainable Fashion with Your Clothing Supplier</p>
                </div>
            </div>
            <div>
                <Connect />
            </div>
        </div>
    )
}

export default Blog