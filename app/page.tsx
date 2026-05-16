
import Hero from '@/components/sections/Hero';
import HowIBuild from '@/components/sections/HowIBuild';
import Projects from '@/components/sections/Projects';
import TechStack from '@/components/sections/TechStack';

export default function Home() {
  return (
    <main className='space-y-10 pt-30'>
      <Hero />
      <Projects />
      <TechStack />
      <HowIBuild/>

    </main>
  );
}
