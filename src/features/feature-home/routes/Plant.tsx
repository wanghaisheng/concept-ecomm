import React, { useState } from 'react';
import Image from 'next/image';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import DescriptionTablet from '../components/DescriptionTablet';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export const Plant = () => {
  const data = [
    { name: 'Chinese Money', image: 'plant-2', price: 100 },
    { name: 'Montera Deliciosa', image: 'plant-1', price: 224 },
    { name: 'Infero Deliciosa', image: 'plant-3', price: 220 },
  ];
  // State to hold the currently selected plant
  const [selectedPlant, setSelectedPlant] = useState(data[1]);
  // State to hold the active slide index
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  // Handler for slide change
  const handleSlideChange = (swiper: SwiperClass) => {
    const { activeIndex } = swiper;
    setSelectedPlant(data[activeIndex]);
    setActiveSlideIndex(activeIndex);
  };

  return (
    <>
      <div className="flex h-full max-h-[72%] items-center justify-center">
        <div className="h-full w-full">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              scale: 0.8,
              stretch: 0,
              depth: 100,
              modifier: 1.2,
              slideShadows: false,
            }}
            pagination
            onSlideChange={handleSlideChange}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper h-full w-full"
            initialSlide={1}
          >
            {data.map((d, index) => (
              <SwiperSlide key={d.name}>
                <div className="flex h-full items-center justify-center ">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_PATH_PREFIX}/${d.image}.png`}
                    alt={`carousel-image-${index}`}
                    width={525}
                    height={500}
                  />
                  <div className="absolute bottom-0 w-full text-center">
                    {index !== activeSlideIndex ? (
                      <div className="flex flex-col gap-2">
                        <div className="text-[18px] font-semibold leading-normal text-white drop-shadow-lg">
                          {d.name}
                        </div>
                        <div className="text-[18px] font-extrabold leading-normal text-white drop-shadow-lg">
                          ${d.price}
                        </div>
                      </div>
                    ) : (
                      <p />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex justify-center  pt-s12">
        <DescriptionTablet name={selectedPlant.name} price={selectedPlant.price} />
      </div>
    </>
  );
};
