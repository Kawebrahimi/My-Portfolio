'use client';

import React, { JSX, useEffect, useMemo, useRef, useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import { CircleParking, Code, File, Layers, Layout } from 'lucide-react';

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  focus: string[];
  step: string,
  tools: string[];
  outcome: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  height?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
  className?: string;
  renderItem?: (item: CarouselItem, index: number) => React.ReactNode;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    id: 1,
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    icon: <File className='h-4 w-4 text-white' />,
  },
  {
    id: 2,
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    icon: <CircleParking className='h-4 w-4 text-white' />,
  },
  {
    id: 3,
    title: 'Components',
    description: 'Reusable components for your projects.',
    icon: <Layers className='h-4 w-4 text-white' />,
  },
  {
    id: 4,
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    icon: <Layout className='h-4 w-4 text-white' />,
  },
  {
    id: 5,
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    icon: <Code className='h-4 w-4 text-white' />,
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;

const SPRING_OPTIONS = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
};

interface CarouselSlideProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: ReturnType<typeof useMotionValue<number>>;
  transition: typeof SPRING_OPTIONS | { duration: number };
  renderItem?: (item: CarouselItem, index: number) => React.ReactNode;
}

function CarouselSlide({
  item,
  index,
  itemWidth,
  round,
  trackItemOffset,
  x,
  transition,
  renderItem,
}: CarouselSlideProps) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];

  const outputRange = [90, 0, -90];

  const rotateY = useTransform(x, range, outputRange, {
    clamp: false,
  });

  return (
    <motion.div
      className={[
        'relative flex shrink-0 cursor-grab flex-col overflow-hidden active:cursor-grabbing',
        round
          ? 'items-center justify-center border-0 bg-[#120F17] text-center'
          : 'items-start justify-between',
      ].join(' ')}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY,
        ...(round && { borderRadius: '50%' }),
      }}
      transition={transition}
    >
      {renderItem ? (
        renderItem(item, index)
      ) : (
        <>
          <div className={round ? 'm-0 p-0' : 'mb-4 p-5'}>
            <span className='flex h-7 w-7 items-center justify-center rounded-full bg-[#120F17]'>
              {item.icon}
            </span>
          </div>

          <div className='p-5'>
            <div className='mb-1 text-lg font-black text-white'>
              {item.title}
            </div>

            <p className='text-sm text-white'>{item.description}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 900,
  height = 560,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  className = '',
  renderItem,
}: CarouselProps): JSX.Element {
  const containerPadding = 16;

  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [containerWidth, setContainerWidth] = useState<number>(baseWidth);
  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const itemWidth = Math.max(containerWidth - containerPadding * 2, 280);
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];

    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;

    const updateWidth = () => {
      setContainerWidth(element.clientWidth);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;

    const container = containerRef.current;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return;
    if (pauseOnHover && isHovered) return;

    const timer = setInterval(() => {
      setPosition((prev) => {
        const next = prev + 1;
        return Math.min(next, itemsForRender.length - 1);
      });
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;

    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }

    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);

      const target = 1;

      setPosition(target);
      x.set(-target * trackItemOffset);

      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });

      return;
    }

    if (position === 0) {
      setIsJumping(true);

      const target = items.length;

      setPosition(target);
      x.set(-target * trackItemOffset);

      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });

      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const { offset, velocity } = info;

    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition((prev) => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;

      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0,
        },
      };

  const activeIndex =
    items.length === 0
      ? 0
      : loop
        ? (position - 1 + items.length) % items.length
        : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={[
        'relative w-full max-w-full overflow-hidden p-4',
        round
          ? 'rounded-full border border-white'
          : 'rounded-[24px] border border-[#222]',
        className,
      ].join(' ')}
      style={{
        maxWidth: `${baseWidth}px`,
        height: round ? `${baseWidth}px` : `${height}px`,
      }}
    >
      <motion.div
        className='flex h-full'
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          height: '95%',
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            position * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onDragEnd={handleDragEnd}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselSlide
            key={`${item.id}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
            renderItem={renderItem}
          />
        ))}
      </motion.div>

      <div
        className={[
          'flex w-full justify-center',
          round ? 'absolute bottom-12 left-1/2 z-20 -translate-x-1/2' : '',
        ].join(' ')}
      >
        <div className='mt-4 flex w-37.5 justify-between px-8'>
          {items.map((_, index) => (
            <motion.button
              key={index}
              type='button'
              aria-label={`Go to slide ${index + 1}`}
              className={[
                'h-2 w-2 cursor-pointer rounded-full transition-colors duration-150',
                activeIndex === index
                  ? round
                    ? 'bg-white'
                    : 'bg-[#333333]'
                  : round
                    ? 'bg-[#555]'
                    : 'bg-[rgba(51,51,51,0.4)]',
              ].join(' ')}
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
