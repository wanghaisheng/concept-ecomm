import AnimatedText from '@/components/common/AnimatedText';

export const Cart = () => {
  return (
    <>
      <div className="h-[72%]">
        <AnimatedText
          tab="cart"
          text="Cart"
          textClassName="text-5xl  font-heavy leading-none drop-shadow-lg"
          positionValue={10}
        />
      </div>
      <div className="flex justify-center  pt-s12" />
    </>
  );
};
