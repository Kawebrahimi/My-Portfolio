// components/SmoothScroll.tsx
'use client';

import { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

type SmoothScrollProps = {
  children: ReactNode;
};

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  );
};

export default SmoothScroll;
