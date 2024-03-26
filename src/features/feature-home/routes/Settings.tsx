import AnimatedText from '@/components/common/AnimatedText';

export const Settings = () => {
  return (
    <>
      <div className="flex h-[72%] items-start ">
        <AnimatedText
          tab="settings"
          text="Settings"
          textClassName="text-5xl  font-heavy leading-none drop-shadow-lg"
          positionY={10}
        />
      </div>
      <div className="flex justify-center  pt-s12" />
    </>
  );
};
