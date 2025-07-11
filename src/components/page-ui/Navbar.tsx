'use client';
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

import { ModeToggle } from '@/components/page-ui/ModeToggle';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';

export function Navbar() {
    return (
        <div className="relative flex w-full items-center justify-center">
            <NavbarComponent className="top-2" />
        </div>
    );
}

function NavbarComponent({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
            <Menu setActive={setActive}>
                <a href="#landing-page">Home</a>
                <MenuItem setActive={setActive} active={active} item="Navigation">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#experience">Experience</HoveredLink>
                        <HoveredLink href="#skills">Skills</HoveredLink>
                        <HoveredLink href="#projects">Projects</HoveredLink>
                        <HoveredLink href="#contact-me">Contact Me</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Social">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#" rel="noopener noreferrer" target="_blank">
                            <GitHubLogoIcon className="mr-1" /> Github
                        </HoveredLink>
                        <HoveredLink href="#" rel="noopener noreferrer" target="_blank">
                            <LinkedInLogoIcon className="mr-1" /> Linkedin
                        </HoveredLink>
                        <HoveredLink href="" rel="noopener noreferrer" target="_blank">
                            <TwitterLogoIcon className="mr-1" />
                            X/Twitter
                        </HoveredLink>
                    </div>
                </MenuItem>
                <ModeToggle />
            </Menu>
        </div>
    );
}
