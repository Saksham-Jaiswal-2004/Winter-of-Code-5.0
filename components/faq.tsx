import Image from 'next/image'
import asset1 from '../public/faqcard1.svg'
import asset2 from '../public/faqbutton.svg'
import asset3 from '../public/faqcard2.svg'
import asset4 from '../public/faquestion.svg'
import React, { useState, useEffect } from 'react';

const faqData = [
    {
      question: 'What is WoC?',
      tags: ['Organisation', 'Participant'],
      answer:
        'Winter of Code (WoC) is an exciting month-long open-source program. It’s similar to Google Summer of Code (GSoC), but with a few fun twists of our own!',
    },
    {
      question: 'Who can participate?',
      tags: ['Participant','Registration'],
      answer:
        'Absolutely anyone! Whether you’re a student (grad, undergrad, or even in high school), a professional, or anyone else we might’ve missed, WoC is open to all.',
    },
  {
    question: 'Is WoC online?',
    tags: ['Organisation', 'Participant','Registration'],
    answer: 'WOC will be conducted in complete online mode, so you can participate from anywhere without any worry.',
  },
  {
    question: 'Is WoC for beginners?',
    tags: ['Participant','Registration'],
    answer: 'Yes, WoC is for EVERYONE – beginners, pros, and everyone in between!',
  },
    {
      question: 'What is a proposal? How do I send one?',
      tags: ['Participant'],
      answer:
        'A proposal is where you tell the organisation what you plan to work on during WoC. Some organisations even let you propose projects outside their listed ideas! Once you’re selected, we’ll guide you through submitting your proposal. Plus, we’ll be hosting a special session on how to write a great proposal.',
    },
    {
      question: 'How do I get selected?',
      tags: ['Participant','Registration'],
      answer:
        'Submit a stellar application! 😊\n\nHere’s how the process works: \n\n(i) We’ll have an initial screening to filter out non-serious or spammy applications. \n\n(ii) Next, participants who pass the first round will submit proposals via Devfolio, where organisations will make their selections. \n\n(iii) Finally, a mentor evaluation. If you pass, you’re in for some awesome swags!',
    },
    {
      question: 'What are the prizes? How do I claim them?',
      tags: ['Participant'],
      answer:
        'Everyone who passes the mentor evaluation will get prizes from our sponsors! Plus, some organisations might even have their own rewards for top contributors.',
    },
    {
      question: 'What are Organisations?',
      tags: ['Participant'],
      answer:
        'Organisations are open-source communities that build incredible software for everyone to use. They’ll be accepting your project proposals and mentoring you throughout the program.',
    },
    {
      question: "When does Winter of Code happen?",
      tags: ['Organisation','Participant','Registration'],
      answer: "Please see the program timeline here.",
    },
    {
      question: "How long does the event last?",
      tags: ['Organisation','Participant'],
      answer: "WOC lasts for almost 2 months, allowing participants enough time to contribute meaningfully to their chosen projects.",
    },
    {
      question: "What is the role of mentors in WOC?",
      tags: ['Organisation'],
      answer: "Mentors guide participants, review code, provide feedback, and help troubleshoot any issues during the event.",
    },
    {
      question: "Is there any fee to participate in WOC?",
      tags: ['Registration'],
      answer: "No, participation in WOC is completely free of charge.",
    },
    {     
      question: "As a mentor, how do I encourage contributions to my repos?",
      tags: ['Organisation'],
      answer: "You can also create issues for anything you’d like contributors to help with, and you can add labels like good first issue and help wanted so they’re easier to discover.",
    },
    {
      question: "Can I participate in WOC as both a mentor and a WOC Contributor?",
      tags: ['Organisation', 'Participant'],
      answer: "No, you cannot participate as both a mentor and a contributor in WOC. Mentors are experienced members of open-source organizations who guide new contributors by reviewing code and providing support. Contributors focus on coding and making project contributions during the program. Each role requires full commitment, so you need to choose one.",
    },
    {
      question: "Are organizations required to use the code produced by the contributors?",
      tags: ['Organisation'],
      answer: "No. While we hope that all the code that comes out of this program will find a happy home, it’s not mandatory for organizations to use the contributor's code. We encourage organizations to adopt and benefit from the contributions made during this program, but there is no obligation for them to use the submitted code.",
    },
    {
      question: "Are there any social media platforms to follow for updates?",
      tags: ['Organisation'],
      answer: "Yes, follow our GDG team on LinkedIn, and Instagram for the latest announcements and updates. ",
    },
    {
      question: "What if I have more questions?",
      tags: ['Organisation','Participant'],
      answer: "If you have more questions, you can raise a ticket on our Discord server. Our support team and mentors will be available to assist you with any queries or issues you encounter. Additionally, you can check the FAQ section or reach out in relevant channels for quick responses and community support.",
    },
    {
      question: "Are there any prerequisites to join?",
      tags: ['Registration'],
      answer: "Basic coding skills and familiarity with Git and GitHub are recommended. Domain-specific knowledge will help, but it’s also a great opportunity to learn as you go.",
    },
    {
      question: "How can I register for WOC?",
      tags: ['Registration'],
      answer: "Registration details and deadlines are announced on our official channels as well as on our website. Follow our GDG social media handles and website for updates.",
    },
    {
      question: "When can WOC Contributors apply for WOC?",
      tags: ['Registration'],
      answer: "Contributors’ application has started and can apply till 20/12/2024.\nPlease see the program timeline for more detailed information.",
    },
    {
      question: "Are there any live sessions or webinars during the event? ",
      tags: ['Contributions'],
      answer: "Yes, there will be live sessions or webinars hosted by speakers or sponsors to provide guidance and share insights. ",
    },
    {
      question: "Can I participate in WOC if I’m already involved in other open-source programs?",
      tags: ['Registration'],
      answer: "Yes, you can participate in WOC alongside other open-source programs, as long as you manage your time effectively.",
    },
    {
      question: "Do participants need prior open-source experience?",
      tags: ['Registration'],
      answer: "No prior experience is required, but having a basic understanding of open-source contributions and version control (Git) is helpful.",
    },
    {
      question: "How do I know if my application has been accepted?",
      tags: ['Registration'],
      answer: "Accepted participants will receive an email confirmation. Keep an eye on your inbox and check for updates on our official channels and website.",
    },
    
    {
      question: "Do winners receive a certificate?",
      tags: ['Benefits & Rewards'],
      answer: "Yes, all participants receive a certificate of participation, and winners receive special certificates acknowledging their outstanding contributions.",
    },
    {
      question: "Can I list WOC participation on my resume?",
      tags: ['Benefits & Rewards'],
      answer: "Definitely! Participating in WOC demonstrates your coding skills, commitment to open-source, and ability to work independently on real-world projects. ",
    },
    {
      question: "What should be included in my proposal? ",
      tags: ['Proposals & Projects'],
      answer: "Your proposal should outline your understanding of the project, your approach, timelines, and any initial ideas or contributions.",
    },
    {
      question: "Can I submit more than one proposal?",
      tags: ['Proposals & Projects'],
      answer: "Yes, participants are allowed to submit up to three proposals.",
    },
    {
      question: "Can I edit my proposal after submission?",
      tags: ['Proposals & Projects'],
      answer: " No, proposals can't  be edited until the submission deadline.",
    },
    {
      question: " How do I choose a project?",
      tags: ['Proposals & Projects'],
      answer: "Participants can select a project based on their preferred domain from the list of available projects provided by various organizations.",
    },
    {
      question: "What kind of projects can I expect?",
      tags: ['Proposals & Projects'],
      answer: "Projects range from beginner to advanced levels and cover various fields such as web development, mobile apps, machine learning, and more. Descriptions are provided during the selection process.",
    },
    {
      question: "What domains are available for projects?",
      tags: ['Proposals & Projects'],
      answer: "Projects span various domains, including web development, AI/ML, mobile development, and more. Participants can choose according to their expertise and interests.",
    },
    {
      question: "Can I contribute to multiple projects?",
      tags: ['Proposals & Projects'],
      answer: "No, each participant is assigned to one project to ensure quality contributions and focused learning.",
    },
    {
      question: "Can I switch projects after starting?",
      tags: ['Proposals & Projects'],
      answer: "No, once a project is assigned, participants are expected to complete their contributions within the same project.",
    },
    {
      question: "Can a group submit a proposal together to work on a single project?",
      tags: ['Proposals & Projects'],
      answer: "No, only an individual may work on a given project.",
    },
    {
      question: "Are there deadlines for submitting contributions?",
      tags: ['Proposals & Projects','Contributions'],
      answer: "Yes, there are milestones and deadlines. Details will be provided in the project guidelines once you’re accepted.",
    },
    {
      question: "What happens if I cannot complete the project on time?",
      tags: ['Proposals & Projects'],
      answer: "While timely completion is encouraged, life happens! Communicate with your mentors about any challenges. Partial contributions will still be recognized, but completing the project increases your chances of winning.",
    },
    {
      question: "Can I continue contributing to my project after WOC ends?",
      tags: ['Proposals & Projects'],
      answer: "Yes! We encourage ongoing contributions to the open-source community beyond the event.",
    },
    {
      question: "What’s the best way to prepare for WOC?",
      tags: ['Contributions'],
      answer: "Review the basics of your chosen domain, brush up on Git, and explore open-source projects to get a feel for contribution processes.",
    },
    {
      question: "Can I collaborate with other participants?",
      tags: ['Contributions'],
      answer: "While contributions are individual, you can network and discuss ideas with other participants on official communication platforms.",
    },
    {
      question: "Are organizations required to use the code produced by the contributors?",
      tags: ['Contributions'],
      answer: "No, organizations are not required to use the code produced by contributors. While we hope that the contributions made during the program will be valuable and integrated into the organization's projects, it is not mandatory. We encourage organizations to adopt and benefit from the code, but ultimately, it's up to them to decide how they want to utilize the contributions.",
    },
    {
      question: "Are there any live sessions or webinars during the event? ",
      tags: ['Contributions'],
      answer: "Yes, there will be live sessions or webinars hosted by speakers or sponsors to provide guidance and share insights. ",
    },
    {
      question: "What rewards do winners receive?",
      tags: ['Benefits & Rewards'],
      answer: "Winners receive swags, T-shirts, and certificates to acknowledge their outstanding contributions.",
    },
    {
      question: "How are winners selected?",
      tags: ['Contributions','Benefits & Rewards'],
      answer: "Winners are selected based on the quality of their contributions, the impact of their work, and their adherence to the project guidelines.",
    },
    {
      question: "How can I get support during the event?",
      tags: ['Contributions'],
      answer: "You can reach out to mentors or join our official communication channels, like Discord where you can ask questions and engage in discussions with other community members.",
    },
    
  ];

interface FAQ{
    index:number;
    question:string;
    answer:string;
    isOpen: boolean;
    toggleOpen: () => void;
}


const FAQCard: React.FC<FAQ> = ({ question, answer, isOpen, toggleOpen }) => {
    return (
            <div className='w-[80%] sm:w-[40%] mx-auto sm:mx-[1%] my-[1%] h-fit' onClick={toggleOpen}>
              <div className={`relative w-full flex py-[2%] px-[3%] justify-between border-[3px] border-faq ${isOpen? "border-b-0":""} bg-gradient-to-b from-[#00FF8415] to-[#00FF8412]`}>
                <div className='aspect-square absolute w-[3.7%] h-auto top-0 left-0'>
                  <div className='faq-t-l w-full h-full absolute -rotate-45 border-b-2 border-faq bg-black top-[-59%] left-[-59%] sm:top-[-56%] sm:left-[-56%]'></div>
                </div>
                <div className='w-[85%] text-left text-faq text-scale-35-2'>
                {question}
                </div>
                <Image className={`w-[7%] h-[15%] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} src={asset2} alt="faqbutton" id="faqbutton" />
              </div>
              { isOpen &&
                <div className='relative px-[2%] w-full pr-[15%] pb-[2%] text-left text-[#CBCBCB] text-scale-30-2 border-[3px] border-t-0 border-faq bg-gradient-to-b from-[#00FF8412] to-[#19A26005] '>
                {answer}
                <div className='aspect-square absolute w-[20%] h-auto bottom-0 right-0' >
                  <div className='faq-b-r w-full h-full absolute -rotate-45 border-faq bg-black bottom-[-51.5%] right-[-51.5%] sm:bottom-[-50.55%] sm:left-[50.5%]'></div>
                </div>
                </div>
              }
            </div>
    );
};

const FAQPage = () => {
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
    const [activeTag, setActiveTag] = useState('All');
  const toggleItem = (index:number) => {
    setOpenItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const filteredFAQs = faqData.filter(faq => 
    activeTag === 'All' || faq.tags.includes(activeTag)
  );

  const allTags = ['All', ...Array.from(new Set(faqData.flatMap(faq => faq.tags)))];
  const uniqueFAQs = Array.from(new Set(filteredFAQs.map(faq => faq.question)))
    .map(question => {
      return filteredFAQs.find(faq => faq.question === question);
    });

    return (
            <section className='w-full mx-auto pt-[10%] font-chakra' id="faqs">
                <div className='text-center text-faq font-kleemax text-scale-40 drop-shadow-green relative'>
                    FAQS
                    <div className='w-[20%] absolute left-[40%] -top-[25%]'>
                        <Image className="mx-auto w-full" src={asset4} alt="faquestion" />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center my-[2%] gap-[1%] mx-[5%]">
                {allTags.map(tag => (
                    <button key={tag} onClick={() => setActiveTag(tag)}
                        className={`px-[2%] py-[1%] my-[1%] text-scale-15-5 rounded-[calc(0.3*(1vw-4px)+3px)] border-[0.2vw] border-faq ${activeTag === tag ? 'bg-faq text-black font-bold' : 'bg-gradient-to-b from-[#00FF8412] to-[#19A26005] text-faq'              }`}>
                        {tag}
                    </button>
                ))}
                </div>
                <div className='w-full mx-auto mb-[3%] flex flex-wrap justify-center'>
                {filteredFAQs.map((faq, index) => (
                    <FAQCard key={index} index={index} question={faq.question} answer={faq.answer} isOpen={openItems[index]} toggleOpen={() => toggleItem(index)} />
                ))}
                </div>
                <hr className="flex w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black mt-[10%]"/>
            </section>
    );
};

export default FAQPage;
