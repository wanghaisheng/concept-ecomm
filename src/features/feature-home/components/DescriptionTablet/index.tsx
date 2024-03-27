import React from 'react';

import Button from '@/components/ui/Button';

interface DescriptionTabletProps {
  name: string;
  price: number;
  isCart?: boolean;
  buttonComponent: {
    icon: any;
    buttonText: string;
    handleOnClick?: () => void;
  };
}

const DescriptionTablet = ({ name, price, isCart, buttonComponent }: DescriptionTabletProps) => {
  return (
    <div className="mx-[8px] flex w-full justify-between gap-s8 rounded-full  bg-white/20 px-s24 py-s20 border-gradient-b-custom-gradient xs:mx-[8px] sm:mx-s24 sm:max-h-[104px] sm:max-w-[465px] sm:gap-s16 sm:px-s24 sm:py-s20 md:mx-s24 md:max-h-[104px] md:max-w-[465px] md:gap-s24 md:px-s40 md:py-s24 lg:mx-s24 lg:max-h-[104px] lg:max-w-[465px] lg:gap-s24 lg:px-s40  lg:py-s24">
      <div className="flex flex-col gap-s8">
        <div className="text-[14px] font-medium leading-[18.2px] text-white drop-shadow-md sm:text-[24px] sm:leading-normal md:text-[24px] md:leading-normal lg:text-[24px] lg:leading-normal">
          {name}
        </div>
        {isCart ? (
          <div className="flex gap-s4">
            <div className="text-[12px] font-bold leading-[18.2px] text-white drop-shadow-md sm:text-[20px] sm:leading-normal md:text-[20px] md:leading-normal lg:text-[20px] lg:leading-normal">
              Subtotal:
            </div>
            <div className="text-[14px] font-heavy leading-[18.2px] text-white drop-shadow-md sm:text-[24px] sm:leading-normal md:text-[24px] md:leading-normal lg:text-[24px] lg:leading-normal">
              ${price}
            </div>
          </div>
        ) : (
          <div className="text-[14px] font-heavy leading-[18.2px] text-white drop-shadow-md sm:text-[24px] sm:leading-normal md:text-[24px] md:leading-normal lg:text-[24px] lg:leading-normal">
            ${price}
          </div>
        )}
      </div>
      <div className="max-w-[154px]">
        <Button
          onClick={buttonComponent.handleOnClick}
          leadingIcon={buttonComponent.icon}
          className="gap-s6"
          variant="filled-white"
        >
          {buttonComponent.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default DescriptionTablet;
