import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

type TechStackCategoryType = {
  id: string;
  title: string;
  side: 'left' | 'right';
  icon: string;
  technologies: readonly {
    name: string;
    src: string;
    href: string
  }[];
};

const TechStackCard = ({ category }: { category: TechStackCategoryType }) => {
  const isLeft = category.side === 'left';

  const cardSideClass = isLeft
    ? 'left-side lg:translate-x-30 lg:rotate-y-40 lg:hover:[transform:translateX(1rem)_translateZ(40px)_rotateY(0deg)]'
    : 'right-side lg:-translate-x-30 lg:-rotate-y-40 lg:hover:[transform:translateX(-1rem)_translateZ(40px)_rotateY(0deg)]';

  const techIconClass = isLeft
    ? 'hover:-rotate-12'
    : 'hover:rotate-12';

  return (
    <Card
      data-side={category.side}
      className={`
        group relative transform-3d backdrop-blur-xs bg-linear-to-br from-kaweb-500/30 bg-transparent
        border-2 border-white/20 shadow-[0px_0px_30px]
        transition-all duration-500 ease-out
        ${cardSideClass}
      `}
    >
      <CardHeader className='flex items-center justify-center gap-2'>
        <Image
          src={category.icon}
          width={40}
          height={40}
          alt={category.title}
        />

        <div className='text-2xl font-bold text-transparent bg-linear-to-b from-kaweb-400 bg-clip-text'>
          {category.title}
        </div>
      </CardHeader>

      <CardContent className='flex flex-wrap items-center justify-center gap-4'>
        {category.technologies.map((tech) => (
          <Link
            target='_blank'
            href={tech.href}
            key={tech.name}
            className={`${techIconClass} hover:-translate-y-4 transition flex min-h-24 min-w-24 flex-col items-center justify-center gap-1 rounded-xl border-2 border-kaweb-500/20 bg-linear-to-br to-90% to-kaweb-800/50 p-2 hover:to-kaweb-500 text-center text-base text-white capitalize sm:min-h-28 sm:min-w-28 sm:text-lg lg:min-h-30 lg:min-w-30 lg:text-xl`}
          >
            <Image src={tech.src} width={60} height={60} alt={tech.name} />
            {tech.name}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};

export default TechStackCard;
