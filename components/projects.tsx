import Image from "next/image";
import projectcard from "../public/projectcard.svg";
import projectbanner from "../public/projectbanner.svg";
import projectmodal from "../public/projectmodal.svg";
import { useState, useMemo, useRef, useEffect } from "react";
import discordlogo from "../public/discord_proj.svg";
import linkedinlogo from "../public/linkedin_proj.svg";
import twitterlogo from "../public/twitter_proj.svg";
import emaillogo from "../public/email_proj.svg";
import projects from "../data/projects.json";

interface Socials {
  discord: string;
  linkedin: string;
  twitter: string;
  email: string;
}
interface Mentor {
  name: string;
  socials: Socials;
}
interface Project {
  name: string;
  developer: string;
  desc: string;
  github: string;
  techstack: string[];
  socials: Socials;
  mentors: Mentor[];
}

const projectData: Project[] = projects;

const asset = {
  discord: discordlogo,
  linkedin: linkedinlogo,
  twitter: twitterlogo,
  email: emaillogo,
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const titleRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const checkOverflow = () => {
      if (titleRef.current && containerRef.current) {
        const isTextOverflowing = titleRef.current.scrollWidth > containerRef.current.clientWidth;
        setIsOverflowing(isTextOverflowing);
      }
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [project.name]);

  return (
    <div className="relative w-[85%] sm:w-[30%] m-[2%] sm:m-[1%] project-card-wrapper">
      <Image className="backdrop-blur" src={projectcard} alt="project card" />
      <div 
        ref={containerRef}
        className="absolute top-[4%] left-[10%] w-[80%] h-[12%] font-chakra text-scale-60 text-center text-brand project-title-container"
      >
        <span 
          ref={titleRef}
          className={`project-title-text ${isOverflowing ? 'overflow-text' : ''}`}
          data-text={project.name.toUpperCase()}
        >
          {project.name.toUpperCase()}
        </span>
      </div>
      <div className="absolute top-[16%] left-[20%] w-[60%] align-middle font-chakra text-scale-30-2 text-center text-[#CADEFF] text-nowrap overflow-hidden">
        {project.developer.toUpperCase()}
      </div>
      <div className="absolute top-[27%] left-0 py-[3%] px-[4%] w-full h-[53%] flex justify-center flex-wrap gap-x-[3%] text-grey text-center items-start text-scale-30 overflow-x-hidden overflow-y-auto scrollbar">
        {project.techstack.map((tech, index) => {
          return (
            <div
              key={index}
              className="text-brand font-chakra p-[2.5%] h-fit w-fit border-[thin] rounded-[calc(0.3*(1vw-4px)+3px)] text-scale-30-2"
            >
              {tech}
            </div>
          );
        })}
      </div>
      <div
        className="absolute bottom-[0.75%] left-[0.75%] w-[48%] h-[16%] p-[2.5%] font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden hover:scale-110 duration-700 cursor-pointer"
        onClick={openModal}
      >
        Know More
      </div>
      <a
        href={project.github}
        className="absolute bottom-[0.75%] left-[51.25%] w-[48%] h-[16%] p-[2.5%] font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden hover:scale-110 duration-700 cursor-pointer"
        rel="noopener noreferrer"
        target="_blank"
      >
        See project
      </a>
      {isOpen && (
        <div
          className="fixed z-50 inset-0 bg-black bg-opacity-75 flex items-center justify-center backdrop-blur-[calc(0.1*(1vw-3.6px)+0.5px)] modal"
          onClick={handleBackdropClick}
        >
          <div className="relative w-[75%]">
            <Image src={projectmodal} alt="project modal" />
            <div
              className="absolute font-chakra text-brand top-[0%] left-[0%] w-[30.2%] h-[89%] p-[1.5%] text-center overflow-x-hidden overflow-y-auto scrollbar text-scale-20-4 flex flex-col justify-between gap-[2%]"
              style={{
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 5%)",
              }}
            >
              {project.name.toUpperCase()}
              <div className="text-scale-60-2 w-full text-[#CADEFF]">
                {project.developer.toUpperCase()}
              </div>
              <div className="flex gap-x-[5%] gap-y-0  flex-wrap pt-[5%] justify-center">
                {project.techstack.map((tech, index) => {
                  return (
                    <div
                      key={index}
                      className="text-brand px-[2.5%] py-[1.5%] font-chakra h-fit w-fit my-[2%] border-[thin] rounded-[calc(0.3*(1vw-4px)+3px)]"
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex-col flex items-baseline mt-[5%]">
                {project.mentors.map((mentor, index) => (
                  <div
                    key={index}
                    className="flex-col flex items-baseline w-full my-[2%]"
                  >
                    <div className=" text-brand font-chakra text-scale-100-3 w-full">
                      {mentor.name}
                    </div>
                    <div
                      key={index}
                      className="flex items-baseline w-full justify-center gap-[5%]"
                    >
                      {(Object.keys(mentor.socials) as (keyof Socials)[]).map(
                        (key) => {
                          if (!mentor.socials[key]) return null;
                          var social = mentor.socials[key];
                          if (key == "email") social = "mailto:" + social;
                          return (
                            <a
                              key={key}
                              href={social}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="w-[15%] min-w-[15px] aspect-square py-[2%] hover:scale-110 duration-700"
                            >
                              <Image src={asset[key]} alt={key} />
                            </a>
                          );
                        }
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-baseline w-full justify-center gap-[5%] border-t-[1px] pt-[3.5%]">
                {(Object.keys(project.socials) as (keyof Socials)[]).map(
                  (key) => {
                    if (!project.socials[key]) return null;
                    const social = project.socials[key];
                    return (
                      <a
                        key={key}
                        href={social}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-[15%] min-w-[15px] aspect-square py-[2%] hover:scale-110 duration-700"
                      >
                        <Image src={asset[key]} alt={key} />
                      </a>
                    );
                  }
                )}
              </div>
            </div>
            <a
              href={project.github}
              rel="noopener noreferrer"
              target="_blank"
              className="absolute font-kleemax text-black bottom-[0%] left-[0%] w-[30%] py-[1.5%] h-[9%] text-center align-middle text-scale-15-1 hover:scale-105 duration-700"
            >
              VISIT PROJECT
            </a>
            <pre className="absolute top-0 left-[31.5%] w-[65.5%] h-[88%] m-[3%] pr-[3%] font-chakra text-scale-15-5 text-brand text-wrap break-words overflow-y-auto shadow scrollbar">
              {project.desc}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  var TBA = false;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedTech, setSelectedTech] = useState("");

  // Get all unique tech stacks
  const allTechStacks = useMemo(() => {
    const techs = new Set<string>();
    projectData.forEach((project) => {
      project.techstack.forEach((tech) => techs.add(tech.toUpperCase()));
    });
    return Array.from(techs)
      .sort()
      .map((tech) => tech.charAt(0).toUpperCase() + tech.slice(1)); // optional: capitalize first letter
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projectData.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Case-insensitive techstack match
      const matchesTech =
        !selectedTech ||
        project.techstack.some(
          (tech) => tech.toLowerCase() === selectedTech.toLowerCase()
        );

      return matchesSearch && matchesTech;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "developer":
          return a.developer.localeCompare(b.developer);
        case "techCount":
          return b.techstack.length - a.techstack.length;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, selectedTech]);

  return (
    <section className="w-full h-full mx-auto pt-[10%] bg-black" id="projects">
      <div className="px-[5%]">
        <div className="text-center text-brand font-kleemax text-scale-50 drop-shadow-blue">
          PROJECTS
          <div className="-z-10 w-[25%] absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-40.5%]">
            <Image
              className="mx-auto w-full"
              src={projectbanner}
              alt="projectbanner"
            />
          </div>
        </div>

        {/* Horizontal Filters - Right Side Below Title */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center justify-end mt-10 mb-2 relative z-10 px-4 sm:px-0">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 sm:px-6 py-3 bg-black border-[2px] border-brand rounded-lg text-brand font-chakra text-[14px] sm:text-[18px] focus:outline-none focus:border-[#CADEFF] w-full sm:w-[300px] appearance-none"
          />

          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="px-4 sm:px-6 py-3 bg-black border-[2px] border-brand rounded-lg text-brand font-chakra text-[14px] sm:text-[18px] focus:outline-none focus:border-[#23CADEFF] w-full sm:w-[300px] appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2323CADEFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "20px",
            }}
          >
            <option value="">Search by Techstacks</option>
            {allTechStacks.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>

          {(searchTerm || selectedTech || sortBy !== "name") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTech("");
                setSortBy("name");
              }}
              className="px-4 sm:px-6 py-3 bg-brand/20 hover:bg-brand/30 text-brand border-[2px] border-brand rounded-lg font-chakra text-[14px] sm:text-[18px] transition-all duration-300 w-full sm:w-auto"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {TBA ? (
        <div className="pt-[5%] flex w-full justify-center text-brand drop-shadow-blue font-kleemax text-scale-40 font-semibold">
          TO BE ANNOUNCED
        </div>
      ) : (
        <div className="w-full p-[5%] sm:p-[3%] flex justify-center flex-wrap">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          {filteredProjects.length === 0 && (
            <div className="w-full text-center py-12 text-brand font-chakra text-scale-20">
              No projects found matching your criteria...
            </div>
          )}
        </div>
      )}
      <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black" />
    </section>
  );
};

export default Projects;
