import {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image'
import navline from '../public/navline.svg'
import bars from '../public/bars.svg'
import React from 'react';
const navigationleft = [
    { name: "Timeline", href: "/#timeline", current: false },
    { name: "Organizations", href: "/#orgs", current: false }, 
    { name: "Sponsors", href: "/#sponsors", current: false },
];
const navigationright = [
    { name: "Projects", href: "/projects", current: false },
    { name: "FAQs", href: "/faqs", current: false },
    { name: "Partners", href: "/community-partners", current: false },
    { name: "Team", href: "/team", current: false },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="z-[2000] sticky flex-col flex w-full top-0 gap-[1%]">
            <div className="flex flex-col items-end sm:flex-row w-full justify-center h-full pt-[calc(0.5%+8px)] bg-black pb-[8px]">
                <Link href="/" className="text-scale-30-5 w-[14%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:translate-y-[-40%] flex justify-center text-brand font-kleemax">
                    WOC
                </Link>
                <Image className="sm:hidden aspect-square w-[calc(5%+8px)] h-fit bg-brand m-[2%]" src={bars} alt="bars" onClick={toggleMenu}/>
                <div className="flex-col flex sm:flex-row w-full items-end sm:items-center justify-start px-[2%] gap-[2%]">
                    {navigationleft.map((item) => (
                    <Link href={item.href} className={`font-chakra font-bold text-brand text-scale-20-8 sm:px-[0.5%] hover:drop-shadow-blue hover:scale-110 duration-700 sm:block ${isOpen? "block" : "hidden" } ${item.current? "text-white":""}`} key={item.name}>
                        {item.name.toUpperCase()}
                    </Link>
                    ))}
                </div>
                <div className="flex w-[30%]"></div>
                <div className="flex-col flex sm:flex-row w-full items-end sm:items-center sm:justify-end px-[2%] gap-[2%]">
                    {navigationright.map((item) => (
                    <Link href={item.href} className={`font-chakra font-bold text-brand text-scale-20-8 sm:px-[0.5%] hover:drop-shadow-blue hover:scale-110 duration-700 sm:block ${isOpen? "block" : "hidden" } ${item.current? "text-white":""}`} key={item.name}>
                        {item.name.toUpperCase()}
                    </Link>
                    ))}
                </div>
            </div>
            <Image className="flex sm:0 mt-[-1px]" src={navline} alt="navline"/>
        </nav>

    );
};

export default Navbar;

