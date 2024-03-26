import Button from '@/components/ui/Button';
import AddIcon from '@/components/ui/Icons/12/icons/plus.svg';

interface DescriptionTabletProps {
  name: string;
  price: number;
}

const DescriptionTablet = ({ name, price }: DescriptionTabletProps) => {
  return (
    <div className="flex max-h-[104px] w-full max-w-[465px] justify-between gap-s24 rounded-full bg-white/20 px-s40 py-s24  border-gradient-b-custom-gradient">
      <div className="flex flex-col gap-s8">
        <div className="text-[24px] font-medium leading-normal text-white drop-shadow-md">
          {name}
        </div>
        <div className="text-[28px] font-heavy leading-normal drop-shadow-lg">${price}</div>
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
