'use client';

import { Card } from 'flowbite-react';
import "./styles/cardComponent.css"

export default function DefaultCard({key, features}) {
  console.log(key);
  return (
    <Card
    className={`card-css max-w-[450px] p-2 mb-8 bg-transparent rounded-sm border-b-0 border-t-0 ${features.title === "The Choosen Ones" ? 'border-l-2' : 'border-l-0'} border-r-2 border-gray-800`}
    href="#"
    >
      <div className='flex w-[450px] '>
        <div className='flex flex-col gap-4 '>
          <div className=' flex w-8 h-8  rounded-lg bg-[#4C5ADF] '>
            {features.svg}
          </div>
          <div className=' w-full '>
            <h5 className="text-xl font-normal m-auto tracking-tight text-white">
              <p className=''>
                {features.title}
              </p>
            </h5>
          </div>
          <div className='w-[350px]'>
            <p className="text-md text-gray-300 ">
              <p className=''>
                  {features.info}
              </p>
            </p>
          </div>
        </div>
      </div>
      
    </Card>
  )
}


