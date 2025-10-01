'use client'
import Image from "next/image";
import { useState } from "react";

type Props = {
  text: string;
}
export const ProductDescription = ({text}:Props) =>{
  const [opened, setOpened] = useState(true);

  return(
    <div className="bg-white border border-gray-200 px-6 md:px-12 mt-20">
      <div className={`${opened ? 'border-b' : 'border-0'} flex justify-between py-7 border-b border-gray-200`}>
        <div className="text-2xl flex justify-center items-center">Informações do Produto</div>
        <div 
          onClick={() => setOpened(!opened)}
          className="cursor-pointer size-14 border border-gray-200 flex justify-center items-center rounded-sm"
        >
          <Image 
            src={'/assets/ui/arrow-left-s-line.png'}
            alt=""
            width={24}
            height={24}
            className={`${opened ? 'rotate-0' : 'rotate-180'} transition-all`}
          />

        </div>
      </div>
      {opened &&
        <div className="py-12">
          {text}
        </div>
      }
    </div>
  )
}