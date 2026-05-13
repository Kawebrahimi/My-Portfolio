import BtnHover1 from '@/components/BtnHover1';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='pt-30 space-y-10'>
      <Hero />
      <Projects/>
    </main>
  );
}
