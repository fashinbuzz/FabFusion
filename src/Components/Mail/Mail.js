import React from 'react'

function Mail() {
    return (
        <div className='container min-w-full grid place-items-center px-5 md:px-10 xl:px-20'>
            <h2 className='font-medium text-2xl text-[#545b77]'>FashibBuzz</h2>
            <div className="grid grid-cols-1 gap-5 my-10 text-[#545b77] border p-3 rounded-lg shadow-sm sm:grid-cols-2 lg:grid-cols-3 ">

                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" className='border px-2 py-1 rounded-md min-w-full' />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" className='border px-2 py-1 rounded-md min-w-full' />
                </div>
                <div>
                    <label htmlFor="">Phone</label>
                    <input type="text" className='border px-2 py-1 rounded-md min-w-full' />
                </div>
                <div>
                    <label htmlFor="">Company name</label>
                    <input type="text" className='border px-2 py-1 rounded-md min-w-full' />
                </div>
                <div>
                    <label htmlFor="">Message/Inquiry</label>
                    <textarea type="text" className='border px-2 py-1 rounded-md min-w-full' />
                </div>
                <div>
                    <label htmlFor="">Service/Product of Interest</label>
                    <input type="text" className='border px-2 py-1 rounded-md min-w-full' />
                </div>


            </div>
            <button className='border px-2 py-1 rounded-md max-w-[300px]'>Submit</button>

        </div>
    )
}

export default Mail