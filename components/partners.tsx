import Image from 'next/image'
import partnercard from '../public/partner.svg'

interface Partner {
    name: string;
    link: string;
}

const partnerData: Partner[] = [
    {
        name: "GDG On Campus IEM",
        link: "https://www.linkedin.com/company/gdsciem"
    },
    {
        name: "Magistics",
        link: "https://www.linkedin.com/company/magistics/"
    },
    {
        name: "Google Developer Group Vidyalankar Institute of Technology",
        link: "https://www.linkedin.com/company/google-developer-groups-vit-mumbai"
    },
    {
        name: "GDG on Campus BCREC",
        link: "https://www.linkedin.com/company/gdsc-bcrec"
    },
    {
        name: "Sourcify IN",
        link: "https://www.linkedin.com/company/sourcifyin/"
    },
    {
        name: "GDG on Campus GCECT",
        link: "https://www.linkedin.com/company/google-developer-groups-on-campus-gcect"
    },
    {
        name: "ByteBrigade",
        link: "https://www.linkedin.com/company/byte-brigade2025/"
    },
    {
        name: "GDG AOT",
        link: "https://www.linkedin.com/company/gdgocaot/"
    },
    {
        name: "GDG JIS",
        link: "https://www.linkedin.com/company/dscjisu/"
    },
    {
        name: "AITD-EVENTS",
        link: "https://www.linkedin.com/in/aitd-events/"
    },
    {
        name: "Apertre",
        link: "https://www.linkedin.com/showcase/apertre25/"
    },
    {
        name: "rootsprout",
        link: "https://www.linkedin.com/company/rootsprout/"
    },
    {
        name: "DevDotCom",
        link: "https://www.linkedin.com/company/devdotcom/"
    },
    {
        name: "MCKV GDG",
        link: "https://www.linkedin.com/company/gdg-on-campus-mckv-institute-of-engineering-howrah-india"
    },
];

const PartnerCard = ({ partner }: { partner: Partner }) => {
    const isLarge = partner.name === 'rootsprout' || partner.name === 'ByteBrigade';
    return (
        <a
            className="relative w-[45%] sm:w-[30%] gap-[2%] my-[2%] hover:scale-105 duration-700"
            href={partner.link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image className="backdrop-blur" src={partnercard} alt="" />
            <div className='absolute top-[4%] left-[10%] w-[80%] font-chakra font-bold text-scale-40-4 text-center text-timeline text-nowrap overflow-hidden'>
                {partner.name}
            </div>

            <div
                className={`absolute left-[50%] -translate-x-[50%] top-[28%] ${partner.name.startsWith("GDG On Campus") ? "w-[85%]" : "w-[65%]"
                    } h-[55%] items-center flex overflow-hidden`}
            >
                <Image
                    src={`/partners/${partner.name}.png`}
                    className={`w-full h-full mx-auto object-contain ${isLarge ? 'transform scale-150' : ''}`}
                    width={isLarge ? 900 : 500}
                    height={isLarge ? 900 : 500}
                    alt={partner.name}
                />
            </div>
        </a>
    );
};

const Partners = () => {
    var TBA = false;

    return (
        <section className='w-full h-full mx-auto pt-[10%]' id="partners">
            <div className='text-center text-partner font-kleemax text-scale-50 drop-shadow-red'>
                COMMUNITY PARTNERS
            </div>

            {TBA ? (
                <div className="pt-[5%] flex w-full justify-center text-[#E2AA06] drop-shadow-red font-kleemax text-scale-40 font-semibold">
                    TO BE ANNOUNCED
                </div>
            ) : (
                <div className='w-full pt-[8%] px-[10%] sm:px-[5%] gap-[2%] flex justify-center flex-wrap'>
                    {partnerData.map((partner, index) =>
                        <PartnerCard key={index} partner={partner} />
                    )}
                </div>
            )}

            {/* APPLY BUTTON */}
            <div className="flex w-full justify-center mt-[5%] px-4">
                <a href="https://forms.gle/X2H524b3NjuUvESbA" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex justify-center">
                    <button
                        className="glow-button w-full sm:w-auto"
                        style={{
                            '--glow-color': '#44A7F0',
                            '--glow-spread-color': 'rgba(68, 167, 240, 0.781)',
                            '--enhanced-glow-color': 'rgb(100, 186, 245)',
                            '--btn-color': 'rgb(25, 80, 120)',
                        } as React.CSSProperties}
                    >
                        JOIN THE COMMUNITY
                    </button>
                </a>
            </div>

            <style jsx>{`
                .glow-button {
                    border: 0.25em solid var(--glow-color);
                    padding: 0.8em 1.5em;
                    color: var(--glow-color);
                    font-size: 12px;
                    font-weight: bold;
                    font-family: 'Chakra Petch', sans-serif;
                    cursor: pointer;
                    background-color: var(--btn-color);
                    border-radius: 1em;
                    outline: none;
                    box-shadow: 0 0 1em 0.25em var(--glow-color),
                        0 0 4em 1em var(--glow-spread-color),
                        inset 0 0 0.74em 0.25em var(--glow-color);
                    text-shadow: 0 0 0.5em var(--glow-color);
                    position: relative;
                    transition: all 0.3s;
                }
                
                @media (min-width: 640px) {
                    .glow-button {
                        padding: 1em 3em;
                        font-size: 15px;
                    }
                }
                
                .glow-button::after {
                    pointer-events: none;
                    content: "";
                    position: absolute;
                    top: 120%;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    background-color: var(--glow-spread-color);
                    filter: blur(2em);
                    opacity: 0.7;
                    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
                }
                
                .glow-button:hover {
                    color: var(--btn-color);
                    background-color: var(--glow-color);
                    box-shadow: 0 0 1em 0.25em var(--glow-color),
                        0 0 4em 2em var(--glow-spread-color),
                        inset 0 0 0.75em 0.25em var(--glow-color);
                }
                
                .glow-button:active {
                    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
                        0 0 2.5em 2em var(--glow-spread-color),
                        inset 0 0 0.5em 0.25em var(--glow-color);
                }
            `}</style>

            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50]" />
        </section>
    );
}

export default Partners;