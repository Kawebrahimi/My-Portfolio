'use client';
import { heroCards, heroIcons } from '@/constants/hero-section';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import HeroCard from '../HeroCard';
import { TypeAnimation } from 'react-type-animation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  const heroCardRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroTitleRef.current) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(heroTitleRef.current, {
        type: 'chars',
      });
      gsap.from(split.chars, {
        y: 80,
        opacity: 0,
        rotateX: 90,
        filter: 'blur(8px)',
        duration: 1,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: heroTitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, heroTitleRef);
    return () => ctx.revert();
  }, []);

  useGSAP(
    () => {
      const introTimeline = gsap.timeline();
      introTimeline.fromTo(
        heroCardRef.current,
        {
          filter: 'blur(8px)',
          opacity: 0,
          translateY: 30,
        },
        {
          filter: 'blur(0px)',
          opacity: 0.8,
          translateY: '0',
          duration: 1,
        },
      );

      const cardTimeline = gsap.timeline();
      cardTimeline.fromTo(
        '.hero-card',
        {
          opacity: 0,
          translateY: 20,
        },
        {
          opacity: 1,
          translateY: 0,
          duration: 0.8,
          stagger: 0.5
        },
      );
    },
    { scope: heroRef },
  );

  return (
    <section className='px-8 flex sm:flex-col xl:flex-row sm:items-center lg:items-stretch lg:gap-10'>
      <div>
        <div className='absolute inset-0 z-0 overflow-hidden pointer-events-none'>
          {heroIcons.map((icon, index) => (
            <div
              key={index}
              className={cn(
                'absolute size-10 opacity-35 blur-[0.5px]',
                icon.className,
              )}
            >
              <Image
                src={icon.src}
                width={100}
                height={100}
                alt=''
                className='size-full opacity-50 drop-shadow-[0_0_18px_rgba(83,177,255,0.55)]'
              />
            </div>
          ))}
        </div>
        <div
          ref={heroCardRef}
          className='border-kaweb2-900 border-t-2  rounded-t-2xl max-h-125 h-full relative flex items-center justify-center'
        >
          <div className='max-h-150 max-w-150'>
            <Image
              className='size-full animate-pulse -z-1 absolute-center opacity-20 scale-120 blur-xs'
              src={'/images/web-1.png'}
              width={1100}
              height={1100}
              alt='Kaweb-hero'
            />
            <Image
              className='size-full z-10'
              src={'/images/kaweb-hero.png'}
              width={1100}
              height={1100}
              alt='Kaweb-hero'
            />
            <Image
              className='size-full z-10 -mt-30 rotate-180 opacity-10 blur-sm'
              src={'/images/kaweb-hero.png'}
              width={1100}
              height={1100}
              alt='Kaweb-hero'
            />
          </div>
          <div className='absolute top-0 shadow-2xl sm:bg-linear-180 from-kaweb-500/40 backdrop-blur-2xl to size-full -z-10 rounded-2xl'></div>
        </div>
      </div>
      <div className='flex text-white border-kaweb2-900 lg:border-t-2  rounded-t-2xl flex-1 p-6 flex-col gap-5'>
        <div className='text-center space-y-2'>
          <h1 ref={heroTitleRef} className='text-gray-300'>
            <span> Hi i&apos;m</span>{' '}
            <span className='text-kaweb2-500'>Ka</span>
            <span>web</span>
          </h1>
          <h3>
            <TypeAnimation
              sequence={[
                'I build clean front-end experiences.',
                1500,
                'I create smooth React interfaces.',
                1500,
                'I turn JavaScript into websites.',
                1500,
                'I build APIs when back-end tempts me.',
                1500,
              ]}
              wrapper='span'
              speed={55}
              deletionSpeed={35}
              preRenderFirstString
              repeat={Infinity}
              className='text-kaweb2-400'
            />
          </h3>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 xxl:grid-col-3' ref={heroRef}>
          {heroCards.map((card, index) => (
            <HeroCard key={index} title={card.title} body={card.body}>
              {card.icons.map((icon, index) => (
                <Image
                  className='size-7'
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  width={45}
                  height={45}
                />
              ))}
            </HeroCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
