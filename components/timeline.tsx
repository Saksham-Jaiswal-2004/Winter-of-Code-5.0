import Image from 'next/image'
import card1 from '../public/timelinecard1.svg'
import card2 from '../public/timelinecard2.svg'
import start from '../public/start.svg'
import asset2 from '../public/triangle.svg'
import asset3 from '../public/triangle2.svg'
import asset4 from '../public/web.svg'
import asset5 from '../public/lock.svg'
interface TEvent{
    startDate:string;
    title:string;
    description:string;
    endDate?: string;
}

const numerate = (index:number) => {
    if(index<10){
        return `0${index}`
    }
    return index
}

//*
const timelineData:TEvent[] = [
    {
      startDate: '15-11-2025',
      endDate: '15-12-2025',
      title: 'Student Applications',
      description: 'This marks the period when students can submit their applications to participate in Winter of Code. Ensure your application is complete before the deadline!'
    },
    {
      startDate: '10-01-2026',
      title: 'Inaugural Ceremony',
      description: 'The official start of Winter of Code! Join us for an introductory session where we’ll walk you through the program’s timeline, expectations, and the exciting journey ahead.'
    },
    {
      startDate: '10-01-2026',
      endDate: '20-01-2026',
      title: 'Proposal Writing',
      description: 'A week-long workshop focused on helping students write strong, well-structured project proposals. Get guidance from mentors and learn the best practices for proposing your project ideas.'
    },
    {
      startDate: '25-01-2026',
      endDate: '31-01-2026',
      title: 'Community Bonding Phase',
      description: 'This phase encourages students and mentors to connect, discuss their projects, and build rapport with the organisations. It’s a great opportunity to understand your project’s goals better before diving into coding.'
    },
    {
      startDate: '01-02-2026',
      endDate: '15-03-2026',
      title: 'Coding\nPhase',
      description: 'This is where the real fun begins! The core phase of Winter of Code, where students begin implementing their proposed projects. During this period, students will collaborate closely with mentors and contribute code to open-source repositories.'
    },
    {
      startDate: '16-03-2026',
      endDate: '07-04-2026',
      title: 'Mentor Evaluation',
      description: 'Mentors will review the progress of students’ projects, providing feedback and guidance. This evaluation is crucial for refining and improving the final submission.'
    },
    {
      startDate: '10-04-2026',
      title: 'Closing Ceremony',
      description: 'The official conclusion of Winter of Code. Celebrate your achievements, review key learnings, and recognize outstanding contributors as we wrap up the program.'
    }
  ];
//*/  
interface TimelineCardProps {
    event: TEvent;
    index: number;
}

const TimelineCard = ({ event, index }: TimelineCardProps) => {
    var hasEnd = event.endDate ? true : false;
    var card =  hasEnd ? card2 : card1
    var source = index%2===0 ? asset2 : asset3
    var TBA = false;
    return (
        <div className={`${hasEnd ? "mb-[4%]" : ""} sm:mt-[-5%] w-full sm:flex ${index%2===0 ? "flex-row-reverse" : ""}`}>
            <div className={`relative w-fit max-w-[80%] sm:max-w-[40%] mx-auto sm:mx-0`}>
                <Image className="backdrop-blur" src={card} alt="timeline card"/>
                <div className='absolute top-0 left-0 p-[2%] font-kleemax font-xl w-[40%] text-center text-white text-scale-30 text-nowrap overflow-hidden'>
                {event.startDate.toUpperCase()}
                </div>
                <div className='absolute top-0 right-0 p-[1%] font-kleemax w-[20%] text-center text-white text-scale-60 text-nowrap overflow-hidden'>
                {numerate(index+1)}
                </div>
                <pre className={`absolute ${hasEnd ? "top-[18.0%]" : "top-[19.0%]"} left-[25%] pr-[2%] align-middle font-kleemax w-[75%] text-scale-50 text-left text-timeline text-wrap overflow-hidden`}>
                {event.title.toUpperCase()}
                </pre>
                <div className={`absolute ${hasEnd ? "top-[44%] h-[35%]" : "top-[46.5%] h-[37%]"} left-0 p-[2%] w-[100%] text-left font-chakra text-grey text-scale-25 overflow-hidden`}>
                {event.description}
                {TBA && 
                <div className="absolute flex justify-center top-[30%] w-full">
                    <Image className="w-[6%] drop-shadow-red" src={asset5} alt="lock" />
                    <p className="pl-[2%] pt-[2%] text-timeline font-kleemax drop-shadow-redmini text-scale-50 font-semibold align-baseline">TO BE ANNOUNCED</p>
                </div>
                }
                </div>
                {event.endDate && <div className='absolute bottom-[-0.5%] left-0 p-[2%] font-kleemax font-xl w-[40%] text-center text-white text-scale-30 text-nowrap overflow-hidden'>
                {event.endDate.toUpperCase()}
                </div>}
            </div>
            <hr className="hidden sm:block w-[8%] bg-gradient-to-t from-timeline to-timeline my-[8.4%]"/>
            <Image className={`hidden sm:block z-20 w-[4%] ${hasEnd ? "-mt-[2.3%]" : "-mt-[1.35%]"}`}  src={source} alt="<>" />
        </div>
    );
};

const Timeline = () => {
    return (
        <section className='w-full h-full mx-auto pt-[10%] bg-black' id="timeline">
            <div className='text-center text-timeline font-kleemax text-scale-40 drop-shadow-red'>
                TIMELINE
            </div>
            <div className='w-full p-[10%] sm:p-[5%] relative'>
            <Image className="z-20 mx-auto w-[30%] mb-[10%] " src={start} alt="start" />
            <div className='hidden sm:block z-10 h-[80.4%] w-[0.4%] mx-auto bg-white absolute top-[8.0%] left-[49.8%]'></div> 
            <div className='sm:hidden z-10 h-[5.2%] w-[0.4%] mx-auto bg-gradient-to-b from-white to-timeline absolute top-[5.9%] left-[49.8%]'></div>
            <div className='sm:hidden z-10 h-[2.9%] w-[0.4%] mx-auto bg-gradient-to-t from-white to-timeline absolute bottom-[7.65%] left-[49.8%]'></div>
            {timelineData.map((event, index) => (
                <TimelineCard key={index} event={event} index={index} />
            ))}
            <Image className="z-20 mx-auto w-[5%] my-[10%]" src={asset4} alt="end" />
            </div>
            <hr className="flex max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to to-black"/>
        </section>
);

}

export default Timeline;