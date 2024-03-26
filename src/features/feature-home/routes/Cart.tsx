import AnimatedText from '@/components/common/AnimatedText';

export const Cart = () => {
  return (
    <>
      <div className="h-[72%]">
        <AnimatedText
          tab="cart"
          text="Cart"
          textClassName="text-5xl  font-heavy leading-none drop-shadow-lg"
          positionYValue={10}
          positionXValue={20}
        />
      </div>
      <div className="flex justify-center  pt-s12" />
    </>
  );
};
