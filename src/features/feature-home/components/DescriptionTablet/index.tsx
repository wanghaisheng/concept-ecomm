import Button from '@/components/ui/Button';
import AddIcon from '@/components/ui/Icons/12/icons/plus.svg';

const DescriptionTablet = () => {
  return (
    <div className="flex max-h-[104px] w-full max-w-[465px] gap-s24 rounded-full bg-white/20 px-s40 py-s24  border-gradient-b-custom-gradient">
      <div className="flex flex-col gap-s8">
        <div className="text-[24px] font-medium leading-normal text-white drop-shadow-md">
          Montera Deliciosa
        </div>
        <div className="text-[28px] font-heavy leading-normal drop-shadow-lg">$244</div>
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
