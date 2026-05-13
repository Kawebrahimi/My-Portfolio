'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import NavItem from './NavItem';
import GithubBtn from './GithubBtn';
import { headerItems } from '@/constants/header-items';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Header = () => {
  const headRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const introTl = gsap.timeline();

      introTl
        .fromTo(
          headRef.current,
          {
            opacity: 0,
            y: -30,
            scale: 0.5,
            maxWidth: '200px',
            boxShadow: '0 0 0px rgba(79, 40, 255, 0)',
            borderBottom: '1px solid rgba(255, 255, 255, 0)',
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
          },
        )
        .to(headRef.current, {
          boxShadow: '0 30px 70px rgba(79, 40, 255, 0.65)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.542)',
          duration: 0.5,
          ease: 'power2.out',
        });

      gsap.set(menuRef.current, {
        opacity: 0,
        y: -10,
        maxWidth: '0',
        pointerEvents: 'none',
      });
      gsap.set(logoRef.current, {
        flex: 1,
      });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top -80px',
          toggleActions: 'play none none none',
          once: true,
          markers: true,
        },
      });
      scrollTl.to(logoRef.current, {
        flex: 0,
      });

      scrollTl.to(headRef.current, {
        maxWidth: '100%',
        borderRadius: '0px',
        duration: 0.5,
        ease: 'power2.out',
      });
      scrollTl.to(menuRef.current, {
        maxWidth: '800px',
        flex: 1,
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
        duration: 0.4,
        ease: 'power2.out',
      });
    },
    { scope: headRef },
  );

  return (
    <header
      ref={headRef}
      className='fixed inset-x-0 top-0 z-50 mx-auto h-full max-h-15 max-w-50 rounded-b-sm p-4 text-center backdrop-blur-xl'
    >
      <nav className='flex items-center justify-between font-semibold'>
        <div ref={logoRef} className='text-lg'>
          <span className='text-kaweb2-500'>KA</span>
          <span className='text-white'>WEB</span>
        </div>
        <ul
          ref={menuRef}
          className='flex items-center gap-6 text-sm text-white overflow-hidden justify-end'
        >
          {headerItems.map((i, index)=> (
            <NavItem key={index}>{i.title}</NavItem>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
