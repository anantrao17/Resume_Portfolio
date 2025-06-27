'use client';

import React from 'react';

import { Header, HoverEffect } from '@/components/ui/card-hover-effect';

export function ProjectsSection() {
    return (
        <div className="px-4 md:px-8 lg:px-16">
            <Header />
            <HoverEffect items={products} />
        </div>
    );
}

const products = [
    {
        title: 'Resourse Management System',
        link: 'https://github.com/anantrao17',
        thumbnail: '/projects/mern-memories.png'
    },
    {
        title: 'CodeServer',
        link: 'https://github.com/anantrao17',
        thumbnail: '/projects/next-event.png'
    },
    {
        title: 'InboxPixel',
        link: 'https://github.com/anantrao17',
        thumbnail: '/projects/devspace.png'
    }
];
