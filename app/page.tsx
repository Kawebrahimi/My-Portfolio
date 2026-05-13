import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className='pt-30 space-y-10'>
      <Hero />
      <Projects />
      <section className='min-h-screen'>
        <h2 className='text-center'>Tech Stack</h2>
      </section>
    </main>
  );
}
