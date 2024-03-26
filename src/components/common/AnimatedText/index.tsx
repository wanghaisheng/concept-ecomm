import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import gsap from 'gsap';

import { cn } from '@/utils/cn';

interface AnimatedTextProps {
  text: string;
  tab: string;
  textClassName?: string;
  positionValue?: number;
}

const AnimatedText = ({ text, tab, textClassName, positionValue }: AnimatedTextProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleLoad = () => {
      if (router.query.tabs === tab) {
        const textAnimation = gsap.timeline();
        textAnimation.to('.letter', {
          autoAlpha: 1,
          y: positionValue ?? 50,
          stagger: {
            each: 0.06,
          },
        });
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
