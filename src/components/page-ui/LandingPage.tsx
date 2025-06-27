'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
// import { LampContainer } from '@/components/ui/lamp';
// import { motion } from "motion/react";
import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
}

const words = [
    {
        text: 'Fullstack'
    },
    {
        text: 'developer',
        className: 'text-blue-600 dark:text-blue-400 font-semibold'
    }
];

export function LandingPage() {
    return (
        <div
            id="landing-page"
            className="bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
        >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />
            <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  "> Hello, I&apos;m Anantrao. A passionate Software Engineer.</p>
            <TypewriterEffectSmooth words={words} />
            <div className="z-30 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <Link href="#">
                    <Button>Download CV</Button>
                </Link>
                <Link href="#contact-me">
                    <Button variant="secondary">Contact Me</Button>
                </Link>
            </div>
            <BackgroundBeams />
            {/* <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base  "> Hello, I&apos;m Anantrao. A passionate Software Engineer.</p>
                    <TypewriterEffectSmooth words={words} />
                </motion.h1>
            </LampContainer> */}
        </div>
    );
}
