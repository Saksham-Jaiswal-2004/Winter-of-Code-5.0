import Image from "next/image";
import projectbanner from "../public/projectbanner.svg";
import { useState, useMemo } from "react";
import eventsData from "../data/events.json";

interface EventData {
  id: number;
  title: string;
  date: string;
  time: string;
  endTime: string;
  location: string;
  type: string;
  status: "upcoming" | "ongoing" | "past";
  poster: string;
  description: string;
  detailedDescription: string;
  speakers: string[];
  registrationLink: string;
  capacity: string;
  tags: string[];
  agenda: string[];
}

const EventCard = ({ event }: { event: EventData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "from-blue-600/30 to-blue-400/10 border-blue-500/50";
      case "ongoing":
        return "from-green-600/30 to-green-400/10 border-green-500/50";
      case "past":
        return "from-gray-600/30 to-gray-400/10 border-gray-500/50";
      default:
        return "from-brand/30 to-brand/10 border-brand/50";
    }
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      ceremony: "bg-purple-500/30 text-purple-200 border border-purple-500/50",
      workshop: "bg-blue-500/30 text-blue-200 border border-blue-500/50",
      networking: "bg-pink-500/30 text-pink-200 border border-pink-500/50",
      kickoff: "bg-green-500/30 text-green-200 border border-green-500/50",
      checkin: "bg-yellow-500/30 text-yellow-200 border border-yellow-500/50",
      mentoring: "bg-cyan-500/30 text-cyan-200 border border-cyan-500/50",
      informational: "bg-orange-500/30 text-orange-200 border border-orange-500/50",
      support: "bg-indigo-500/30 text-indigo-200 border border-indigo-500/50",
    };
    return colors[type] || "bg-brand/30 text-brand border border-brand/50";
  };

  return (
    <>
      {/* Premium Card with Poster */}
      <div className={`group relative bg-brand/10 backdrop-blur-xl border-2 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer h-full flex flex-col`}>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-conic from-brand via-purple-600 to-brand opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full" />

        {/* Poster Section */}
        <div className="relative h-64 overflow-hidden bg-black/40 border-b-2 border-white/10">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-black/50 animate-pulse" />
          )}
          <img
            src={event.poster}
            alt={event.title}
            onLoad={() => setImageLoaded(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Status Badge - Overlay on Poster */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
              event.status === "upcoming" ? "bg-blue-500/40 text-blue-100 border border-blue-400/50" :
              event.status === "ongoing" ? "bg-green-500/40 text-green-100 border border-green-400/50" :
              "bg-gray-500/40 text-gray-100 border border-gray-400/50"
            }`}>
              {event.status.toUpperCase()}
            </span>
          </div>

          {/* Type Badge - Overlay on Poster */}
          <div className="absolute top-4 right-4 z-10">
            <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${getTypeColor(event.type)}`}>
              {event.type.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col flex-1 p-5">
          {/* Title */}
          <h3 className="text-brand font-kleemax text-lg leading-tight mb-3 group-hover:text-blue-300 transition-colors duration-300">
            {event.title.toUpperCase()}
          </h3>

          {/* Quick Stats */}
          <div className="space-y-2 mb-4 text-xs font-chakra text-[#CADEFF]/90">
            <div className="flex items-center gap-2">
              <span className="text-brand text-sm">📅</span>
              <span className="line-clamp-1">{event.date} {event.time && `@ ${event.time}`}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand text-sm">📍</span>
              <span className="line-clamp-1">{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand text-sm">👥</span>
              <span>{event.capacity}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#CADEFF]/80 font-chakra mb-4 line-clamp-2 flex-1">
            {event.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="text-xs bg-brand/30 text-brand px-2 py-1 rounded-full font-chakra border border-brand/40">
                #{tag}
              </span>
            ))}
            {event.tags.length > 2 && (
              <span className="text-xs bg-brand/20 text-brand px-2 py-1 rounded-full font-chakra">
                +{event.tags.length - 2}
              </span>
            )}
          </div>

          {/* View Details Button */}
          <button
            onClick={openModal}
            className="w-full px-4 py-2.5 bg-brand hover:bg-brand/80 text-black border border-brand/50 rounded-lg font-chakra text-sm font-bold transition-all duration-300 uppercase tracking-wide"
          >
            View Details
          </button>
        </div>

        {/* Corner Accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-brand/20 to-transparent opacity-100 transition-opacity duration-500 rounded-tl-full" />
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed z-50 inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 pt-20"
          onClick={handleBackdropClick}
        >
          <div className="bg-gradient-to-br from-black to-gray-900 border-2 border-brand/50 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto scrollbar shadow-2xl shadow-brand/30">
            {/* Modal Header with Poster */}
            <div className="relative h-80 overflow-hidden border-b-2 border-brand/30">
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2 flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${getTypeColor(event.type)}`}>
                      {event.type.toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
                      event.status === "upcoming" ? "bg-blue-500/40 text-blue-100 border border-blue-400/50" :
                      event.status === "ongoing" ? "bg-green-500/40 text-green-100 border border-green-400/50" :
                      "bg-gray-500/40 text-gray-100 border border-gray-400/50"
                    }`}>
                      {event.status.toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={closeModal}
                    className="bg-black/60 hover:bg-black/80 text-brand rounded-full p-2 transition-all"
                  >
                    ✕
                  </button>
                </div>
                
                <h2 className="text-3xl font-kleemax text-brand drop-shadow-lg">
                  {event.title.toUpperCase()}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6">
              {/* Key Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-br from-brand/10 to-transparent p-6 rounded-xl border border-brand/20">
                <div>
                  <h4 className="text-brand font-chakra font-semibold mb-2 text-sm uppercase tracking-wider">📅 Date & Time</h4>
                  <p className="text-[#CADEFF] font-chakra">
                    {event.date} {event.time && `@ ${event.time}`}
                    {event.endTime && ` - ${event.endTime}`}
                  </p>
                </div>
                <div>
                  <h4 className="text-brand font-chakra font-semibold mb-2 text-sm uppercase tracking-wider">📍 Location</h4>
                  <p className="text-[#CADEFF] font-chakra">{event.location}</p>
                </div>
                <div>
                  <h4 className="text-brand font-chakra font-semibold mb-2 text-sm uppercase tracking-wider">👥 Capacity</h4>
                  <p className="text-[#CADEFF] font-chakra">{event.capacity}</p>
                </div>
                <div>
                  <h4 className="text-brand font-chakra font-semibold mb-2 text-sm uppercase tracking-wider">🎤 Speakers</h4>
                  <p className="text-[#CADEFF] font-chakra text-sm">{event.speakers.join(", ")}</p>
                </div>
              </div>

              {/* Description */}
              <div className="bg-gradient-to-br from-blue-900/20 to-transparent p-6 rounded-xl border border-blue-500/20">
                <h4 className="text-brand font-kleemax text-xl mb-3 uppercase tracking-wide">About This Event</h4>
                <p className="text-[#CADEFF] font-chakra leading-relaxed">
                  {event.detailedDescription}
                </p>
              </div>

              {/* Agenda */}
              {event.agenda.length > 0 && (
                <div className="bg-gradient-to-br from-purple-900/20 to-transparent p-6 rounded-xl border border-purple-500/20">
                  <h4 className="text-brand font-kleemax text-xl mb-4 uppercase tracking-wide">Agenda</h4>
                  <ul className="space-y-3">
                    {event.agenda.map((item, idx) => (
                      <li key={idx} className="text-[#CADEFF] font-chakra flex items-start gap-3">
                        <span className="text-brand font-bold text-lg min-w-fit">{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div>
                <h4 className="text-brand font-chakra font-semibold mb-3 text-sm uppercase tracking-wider">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-brand/40 to-blue-500/40 text-brand px-3 py-1.5 rounded-full text-sm font-chakra border border-brand/40">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Register Button */}
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-8 py-4 bg-gradient-to-r from-brand via-blue-500 to-brand hover:from-brand/90 hover:via-blue-400 hover:to-brand/90 text-black border-2 border-brand/50 rounded-xl font-kleemax text-center font-bold text-lg uppercase tracking-wider transition-all duration-300 shadow-lg shadow-brand/50 hover:shadow-2xl hover:shadow-brand/70"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  // Get unique types and statuses
  const eventTypes = ["all", ...Array.from(new Set(eventsData.map((e) => e.type)))];
  const eventStatuses = ["all", "upcoming", "ongoing", "past"];

  // Filter and sort events
  const filteredEvents = useMemo(() => {
    let filtered = eventsData.filter((event) => {
      const matchesSearch = event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = filterStatus === "all" || event.status === filterStatus;
      const matchesType = filterType === "all" || event.type === filterType;

      return matchesSearch && matchesStatus && matchesType;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date":
          // Parse dates in DD-MM-YYYY format
          const dateA = new Date(a.date.split("-").reverse().join("-"));
          const dateB = new Date(b.date.split("-").reverse().join("-"));
          return dateA.getTime() - dateB.getTime();
        case "title":
          return a.title.localeCompare(b.title);
        case "type":
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, filterStatus, filterType]);

  return (
    <section className="w-full min-h-screen mx-auto pt-[10%] pb-[10%] bg-black" id="events">
      <div className="px-[5%]">
        <div className="text-center text-brand font-kleemax text-scale-50 drop-shadow-blue mb-12">
          EVENTS
          <div className="-z-10 w-[25%] absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-40.5%]">
            <Image
              className="mx-auto w-full"
              src={projectbanner}
              alt="eventsbanner"
            />
          </div>
        </div>

        {/* Events Summary */}
        <div className="mb-12 mt-20 p-6 bg-brand/5 rounded-lg border border-brand/20">
          {/* <h3 className="text-brand font-kleemax text-lg mb-4">EVENTS SUMMARY</h3> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-brand">{filteredEvents.length}</p>
              <p className="text-sm text-[#CADEFF] font-chakra">Total Events</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand">{filteredEvents.filter(e => e.status === "upcoming").length}</p>
              <p className="text-sm text-[#CADEFF] font-chakra">Upcoming</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand">{filteredEvents.filter(e => e.status === "ongoing").length}</p>
              <p className="text-sm text-[#CADEFF] font-chakra">Ongoing</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-brand">{filteredEvents.filter(e => e.status === "past").length}</p>
              <p className="text-sm text-[#CADEFF] font-chakra">Past</p>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="flex w-full justify-end items-end gap-4 my-8 relative z-10">
          {/* Search */}
          <div>
            <label className="block text-brand font-chakra text-sm mb-2">Search</label>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-black border-2 border-brand rounded-lg text-brand font-chakra text-sm focus:outline-none focus:border-brand/70 placeholder-brand/50"
            />
          </div>

          {/* Sort */}
          <div className="w-[15%]">
            <label className="block text-brand font-chakra text-sm mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-2 bg-black border-2 border-brand rounded-lg text-brand font-chakra text-sm focus:outline-none appearance-none cursor-pointer"
            >
              <option value="date">Date</option>
              <option value="title">Title</option>
              <option value="type">Type</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="w-[15%]">
            <label className="block text-brand font-chakra text-sm mb-2">Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 bg-black border-2 border-brand rounded-lg text-brand font-chakra text-sm focus:outline-none appearance-none cursor-pointer"
            >
              {eventStatuses.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="w-[15%]">
            <label className="block text-brand font-chakra text-sm mb-2">Type</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="w-full px-4 py-2 bg-black border-2 border-brand rounded-lg text-brand font-chakra text-sm focus:outline-none appearance-none cursor-pointer"
            >
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          {(searchTerm || filterStatus !== "all" || filterType !== "all" || sortBy !== "date") && (
            <div className="text-right">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterStatus("all");
                  setFilterType("all");
                  setSortBy("date");
                }}
                className="px-4 py-2 hover:bg-brand/20 text-brand border-2 border-brand rounded-lg font-chakra text-sm transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event as EventData} />
            ))}
          </div>
        ) : (
          <div className="w-full text-center py-16">
            <p className="text-brand font-kleemax text-scale-40 mb-2">NO EVENTS FOUND</p>
            <p className="text-[#CADEFF] font-chakra">
              Try adjusting your filters or search terms
            </p>
          </div>
        )}
      </div>

      <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black" />
    </section>
  );
};

export default Events;