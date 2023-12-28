import React from 'react';

import "./styles/reviewCard.css"

const  ReviewCard = ({index}) => {
    return <>
        <div className='flex bg-transparent w-[325px] max-w-[325px] p-2 h-[360px] rounded-md  justify-center'>
            <img className=' absolute w-16 h-16 bg-red-500 mt-2 rounded-full'>
            </img>  
            <div className='flex flex-col mt-12 w-full h-[90%] bg-white rounded-[0.25rem] border-t-4 border-[#4C5ADF] align-center rounded-md '>
                <div  className='user-name mt-6 '><h2 className=' text-[20px] text-algoblack'>Alex {index}</h2></div>
                <div  className='user-position '><h2 className=' text-[16px] text-algoblack'>Software Engineer</h2></div>
                <div  className='user-company flex align-center mt-3'><img  className=' m-auto w-[80px] h-[20px]' src={require('../../../../assets/amazon.png')} alt="Amazon"/></div>

                <div  className='user-review overflow-auto bg-[#fafafa] mt-5 pl-2 rounded-md m-1'>
                    <h2 className='  text-justify text-[14px] text-gray-500 font-light rounded-[0.25rem] w-[95%] '>
                        The truth is that interview questions and algorithms are difficult. Even more difficult is trying to understand the inner workings of a complex algorithm from a book or from a poorly thought-out video shot on your grandma's camera. Our crisp 1080p videos boast crystal-clear audio and are strategically divided into two parts to give you the most comprehensive explanations to questions. That's over 100 hours of content specifically tailored to make interview questions and algorithms easy.
                    </h2>
                </div>
            </div>
        </div>
    </>
}

export default ReviewCard;