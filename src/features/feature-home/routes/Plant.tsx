import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import gsap from 'gsap';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

import { toast } from '@/components/common/Toast';
import AddIcon from '@/components/ui/Icons/12/icons/plus.svg';
import { Loader } from '@/components/ui/Loader';
import { setProductData, useAppDispatch } from '@/redux';

import { useProductsQuery } from '../api/products';
import DescriptionTablet from '../components/DescriptionTablet';
import { ProductDataType } from '../types/products';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export const Plant = () => {
  const { data: productsData, isLoading } = useProductsQuery();
  const router = useRouter();

  const [selectedPlant, setSelectedPlant] = useState(productsData?.data?.[1]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const dispatch = useAppDispatch();

  const handleSlideChange = (swiper: SwiperClass) => {
    const { activeIndex } = swiper;
    setSelectedPlant(productsData?.data?.[activeIndex]);
    setActiveSlideIndex(activeIndex);
  };

  useEffect(() => {
    const animation = () => {
      gsap.set('.parent-container > div, .image-container > div', {
        y: -20,
        opacity: 0,
        visibility: 'hidden',
      });
      if (router.query.tabs === 'plants') {
        gsap.to('.parent-container > div, .image-container > div', {
          y: 0,
          visibility: 'visible',
          opacity: 1,
          stagger: 0.2,
          duration: 0.5,
        });
      }
    };

    if (document.readyState === 'complete') {
      animation();
    } else {
      window.addEventListener('load', animation);
    }

    return () => {
      window.removeEventListener('load', animation);
    };
  }, [router.query.tabs, productsData]);

  const handleClick = () => {
    dispatch(
      setProductData({
        productData: { ...selectedPlant, count: 1, originalPrice: selectedPlant?.price },
      })
    );
    toast({
      id: 'add-items-cart',
      type: 'success',
      message: 'Item added to cart successfully',
      options: { duration: 300 },
    });
  };

  if (isLoading) {
    return <Loader size="lg" />;
  }

  return (
    <div className="parent-container  h-full w-full">
      <div className="invisible mt-[25%]  flex h-full max-h-[40%] items-center justify-center xs:mt-[8%] sm:mt-[10%] sm:max-h-[52%] md:mt-0  md:max-h-[62%] lg:mt-0 lg:max-h-[72%]">
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
            {productsData &&
              productsData?.data?.map((d: ProductDataType, index: number) => (
                <SwiperSlide className="image-container" key={d.id}>
                  <div className="flex h-full items-center justify-center">
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
      <div className="invisible flex justify-center  pt-s12">
        <DescriptionTablet
          buttonComponent={{
            buttonText: 'Add to Cart',
            icon: <AddIcon />,
            handleOnClick: handleClick,
          }}
          name={selectedPlant?.name ?? ''}
          price={selectedPlant?.price ?? 0}
        />
      </div>
    </div>
  );
};
