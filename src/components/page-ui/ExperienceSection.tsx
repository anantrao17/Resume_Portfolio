'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-10 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Nielsen Media Pvt Ltd',
        description: (
            <ul className="list-disc">
                <li> Developed modular, responsive UI components using Angular and SCSS.</li>
                <li>Integrated Spring Boot REST APIs to display real-time data and improve data flow.</li>
                <li>Contributed to feature development in an Agile environment with rapid iterations.</li>
            </ul>
        ),
        badge: 'Consultant / Feb 2025 - Present'
    },
    {
        title: 'Jio Platform Limited',
        description: (
            <ul className="list-disc">
                <li>Developed a responsive web application with Angular, enhancing usability by 50%.</li>
                <li>Integrated back-end services using Golang APIs, built custom Angular components and pipes.</li>
                <li>Reduced application loading time by 100x and minimized bugs by 40%.</li>
            </ul>
        ),
        badge: 'Software Development Engineer 1 / Dec 2022 - Feb 2025'
    },
    {
        title: 'Education4ol',
        description: (
            <ul className="list-disc">
                <li>Contributed to e-commerce websites by improving UI and UX.</li>
                <li>Reactive Layouts Built Using HTML, CSS, and JavaScript for live projects.</li>
            </ul>
        ),
        badge: 'Web Developers / Jan 2022 - Jun 2022'
    }
];
