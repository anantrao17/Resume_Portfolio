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
        thumbnail: '/projects/ResourceMangementSystem.jpg'
    },
    {
        title: 'InboxPixel',
        link: 'https://inboxpixel.netlify.app/',
        thumbnail: '/projects/InboxPixel.png'
    },
    {
        title: 'Portfolio',
        link: 'https://portfolioanantrao.netlify.app/',
        thumbnail: '/projects/Portfolio.png'
    }
];
