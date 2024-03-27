import React, { useState } from 'react';
import Image from 'next/image';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { toast } from '@/components/common/Toast';
import AddIcon from '@/components/ui/Icons/12/icons/plus.svg';
import { setProductData, useAppDispatch } from '@/redux';

import DescriptionTablet from '../components/DescriptionTablet';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export const Plant = () => {
  const data = [
    {
      id: '3253b5f0-12d1-450e-a278-040469c66986',
      name: 'Chinese Money',
      image: 'plant-2',
      price: 100,
    },
    {
      id: 'e7425d3f-ce3d-4c25-aee0-14cc652e7578',
      name: 'Montera Deliciosa',
      image: 'plant-1',
      price: 224,
    },
    {
      id: 'bcf3c6a3-e19a-45fc-a2dd-e28600ff2972',
      name: 'Infero Deliciosa',
      image: 'plant-3',
      price: 220,
    },
  ];
  // State to hold the currently selected plant
  const [selectedPlant, setSelectedPlant] = useState(data[1]);
  // State to hold the active slide index
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const dispatch = useAppDispatch();

  // Handler for slide change
  const handleSlideChange = (swiper: SwiperClass) => {
    const { activeIndex } = swiper;
    setSelectedPlant(data[activeIndex]);
    setActiveSlideIndex(activeIndex);
  };

  const handleClick = () => {
    dispatch(setProductData({ productData: { ...selectedPlant, count: 1 } }));
    toast({
      id: 'add-items-cart',
      type: 'success',
      message: 'Item added to cart successfully',
      options: { duration: 300 },
    });
  };

  return (
    <>
      <div className="mt-[25%] flex h-full max-h-[40%] items-center justify-center xs:mt-[8%] sm:mt-[10%] sm:max-h-[52%] md:mt-0  md:max-h-[62%] lg:mt-0 lg:max-h-[72%]">
        <div className="h-full  w-full">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            coverflowEffect={{
              rotate: 0,
              scale: 0.8,
              stretch: 0,
              depth: 100,
              modifier: 1.2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper h-full w-full"
            initialSlide={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {data.map((d, index) => (
              <SwiperSlide key={d.id}>
                <div className="flex h-full items-center justify-center ">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_PATH_PREFIX}/${d.image}.png`}
                    alt={`carousel-image-${index}`}
                    width={525}
                    height={500}
                    priority
                    className="mb-8 h-[300px] w-[300px] xs:h-[200px] xs:w-[250px] sm:mb-0 sm:h-[300px] sm:w-[300px] md:mb-0 md:h-[280px] md:w-[525px] lg:mb-0 lg:h-[350px] lg:w-[525px]"
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
        <DescriptionTablet
          buttonComponent={{
            buttonText: 'Add to Cart',
            icon: <AddIcon />,
            handleOnClick: handleClick,
          }}
          name={selectedPlant.name}
          price={selectedPlant.price}
        />
      </div>
    </>
  );
};
