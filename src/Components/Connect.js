import React from 'react'
import { Link } from 'react-router-dom'

function Connect() {
    return (
        <>
            <div className="grid text-center place-items-center gap-y-5 my-4">
                <p className='text-xl text-[#545B77] underline'>Discover endless <span>Fabrics</span> With...</p>
                <Link to="/connect">
                    <button className='bg-[#545B77] px-3 py-1 rounded-md max-w-[300px] shrink-0 text-white md:text-2xl'>Connect with us</button>
                </Link>
            </div>
        </>
    )
}

export default Connect