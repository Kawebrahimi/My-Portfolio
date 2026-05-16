import SectionTitle from '@/components/SectionTitle';
import TechStackCard from '@/components/TechStackCard';
import { techStack } from '@/constants/tech-stack-icons';
import Image from 'next/image';

const TechStack = () => {
  return (
    <section className='relative min-h-screen space-y-10'>
      <Image
        className='absolute-center -z-20 opacity-10 md:scale-125 lg:scale-200'
        src='/images/bg-pattern.png'
        width={600}
        height={600}
        alt='splash'
      />

      <SectionTitle title='Tech Stack'>
        Stacks that I use to build high performance and user friendly apps
      </SectionTitle>

      <div className='relative grid grid-cols-1 gap-8 gap-y-10 px-4 perspective-[1000px] sm:px-8 lg:grid-cols-2 lg:gap-x-80 sm:mt-10 md:mt-0'>
        <div className='absolute-center hidden perspective-[1000px] lg:block'>
          <Image
            src='/images/serious.png'
            width={600}
            height={600}
            alt='kaweb-serious'
          />
          <Image
            src='/images/serious.png'
            width={600}
            height={600}
            alt='kaweb-serious'
            className='rotate-180 -mt-25 absolute blur-md opacity-10'
          />
          <span className='block h-20 w-full -mt-25 rotate-x-80 transform-3d rounded-full bg-radial from-kaweb-500/20 to-60% shadow-2xl' />
        </div>

        {techStack.map((category) => (
          <TechStackCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
