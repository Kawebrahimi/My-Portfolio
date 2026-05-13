import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { frontendIcons } from '@/constants/techstack-icons';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='pt-30 space-y-10'>
      <Hero />
      <Projects />
      <section className='min-h-screen space-y-10'>
        <SectionTitle>Tech Stack</SectionTitle>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 px-8'>
          
        </div>
      </section>
    </main>
  );
}
{/* <div
                  key={index}
                  className='capitalize size-40 flex justify-center items-center flex-col gap-1 border-2 border-kaweb-500/20 p-2 rounded-xl bg-linear-to-br to-90% to-kaweb-800/50 text-white text-center text-xl'
                >
                  <Image src={icon.src} width={80} height={80} alt='sdf' />
                  {icon.name}
                </div> */}
