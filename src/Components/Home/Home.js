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
                    <p className='text-lg font-medium md:text-2xl px-5'>Almost all the modern & future design</p>
                </div>
                <div className='text-[#545B77] bg-[#f3f6ff]  text-center py-2 border-e hover:translate-y-[2px] md:py-5'>
                    <p className='text-2xl font-medium md:text-4xl'>100</p>
                    <p className='text-xs md:text-xl'>MOQ</p>
                </div>
                <div className='text-[#545B77] bg-[#f3f6ff]  text-center py-2 border-e hover:translate-y-[2px] md:py-5 '>
                    <p className='text-2xl font-medium md:text-2xl'>Fastest delivery service</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-y-3 text-center lg:grid-cols-2 gap-5 xl:grid-cols-4">
                <div className='lg:col-span-2 xl:col-span-4'>
                    <p className='text-xl mb-3 text-[#545B77]'>Our Services</p>
                </div>
                <div className='grid grid-cols-5 border border-[#545b77] rounded-md overflow-hidden'>
                    <div className="col-span-2 p-2">
                        <img src="/Images/service3.png" alt="" className=' min-w-full' />
                    </div>
                    <div className="col-span-3 text-[#545B77] text-sm text-center px-2 place-items-center">
                        <p className='font-medium text-lg'>Design</p>
                        <p>At FashinBuzz, innovation is at the core of what we do. we also provide state-of-the-art design solutions for garments that leverage the latest software and AI technologies.</p>
                    </div>
                </div>

                <div className='grid grid-cols-5 border border-[#545b77] rounded-md overflow-hidden'>
                    <div className="col-span-2 p-2">
                        <img src="/Images/service2.png" alt="" className=' min-w-full' />
                    </div>
                    <div className="col-span-3 text-[#545B77] text-sm text-center px-2">
                        <p className='font-medium text-lg'>Manufacturing</p>
                        <p>we have harnessed the transformative capabilities of AI to revolutionize our manufacturing processes, ensuring the production of high-quality products that meet and exceed industry standards. </p>
                    </div>
                </div>

                <div className='grid grid-cols-5 border border-[#545b77] rounded-md overflow-hidden'>
                    <div className="col-span-2 p-2">
                        <img src="/Images/service1.png" alt="" className=' min-w-full' />
                    </div>
                    <div className="col-span-3 text-[#545B77] text-sm text-center">
                        <p className='font-medium text-lg'>Delivery</p>
                        <p>Experience lightning-fast delivery with us! At FashinBuzz, we take pride in providing the quickest delivery times in the industry, and we have the statistics to prove it. </p>
                    </div>
                </div>

                <div className='grid grid-cols-5 border border-[#545b77] rounded-md overflow-hidden'>
                    <div className="col-span-2 p-2">
                        <img src="/Images/vs1.png" alt="" className=' min-w-full' />
                    </div>
                    <div className="col-span-3 text-[#545B77] text-sm text-center">
                        <p className='font-medium text-lg'>Virtual Sampling</p>
                        <p>Coming soon...</p>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 gap-5 my-10 px-4 text-center text-[#545b77] md:grid-cols-2">
                <div className='md:col-span-2'>
                    <p className='text-xl mb-3 text-[#545B77]'>How can we help?</p>
                </div>

                <div className='border border-[#545b77] rounded-md  overflow-hidden'>
                    <div className='flex justify-start items-center bg-[#F3F6FF] px-2 py-1 rounded-br-full'>
                        <img src="/Images/Group 23186.png" alt="" className='p-1 w-12' />
                        <p>Harnessing AI for Trend Prediction</p>
                    </div>
                    <div className='text-start text-sm my-3 px-2'>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Using AI, We can minimize dead-stock.</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Get update with latest design</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Reduce burden for making design everyday</p>
                        </div>
                    </div>
                </div>

                <div className='border border-[#545b77] rounded-md  overflow-hidden'>
                    <div className='flex justify-start items-center bg-[#F3F6FF] px-2 py-1 rounded-br-full'>
                        <img src="/Images/Group 23180.png" alt="" className='p-1 w-12' />
                        <p>Wide Variety of Designs in Limitless Fabric Options</p>
                    </div>
                    <div className='text-start text-sm my-3 px-2'>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>We have thousands of fabric option across all type of fabrics.</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>We give best price in the world.</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Get latest update on fabric everyday.</p>
                        </div>
                    </div>
                </div>

                <div className='border border-[#545b77] rounded-md  overflow-hidden'>
                    <div className='flex justify-start items-center bg-[#F3F6FF] px-2 py-1 rounded-br-full'>
                        <img src="/Images/Group 23112 (2).png" alt="" className='p-1 w-12' />
                        <p>Minimum Order Quantity (MOQ) as Low as 100 Pieces per Style</p>
                    </div>
                    <div className='text-start text-sm my-3 px-2'>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>No overstock issues.</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>All size variant available.</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>We check quality on each phase.</p>
                        </div>
                    </div>
                </div>

                <div className='border border-[#545b77] rounded-md  overflow-hidden'>
                    <div className='flex justify-start items-center bg-[#F3F6FF] px-2 py-1 rounded-br-full'>
                        <img src="/Images/Group 23112 (1).png" alt="" className='p-1 w-12' />
                        <p>Design to Delivery fastest.</p>
                    </div>
                    <div className='text-start text-sm my-3 px-2'>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>We present every-stage of supply chain.</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Secure packaging.</p>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <i class="fa fa-circle text-[5px]" aria-hidden="true"></i>
                            <p>Transparent logistic.</p>
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
                <div className='w-[300px] px-2 sm:w-[600px] sm:px-8 md:w-[700px] lg:w-[900px] lg:px-10 '>
                    {/* todo: carousel */}
                    <Carousel effect="fade" className=''>

                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] text-[#545B77] '>
                            <p className='text-black text-xl'>1.What is benifit from your side?</p>
                            <p className='text-[#545b77]'>We have transparent supply chain and have best technology. for D2C fashionbrand, we are one of the top manufacturing service provider in india. we provide omnichannel platform.</p>
                        </div>


                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] '>
                            <p className='text-black text-xl'>2.What is delivery time</p>
                            <p className='text-[#545b77]'>it may take around 2 to 3 weeks.</p>
                        </div>


                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] '>
                            <p className='text-black text-xl'>3.Minimun Order quantity?</p>
                            <p className='text-[#545b77]'>100 pieces.</p>
                        </div>


                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] '>
                            <p className='text-black text-xl'>4.You provide design or not?</p>
                            <p className='text-[#545b77]'>Yes, we provide design .</p>
                        </div>

                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] '>
                            <p className='text-black text-xl'>5.what if I received damage peice in delivery?</p>
                            <p className='text-[#545b77]'>We have claim process.</p>
                        </div>

                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] '>
                            <p className='text-black text-xl'>6.Payment condition?</p>
                            <p className='text-[#545b77]'>Any first 3 bill in advance then ww will provide credit facility.</p>
                        </div>

                        <div className=' border-2 rounded-md py-5 bg-[#F3F6FF] '>
                            <p className='text-black text-xl'>5.is there customer support available?</p>
                            <p className='text-[#545b77]'>We build relation by heart with our client , so we take your hurdles.</p>
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