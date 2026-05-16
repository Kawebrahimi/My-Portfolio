'use client'
import SectionTitle from '@/components/SectionTitle';
import Carousel from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';
import { howIBuildSteps } from '@/constants/before-i-build';

const HowIBuild = () => {

  

  return (
    <section className='relative min-h-screen overflow-visible py-20'>
        <div className='pointer-events-none absolute left-0 top-50'>
          <div className='relative'>
            <Image
              className='-ml-10 scale-75 opacity-40 md:scale-90 lg:ml-0 lg:scale-100'
              src='/images/side-web-left.png'
              width={400}
              height={400}
              alt='spider-web'
            />

            <Image
              className='absolute left-0 top-15 scale-70 md:scale-80 xl:scale-90'
              src='/images/spider-thumbs.png'
              width={200}
              height={200}
              alt='spider'
            />
          </div>
        </div>

        <SectionTitle title='How I Build'>
          I like building projects step by step — with clear planning,
          thoughtful design,
          <br />
          clean code, and careful polishing before launch.
        </SectionTitle>

        <div className='mx-auto mt-20 grid max-w-7xl grid-cols-1 items-start gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]'>
          <div className='w-full min-w-0'>
            <Carousel
              items={howIBuildSteps}
              baseWidth={900}
              height={700}
              autoplay
              autoplayDelay={3000}
              pauseOnHover
              loop
              round={false}
              className='w-full max-w-full'
              renderItem={(item) => (
                <Card className='select-none kaweb-card group relative flex h-full w-full flex-col justify-between overflow-hidden bg-transparent p-1 transition duration-500 hover:border-kaweb-500/50 hover:from-kaweb-500/40'>
                  <div className='absolute right-4 top-4 rounded-md p-3 text-5xl font-bold transition duration-500 group-hover:scale-110 md:right-5 md:top-5 md:p-4 md:text-6xl'>
                    <span className='bg-linear-to-b from-kaweb-400 bg-clip-text text-transparent transition duration-700 group-hover:to-kaweb2-700'>
                      {item.step}
                    </span>
                  </div>

                  <CardHeader className='space-y-4 pt-8 md:pt-10'>
                    <h3 className='max-w-[72%] text-xl font-bold leading-tight md:text-2xl lg:text-3xl'>
                      {item.title}
                    </h3>

                    <CardDescription className='max-w-[88%] text-sm leading-7 md:text-base'>
                      {item.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className='space-y-6 pb-8'>
                    <div className='grid gap-4 md:grid-cols-2'>
                      <div className='rounded-2xl border border-white/10 bg-white/3 p-4'>
                        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
                          Focus
                        </p>

                        <div className='flex flex-wrap gap-2'>
                          {item.focus.map((focus) => (
                            <span
                              key={focus}
                              className='rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground'
                            >
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className='rounded-2xl border border-white/10 bg-white/3 p-4'>
                        <p className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground'>
                          Tools
                        </p>

                        <div className='flex flex-wrap gap-2'>
                          {item.tools.map((tool) => (
                            <span
                              key={tool}
                              className='rounded-full bg-kaweb-500/10 px-3 py-1 text-xs text-kaweb-300'
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className='rounded-2xl border border-kaweb-500/20 bg-kaweb-500/10 p-4'>
                      <p className='mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-kaweb-300'>
                        Outcome
                      </p>

                      <p className='text-sm leading-6 text-muted-foreground'>
                        {item.outcome}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            />
          </div>

          <aside className='hidden h-full lg:block'>
            <div className='relative flex flex-col items-center justify-center'>
              <Image
                src='/images/kaweb-thumbs.png'
                width={600}
                height={600}
                alt='kaweb thumbs'
                className='h-auto w-full max-w-150 object-contain'
              />
              <Image
                src='/images/kaweb-thumbs.png'
                width={600}
                height={600}
                alt='kaweb-serious'
                className='rotate-180 -mt-30 absolute top-full blur-md opacity-20'
              />
              <p className='mt-6 max-w-md text-center text-sm leading-7 text-muted-foreground'>
                “Measure twice, cut once.” I believe clean products start with
                clear thinking, careful planning, and thoughtful execution.
              </p>
            </div>
          </aside>
        </div>
      </section>
  )
}

export default HowIBuild
