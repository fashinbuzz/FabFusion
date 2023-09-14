import React from 'react'
import { Carousel } from 'antd';
import Connect from '../Connect';
import '../Style.css';
function Home() {
    return (
        <div className="container min-w-full sm:px-10 xl:px-20">

            <div className="grid text-center place-items-center">
                <p className='text-xl mb-3 text-[#545B77] md:text-3xl font-medium'>One Stop Solution For <br />Fashion Manufacturing</p>
                <button className='bg-[#545B77] px-3 py-1 rounded-md max-w-[300px] shrink-0 text-white md:text-2xl'>Connect with us</button>
            </div>

            <div className="grid grid-cols-1 my-5 sm:grid-cols-2">
                {/* <div className="border">
                    <img
                        src="/Images/home1 (1).png"
                        alt=""
                        className=""
                    />
                </div> */}
                <div class="relative">
                    <img src="/Images/home1 (1).png" alt="-" class="w-full h-full object-cover" />
                </div>
                <div class="relative">
                    <img src="/Images/home1 (2).png" alt="-" class="w-full h-full object-cover" />
                </div>

                {/* <div className="border">
                    <img
                        src="/Images/home1 (2).png"
                        alt=""
                        className=""
                    />
                </div> */}
            </div>


            <div className="grid grid-cols-3 my-10">
                <div className='text-[#545B77] bg-[#f3f6ff]  text-center py-2 border-e hover:translate-y-[2px] md:py-5'>
                    <p className='text-2xl font-medium md:text-4xl'>10k</p>
                    <p className='text-xs md:text-xl'>Designs</p>
                </div>
                <div className='text-[#545B77] bg-[#f3f6ff]  text-center py-2 border-e translate-y-[-10px] hover:translate-y-[2px] md:py-5'>
                    <p className='text-2xl font-medium md:text-4xl'>50</p>
                    <p className='text-xs md:text-xl'>MOQ</p>
                </div>
                <div className='text-[#545B77] bg-[#f3f6ff]  text-center py-2 border-e hover:translate-y-[2px] md:py-5 '>
                    <p className='text-2xl font-medium md:text-4xl'>21</p>
                    <p className='text-xs md:text-xl'>Days Delivery</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-3 text-center lg:grid-cols-3 gap-5">
                <div className='lg:col-span-3'>
                    <p className='text-xl mb-3 text-[#545B77]'>Our Services</p>
                </div>
                <div className='grid grid-cols-5 border border-[#545b77] rounded-md overflow-hidden'>
                    <div className="col-span-1">
                        <img src="/Images/service3.png" alt="" />
                    </div>
                    <div className="col-span-4 text-[#545B77] text-sm text-center">
                        <p className='font-medium text-lg'>Design</p>
                        <p>Each design is a concept at.....</p>
                    </div>
                </div>

                <div className='grid grid-cols-5 border border-[#545b77] rounded-md overflow-hidden'>
                    <div className="col-span-1">
                        <img src="/Images/service2.png" alt="" />
                    </div>
                    <div className="col-span-4 text-[#545B77] text-sm text-center">
                        <p className='font-medium text-lg'>Manufacturing</p>
                        <p>Each design is a concept at.....</p>
                    </div>
                </div>

                <div className='grid grid-cols-5 border border-[#545b77] rounded-md overflow-hidden'>
                    <div className="col-span-1">
                        <img src="/Images/service1.png" alt="" />
                    </div>
                    <div className="col-span-4 text-[#545B77] text-sm text-center">
                        <p className='font-medium text-lg'>Delivery</p>
                        <p>Each design is a concept at.....</p>
                    </div>
                </div>

                <div className='grid place-items-center lg:col-span-3'>
                    <button className='bg-[#545b77] px-3 py-1 rounded-md text-white'>Benifit of...</button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-5 my-10 px-4 text-center text-[#545b77] md:grid-cols-2">
                <div className='md:col-span-2'>
                    <p className='text-xl mb-3 text-[#545B77]'>How can we help?</p>
                </div>

                <div className='border border-[#545b77] rounded-md  overflow-hidden'>
                    <div className='flex justify-start items-center bg-[#F3F6FF] px-2 py-1 rounded-br-full'>
                        <img src="/Images/Group 23186.png" alt="" className='p-1 w-12' />
                        <p>AI-driven-trend forecasting</p>
                    </div>
                    <div className='text-start text-sm my-3 px-2'>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p> the latest fashion trends</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Exclusive digital designs</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Quick access to all designs</p>
                        </div>
                    </div>
                </div>

                <div className='border border-[#545b77] rounded-md  overflow-hidden'>
                    <div className='flex justify-start items-center bg-[#F3F6FF] px-2 py-1 rounded-br-full'>
                        <img src="/Images/Group 23180.png" alt="" className='p-1 w-12' />
                        <p>Extensive Styles in Unlimited Fabrics</p>
                    </div>
                    <div className='text-start text-sm my-3 px-2'>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>10k+ styles in 3k fabrics monthly</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Best of all categories</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Easy sample request</p>
                        </div>
                    </div>
                </div>

                <div className='border border-[#545b77] rounded-md  overflow-hidden'>
                    <div className='flex justify-start items-center bg-[#F3F6FF] px-2 py-1 rounded-br-full'>
                        <img src="/Images/Group 23112 (2).png" alt="" className='p-1 w-12' />
                        <p>Lowest MOQs 50 pieces/style</p>
                    </div>
                    <div className='text-start text-sm my-3 px-2'>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Direct access to lean inventory</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Chat in real-time for ordering</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Customizable orders with feasible MOQs</p>
                        </div>
                    </div>
                </div>

                <div className='border border-[#545b77] rounded-md  overflow-hidden'>
                    <div className='flex justify-start items-center bg-[#F3F6FF] px-2 py-1 rounded-br-full'>
                        <img src="/Images/Group 23112 (1).png" alt="" className='p-1 w-12' />
                        <p>Design to Delivery in 21 days</p>
                    </div>
                    <div className='text-start text-sm my-3 px-2'>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Lightning fast TATs</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>10X faster production</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Dedicated customer success manager</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid text-center my-5">
                <p className='text-xl text-[#545B77] font-medium mb-3'>Product Category</p>
                <div className='flex overflow-x-scroll scrollbar1 py-10 gap-10'>
                    {/* todo: carousel */}


                    <div className='relative max-w-[300px] shrink-0'>
                        <img src="/Images/group (4).png" alt="" className='max-h-[400px]' />
                        <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md '>
                            <p>Ethnic Wear</p>
                        </div>
                    </div>
                    <div className='relative max-w-[300px] shrink-0 border'>
                        <img src="/Images/western-wear.jpg" alt="" className='max-h-[400px]' />
                        <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md '>
                            <p>Wester Wear</p>
                        </div>
                    </div>
                    <div className='relative max-w-[300px] shrink-0 border'>
                        <img src="/Images/casual.jpg" alt="" className='max-h-[400px]' />
                        <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md '>
                            <p>Casual Wear</p>
                        </div>
                    </div>
                    <div className='relative max-w-[300px] shrink-0 border'>
                        <img src="/Images/group (3).png" alt="" className='max-h-[400px]' />
                        <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md '>
                            <p>Winter Wear</p>
                        </div>
                    </div>
                    <div className='relative max-w-[300px] shrink-0 border'>
                        <img src="/Images/lounge-wear.jpg" alt="" className='max-h-[400px]' />
                        <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md '>
                            <p>Lounge Wear</p>
                        </div>
                    </div>
                    <div className='relative max-w-[300px] shrink-0 border'>
                        <img src="/Images/group (2).png" alt="" className='max-h-[400px]' />
                        <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md '>
                            <p>Active Wear</p>
                        </div>
                    </div>
                    <div className='relative max-w-[300px] shrink-0 border'>
                        <img src="/Images/group (1).png" alt="" className='max-h-[400px]' />
                        <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md '>
                            <p>Kids Wear</p>
                        </div>
                    </div>


                </div>

            </div>



            <div className="grid text-center my-5 place-items-center">
                <p className='text-xl text-[#545B77] font-medium mb-3'>Frequently Asked Questions</p>
                <div>
                    {/* todo: carousel */}
                    <Carousel effect="fade" className='max-w-[1100px]'>

                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] text-[#545B77] '>
                            <p className='text-black text-xl'>1.How long does it take to get my order?</p>
                            <p className='text-[#545b77]'>We promise to provide end-to-end design-to-delivery solutions within three weeks</p>
                        </div>


                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] '>
                            <p className='text-black text-xl'>2.How long does it take to get my order?</p>
                            <p className='text-[#545b77]'>We promise to provide end-to-end design-to-delivery solutions within three weeks</p>
                        </div>


                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] '>
                            <p className='text-black text-xl'>3.How long does it take to get my order?</p>
                            <p className='text-[#545b77]'>We promise to provide end-to-end design-to-delivery solutions within three weeks</p>
                        </div>


                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] '>
                            <p className='text-black text-xl'>4.How long does it take to get my order?</p>
                            <p className='text-[#545b77]'>We promise to provide end-to-end design-to-delivery solutions within three weeks</p>
                        </div>

                    </Carousel>
                </div>

            </div>

            <div>
                <Connect />
            </div>
        </div>
    )
}

export default Home