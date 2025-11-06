import Image from 'next/image'
import partnercard from '../public/partner.svg'

interface Partner{
    name:string;
    link:string;
}
const partnerData:Partner[] = [
    {
        name: "GDG On Campus, AEC Mumbai",
        link: "https://gdg.community.dev/gdg-on-campus-atharva-college-of-engineering-mumbai-india"
    },
    {
        name: "GDG On Campus, VIT Mumbai",
        link: "https://gdg.community.dev/gdg-on-campus-vidyalankar-institute-of-technology-mumbai-india"
    },
    {
        name: "GDG On Campus, Dr. AITD Kanpur",
        link: "https://gdg.community.dev/gdg-on-campus-dr-ambedkar-institute-of-technology-for-handicapped-kanpur-india"
    },
    {
        name: "GDG On Campus, SAGE University Indore",
        link: "https://gdg.community.dev/gdg-on-campus-sage-university-indore-india"
    },
    {
        name: "GDG On Campus, Bengal Institute of Technology",
        link: "https://gdg.community.dev/gdg-on-campus-sage-university-indore-india"
    },
    {
        name: "GDG On Campus, NFSU Gandhinagar",
        link: "https://gdg.community.dev/gdg-on-campus-national-forensic-sciences-university-gandhinagar-india"
    },
    {
        name: "GDG On Campus, Dr. B.C. Roy Engineering College",
        link: "https://gdg.community.dev/gdg-on-campus-dr-bc-roy-engineering-college-durgapur-india"
    },
    {
        name: "GDG On Campus, GESCOE Nashik",
        link: "https://gdg.community.dev/gdg-on-campus-gokhale-education-societys-r-h-sapat-college-of-engineering-management-studies-and-research-nashik-india"
    },
    {
        name: "GDG On Campus, JIS University Kolkata",
        link: "https://gdg.community.dev/gdg-on-campus-jis-university-kolkata-india"
    },
    {
        name: "GDG On Campus, IMSEC Ghaziabad",
        link: "https://gdg.community.dev/gdg-on-campus-ims-engineering-college-ghaziabad-india/"
    },
    {
        name: "GDG On Campus, HIT Kolkata",
        link: "https://gdg.community.dev/gdg-on-campus-heritage-institute-of-technology-kolkata-india"
    },
    {
        name: "GDG On Campus, GNIT Kolkata",
        link: "https://gdg.community.dev/gdg-on-campus-guru-nanak-institute-of-technology-kolkata-india"
    },  
    {
        name: "IIITians Network",
        link: "https://linktr.ee/Iiitians.network"
    },
    {
        name: "NooBuild",
        link: "https://www.linkedin.com/company/noobuild/"
    },
    {
        name: "Sourcify",
        link: "https://www.linkedin.com/company/sourcifyin"
    }
  ];
  

const PartnerCard = ({partner} : {partner:Partner}) => {
    
    return (
            <a className="relative w-[45%] sm:w-[30%] gap-[2%] my-[2%] hover:scale-105 duration-700" href={partner.link} rel="noopener noreferrer" target="_blank" >
                <Image className="backdrop-blur" src={partnercard} alt="org card"/>
                <div className='absolute top-[4%] left-[10%] w-[80%] align-middle font-chakra font-bold text-scale-40-4 text-center text-timeline text-nowrap overflow-hidden'>
                {partner.name}
                </div>
                <div className={`absolute left-[50%] -translate-x-[50%] top-[26.5%] ${partner.name.startsWith("GDG On Campus") ? "w-[125%]" : "w-[90%]"} h-[60%] items-center flex overflow-hidden`}>
                    <Image src={`/partners/${partner.name}.${partner.name.startsWith("GDG On Campus") ? "svg" : "png"}`}
                    className='w-full h-fit mx-auto' width="500" height="500"  alt={partner.name}/>
                </div>
                
            </a>
    );
};

const Partners = () => {
    var TBA = true;
    
    return (
        <section className='w-full h-full mx-auto pt-[10%]' id="partners">
            <div className='text-center text-partner font-kleemax text-scale-40 drop-shadow-red'>
            COMMUNITY PARTNERS
            </div>
            {TBA ?
            <div className="pt-[5%] flex w-full justify-center text-[#E2AA06] drop-shadow-red font-kleemax text-scale-30 font-semibold">TO BE ANNOUNCED</div>
            :
            <div className='w-full p-[10%] sm:p-[5%] gap-[2%] flex justify-center flex-wrap'>
            {partnerData.map((partner, index)=>
            <PartnerCard key={index} partner={partner}/>
            )}
            </div>            
            }
            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50]"/>
        </section>
);

}

export default Partners;
