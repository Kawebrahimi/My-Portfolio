'use client';

import { ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({
  children,
  className = '',
}: SectionTitleProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      tl.from('.badge-text', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      })
        .from(
          '.badge-border',
          {
            rotateX: 90,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.15',
        )
        .fromTo(
          '.badge-bg',
          {
            maxWidth: '0',
            backgroundColor: 'transparent'
          },
          {
            rotateY: 0,
            opacity: 1,
            duration: 0.6,
            maxWidth: '100%',
            ease: 'power3.out',
            backgroundColor: 'rgba(16, 83, 105, 0.4)'
          },
          '-=0.15',
        );
    },
    {
      scope: containerRef,
    },
  );

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto mt-20 max-w-fit rounded-full px-8 py-4 lg:mt-30 perspective-[1000px] transform-3d ${className}`}
    >
      <span className='badge-bg absolute inset-0 -z-10 rounded-full bg-linear-to-r' />

      <span className='badge-border absolute inset-0 -z-20 rounded-full border-2 border-kaweb2-600' />

      <h2 className='badge-text relative z-10 font-bold '>{children}</h2>
    </div>
  );
}
