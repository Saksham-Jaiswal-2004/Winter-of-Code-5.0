import Image from 'next/image';

const SponsorData: string[][] = [
    ["Devfolio"], // Platinum
    ["ETHIndia"], // Gold
    [], // Silver
    []  // Bronze
];

const tier = ["Platinum", "Gold", "Silver", "Bronze"];

const Sponsors = () => {
    const TBA = false; // change to false when sponsors are ready

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
                        if (tierData.length === 0) return null; // Skip empty tiers

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
                                            src={`/sponsors/${sponsor.toLowerCase()}.png`}
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

            <hr className="flex mt-[10%] max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black"/>
        </section>
    );
};

export default Sponsors;
