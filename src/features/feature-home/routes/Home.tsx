import React, { useEffect } from 'react';
import gsap from 'gsap';

export const Home = () => {
  const text = 'Welcome to The Plant Shop.';

  useEffect(() => {
    const textAnimation = gsap.timeline();
    textAnimation.to('.letter', {
      y: 50,
      stagger: {
        each: 0.06,
      },
    });
  }, []);

  return (
    <>
      <div className="h-[72%] pt-s48  text-7xl font-heavy leading-bold drop-shadow-lg">
        <div className="flex w-full items-start justify-center ">
          {text.split('').map((letter) => {
            return letter === ' ' ? (
              <div className="letter">&nbsp;</div>
            ) : (
              <div className="letter" key={letter}>
                {letter}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center  pt-s12" />
    </>
  );
};
