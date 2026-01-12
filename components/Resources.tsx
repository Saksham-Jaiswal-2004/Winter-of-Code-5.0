import Image from "next/image";
import projectcard from "../public/projectcard.svg";
import projectbanner from "../public/projectbanner.svg";
import projectmodal from "../public/projectmodal.svg";
import { useState, useMemo, useRef, useEffect } from "react";
import videos from "../data/videos.json";

interface VideoResource {
  title: string;
  creator: string;
  desc: string;
  videoUrl: string; // YouTube URL
  videoId: string; // YouTube video ID extracted from URL
  tags: string[]; // Categories/topics
  duration: string; // e.g., "15:30"
}

// Dummy data for testing
const videoResources: VideoResource[] = videos;

const VideoCard = ({ video }: { video: VideoResource }) => {
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
  }, [video.title]);

  return (
    <div className="relative w-[85%] sm:w-[30%] m-[2%] sm:m-[1%] project-card-wrapper">
      <Image className="backdrop-blur" src={projectcard} alt="video card" />

      <div 
        ref={containerRef}
        className="absolute top-[4%] left-[10%] w-[80%] h-[10%] font-chakra text-scale-60 text-center text-brand project-title-container"
      >
        <span 
          ref={titleRef}
          className={`project-title-text ${isOverflowing ? 'overflow-text' : ''}`}
          data-text={video.title.toUpperCase()}
        >
          {video.title.toUpperCase()}
        </span>
      </div>
      
      <div className="absolute top-[16%] left-[20%] w-[60%] align-middle font-chakra text-scale-30-2 text-center text-[#CADEFF] text-nowrap overflow-hidden">
        {video.creator.toUpperCase()}
      </div>
      
      {/* Video Thumbnail */}
      <div className="absolute top-[32%] left-[10%] w-[80%] h-[45%] overflow-hidden rounded-[calc(0.3*(1vw-4px)+3px)]">
        <img 
          src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={openModal}
          onError={(e) => {
            e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
          }}
        />
      </div>

      {/* <div className="absolute top-[70%] left-[10%] w-[80%] flex justify-between font-chakra text-scale-30-2 text-[#CADEFF] px-[5%]">
        <span>{video.duration}</span>
        <span>{video.difficulty}</span>
      </div> */}
      
      <div
        className="absolute bottom-[0.75%] left-[0.75%] w-[48%] h-[16%] p-[2.5%] font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden hover:scale-110 duration-700 cursor-pointer"
        onClick={openModal}
      >
        Watch Now
      </div>
      <a
        href={video.videoUrl}
        className="absolute bottom-[0.75%] left-[51.25%] w-[48%] h-[16%] p-[2.5%] font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden hover:scale-110 duration-700 cursor-pointer"
        rel="noopener noreferrer"
        target="_blank"
      >
        Open in YouTube
      </a>

      {isOpen && (
        <div
          className="fixed z-50 inset-0 pt-20 bg-black bg-opacity-85 flex items-center justify-center backdrop-blur-[calc(0.1*(1vw-3.6px)+0.5px)] modal"
          onClick={handleBackdropClick}
        >
          <div className="relative w-[75%] max-w-[1200px]">
            <Image src={projectmodal} alt="video modal" />
            
            {/* Left sidebar with info */}
            <div
              className="absolute font-chakra text-brand top-[0%] left-[0%] w-[30.2%] h-[89%] p-[1.5%] text-center overflow-x-hidden overflow-y-auto scrollbar text-scale-20-4 flex flex-col justify-start gap-[4%]"
              style={{
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 5%)",
              }}
            >
              <div className="text-scale-80">{video.title.toUpperCase()}</div>
              <div className="text-scale-60-2 w-full text-[#CADEFF]">
                {video.creator.toUpperCase()}
              </div>
              
              <div className="w-full flex justify-center items-center text-scale-60-2 px-[5%]">
                <span>Duration: {video.duration}</span>
              </div>

              <div className="flex gap-x-[5%] gap-y-0 flex-wrap pt-[5%] justify-center">
                {video.tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="text-brand px-[2.5%] py-[1.5%] font-chakra h-fit w-fit my-[2%] border-[thin] rounded-[calc(0.3*(1vw-4px)+3px)]"
                    >
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>

            <a
              href={video.videoUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="absolute font-kleemax text-black bottom-[0%] left-[0%] w-[30%] py-[1.5%] h-[9%] text-center align-middle text-scale-15-1 hover:scale-105 duration-700"
            >
              OPEN IN YOUTUBE
            </a>

            {/* Video player and description */}
            <div className="absolute top-0 left-[31.5%] w-[65.5%] h-[88%] m-[3%] pr-[3%] flex flex-col gap-[3%]">
              {/* YouTube iframe */}
              <div className="w-[80%] justify-self-center self-center aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              
              {/* Description */}
              <pre className="font-chakra text-scale-15-5 text-brand text-wrap break-words overflow-y-auto scrollbar flex-1">
                {video.desc}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Resources = () => {
  var TBA = false;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [selectedTag, setSelectedTag] = useState("");

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    videoResources.forEach((video) => {
      video.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter and sort videos
  const filteredVideos = useMemo(() => {
    let filtered = videoResources.filter((video) => {
      const matchesSearch = video.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        video.creator.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTag =
        !selectedTag ||
        video.tags.some(
          (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
        );

      return matchesSearch && matchesTag;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "creator":
          return a.creator.localeCompare(b.creator);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, selectedTag]);

  return (
    <section className="w-full h-full mx-auto pt-[10%] bg-black" id="resources">
      <div className="px-[5%]">
        <div className="text-center text-brand font-kleemax text-scale-50 drop-shadow-blue">
          RESOURCES
          <div className="-z-10 w-[25%] absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-40.5%]">
            <Image
              className="mx-auto w-full"
              src={projectbanner}
              alt="resourcesbanner"
            />
          </div>
        </div>

        {/* Horizontal Filters */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center justify-end mt-10 mb-2 relative z-10 px-4 sm:px-0">
          <input
            type="text"
            placeholder="Search by title or creator"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 sm:px-6 py-3 bg-black border-[2px] border-brand rounded-lg text-brand font-chakra text-[14px] sm:text-[18px] focus:outline-none focus:border-[#CADEFF] w-full sm:w-[300px] appearance-none"
          />

          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="px-4 sm:px-6 py-3 bg-black border-[2px] border-brand rounded-lg text-brand font-chakra text-[14px] sm:text-[18px] focus:outline-none focus:border-[#23CADEFF] w-full sm:w-[250px] appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2323CADEFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "20px",
            }}
          >
            <option value="">All Categories</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          {(searchTerm || selectedTag || sortBy !== "title") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("");
                setSortBy("title");
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
          {filteredVideos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
          {filteredVideos.length === 0 && (
            <div className="w-full text-center py-12 text-brand font-chakra text-scale-20">
              No video resources found matching your criteria...
            </div>
          )}
        </div>
      )}
      <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black" />
    </section>
  );
};

export default Resources;
