'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '../ui/card';
import BtnHover1 from '../BtnHover1';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import SectionTitle from '../SectionTitle';
import GlareHover from '../ui/glare-hover';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectSectionRef = useRef<HTMLElement | null>(null);
  const spiderWrapRef = useRef<HTMLDivElement | null>(null);
  const spiderRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from('.project-card', {
        y: 100,
        scale: 0.5,
        rotateX: 8,
        duration: 0.8,
        ease: 'power3.out',
        transformOrigin: 'top center',

        stagger: 0.8,
        scrollTrigger: {
          trigger: projectSectionRef.current,
          start: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectSectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        spiderWrapRef.current,
        {
          y: -120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'bounce.out',
        },
      );

      tl.call(() => {
        gsap.to(spiderRef.current, {
          rotation: 10,
          duration: 1.2,
          ease: 'sine.inOut',
          transformOrigin: 'top center',
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: projectSectionRef },
  );

  const handleMouseEnter = () => {
    gsap.to('.project-card', {
      y: -12,
      x: 8,
      scale: 0.98,
      rotateX: 8,
      rotateY: -10,
      duration: 0.45,
      ease: 'back.out(1.8)',
    });
  };
  const handleMouseLeave = () => {
    gsap.to('.project-card', {
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.45)',
    });
  };

  return (
    <section
      className='min-h-96 relative overflow-hidden'
      ref={projectSectionRef}
    >
      <div ref={spiderWrapRef}>
        <div
          ref={spiderRef}
          className='origin-top absolute top-4 right-10 lg:size-50 spider'
        >
          <Image
            width={150}
            height={150}
            src='/images/hang-spider.png'
            alt='hang-spider'
            className='lg:size-40'
          />
        </div>
      </div>
      <div className=' py-4 -z-10 text-center bg-linear-to-b from-kaweb-400/20 to-0% relative'>
        <Image
          width={3000}
          height={3000}
          src='/images/spider-web.png'
          alt='spider-web'
          className='opacity-40 blur-[0.6px] absolute -z-20'
        />
        <SectionTitle title='Projects'>
          My Projects and my experiences
        </SectionTitle>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-8'>
        <div
          className='z-20 max-w-7xl project-card'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <GlareHover
            className='bg-transparent'
            glareColor='#ffffff'
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <Card className='kaweb-card bg-transparent hover:from-kaweb-500/40 hover:border-kaweb-500/50 transition duration-500 group/card'>
              <CardHeader className='space-y-2'>
                <h5 className='text-xl text-kaweb2-500 font-bold'>
                  Orkelo Project Management App
                </h5>
                <CardDescription className='text-white/80 space-y-1'>
                  <p>
                    Worked as{' '}
                    <span className='font-semibold'>Frontend Developer</span>
                  </p>
                  <p>Technologies: React, Redux, Bootstrap, dnd kit, axios</p>
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className=' overflow-hidden rounded-md'>
                  <Image
                    width={1000}
                    height={1000}
                    src='/images/orkelo-screenshot.jpg'
                    alt='orkelo'
                    className='group-hover/card:scale-110 transition-transform duration-600'
                  />
                </div>
                <p className='text-gray-300 text-xs'>
                  {' '}
                  project management and task tracking app where users can
                  create tasks, set reminders, manage checklists, drag and drop
                  tasks and columns, upload daily reports, track time and manage
                  financial operations.
                </p>
              </CardContent>
              <CardFooter className='flex justify-end'>
                <BtnHover1 before='Visit Orkelo' after='Lets go!' />
              </CardFooter>
            </Card>
          </GlareHover>
        </div>
      </div>
    </section>
  );
};

export default Projects;
