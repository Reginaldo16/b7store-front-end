'use client'
import { Banner } from "types/banner";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  list: Banner[];
}

// timer to change banner
let bannerTimer:NodeJS.Timeout;
let bannerTimerSecond = 100000;

export const Banners = ({list}: Props) =>{
  
  // current image that is loaded
  const [currentImage, setCurrentImage] = useState(0);

  // change image automaticly
  const nextImage = () => {
    setCurrentImage(currentImage =>{
      if(currentImage +1 >= list.length){
        return 0;
      }else{
        return currentImage +1;
      }
    });
  }

  // when clicked bullet icon on banner, wait again for somes seconds to change banner
  const handleBannerClick = (index: number) =>{
    setCurrentImage(index);
    return () => clearInterval(bannerTimer);
    bannerTimer = setInterval(nextImage, bannerTimerSecond);
  }

  // conf timmer to change imagem automaticaly
  useEffect(()=>{
    bannerTimer = setInterval(nextImage, bannerTimerSecond);
    return () => clearInterval(bannerTimer);
  },[]);

  return(
    <div>
      <div className="relative aspect-[3/1]">
        {list.map((banner, index) => (
            <Link
              key={index}
              href={banner.link}
              className="transition-all absolute inset-0"
              style={{opacity:currentImage === index ? 1 : 0}} // opacity others image, and show current
            >
              <Image 
                src={banner.img}
                alt=""
                width={1200}
                height={400}
                className="rounded-sm"
              />
            </Link>
          ))}
      </div>
      {/* banners bollets */}
      <div className="mt-4 flex justify-center gap-4">
        {list.map((banner, index) =>(
          <div
            key={index}
            className="size-4 bg-blue-600 rounded-full cursor-pointer"
            style={{opacity: currentImage === index ? 1: 0.3}}
            onClick={() => handleBannerClick(index)}
          >

          </div>
        ))
        }
      </div>
    </div>
  )
}