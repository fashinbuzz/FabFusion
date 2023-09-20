import React from 'react'
import '../Style.css';
import Connect from '../Connect';

function About() {
    return (
        <div className="container min-w-full grid sm:px-10 xl:px-20 gap-10">
            <div className="grid bg-[#F3F6FF] text-[#545B77] text-center px-3 py-10 gap-y-5 ">
                <p className='text-3xl font-medium'>Our Journey - From Fabrics to  Digitise Fashion</p>
                <p className='text-xs md:text-base xl:text-lg'>For the past five years, FashinBuzz has been a trusted name in the textile industry, offering top-notch design, manufacturing, and delivery services. We've been the driving force behind many successful fashion endeavors, and now, we're excited to take our expertise online.</p>
                <p className='text-xs md:text-base xl:text-lg'> Our story begins with a passion for textiles and a commitment to quality. Over the years, we've honed our skills, partnered with talented designers, and built a robust manufacturing and delivery network that ensures excellence every step of the way.</p>
                <p>Today, we're proud to introduce our online platform, where you can experience the same dedication to quality and innovation that has defined us for half a decade. Join us on this new chapter of our journey as we bring fabrics to life and fashion to your doorstep.</p>
                <p>Explore our website to discover the endless possibilities we offer, and be a part of our story as we continue to weave fashion dreams into reality.</p>
            </div>

            <div className="grid grid-cols-1 gap-5 my-5 sm:grid-cols-2 xl:gap-10">
                <div className='background1 text-center text-[#545B77] border px-12 py-5 rounded-md'>
                    <p className='text-xl font-medium md:text-base xl:text-3xl'>VISION</p>
                    <p className='text-xs xl:text-xl'>Our vision at FashinBuzz is to be more than just a textile company; we aim to be the embodiment of trust in the world of fashion. We believe that trust is the thread that binds every aspect of our business, from design to delivery.</p>
                </div>
                <div className='background2 text-center text-[#545B77] border px-12 py-5 rounded-md'>
                    <p className='text-xl font-medium md:text-base xl:text-3xl'>MISSION</p>
                    <p className='text-xs xl:text-xl'>At FashinBuzz, our mission is to elevate the fashion experience for our customers, partners, and communities.To digitise textile supply chain and get sustainable growth.
                    </p>
                </div>
            </div>

            {/* <div className="grid grid-cols-1 mb-10 sm:grid-cols-2">
                <div className='p-5 bg-[#F3F6FF] h-[300px]'>
                    <img src="/Images/Group 23214.png" alt="" className='object-contain max-w-full max-h-full' />
                </div>
                <div className=' bottom-0   bg-white text-center px-5 py-2 shadow-md'>
                    <p className='text-2xl text-[#545B77] mb-5'>Our Team</p>
                    <p className=' text-[#545B77] text-xs md:text-base xl:px-10 xl:text-xl'>We believe - ‘Strength lies in diversity, not similarities’. Hence, we have created a diverse team comprising technologists, fashion designers, artists, researchers, marketers, and creative people. To pursue excellence, we provide a good working environment where they are inspired to curate tech-driven solutions and give their best while exploring the utmost creativity.</p>
                </div>
            </div> */}


            <div className='grid grid-cols-1 gap-y-10 place-items-center md:grid-cols-2 lg:grid-cols-3'>
                <div className="shrink-0 max-w-[300px]">
                    {/* <div className='bg-[#F3F6FF] h-[300px]  flex justify-center items-center sm:order-2'>
                        <img
                            src="/Images/abhay1.jpg"
                            alt=""
                            className='object-cover  w-full h-full'
                        />
                    </div> */}

                    <div className=' bottom-0   bg-white text-clip px-5 py-2 shadow-md'>
                        <p className=' text-[#545B77]  xl:px-3'>Meet <span className='font-medium underline'>Abhay Raviya(CEO)</span>

                            a mechanical engineer with a deep-rooted passion for textiles, leads our journey at <span className='font-medium underline'>FashinBuzz</span>. With a wealth of knowledge in textile technology and a keen eye for cloth design manufacturing, Abhay brings expertise and dedication to every aspect of our business. His commitment to quality and innovation forms the bedrock of our company's success. Trust in his vision to deliver excellence in every thread
                        </p>
                    </div>
                </div>
                <div className="shrink-0 max-w-[300px]">
                    {/* <div className='bg-[#F3F6FF] h-[300px]  flex justify-center items-center sm:order-2'>
                        <img src="/Images/kuldeep1.jpg" alt="" className='object-contain w-full h-full' />
                    </div> */}
                    <div className=' bottom-0   bg-white text-clip px-5 py-2 shadow-md'>
                        <p className=' text-[#545B77]  xl:px-3 '>Introducing <span className='font-medium underline'>Kuldeep Rathod(COO)</span>,
                            At the helm of our operations stands Kuldeep Rathod, an IT engineer whose technical prowess is matched only by his exceptional interpersonal skills and profound business development acumen. Kuldeep's ability to bridge the worlds of technology and business is pivotal to our company's growth. He is your assurance of operational excellence and collaborative success.
                        </p>
                    </div>
                </div>

                <div className="shrink-0 max-w-[300px]">
                    {/* <div className='bg-[#F3F6FF] h-[300px]  flex justify-center items-center sm:order-2'>
                        <img src="/Images/jaimeen1.jpg" alt="" className='object-contain w-full h-full' />
                    </div> */}
                    <div className=' bottom-0   bg-white text-clip px-5 py-2 shadow-md'>
                        <p className=' text-[#545B77] xl:px-3'>Meet <span className='font-medium underline'>Jaimeen Makavana(CTO)</span>

                            , a chemical engineer by degree and a software engineer at heart, leads the charge as our Chief Technology Officer (CTO). With a profound understanding of AI and technology, Jaimeen infuses innovation into every aspect of our operations.  in Jaimeen's vision to integrate cutting-edge technology seamlessly into our processes, making your experience with us truly exceptional.
                        </p>
                    </div>
                </div>


            </div>
            <div className='mt-10'>
                <Connect />
            </div>
        </div>
    )
}

export default About