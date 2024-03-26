import React from 'react';

import AnimatedText from '@/components/common/AnimatedText';

export const Home = () => {
  const text = 'Welcome to The Plant Shop.';

  return (
    <>
      <div className="flex h-[72%] items-center  pt-s48">
        <AnimatedText
          textClassName="text-s24 sm:text-s32 md:text-5xl lg:text-7xl justify-center font-heavy leading-none drop-shadow-lg"
          tab="home"
          text={text}
        />
      </div>
      <div className="flex justify-center  pt-s12" />
    </>
  );
};
