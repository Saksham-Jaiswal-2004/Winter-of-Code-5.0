import Image from 'next/image'
import partnercard from '../public/partner.svg'
import faqCard from '../public/faqcard1.svg'
import JumbleText from '@/components/jumble'
import Link from 'next/link'
import pastOrgs from '../data/pastOrgs.json'
import pastStat from '../data/pastStats.json'

interface PastOrg {
    name: string;
    link: string;
    image: string;
    version: string;
}

interface PastStats {
    name: string;
    data: string;
    version: string;
}

const pastOrgData: PastOrg[] = pastOrgs
const pastStatData: PastStats[] = pastStat

const PastOrgCard = ({ org }: { org: PastOrg }) => {
    return (
        <a
            className="relative w-[45%] sm:w-[30%] gap-[2%] my-[2%] hover:scale-105 duration-700"
            href={org.link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image className="backdrop-blur" src={partnercard} alt="" />
            <div className='absolute top-[4%] left-[10%] w-[80%] font-chakra font-bold text-scale-40-4 text-center text-orgs text-nowrap overflow-hidden'>
                {org.name}
            </div>

            <div
                className="absolute left-[50%] -translate-x-[50%] top-[28%] w-[65%] h-[55%] items-center flex overflow-hidden"
            >
                <img
                    src={`/past-orgs/${org.image}`}
                    className='w-full h-full mx-auto object-contain'
                    alt={org.name}
                />
            </div>
        </a>
    );
};

const PastStatCard = ({ stats }: { stats: PastStats }) => {
    return (
        <div className="relative w-[45%] sm:w-[22%] gap-[2%] my-[2%]">
            <Image className="backdrop-blur" src={faqCard} alt="" />
            <div className='absolute top-[4%] left-[10%] w-[80%] font-chakra font-bold text-scale-40-4 text-center text-faq text-nowrap overflow-hidden'>
                <p className='text-lg'>{stats.name}</p>
            </div>

            <div className="absolute left-[50%] -translate-x-[50%] top-[28%] w-[65%] h-[55%] text-grey justify-center items-center flex overflow-hidden font-kleemax">
              <p className='text-2xl'>{stats.data}</p>
            </div>
        </div>
    );
};

const PastOrganizations = () => {
    return (
        <section className='w-full h-full mx-auto pt-[10%]' id="past-orgs">
            <div className='text-center text-orgs font-kleemax text-scale-50 drop-shadow-gold'>
                PAST ORGANIZATIONS
            </div>

            {/* Winter of Code 4.0 */}
            <div className="hidden sm:flex justify-center items-center w-full 2xl:pt-[2.5%] mt-16"> 
                <hr className="w-full max-w-[625px] h-[0.25vw] bg-gradient-to-l from-brand"/>
                <div className="relative flex justify-center text-scale-30-5 bg-black text-brand hover:scale-110 duration-700 cursor-pointer text-nowrap font-kleemax">
                    <Link href="https://winter-of-code-4-0.vercel.app/" rel="noopener noreferrer" target="_blank" className="text-nowrap pt-[1.5%] font-kleemax">
                        <JumbleText text="WINTER OF CODE 4.0" id="registerhere"/>
                    </Link>
                </div>
                <hr className="w-full h-[0.25vw] bg-gradient-to-r from-brand"/>
            </div>

            <div className='w-full pt-[2%] px-[10%] sm:px-[5%] gap-[2%] flex justify-center flex-wrap'>
                {pastStatData.map((stat, index) =>
                    stat.version === "4" ? <PastStatCard key={index} stats={stat} /> : ""
                )}
            </div>

            <div className='w-full pt-[2%] px-[10%] sm:px-[5%] gap-[2%] flex justify-center flex-wrap'>
                {pastOrgData.map((org, index) =>
                    org.version === "4" ? <PastOrgCard key={index} org={org} /> : ""
                )}
            </div>

            {/* Winter of Code 3.0 */}
            <div className="hidden sm:flex justify-center items-center w-full 2xl:pt-[2.5%] mt-16"> 
                <hr className="w-full max-w-[625px] h-[0.25vw] bg-gradient-to-l from-brand"/>
                <div className="relative flex justify-center text-scale-30-5 bg-black text-brand hover:scale-110 duration-700 cursor-pointer text-nowrap font-kleemax">
                    <Link href="https://winter-of-code-3-0.vercel.app/" rel="noopener noreferrer" target="_blank" className="text-nowrap pt-[1.5%] font-kleemax">
                        <JumbleText text="WINTER OF CODE 3.0" id="registerhere"/>
                    </Link>
                </div>
                <hr className="w-full h-[0.25vw] bg-gradient-to-r from-brand"/>
            </div>

            <div className='w-full pt-[2%] px-[10%] sm:px-[5%] gap-[2%] flex justify-center flex-wrap'>
                {pastStatData.map((stat, index) =>
                    stat.version === "3" ? <PastStatCard key={index} stats={stat} /> : ""
                )}
            </div>

            <div className='w-full pt-[2%] px-[10%] sm:px-[5%] gap-[2%] flex justify-center flex-wrap'>
                {pastOrgData.map((org, index) =>
                    org.version === "3" ? <PastOrgCard key={index} org={org} /> : ""
                )}
            </div>
            
            {/* Winter of Code 2.0 */}
            <div className="hidden sm:flex justify-center items-center w-full 2xl:pt-[2.5%] mt-16"> 
                <hr className="w-full max-w-[625px] h-[0.25vw] bg-gradient-to-l from-brand"/>
                <div className="relative flex justify-center text-scale-30-5 bg-black text-brand hover:scale-110 duration-700 cursor-pointer text-nowrap font-kleemax">
                    <Link href="https://winter-of-code-77957.web.app/" rel="noopener noreferrer" target="_blank" className="text-nowrap pt-[1.5%] font-kleemax">
                        <JumbleText text="WINTER OF CODE 2.0" id="registerhere"/>
                    </Link>
                </div>
                <hr className="w-full h-[0.25vw] bg-gradient-to-r from-brand"/>
            </div>

            <div className='w-full pt-[2%] px-[10%] sm:px-[5%] gap-[2%] flex justify-center flex-wrap'>
                {pastStatData.map((stat, index) =>
                    stat.version === "2" ? <PastStatCard key={index} stats={stat} /> : ""
                )}
            </div>

            <div className='w-full pt-[2%] px-[10%] sm:px-[5%] gap-[2%] flex justify-center flex-wrap'>
                {pastOrgData.map((org, index) =>
                    org.version === "2" ? <PastOrgCard key={index} org={org} /> : ""
                )}
            </div>
            
            {/* Winter of Code 1.0 */}
            <div className="hidden sm:flex justify-center items-center w-full 2xl:pt-[2.5%] mt-16"> 
                <hr className="w-full max-w-[625px] h-[0.25vw] bg-gradient-to-l from-brand"/>
                <div className="relative flex justify-center text-scale-30-5 bg-black text-brand hover:scale-110 duration-700 cursor-pointer text-nowrap font-kleemax">
                    <Link href="https://saksham-jaiswal-2004.github.io/Winter-of-Code-1.0/" rel="noopener noreferrer" target="_blank" className="text-nowrap font-kleemax">
                        <JumbleText text="WINTER OF CODE 1.0" id="registerhere"/>
                    </Link>
                </div>
                <hr className="w-full h-[0.25vw] bg-gradient-to-r from-brand"/>
            </div>

            <div className='w-full pt-[2%] px-[10%] sm:px-[5%] gap-[2%] flex justify-center flex-wrap'>
                {pastStatData.map((stat, index) =>
                    stat.version === "1" ? <PastStatCard key={index} stats={stat} /> : ""
                )}
            </div>

            <div className='w-full pt-[2%] px-[10%] sm:px-[5%] gap-[2%] flex justify-center flex-wrap'>
                {pastOrgData.map((org, index) =>
                    org.version === "1" ? <PastOrgCard key={index} org={org} /> : ""
                )}
            </div>

            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50]" />
        </section>
    );
}

export default PastOrganizations;
