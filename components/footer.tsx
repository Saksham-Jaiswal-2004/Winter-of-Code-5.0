"use client";

import Link from 'next/link';
import Image from 'next/image'
import footer from '../public/footer.svg'
import instagram from '../public/instagram.svg'
import twitter from '../public/twitter.svg'
import discord from '../public/discordlogo.svg'
import linkedin from '../public/linkedin.svg'
import mailbox from '../public/mailbox.svg'
import submit from '../public/submit.svg'

const resources = [
    { title: "Past Organizations", link: "/past-organizations" },
    { title: "Organisation Brochure", link: "https://drive.google.com/file/d/117rMEB4imPUtNh0RtCQ-A-FK5wGMWM-y/view?usp=sharing" },
    { title: "Sponsorship Brochure", link: "https://drive.google.com/file/d/1PoIAPuFCb9t3JXuMxfALirBnIrGs9GmT/view?usp=sharing" },
    { title: "WoC 5.0 Policies & Guidelines", link: "https://www.notion.so/Winter-of-Code-5-0-Official-Policies-Legal-Guidelines-2a6489c63bf4806593abcfd35a481976?source=copy_link" },
]

const Footer = () => {
    const handleClick = () => {
        var url = "https://mail.google.com/mail/?view=cm&fs=1&to=dsc.iiitkalyani@gmail.com&su=";
        var terminal = document.getElementById("terminal-input") as HTMLInputElement;
        window.open(url + terminal.value.toUpperCase(), '_blank');
    }

    return (
        <div className="flex pb-[1%] px-[5%] w-full justify-between"
            style={{ backgroundImage: `url(${footer.src})`, backgroundSize: "cover" }}>

            <div className="flex-col flex w-[25%] justify-between m-[1%]">
                <div className="w-full text-scale-305 text-black font-kleemax border-outline">
                    WOC
                </div>

                <div className="flex gap-[4%] items-center justify-start">
                    <Link href="https://www.instagram.com/gdgiiitkalyani/" target="_blank" className="w-[22%]">
                        <Image className="bg-gradient-radial from-white via-white via-60% to-transparent to-60% hover:scale-110 duration-700"
                            src={instagram} alt="instagram" />
                    </Link>

                    <Link href="https://x.com/gdsciiitkalyani" target="_blank" className="w-[22%]">
                        <Image className="bg-gradient-radial from-white via-white via-60% to-transparent to-60% hover:scale-110 duration-700"
                            src={twitter} alt="twitter" />
                    </Link>

                    <Link href="https://discord.gg/BP6rPGfujM" target="_blank" className="w-[22%]">
                        <Image className="p-[7.5%] hover:scale-110 duration-700"
                            src={discord} alt="discord" />
                    </Link>

                    <Link href="https://www.linkedin.com/company/gdsc-iiit-kalyani" target="_blank" className="w-[19%] relative">
                        <Image className="bg-gradient-radial from-white via-white via-65% to-transparent to-65% hover:scale-110 duration-700"
                            src={linkedin} alt="linkedin" />
                    </Link>
                </div>
            </div>

            <div className="flex-col flex w-[50%] m-[1%] justify-end items-center text-center">
                <div className="text-scale-40-5 text-white font-chakra w-[90%] m-[1%]">
                    RESOURCES
                </div>

                {resources.map((resource, index) => (
                    <Link href={resource.link} target="_blank" key={index}
                        className="text-scale-30-5 text-white font-chakra w-[90%] m-[1%] hover:scale-110 duration-700">
                        {resource.title}
                    </Link>
                ))}

                <div className="text-scale-40-6 text-white font-chakra text-wrap w-[90%] m-[1%]">
                    © GDG IIIT KALYANI 2026
                </div>
            </div>

            <div className="flex-col flex w-[25%] mt-[2%]">
                <div className="text-scale-60-6 text-white font-kleemax text-wrap w-[90%] m-[1%]">
                    EMAIL US FOR MORE DETAILS
                </div>

                <div className="flex w-full justify-between">
                    <div className="relative w-[80%]">
                        <Image className="w-full" src={mailbox} alt="mailbox" />
                        <input
                            type="text"
                            id="terminal-input"
                            className="absolute bottom-[7%] w-full h-full font-kleemax text-scale-160 text-wrap overflow-scroll pt-[6%] px-[8%] uppercase terminal-input placeholder-orgs"
                            placeholder="____"
                        />
                    </div>

                    <Image className="w-[16%] cursor-pointer"
                        src={submit} alt="submit"
                        onClick={handleClick} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
