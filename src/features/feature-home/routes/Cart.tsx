import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Image from 'next/image';
import { useRouter } from 'next/router';
import gsap from 'gsap';

import { toast } from '@/components/common/Toast';
import Button from '@/components/ui/Button';
import FormCheckBox from '@/components/ui/CheckBox/FormCheckBox';
import DeleteIcon from '@/components/ui/Icons/20/icons/delete.svg';
import MinusIcon from '@/components/ui/Icons/20/icons/minus.svg';
import PlusIcon from '@/components/ui/Icons/20/icons/plus.svg';
import CircleIcon from '@/components/ui/Icons/20/icons/tick-circle.svg';
import {
  addSameItem,
  clearProductData,
  deleteSameItem,
  useAppDispatch,
  useAppSelector,
} from '@/redux';

import DescriptionTablet from '../components/DescriptionTablet';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface Product {
  name: string;
  image: string;
  id: string;
  count: number;
  price: number;
}

export const Cart = () => {
  const methods = useForm();
  const router = useRouter();

  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state?.cart?.productData);

  const handleProductDelete = (id: string) => {
    dispatch(clearProductData({ id }));
    toast({
      id: 'delete-items-cart',
      type: 'success',
      message: 'Item removed successfully',
      options: { duration: 300 },
    });
  };

  useEffect(() => {
    gsap.set('.parent-container > div, .list-container > div', {
      y: -50,
      opacity: 0,
    });
    if (router.query.tabs === 'cart') {
      gsap.to('.parent-container > div, .list-container > div', {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
      });
    }
  }, [router.query.tabs === 'cart']);

  const handleProductSubtract = (id: string) => {
    dispatch(deleteSameItem({ id }));
  };

  const handleProductAdd = (id: string) => {
    dispatch(addSameItem({ id }));
  };
  const totalPrice =
    product && product.length > 0
      ? product.reduce((sum: number, item: Product) => sum + item.price, 0)
      : 0;

  const onSubmit = () => {
    // const data = methods.getValues();
    // console.log(data, 'hello');
  };

  return (
    <div className="parent-container  h-full w-full">
      <div className="mt-[25%] flex h-full max-h-[50%] items-center justify-center  xs:mt-[0%]  sm:mt-[10%] sm:max-h-[52%] md:mt-0  md:max-h-[62%] lg:mt-0 lg:max-h-[72%]">
        <div className="h-full w-full overflow-y-scroll">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              {product && product.length === 0 ? (
                <div className="mt-[15%] flex h-full w-full justify-center text-s24 font-heavy leading-none drop-shadow-lg xs:text-s20 sm:text-s32 md:text-5xl lg:text-7xl">
                  Your cart is empty.
                </div>
              ) : (
                product.map((d: Product) => (
                  <div
                    key={d.id}
                    className="list-container flex  w-[98%] flex-wrap justify-evenly rounded-lg border-b-[1px] border-white/80 px-[8px]  py-[20px] hover:bg-white/40   sm:justify-between md:justify-between  lg:justify-between"
                  >
                    <div className="mr-[20%] flex gap-s4 sm:mr-0 md:mr-0 lg:mr-0">
                      <div className="flex items-center">
                        <FormCheckBox label="" name={`item-${d.id}`} />
                      </div>
                      <div className="flex gap-s4">
                        <div>
                          <Image
                            src={`${process.env.NEXT_PUBLIC_PATH_PREFIX}/${d.image}.png`}
                            alt="item-image"
                            height={64}
                            width={54}
                          />
                        </div>
                        <div className="flex items-center text-[20px] font-medium leading-normal text-black">
                          {d.name}
                        </div>
                      </div>
                    </div>
                    <div className="flex   gap-s16 ">
                      <div className="flex items-end ">
                        <Button
                          onClick={() => handleProductDelete(d.id)}
                          size={48}
                          variant="icon-small"
                        >
                          <DeleteIcon />
                        </Button>
                      </div>
                      <div className="flex items-end  pb-s4">|</div>

                      <div className="flex flex-col items-center gap-s12 ">
                        <div className="flex w-full justify-end pr-s8 text-[16px] font-normal leading-normal text-black">
                          ${typeof d.price === 'number' ? d.price.toFixed(2) : '0.00'}
                        </div>
                        <div className="flex w-full  rounded-full bg-white/40">
                          <Button
                            onClick={() => handleProductAdd(d.id)}
                            size={48}
                            variant="icon-small"
                          >
                            <PlusIcon />
                          </Button>
                          <div className="flex items-center justify-center px-s12 text-black">
                            {d.count}
                          </div>
                          <Button
                            onClick={() => handleProductSubtract(d.id)}
                            size={48}
                            variant="icon-small"
                          >
                            <MinusIcon />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </form>
          </FormProvider>
        </div>
      </div>
      <div className="flex justify-center pt-s12 xs:pt-0">
        <DescriptionTablet
          buttonComponent={{
            buttonText: 'Checkout',
            icon: <CircleIcon />,
            handleOnClick: onSubmit,
          }}
          price={totalPrice}
          isCart
          name="Summary Order"
        />
      </div>
    </div>
  );
};
