import Image from 'next/image'
import Link from 'next/link'
import asset1 from '../public/team.svg'
import asset2 from '../public/teamLink.svg'
import asset3 from '../public/teamName.svg'
import JumbleText from '@/components/jumble'
interface Teammate{
    name:string;
    bio:string;
}

const teamData:Teammate[] = [
    {
        name:'Saksham Jaiswal',
        bio: 'https://www.linkedin.com/in/saksham-jaiswal-220637302/',
    },
    {
        name:'Akansha Gupta',
        bio: 'https://www.linkedin.com/in/akansha-gupta-b16972324/',
    },
    {
        name:'Satya Yadav',
        bio: 'https://www.linkedin.com/in/satya-yadav-22798b323/',
    },
    {
        name:'Harsh Raj',
        bio: 'https://www.linkedin.com/in/harshraj112/',
    },
    {
        name: 'Harsh Dev Jha',
        bio: 'https://www.linkedin.com/in/harsh-dev-jha/',
    },
    {
        name: 'Swarnabha Khamrui',
        bio: 'https://www.linkedin.com/in/swarnabha-khamrui-396353321/',
    },
    {
        name:'Sarbajit Kumar De',
        bio: 'https://www.linkedin.com/in/sarbajit-kumar-de-864a1728a/',
    },
    {
        name:'Mohit Negi',
        bio: 'https://www.linkedin.com/in/mohit-negi-3a1368319/',
    },
    {
        name:'Awnikant Ajay',
        bio: 'https://www.linkedin.com/in/awnikant/',
    },
    {
        name:'Srijan Srivastava',
        bio: 'https://www.linkedin.com/in/srijan-srivastava-99a66b33b/',
    },
    {
        name:'Shwet Raj',
        bio: 'https://www.linkedin.com/in/shwet-raj-5a9b312ba/',
    },
    {
        name:'Suraj Kumar',
        bio: 'https://www.linkedin.com/in/suraj-kumar-370561316/',
    },
    {
        name:'Sahil Sujit Singh',
        bio: 'https://www.linkedin.com/in/sahil-sujit-singh-999739338/',
    },
    {
        name:'Devansh Shukla',
        bio: 'https://www.linkedin.com/in/devansh-shukla-538294322/',
    },
    {
        name:'Sakshi Dhriti',
        bio: 'https://www.linkedin.com/in/sakshi-dhriti-9ba463381/',
    },
    {
        name:'Adrisha Biswas',
        bio: 'https://www.linkedin.com/in/adrisha-biswas-bb4067381/',
    },
    {
        name:'Anurag Anand Pandit',
        bio: 'https://www.linkedin.com/in/anurag-pandit-19673736a/',
    },
    {
        name:'Ayush Lahiri',
        bio: 'https://www.linkedin.com/in/ayush-lahiri-510786384/',
    },
    {
        name:'Subhra Sekhar Garai',
        bio: 'https://www.linkedin.com/in/znackt/',
    },
];

const TeamCard = ({name,bio} : Teammate) => {
    var fname=name.split(" ")[0].toUpperCase();
    return (
            <div className="relative w-[35%] sm:w-[20%] my-[1.5%] overflow-hidden hover:scale-105 duration-700">
                <Image src={asset1} alt="teammate card"/>
                <Image className="absolute left-[5%] w-[90%] bottom-[5%] aspect-square" width="500" height="500" src={`/team/${name}.jpg`} alt="teammate image"/>
                <Image className="z-10 absolute left-[10%] w-[80%] bottom-[0%]" src={asset3} alt="teammate name"/>
                <div className='z-10 absolute bottom-[calc(2%-3px)] left-[10%] w-[80%] align-middle font-kleemax text-scale-60-3 text-center text-black text-nowrap overflow-hidden'>
                {fname.toUpperCase()}
                </div>
                <Link href={bio} rel="noopener noreferrer" target="_blank" className='absolute top-[2.5%] right-[3.5%] w-[6%] hover:scale-110 duration-700'>
                    <Image src={asset2} alt="teammate link"/>
                </Link>
            </div>
    );
};


const Team = () => {
    var TBA = false;
    return (
        <section className='w-full h-full mx-auto pt-[5%] bg-black' id="team">
            <div className='text-center text-team font-kleemax text-scale-40 drop-shadow-sky'>
            <JumbleText text="OUR TEAM" id="teamjumble"/>
            </div>
            {TBA ?
            <div className="pt-[5%] flex w-full justify-center text-team drop-shadow-sky font-kleemax text-scale-30 font-semibold">TO BE ANNOUNCED</div>
            :
            <div className='pt-[5%] w-full gap-[calc(3%+4px)] flex justify-center flex-wrap'>
            {teamData.map((teamMate, index)=>
            <TeamCard key={index} name={teamMate.name} bio={teamMate.bio}/>
            )}
            </div>            
            }
            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black"/>
        </section>
);

}

export default Team;