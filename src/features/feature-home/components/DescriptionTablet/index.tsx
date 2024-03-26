import Button from '@/components/ui/Button';
import AddIcon from '@/components/ui/Icons/12/icons/plus.svg';

interface DescriptionTabletProps {
  name: string;
  price: number;
}

const DescriptionTablet = ({ name, price }: DescriptionTabletProps) => {
  return (
    <div className="flex max-h-[76px] w-full max-w-[324px] justify-between rounded-full bg-white/20 px-s24 py-s20 border-gradient-b-custom-gradient sm:max-h-[104px] sm:max-w-[465px] sm:px-s24 sm:py-s20 md:max-h-[104px] md:max-w-[465px] md:px-s40 md:py-s24 lg:max-h-[104px] lg:max-w-[465px] lg:gap-s24 lg:px-s40  lg:py-s24">
      <div className="flex flex-col gap-s8">
        <div className="text-[14px] font-medium leading-[18.2px] text-white drop-shadow-md sm:text-[24px] sm:leading-normal md:text-[24px] md:leading-normal lg:text-[24px] lg:leading-normal">
          {name}
        </div>
        <div className="text-[14px] font-medium leading-[18.2px] text-white drop-shadow-md sm:text-[24px] sm:leading-normal md:text-[24px] md:leading-normal lg:text-[24px] lg:leading-normal">
          ${price}
        </div>
      </div>
      <div className="max-w-[154px]">
        <Button leadingIcon={<AddIcon />} className="gap-s6" variant="filled-white">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default DescriptionTablet;
