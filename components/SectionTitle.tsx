'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type SectionTitleProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({
  title,
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
          toggleActions: 'play none none reverse',
        },
      });

      tl.from('.badge-text', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
      })
        .from('.badge-description', {
          y: -20,
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
            background: 'transparent',
          },
          {
            rotateY: 0,
            opacity: 1,
            duration: 0.6,
            maxWidth: '100%',
            ease: 'power3.out',
            background: 'linear-gradient(90deg,rgba(16, 83, 105, 0.7) 0%, rgba(16, 83, 105, 0.2) 100%)',
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
      className={`mb-2 relative mx-auto mt-20 max-w-fit rounded-md px-8 py-4 lg:mt-30 perspective-[1000px] transform-3d text-center ${className}`}
    >
      <span className='badge-bg absolute inset-0 -z-10 rounded-md bg-linear-to-r' />

      <span className='badge-border absolute inset-0 -z-20 rounded-md border-2 border-kaweb2-600' />

      <h2 className='badge-text relative z-10 font-bold mb-2'>{title}</h2>
      <p className='badge-description text-gray-300'>{children}</p>
    </div>
  );
}
