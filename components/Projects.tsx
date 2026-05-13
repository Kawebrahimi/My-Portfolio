import Image from 'next/image';
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from './ui/card';
import BtnHover1 from './BtnHover1';

const Projects = () => {
  return (
    <section className='min-h-96 relative'>
      <Image
        width={150}
        height={150}
        src='/images/hang-spider.png'
        alt='hang-spider'
        className='absolute top-4 right-10 lg:size-50'
      />
      <div className=' py-4 -z-10 text-center bg-linear-to-b from-kaweb-400/20 to-0% relative'>
        <Image
          width={3000}
          height={3000}
          src='/images/spider-web.png'
          alt='spider-web'
          className='opacity-40 blur-[0.6px] absolute -z-20'
        />
        <h2 className='mt-20 lg:mt-30'>Projects</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-8'>
        <div className='z-20 max-w-7xl'>
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
                project management and task tracking app where users can create
                tasks, set reminders, manage checklists, drag and drop tasks and
                columns, upload daily reports, track time and manage financial
                operations.
              </p>
            </CardContent>
            <CardFooter className='flex justify-end'>
              <BtnHover1 before='Visit Orkelo' after='Lets go!' />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
