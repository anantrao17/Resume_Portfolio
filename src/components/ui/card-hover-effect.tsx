'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

export const Header = () => {
    return (
        <div className="relative left-0 top-0 mx-auto w-full max-w-5xl px-4  py-20 md:py-40">
            <h1 id="projects" className="text-2xl font-bold dark:text-white md:text-7xl">
                Projects
            </h1>
        </div>
    );
};

export const HoverEffect = ({
    items,
    className
}: {
    items: {
        title: string;
        thumbnail: string;
        link: string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10', className)}>
            {items.map((item, idx) => (
                <a
                    href={item.link}
                    key={item.link}
                    className="group relative block size-full p-2"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 block size-full rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8]"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 }
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 }
                                }}
                            />
                        )}
                    </AnimatePresence>

                    <Card>
                        <div className="overflow-hidden rounded-xl">
                            <img src={item.thumbnail} alt={item.title} className="h-56 w-full object-cover" />
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div
            className={cn(
                // Base styles
                'rounded-2xl h-full w-full p-4 bg-white text-black dark:bg-black dark:text-white',

                // Border
                'border border-neutral-300 dark:border-white/10',

                // Hover effects
                'transition-all duration-300 ease-in-out group-hover:scale-[1.03]',
                'hover:shadow-lg hover:shadow-neutral-400/20 dark:hover:shadow-white/10',
                'hover:border-neutral-500 dark:hover:border-white/30',

                // Cursor and layer
                'relative z-20',

                className
            )}
        >
            <div className="relative z-50">{children}</div>
        </div>
    );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <h4 className={cn('font-bold tracking-wide mt-4 text-black dark:text-white', className)}>{children}</h4>;
};
