import React  from 'react';
import "../styles/signInComponent.css"

const SignInComponent = () => {
    return (
        <div className=' flex  flex-col bg-transparent w-[90%] mt-4 justify-center m-auto items-center' >
            <label className='label-text w-[80%] flex items-start text-gray-400 text-[15px] mt-4 ml-2'><h2 className='text-[20px]'>user name</h2></label>
            <input
                className="flex items-start input-field border border-gray-400 pt-3 pb-3 p-2 w-[80%] text-[15px] text-white font-mono rounded-xl bg-transparent mt-2 "
                style={{ outline: 'none'}}
                onBlur={(e) => {e.target.style.borderColor = "rgb(156,163,175)"}}
                autoComplete='none'
            />

            <label className='label-text w-[80%] flex items-start text-gray-400 text-[15px] mt-4 ml-2'><h2 className='text-[20px]'>password</h2></label>
             <input
                className="flex items-start input-field border border-gray-400 pt-3 pb-3 p-2 w-[80%] text-[15px] text-white font-mono rounded-xl bg-transparent mt-2 "
                style={{ outline: 'none'}}
                onBlur={(e) => {e.target.style.borderColor = "rgb(156,163,175)"}}
                autoComplete='none'
            />

            <button className="flex items-cemter input-field border border-gray-400 pt-3 pb-3 p-2 w-[80%] text-[15px] text-white  font-mono rounded-lg bg-transparent mt-8">
                <h2 className='text-[18px] m-auto'>Continue</h2>
            </button>

        </div>
    )
}

export default SignInComponent;