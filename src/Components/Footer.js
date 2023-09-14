import React from 'react'

function Footer() {
    return (

        <div className="grid grid-cols-1 gap-y-5 text-white py-4 px-2 bg-[#545B77] sm:grid-cols-4 gap-5 xl:px-20">
            <div className='grid gap-y-2  border-black'>
                <p>FashinBuzz</p>
                <div className='flex justify-start items-center gap-2'>
                    {/* <img src="/Images/Group 23130.png" alt="" className='p-1 w-8'/> */}
                    <i class="fa fa-envelope text-white" aria-hidden="true"></i>
                    <p className='text-sm'>hello@fashinbuzz.com</p>
                </div>
            </div>

            <div className='grid gap-y-1  text-xs '>
                <h3 className='border-b-[0.5px] text-base'>What we are?</h3>
                <p>About Us</p>
                <p>Blog</p>
                <p>Contact us</p>
            </div>

            <div className='grid gap-y-1  text-xs '>
                <h3 className='border-b-[0.5px] text-base'>What we provide?</h3>
                <p>Product Category</p>
                <p>Our Services</p>
                <p>Our Process</p>
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