import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';

import { cn } from '@/utils/cn';

interface AnimatedTextProps {
  text: string;
  tab: string;
  textClassName?: string;
  positionYValue?: number;
  positionXValue?: number;
}

const AnimatedText = ({
  text,
  tab,
  textClassName,
  positionYValue,
  positionXValue,
}: AnimatedTextProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleLoad = () => {
      if (router.query.tabs === tab) {
        const textAnimation = gsap.timeline();
        // Check if the screen width is less than or equal to 640px (small screen)
        if (window.matchMedia('(max-width: 640px)').matches) {
          // Apply x: 10 for small screens
          textAnimation.to('.letter', {
            autoAlpha: 1,
            x: positionXValue ?? 5, // Use x instead of y for small screens
            stagger: {
              each: 0.06,
            },
          });
        } else {
          // Apply y: positionValue ?? 50 for larger screens
          textAnimation.to('.letter', {
            autoAlpha: 1,
            y: positionYValue ?? 50,
            stagger: {
              each: 0.06,
            },
          });
        }
      }
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [text, router.query.tabs]);

  const combinedClassName = cn('flex w-full items-start', textClassName);

  return (
    <div className={combinedClassName}>
      {text.split('').map((letter) => {
        return letter === ' ' ? (
          <div className=" letter invisible">&nbsp;</div>
        ) : (
          <div className="letter invisible" key={letter}>
            {letter}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedText;
