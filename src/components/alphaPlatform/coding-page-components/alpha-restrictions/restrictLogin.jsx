import React from 'react'
import { Link } from 'react-router-dom';

const RestrictLogin = () => {

    return (
        <div className='flex h-full w-full min-h-screen min-w-screen bg-[#00182D]'>
            <div className='flex flex-col m-auto justify-center text-center items-center'>
                <div className='h-40 w-40 mb-4'>
                <img src='https://www.svgrepo.com/show/408465/lock-security-open.svg'></img>
                </div>
                <div className='text-center'>
                    <h5 className=" flex text-3xl font-normal tracking-tight text-white">
                        <p>
                            Login to
                        </p>
                        <Link to = "/">
                            <h5 className=" font-mono font-bold  text-[#4C5ADF] text-[42px] hover:duration-500 hover:scale-150 ml-1 mr-1"> X </h5>
                        </Link>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default RestrictLogin;