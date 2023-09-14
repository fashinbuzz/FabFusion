import React from 'react'
import Connect from '../Connect'
import { Link } from 'react-router-dom'

function MainBlog() {
    return (

        <div className="container min-w-full">
            <div className="grid text-center bg-[#545B77] py-14 ">
                <p className='text-5xl font-medium text-white'>THOUGHTS,<br /> STORIES  AND <br />   IDEAS</p>
            </div>
            <div className="grid grid-cols-1 my-10 border gap-y-3 px-2 md:grid-cols-2">
                <div className='text-[#545B77] flex justify-start items-center max-w-[500px] border-b md:ps-10 md:border'>
                    <div className='md:border-s-2 ps-5'>
                        <p className='text- mb-5 font-medium text-xl'>Name</p>
                        <p className='xl:text-xl'>Complex Landscape of Sustainable Fashion </p>
                        <p className='text-xs md:text-sm'>while Choosing Clothing Manufacturers</p>
                    </div>
                    <div className='p-1 '>
                        <img src="/Images/Blog.png" alt="" />
                    </div>
                </div>
                <div className='text-[#546B77] px-3'>
                    <p className='lg:text-2xl font-medium '>5 Factors to Consider while Choosing Clothing Manufacturers</p>
                    <p className='text-xs md:text-sm my-3'>by Zyod
                        Aug 21, 2023 — 2 min read   </p>

                    <p className='text-sm'>Are you looking for the perfect wholesale clothing manufacturer to partner with for your store? With so many options on the market, it can be overwhelming to choose one that fits all of your needs. But fear not! In this blog post, we've gathered the top 5 factors you should...</p>
                    <Link to="/blog-">
                        <p className='underline'>Read more....</p>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 my-10 border gap-y-3 px-2 md:grid-cols-2">
                <div className='text-[#545B77] flex justify-start items-center max-w-[500px] border-b md:ps-10 md:border'>
                    <div className='md:border-s-2 ps-5'>
                        <p className='text- mb-5 font-medium text-xl'>Name</p>
                        <p className='xl:text-xl'>Complex Landscape of Sustainable Fashion </p>
                        <p className='text-xs md:text-sm'>while Choosing Clothing Manufacturers</p>
                    </div>
                    <div className='p-1 '>
                        <img src="/Images/blog2.png" alt="" />
                    </div>
                </div>
                <div className='text-[#546B77] px-3'>
                    <p className='lg:text-2xl font-medium '>5 Factors to Consider while Choosing Clothing Manufacturers</p>
                    <p className='text-xs md:text-sm my-3'>by Zyod
                        Aug 21, 2023 — 2 min read   </p>

                    <p className='text-sm'>Are you looking for the perfect wholesale clothing manufacturer to partner with for your store? With so many options on the market, it can be overwhelming to choose one that fits all of your needs. But fear not! In this blog post, we've gathered the top 5 factors you should...</p>
                    <Link to="/blog-">
                        <p className='underline'>Read more....</p>
                    </Link>
                </div>
            </div>

            <div>
                <Connect />
            </div>


        </div>
    )
}

export default MainBlog