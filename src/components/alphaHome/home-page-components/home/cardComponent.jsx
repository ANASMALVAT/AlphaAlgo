'use client';

import { Card } from 'flowbite-react';
import "./styles/cardComponent.css"

export default function DefaultCard({key, features}) {
  return (
    <Card
    className={`card-css card-css p-2 mb-8 max-w-[1400px] bg-transparent rounded-sm border-b-0 border-t-0 border-l-0 border-r-2 border-gray-800 text-center items-center justify-center`}
    href="#"
    >
      <div className='flex card-css '>
        <div className='flex flex-col gap-4 '>
          <div className=' flex w-10 h-10  rounded-lg bg-algoXcolor m-auto '>
            {features.svg}
          </div>
          <div className=' w-full '>
            <h5 className="text-xl font-normal m-auto tracking-tight text-white">
              <p className=''>
                {features.title}
              </p>
            </h5>
          </div>
          <div className='w-full pl-6 pr-6'>
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


