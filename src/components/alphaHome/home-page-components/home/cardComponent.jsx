'use client';

import { Card } from 'flowbite-react';
import "./styles/cardComponent.css"

export default function DefaultCard({features}) {
  return (
    <Card
      className="card-css max-w-[350px] mb-8 bg-transparent  rounded-mdb  border-gray-100"
      href="#"
    >
      <h5 className="text-2xl font-normal tracking-tight text-white">
        <p>
          {features.title}
        </p>
      </h5>
      <p className="font-normal text-gray-300">
        <p>
            {features.info}
        </p>
      </p>
    </Card>
  )
}


