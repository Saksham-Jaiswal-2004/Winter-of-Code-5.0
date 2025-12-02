import Image from 'next/image';

const SponsorData: string[][] = [
    ["Devfolio"], // Platinum
    ["ETHIndia", "Indeed", "interviewBuddy"], // Gold
    ["aops"], // Silver
    []  // Bronze
];

const tier = ["Platinum", "Gold", "Silver", "Bronze"];

const Sponsors = () => {
    const TBA = false; // change to true if sponsors not announced

    // Map sponsor identifiers to actual image filenames in `/public/sponsors`.
    const sponsorFileMap: Record<string, string> = {
        devfolio: 'devfolio.png',
        ethindia: 'ethindia.png',
        indeed: 'Indeed.png',
        interviewbuddy: 'interviewBuddy.png',
        aops: 'aops.png',
    };
    return (
        <section className='w-full h-full mx-auto pt-[10%]' id="sponsors">
            {/* Heading */}
            <div className='text-center text-sponsors font-kleemax text-scale-40 drop-shadow-gold'>
                SPONSORS
            </div>

            {/* If sponsors not announced */}
            {TBA ? (
                <div className="pt-[5%] flex w-full justify-center text-[#C23B30] drop-shadow-red font-kleemax text-scale-30 font-semibold">
                    TO BE ANNOUNCED
                </div>
            ) : (
                <div className='w-full p-[10%] sm:p-[5%] flex flex-col'>
                    {SponsorData.map((tierData, index) => {
                        if (tierData.length === 0) return null;

                        return (
                            <div key={index} className='flex flex-wrap justify-center my-[2%] px-[5%] relative'>
                                {/* Tier banner */}
                                <Image
                                    className="backdrop-blur w-full"
                                    src={`${tier[index].toLowerCase()}.svg`}
                                    width={600}
                                    height={200}
                                    alt={`${tier[index]} tier banner`}
                                />

                                {/* Sponsors inside the tier */}
                                <div className="absolute w-[80%] flex h-[60%] top-[25%] gap-[5%] items-center justify-center">
                                    {tierData.map((sponsor, idx) => (
                                        <Image
                                            key={idx}
                                            className="backdrop-blur sm:w-[20%] h-auto w-[30%] hover:scale-105 duration-700"
                                            src={`/sponsors/${sponsorFileMap[sponsor.toLowerCase()] ?? `${sponsor.toLowerCase()}.png`}`}
                                            width={600}
                                            height={200}
                                            alt={`${sponsor} Logo`}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Apply Button */}
            <div className="flex w-full justify-center mt-[5%] px-4">
                <a href="https://www.notion.so/Sponsor-Application-Guide-Winter-of-Code-5-0-2b5489c63bf480568f41f626dea2e7b2?source=copy_link" target='_blank' rel="noopener noreferrer" className="w-full sm:w-auto flex justify-center">
                    <button
                        className="glow-button w-full sm:w-auto"
                        style={{
                            '--glow-color': '#44A7F0',
                            '--glow-spread-color': 'rgba(68, 167, 240, 0.781)',
                            '--enhanced-glow-color': 'rgb(100, 186, 245)',
                            '--btn-color': 'rgb(25, 80, 120)',
                        } as React.CSSProperties}
                    >
                        BECOME A SPONSOR
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

            <hr className="flex mt-[10%] max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black" />
        </section>
    );
};

export default Sponsors;
