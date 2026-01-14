'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navline from '../public/navline.svg';

// Combined navigation items in the requested order
const menuItems = [
    { name: "Timeline", href: "/#timeline" },
    { name: "Organizations", href: "/#orgs" },
    { name: "Sponsors", href: "/#sponsors" },
    { name: "Projects", href: "/projects" },
    { name: "FAQs", href: "/faqs" },
    { name: "Partners", href: "/community-partners" },
    { name: "Team", href: "/team" },
];

// Desktop navigation split
const navigationleft = [
    { name: "Timeline", href: "/#timeline", current: false },
    { name: "Organizations", href: "/#orgs", current: false },
    { name: "Sponsors", href: "/#sponsors", current: false },
    // { name: "Events", href: "/#sponsors", current: false },
];
const navigationright = [
    { name: "Projects", href: "/projects", current: false },
    { name: "FAQs", href: "/faqs", current: false },
    { name: "Partners", href: "/community-partners", current: false },
    { name: "Team", href: "/team", current: false },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        if (isOpen) {
            closeMenu();
        } else {
            setIsOpen(true);
            document.body.style.overflow = 'hidden';
        }
    };

    const closeMenu = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
            document.body.style.overflow = '';
        }, 300);
    }, []);

    // Handle smooth scroll and close menu
    const handleMenuItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.includes('#')) {
            e.preventDefault();
            const targetId = href.split('#')[1];
            const targetElement = document.getElementById(targetId);

            closeMenu();

            setTimeout(() => {
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    // If element is on different page, navigate
                    window.location.href = href;
                }
            }, 350);
        } else {
            closeMenu();
        }
    };

    // Create ripple effect on tap
    const createRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.className = 'ripple';

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    };

    // Close menu on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                closeMenu();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeMenu]);

    // Vibration feedback (if supported)
    const vibrateOnTap = () => {
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }
    };

    return (
        <nav className="z-[2000] sticky flex-col flex w-full top-0 gap-[1%]">
            {/* Main navbar container - 80px height on mobile */}
            <div className="flex flex-row items-center w-full justify-center transition-all duration-200 ease-in-out h-[40px] sm:h-auto sm:pt-[calc(0.5%+8px)] sm:pb-[8px] bg-black relative">
                {/* Logo - centered */}
                <Link href="/" className="text-[28px] sm:text-scale-30-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:translate-y-[-40%] flex justify-center text-brand font-kleemax z-10">
                    WOC
                </Link>

                {/* Hamburger Icon - Mobile Only (hidden when menu is open) */}
                {!isOpen && (
                    <button
                        onClick={toggleMenu}
                        className="sm:hidden z-[2100] w-[44px] h-[44px] flex flex-col justify-center items-center gap-[7px] cursor-pointer group rounded-lg hover:bg-brand/10 transition-all duration-300 absolute top-1/2 -translate-y-1/2 right-5"
                        aria-label="Open menu"
                        aria-expanded={isOpen}
                    >
                        <span className="hamburger-line block w-[26px] h-[3px] bg-brand rounded-full group-hover:drop-shadow-brand transition-all duration-300" />
                        <span className="hamburger-line block w-[26px] h-[3px] bg-brand rounded-full group-hover:drop-shadow-brand transition-all duration-300" />
                        <span className="hamburger-line block w-[26px] h-[3px] bg-brand rounded-full group-hover:drop-shadow-brand transition-all duration-300" />
                    </button>
                )}

                {/* Desktop Navigation - Left */}
                <div className="flex-col hidden sm:flex-row w-full items-end sm:items-center justify-start px-[2%] gap-[2%] sm:flex">
                    {navigationleft.map((item) => (
                        <Link href={item.href} className={`font-chakra font-bold text-brand text-scale-20-8 sm:px-[0.5%] hover:drop-shadow-blue hover:scale-110 duration-700 ${item.current ? "text-white" : ""}`} key={item.name}>
                            {item.name.toUpperCase()}
                        </Link>
                    ))}
                </div>

                <div className="flex w-[30%]"></div>

                {/* Desktop Navigation - Right */}
                <div className="flex-col hidden sm:flex-row w-full items-end sm:items-center sm:justify-end px-[2%] gap-[2%] sm:flex">
                    {navigationright.map((item) => (
                        <Link href={item.href} className={`font-chakra font-bold text-brand text-scale-20-8 sm:px-[0.5%] hover:drop-shadow-blue hover:scale-110 duration-700 ${item.current ? "text-white" : ""}`} key={item.name}>
                            {item.name.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Navline decoration */}
            <Image className="flex sm:0 mt-[-1px]" src={navline} alt="navline" />

            {/* Mobile Menu Full-Screen Overlay */}
            {isOpen && (
                <>
                    {/* Semi-transparent backdrop - covers entire screen */}
                    <div
                        className={`sm:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998] ${isClosing ? 'backdrop-exit' : 'backdrop-enter'}`}
                        onClick={closeMenu}
                        aria-hidden="true"
                    />

                    {/* Full-Screen Menu Panel */}
                    <div
                        ref={menuRef}
                        className={`sm:hidden fixed inset-0 bg-black z-[9999] flex flex-col scan-lines ${isClosing ? 'menu-panel-exit' : 'menu-panel-enter'}`}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation menu"
                    >
                        {/* Close Button (X) - Top Right */}
                        <button
                            onClick={closeMenu}
                            className="absolute top-5 right-5 z-[10000] w-[44px] h-[44px] flex items-center justify-center cursor-pointer rounded-full border-2 border-brand/50 hover:border-brand hover:bg-brand/10 transition-all duration-300 group close-button-glow"
                            aria-label="Close menu"
                        >
                            <svg
                                className="w-6 h-6 text-brand group-hover:drop-shadow-brand transition-all duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Menu Items - centered vertically */}
                        <div className="flex flex-col justify-center items-center h-full px-8 gap-2">
                            {menuItems.map((item, index) => (
                                <div key={item.name} className="w-full max-w-[280px]">
                                    <Link
                                        href={item.href}
                                        onClick={(e) => {
                                            vibrateOnTap();
                                            createRipple(e);
                                            handleMenuItemClick(e, item.href);
                                        }}
                                        className="menu-item menu-item-glow ripple-container block py-4 px-6 font-chakra font-bold text-white text-xl tracking-wide transition-all duration-300 active:scale-[1.02] text-center"
                                    >
                                        {item.name.toUpperCase()}
                                    </Link>
                                    {index < menuItems.length - 1 && (
                                        <div className="gradient-divider mx-4" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
