import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';

export const Home = () => {
  const text = 'Welcome to The Plant Shop.';
  const router = useRouter();

  useEffect(() => {
    const handleLoad = () => {
      if (router.query.tabs === 'home') {
        const textAnimation = gsap.timeline();
        textAnimation.to('.letter', {
          autoAlpha: 1,
          y: 50,
          stagger: {
            each: 0.06,
          },
        });
      }
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [router.query.tabs]);

  return (
    <>
      <div className="h-[72%] pt-s48  text-7xl font-heavy leading-bold drop-shadow-lg">
        <div className="flex w-full items-start  justify-center ">
          {text.split('').map((letter) => {
            return letter === ' ' ? (
              <div className="letter invisible">&nbsp;</div>
            ) : (
              <div className="letter invisible" key={letter}>
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
