import React from 'react'
import Connect from '../Connect'

function Category() {
    return (
        <div className="container min-w-full grid gap-y-10">

            <div className="grid text-center my-4">
                <p className='text-2xl text-[#545B77] underline'>Categories That We Offer</p>
            </div>

            <div className="grid grid-cols-1 gap-y-10 place-items-center sm:grid-cols-2 lg:grid-cols-3">

                <div className='relative max-w-[300px]'>
                    <img src="/Images/group (4).png" alt="" className='max-h-[400px]'/>
                    <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md hover:translate-y-[2px]'>
                        <p>Ethnic Wear</p>
                    </div>
                </div>
                <div className='relative max-w-[300px] border'>
                    <img src="/Images/western-wear.jpg" alt="" className='max-h-[400px]'/>
                    <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md hover:translate-y-[2px]'>
                        <p>Wester Wear</p>
                    </div>
                </div>
                <div className='relative max-w-[300px] border'>
                    <img src="/Images/casual.jpg" alt="" className='max-h-[400px]'/>
                    <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md hover:translate-y-[2px]'>
                        <p>Casual Wear</p>
                    </div>
                </div>
                <div className='relative max-w-[300px] border'>
                    <img src="/Images/group (3).png" alt="" className='max-h-[400px]'/>
                    <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md hover:translate-y-[2px]'>
                        <p>Winter Wear</p>
                    </div>
                </div>
                <div className='relative max-w-[300px] border'>
                    <img src="/Images/lounge-wear.jpg" alt="" className='max-h-[400px]'/>
                    <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md hover:translate-y-[2px]'>
                        <p>Lounge Wear</p>
                    </div>
                </div>
                <div className='relative max-w-[300px] border'>
                    <img src="/Images/group (2).png" alt="" className='max-h-[400px]'/>
                    <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md hover:translate-y-[2px]'>
                        <p>Active Wear</p>
                    </div>
                </div>
                <div className='relative max-w-[300px] border'>
                    <img src="/Images/group (1).png" alt="" className='max-h-[400px]' />
                    <div className='absolute bottom-[-15px] left-[20%] bg-[#F3F6FF] px-10 py-2 shadow-md hover:translate-y-[2px]'>
                        <p>Kids Wear</p>
                    </div>
                </div>

            </div>

            <div>
                <Connect />
            </div>

        </div>
    )
}

export default Category