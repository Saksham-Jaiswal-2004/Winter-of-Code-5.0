"use client"
import JumbleText from '@/components/jumble'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoChatbox, IoBookOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdCenterFocusStrong } from "react-icons/md";
import asset1 from '../public/org.svg'
import projectbanner from "../public/projectbanner.svg";
import { MdEmail } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { orgs } from "@/data/orgs"
import { useParams } from "next/navigation"

type Mentor = {
    name: string
    desc: string
    discord?: string
    email?: string
    linkedin?: string
}

type Project = {
    title: string
    description: string
    tech: string[]
    problemStatement?: string
    focusArea?: string
    contributionGuide?: string
    githubLink?: string
}

type Contact = {
    label: string
    value: string
    href?: string
}

type Org = {
    name: string
    tagline?: string
    description: string
    heroImage: string
    website: string
    chat: string
    repo: string
    email: string
    focusAreas: string[]
    stats: { label: string; value: string }[]
    contacts: Contact[]
    mentors: Mentor[]
    projects: Project[]
}

const org: Org = {
    name: 'Open Printing',
    tagline: 'Building inclusive tools for global collaboration.',
    description:
        'Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.',
    heroImage: '/past-orgs/OpenPrinting.webp', // replace with your hero image path
    website: 'https://example.org',
    chat: 'https://chat.example.org',
    repo: 'https://github.com/example/example-repo',
    email: 'contact@example.org',
    focusAreas: ['C', 'C++', 'JavaScript', 'Python'],
    stats: [
        { label: 'Active Mentors', value: '12' },
        { label: 'Contributors', value: '350+' },
        { label: 'Open Issues', value: '42' },
        { label: 'Good First Issues', value: '18' },
    ],
    contacts: [
        { label: 'Website', value: 'example.org', href: 'https://example.org' },
        { label: 'Community Chat', value: 'chat.example.org', href: 'https://chat.example.org' },
        { label: 'Email', value: 'contact@example.org', href: 'mailto:contact@example.org' },
        { label: 'GitHub', value: 'github.com/example', href: 'https://github.com/example' },
    ],
    mentors: [
        { name: 'Alex Rivera', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.', discord: '@alex-r', email: 'abc@gmail.com', linkedin: 'linkedin.com' },
        { name: 'Alex Rivera', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.', discord: '@alex-r', email: 'abc@gmail.com', linkedin: 'linkedin.com' },
        { name: 'Priya Verma', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.', discord: '@alex-r', email: 'abc@gmail.com', linkedin: 'linkedin.com' },
        { name: 'Priya Verma', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.', discord: '@alex-r', email: 'abc@gmail.com', linkedin: 'linkedin.com' },
        { name: 'Samir Khan', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.', discord: '@alex-r', email: 'abc@gmail.com', linkedin: 'linkedin.com' },
    ],
    projects: [
        {
            title: 'CLI UX Overhaul',
            description: 'A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.',
            tech: ['TypeScript', 'Node.js', 'CLI', 'Jest'],
            problemStatement: 'Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.',
            focusArea: 'Developer Experience • Command Design • Tracing • Error Handling',
            contributionGuide: 'Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.',
            githubLink: 'https://github.com/example/example-repo'
        },
        {
            title: 'Accessibility Audit Dashboard',
            description: 'A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.',
            tech: ['React', 'Tailwind', 'a11y', 'Playwright', 'Vitest'],
            problemStatement: 'Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.',
            focusArea: 'Accessibility • Reporting • CI Integration • Trend Analysis',
            contributionGuide: 'Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.',
            githubLink: 'https://github.com/example/example-repo'
        },
        {
            title: 'Data Viz Templates',
            description: 'A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.',
            tech: ['D3', 'TypeScript', 'Storybook', 'Testing Library'],
            problemStatement: 'Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.',
            focusArea: 'Data Visualization • Component Libraries • Accessibility',
            contributionGuide: 'Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.',
            githubLink: 'https://github.com/example/example-repo'
        },
    ],
}

const Badge = ({ text }: { text: string }) => (
    <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white/80">{text}</span>
)

const StatCard = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.6)] backdrop-blur">
        <span className="text-xs uppercase tracking-[0.14em] text-white/60">{label}</span>
        <span className="text-2xl font-semibold text-white">{value}</span>
    </div>
)

const MentorCard = ({ mentor }: { mentor: Mentor }) => (
    <div className="flex relative items-center justify-between rounded-2xl bg-brand/10 px-4 py-3 min-h-20">
        <div>
            <p className="text-xl font-chakra font-semibold text-white absolute top-0 left-8 rounded-b-xl bg-black px-4 py-2">{mentor.name}</p>
            {/* <p className="text-sm px-6 text-white/60">{mentor.desc}</p> */}
        </div>
        <div className='flex gap-2 absolute bottom-0 right-0 px-4 py-2 bg-black rounded-tl-xl'>
            {mentor.email ? (
              <Link href={"mailto:"+mentor.email} target="_blank" rel="noopener noreferrer" className="text-lg rounded-3xl font-semibold text-brand hover:text-brand/80 bg-white/5 p-2">
                <MdEmail />
              </Link>
            ) : null}
            {mentor.linkedin ? (
              <Link href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg rounded-3xl font-semibold text-brand hover:text-brand/80 bg-white/5 p-2">
                <IoLogoLinkedin />
              </Link>
            ) : null}
        </div>
    </div>
)

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="group relative overflow-hidden h-fit rounded-3xl bg-gradient-to-r from-brand/10 to-white/5 px-16 pt-4 pb-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur-sm font-chakra">
        <div className="flex items-start justify-between gap-4">
            <div className="">
                <p className="text-2xl font-semibold text-white absolute top-0 left-14 px-4 py-2 bg-black rounded-b-xl">{project.title}</p>
                <p className="text-base text-white/75 mt-14">{project.description}</p>
            </div>
        </div>

        {project.tech?.length ? (
            <div className="mt-4 mb-8 flex flex-wrap gap-2">
                {project.tech.map((stack) => (
                    <span key={stack} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 ring-1 ring-white/15">
                        {stack}
                    </span>
                ))}
            </div>
        ) : null}

        <div className="mt-4 space-y-4">
            {project.problemStatement ? (
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-brand">
                        <HiOutlineLightBulb className="h-4 w-4" />
                        <p className="text-base uppercase tracking-[0.14em]">Problem Statement</p>
                    </div>
                    <p className="text-base text-white/85 leading-relaxed">{project.problemStatement}</p>
                </div>
            ) : null}

            {project.focusArea ? (
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-brand">
                        <MdCenterFocusStrong className="h-4 w-4" />
                        <p className="text-base uppercase tracking-[0.14em]">Focus Area</p>
                    </div>
                    <p className="text-base text-white/85 leading-relaxed">{project.focusArea}</p>
                </div>
            ) : null}

            {project.contributionGuide ? (
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-brand">
                        <IoBookOutline className="h-4 w-4" />
                        <p className="text-base uppercase tracking-[0.14em]">Student Contribution Guide</p>
                    </div>
                    <p className="text-base text-white/85 leading-relaxed">{project.contributionGuide}</p>
                </div>
            ) : null}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-end gap-3">
            {project.githubLink ? (
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 p-3 text-3xl flex justify-center items-center font-semibold text-white transition hover:border-brand/70 hover:text-brand">
                    <FaGithub />
                </Link>
            ) : null}
        </div>
    </div>
)

const OrgShowcase = () => {
    const params = useParams()
    const slug = params.slug as string

    const org = orgs[slug]

    return (
        <section className="relative isolate overflow-x-hidden w-full bg-gradient-to-b from-black via-black to-black pb-20 pt-4">
            <div className="-z-10 w-[25%] absolute right-[-25%] top-[88vh] translate-x-[-50%] translate-y-[-40.5%]">
                <Image
                  className="mx-auto w-full"
                  src={projectbanner}
                  alt="projectbanner"
                />
            </div>
            <div className="-z-10 w-[25%] absolute left-[0%] top-[150vh] translate-x-[-50%] translate-y-[-40.5%]">
                <Image
                  className="mx-auto w-full"
                  src={projectbanner}
                  alt="projectbanner"
                />
            </div>

            <div className="relative mx-auto flex w-full px-8 flex-col gap-10">
                <header className="grid gap-8 h-[80vh] rounded-[32px] bg-white/5 px-24 py-10 backdrop-blur">
                    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="space-y-4">
                            <p className="text-base uppercase tracking-[0.18em] text-brand font-kleemax bg-black w-fit px-4 py-4 absolute top-0 rounded-b-xl">Organisation Profile</p>
                            <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl font-kleemax"><JumbleText text={org.name.toUpperCase()} id="registerhere"/></h1>
                            <p className="text-lg font-semibold text-white/80 font-chakra">{org.tagline}</p>
                            <p className="text-base text-white/70 font-chakra">{org.description}</p>
                            <div className="flex flex-wrap gap-2 font-chakra">
                                {org.focusAreas.map((area) => (
                                    <Badge key={area} text={area} />
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-3 font-chakra">
                                <Link href={org.website} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand p-3 text-lg flex justify-center items-center font-semibold text-black shadow-[0_14px_38px_-30px_rgba(0,0,0,0.9)] transition hover:brightness-110">
                                    <FaExternalLinkAlt />
                                </Link>
                                <Link href={org.chat} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 p-3 text-lg flex justify-center items-center font-semibold text-white transition hover:border-brand/70 hover:text-brand">
                                    <IoChatbox />
                                </Link>
                                <Link href={org.repo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 p-3 text-lg flex justify-center items-center font-semibold text-white transition hover:border-brand/70 hover:text-brand">
                                    <FaGithub />
                                </Link>
                            </div>
                        </div>

                        <div className="relative flex h-full w-full items-center justify-center">
                            <div className="absolute inset-4 rounded-[28px] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
                            <div className="relative overflow-hidden p-4 shadow-[0_18px_60px_-35px_rgba(0,0,0,0.7)]">
                                <Image className="backdrop-blur h-full w-[250px] object-contain" src={asset1} alt="" />
                                <Image
                                    src={org.heroImage}
                                    alt={org.name}
                                    width={920}
                                    height={620}
                                    className="absolute left-[10%] bottom-[12%] w-[80%] h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="px-8">
                    <div className="space-y-6">
                        <div className="space-y-3 pt-16">
                            <div className="flex items-center justify-center text-2xl font-kleemax mb-6">
                                <h2 className="text-brand">MENTORS</h2>
                            </div>
                            <div className="grid gap-3 md:grid-cols-3">
                                {org.mentors.map((mentor) => (
                                    <MentorCard key={mentor.name} mentor={mentor} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3 pt-16 pb-8">
                            <div className="flex items-center justify-center text-2xl font-kleemax mb-6">
                                <h2 className="text-brand">PROJECTS</h2> 
                            </div>
                            <div className="grid gap-10 lg:grid-cols-1">
                                {org.projects.map((project) => (
                                    <ProjectCard key={project.title} project={project} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl relative bg-gradient-to-r from-brand/20 via-white/5 to-brand/10 mx-8 px-24 py-10 text-white shadow-[0_22px_70px_-50px_rgba(0,0,0,0.7)]">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-semibold font-chakra">Ready to collaborate?</h2>
                            <p className="max-w-2xl text-base text-white/70 font-chakra">
                                Join the community chat, review the issue tracker, and pick a project to start contributing. Mentors are available to help you scope your first patch.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 absolute right-5 bottom-0 px-4 py-2 rounded-t-xl bg-black">
                            <Link href={org.chat} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 p-3 text-lg flex justify-center items-center font-semibold text-white transition hover:border-brand/70 hover:text-brand">
                                <IoChatbox />
                            </Link>
                            <Link href={org.repo} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/5 p-3 text-lg flex justify-center items-center font-semibold text-white transition hover:border-brand/70 hover:text-brand">
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrgShowcase