import Image from 'next/image'
import projectcard from '../public/projectcard.svg'
import projectbanner from '../public/projectbanner.svg'
import projectmodal from '../public/projectmodal.svg'
import { useState, useMemo } from 'react';
import discordlogo from '../public/discord_proj.svg'
import linkedinlogo from '../public/linkedin_proj.svg'
import twitterlogo from '../public/twitter_proj.svg'
import emaillogo from '../public/email_proj.svg'

interface Socials {
  discord: string;
  linkedin: string;
  twitter: string;
  email: string;
};
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

const projectData: Project[] = [
  {
    name: "OWASP Nest",
    developer: "OWASP Nest",
    desc: "Problem Statement\n\nOWASP Nest is a comprehensive platform designed to enhance collaboration and contribution within the OWASP community. The application serves as a central hub for exploring OWASP projects and ways to contribute to them, empowering contributors to find opportunities that align with their interests and expertise.\n\nFocus Areas\n\nWe have multiple focus areas:\nBackend (Python, Django, Ninja, Strawberry)\nFrontend (TypeScript, Next.js, React, TailwindCSS)\nNestBot (Slack API, Python, OpenAI API)\n\nStudent Contribution Guide (Idea Page)\n\nAny open and available for work issues from https://github.com/OWASP/Nest/issues\nWe're accepting new issues too (subject to approval). If accepted we'll add a WoC 5.0 label for easy search and will help students to come up with meaningful and realistic projects/milestones.",
    techstack: ["Python", "Django", "TypeScript", "React", "Next.js", "TailwindCSS", "GraphQL", "Docker", "AWS"],
    github: "https://github.com/OWASP/Nest",
    mentors: [
      {
        name: "Arkadii Yakovets",
        socials: {
          linkedin: "https://www.linkedin.com/in/arkid15r/",
          discord: "arkid15r",
          email: "arkadii.yakovets@owasp.org",
          twitter: "",
        },
      },
      {
        name: "Kateryna Golovanova",
        socials: {
          linkedin: "https://www.linkedin.com/in/kate-golovanova/",
          discord: "",
          email: "kateryna.golovanova@owasp.org",
          twitter: "",
        },
      },
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "Quizora",
    developer: "Development Society AEC",
    desc: "• Problem Statement:\nTraditional learning and assessment methods often lack engagement and real-time feedback, leading to lower student participation. \"Rapid Quiz Relay\" solves this by introducing a gamified, fast-paced environment where users can test their knowledge under time constraints, fostering competitive learning.\n• Focus Areas:\no Backend API Development & Real-time data handling.\no UI/UX improvements for seamless quiz transitions.\no Performance optimization for concurrent users.\no Gamification logic (Leaderboards, Relay timers).\n• Student Contribution Guide (Idea Page):\nStudents will work on enhancing the quiz engine, implementing new question types, and optimizing the relay timer logic.\n\no Milestone 1: Setup environment and fix minor UI bugs.\no Milestone 2: Implement user authentication and profile tracking.\no Milestone 3: Develop real-time leaderboard and \"Relay\" mode features.",
    techstack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Convex"],
    github: "https://github.com/Nilam-Kumari-Mahato/Quizora",
    mentors: [
      {
        name: "Asif Qamar",
        socials: {
          linkedin: "https://www.linkedin.com/in/asif-qamar",
          discord: ".gamedotexe",
          email: "asifqamar1832004@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Nilam Kumari Mahato",
        socials: {
          linkedin: "https://www.linkedin.com/in/nilam-kumari-mahato-5a2710307",
          discord: "Nilam_Mahato",
          email: "nilamkumarimahato10@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Prerna Priya",
        socials: {
          linkedin: "www.linkedin.com/in/prerna-priya-ab3581329",
          discord: "yuna086841",
          email: "prerp.6299@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Arnab chatterjee",
        socials: {
          linkedin: "https://www.linkedin.com/in/arnab-chatterjee-905ab3219/",
          discord: "arnabch20k",
          email: "arnabchatterjee.ac.2@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Amartya Chowdhury",
        socials: {
          linkedin: "https://linkedin.com/in/amartya-chowdhury",
          discord: "@paraxius",
          email: "amartyachowdhury4@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Swarup Goswami",
        socials: {
          linkedin: "https://www.linkedin.com/in/swarup-goswami-7a9444311",
          discord: "swarup_goswami",
          email: "goswamiswarup97@gmail.com",
          twitter: "",
        },
      },
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "Orycon (Event Management System)",
    developer: "Open Source Chandigarh",
    desc: "Orcyon is a comprehensive platform built with Next.js, Node.js, and MongoDB to help college societies plan, organize, and execute events with ease. It streamlines everything from content creation and social media scheduling to logistics coordination and real-time attendance tracking. Designed for Students, Team Admins, and specialized teams, the system provides a centralized and intuitive workspace that enhances collaboration, automates repetitive tasks, and improves the overall efficiency of event management.\n\nDetailed Project Description\nProblem Statement\nCollege societies often struggle to manage events efficiently due to scattered tools for planning, content creation, social media, logistics, and attendance tracking. This Event Management System solves that problem by unifying all workflows into a single platform, enabling teams to collaborate smoothly while giving students an easy way to register and mark attendance.\nAlthough the system greatly improves coordination and execution, it currently lacks features like advanced analytics, automated social media publishing, and integrated payment handling. These enhancements are planned for future releases to further boost efficiency and scalability.\nFuture Focus Areas:\n• Backend Logic: Implementing advanced modules such as automated attendance processing, documentation generation, post-event analytics, and improved role-based access across teams.\n• UI/UX: Enhancing dashboards for each team, adding intuitive scheduling interfaces, improving the idea management flow, and refining the overall navigation for a smoother multi-team experience.\n• Technical Writing: Creating clear documentation for team workflows—covering event planning, content creation, social media scheduling, logistics management, and onboarding guides for new users.\nStudent Contribution Guide\nThe project will have two phases. Completing Phase 1 is required before moving to Phase 2, while Phase 2 is optional and can be completed if time permits.\nPhase 1: Implementation of New Core Features\nIn this phase, the student is expected to focus on backend and frontend development to deliver core system improvements. Features include:\n1. Attendance Automation Enhancements: Implement improved logic for automatic attendance generation, walk-in detection, and streamlined QR-based verification.\n2. Social Media Scheduler Improvements: Build features for calendar-based scheduling, automatic reminders, and version control for social posts (text, image, video).\n3. Content Documentation Generator: Develop the automated documentation generation tool that compiles event details, speeches, and write-ups into structured reports.\n4. Meeting Scheduler Expansion: Add multi-team invite support, RSVP tracking, and integration with common calendar formats.\n5. Idea Box Upgrades: Implement voting, commenting, and category tagging, along with a cleaner moderation workflow for Team Admins.\n6. Logistics & Feedback Analyzer: Enhance the analytics pipeline to process event feedback and provide post-event summaries using charts, sentiment indicators, or basic insights.\n7. Hiring Portal Development: Develop the hiring portal with options to mark candidates as Selected, Maybe, or Rejected, and the ability to transfer applicants between teams.\nPhase 2: Technical Writing and Knowledge Resources\nThis phase focuses on creating educational and onboarding materials for new users and teams across the system.\n1. Team Workflow Guides: Write clear documentation explaining how each team (Organising, Content, Social Media, Logistics, Admin) should use the system for their daily tasks.\n2. Feature Tutorials: Produce step-by-step guides for modules built in Phase 1—such as scheduling posts, generating documentation, running meetings, or analyzing feedback.\n3. Event Management Handbook: Create a structured learning section with best practices for planning and executing events using the platform.\n4. Student Onboarding Material: Write simple, visual guides showing students how to log in, register for events, and mark attendance via QR codes.",
    techstack: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Prisma", "Turborepo", "Git", "GitHub Actions"],
    github: "https://github.com/Open-Source-Chandigarh/orycon",
    mentors: [
      {
        name: "Angad Sudan",
        socials: {
          linkedin: "https://linkedin.com/in/angadsudan/",
          discord: "@angadsudan",
          email: "angadsudan453@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Ayush Chauhan",
        socials: {
          linkedin: "https://www.linkedin.com/in/ayuch",
          discord: "@bakayu",
          email: "ayu.0067abc@gmail.com",
          twitter: "",
        },
      },
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "gitx",
    developer: "Open Source Chandigarh",
    desc: "gitx is a Terminal User Interface (TUI) built with Golang to help you learn and interact with git. It provides a visual way to handle common git commands, making it easier for both beginners and experienced users to manage their repositories without leaving the terminal. Tech Stack • Language: Golang • Frameworks: Bubbletea, Hugo • Tools: Git, Github Actions, Hugo for docs Detailed Project Description 1. Problem Statement: Beginners often struggle with git commands when getting started with git and version control, gitx was developed to solve this very problem and provide a platform inside the terminal to provide a beginner friendly interface, which provides an abstraction over git, takes away the complexity and allows user to learn and use git more easily. While gitx provides a great overview of git repositories, currently it lacks granular control for advanced workflows (like staging specific lines) and the documentation on tutorials and guides is also lacking. 2. Focus Area: • Backend Logic: Implementing new features to add more git operations to the Terminal User Interface. • UI/UX: Enhancing the visual diff viewer and adding interactive elements. • Technical Writing: Writing documentation for the \"Learn\" section on how to use the TUI. 3. Student Contribution Guide: The project will have 2 phases, completing the first is necessary to move onto the second phase, while the second phase would be optional and can be completed if the time allows. Phase 1: Implementation of New Core Features In this phase, the student would be expected to focus on coding and delivering the features listed on gitxtui.github.io/docs/contribute/roadmap; Also listed below: • Repository Initialization: Implement the ability to initialize a new Git repository (like git init) directly from the startup screen or command menu if one doesn't exist. • Safety Warnings: Add a confirmation and warning system for sensitive actions, such as initializing a repository in a non-empty directory or home folder. • Improved Visual Diff Viewer: Refactor the MainPanel view to provide a clearer, syntax-highlighted, or side-by-side representation of file changes. • Interactive Staging: Develop the functionality to select and stage specific lines or code hunks interactively from within the diff viewer. • Custom Keybindings: Update configuration file logic to allow users to remap keybindings (currently hardcoded in keys.go). Phase 2: Technical Writing and Education Resources This phase focuses on documenting and helping new users learn git through gitx. • \"Learn\" Section Content: specific hands-on document series explaining how to use the TUI for various Git workflows. • Feature Tutorials: Comprehensive guides and examples for the new features built in Phase 1 (e.g., \"How to interactively stage changes\").",
    techstack: ["Golang", "Bubbletea", "Hugo", "Git", "Github Actions"],
    github: "https://github.com/gitxtui/gitx",
    mentors: [
      {
        name: "Ayush Chauhan",
        socials: {
          linkedin: "https://www.linkedin.com/in/ayuch",
          discord: "@bakayu",
          email: "ayu.0067abc@gmail.com",
          twitter: "",
        },
      },
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "Pyre",
    developer: "Open Source Chandigarh",
    desc: "Pyre is a custom-built, modular 3D graphics engine designed to bridge the gap between theoretical graphics programming and practical game engine development. It focuses on clean architecture, exposing the raw OpenGL pipeline while managing complexity through robust design patterns like ECS (Entity Component System).\n\nDetailed Project Description\nProblem Statement Many computer science students learn graphics theory—the mathematics of drawing a single triangle—but never cross the chasm to building a system robust enough to be called an \"engine.\"\nSolution Pyre addresses this by offering a robust codebase that exposes students to the raw OpenGL pipeline. It currently supports advanced features like Deferred-style architecture preparation, Stencil buffers, Framebuffers, Skyboxes, and Blinn-Phong lighting.\nFocus Areas:\n• Engine Tooling: Building in-engine GUI (ImGui) tools for runtime debugging and scene manipulation.\n• Mathematics: Upgrading core systems from Euler angles to Quaternions.\n• Visual Fidelity: Implementing advanced post-processing (Gaussian Blur, Edge Detection) and lighting visualization.\n• Robustness: Creating error-safe asset loading pipelines to handle missing files gracefully.\nStudent Contribution Guide\nWe have categorized contribution tasks into three tiers based on complexity and the required background in Linear Algebra and C++.\nTier 1: Beginner / Warm-up Focus: Input handling, Game Logic, and Basic Visual Helpers.\n• Debug Toggle System: Implement a runtime toggle (e.g., binding the H key) to show/hide helper objects like light diamonds that currently clutter the view.\n• Camera Speed Control: Implement dynamic camera speed adjustment (e.g., pressing + / - to increase/decrease speed) to assist with navigating large scenes vs inspecting details.\n• Expanded Light Visualizers: Implement wireframe gizmos for Directional Lights (lines indicating sun direction) and Spotlights (wireframe cones indicating influence and cutoff).\nTier 2: Intermediate (The \"Editor\" Features) Focus: Library Integration, UI, and Buffer Manipulation.\n• ImGui Integration (Primary Focus): Integrate the Dear ImGui library into the render loop to create a basic \"Inspector\" window for changing light colors, intensity, and positions in real-time.\n• Advanced Post-Processing: Implement Gaussian Blur (requires multi-pass rendering) and Edge Detection (Sobel Operator) for stylized/outline rendering.\n• Asset Loader Hardening: Improve the Assimp model loader to detect missing texture files, log a warning, and load a default \"checkerboard\" texture instead of crashing or showing errors.\nTier 3: Advanced (Math & Algorithms) Focus: Linear Algebra and Complex Rendering Pipelines.\n• Quaternion Camera System: Upgrade the camera class from Euler Angles to Quaternions to eliminate Gimbal Lock and allow for true 6-DOF (Degree of Freedom) movement.\n• Shadow Mapping: Implement the first pass of a Shadow Mapping system by rendering scene depth from the Light's perspective to a Framebuffer and using it to determine occluded fragments.",
    techstack: ["C++", "OpenGL", "GLFW", "GLM", "Assimp", "stb_image", "CMake", "Dear ImGui"],
    github: "https://github.com/Open-Source-Chandigarh/pyre",
    mentors: [
      {
        name: "Dhruv Ranger",
        socials: {
          linkedin: "dhruv-ranger-716564383",
          discord: "dhruv0154",
          email: "dhruvranger97@gmail.com",
          twitter: "",
        },
      },
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  // {
  //   name: "Ak-dskit (DsKit)",
  //   developer: "Programmers' Paradise Technical Society",
  //   desc: "Problem Statement:\nData scientists and ML engineers often spend 60-80% of their time on repetitive tasks like data cleaning, EDA, preprocessing, and basic modeling. There's a need for a unified, production-ready toolkit that wraps complex operations into simple 1-line commands while maintaining flexibility and comprehensive feature coverage.\nAk-dskit solves this by providing 221+ wrapper functions that streamline the entire ML pipeline - from data loading to model deployment - making data science accessible, efficient, and production-ready.\nFocus Areas:\nStudents can contribute to various aspects of the project:\n\nCore Features Enhancement\n• Extending data cleaning and preprocessing capabilities\n• Adding new feature engineering methods\n• Improving automated EDA functions\n• Enhancing model validation utilities\n• Visualization & Explainability\n\n• Creating new interactive visualization functions\n• Improving SHAP integration for model explainability\n• Building custom plotting utilities for specific use cases\n• Developing hyperplane visualization for advanced algorithms\n• AutoML & Optimization\n• Expanding hyperparameter tuning capabilities\n• Adding support for new ML algorithms\n• Implementing ensemble methods\n• Building automated feature selection tools\n• Documentation & Testing\n• Writing comprehensive tutorials and guides\n• Creating Jupyter notebook examples\n• Developing unit tests for existing functions\n• Improving API documentation\n• DevOps & Deployment\n• Setting up CI/CD pipelines\n• Creating Docker containers for deployment\n• Building model serving utilities\n• Implementing monitoring and logging features\n• Database & Time Series\n• Enhancing database utility functions\n• Expanding time series analysis capabilities\n• Adding support for new data sources\n• Building data versioning tools\n• Student Contribution Guide (Idea Page)\n\nWhat Students Will Work On:\n• Beginner Level:\n1. Writing documentation and tutorials\n2. Creating example notebooks\n3. Adding unit tests for existing functions\n4. Fixing bugs and improving error handling\n\n5. Enhancing function docstrings\n• Intermediate Level:\n1. Implementing new preprocessing methods\n2. Adding visualization functions\n3. Creating data validation utilities\n4. Building feature engineering tools\n5. Developing data profiling capabilities\n• Advanced Level:\n1. Implementing advanced AutoML features\n2. Building custom ML algorithms\n3. Creating model deployment pipelines\n4. Developing distributed computing support\n5. Implementing neural network wrappers\n\nExpected Outcomes:\n\n1. At least 10-15 new utility functions added to the library\n2. Comprehensive test coverage (target: >80%)\n3. 5+ tutorial notebooks demonstrating real-world use cases\n4. Improved documentation with API reference updates\n5. Performance optimization for core functions\n6. New features like automated report generation, data drift detection, or A/B testing utilities",
  //   techstack: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "SHAP", "XGBoost", "LightGBM", "CatBoost", "Optuna", "Hyperopt", "PyPI"],
  //   github: "https://github.com/Programmers-Paradise/DsKit",
  //   mentors: [
  //     {
  //       name: "Aksh Agrawal",
  //       socials: {
  //         linkedin: "",
  //         discord: "hextrovert_10",
  //         email: "aksh.300012824005@csvtu.ac.in",
  //         twitter: "",
  //       },
  //     },
  //   ],
  //   socials: {
  //     linkedin: "",
  //     discord: "",
  //     email: "",
  //     twitter: "",
  //   },
  // },
  {
    name: "Complete CI testing for OpenPrinting projects",
    developer: "OpenPrinting",
    desc: "Problem Statements:- 1.As the software components we develop at OpenPrinting are an essential part of the operating system infrastructure, we want to have a solid CI testing of each commit to our GitHub repositories. CUPS (\"cups\" repository for 2.x) has already excellent CI done by Michael Sweet, consisting of GitHub actions/workflows which automatically apply static analysers, build and execution tests on different architectures and distros, … This we want to have also in the other projects on OpenPrinting.    2.The go-avahi project provides Go bindings for the Avahi/mDNS/DNS-SD stack and is used for network service discovery functionality within the OpenPrinting ecosystem. It acts as a bridge between Go applications and the underlying Avahi daemon through D-Bus.\n\nCurrently, go-avahi has no fuzz testing, limited test coverage, and several input-handling paths may fail in unexpected ways for malformed or adversarial input. For this project,, fuzzing is especially important to uncover crashes, panics, and edge cases.\n\nThis project aims to develop a comprehensive fuzzing setup for go-avahi, improve test coverage, and integrate the project into the OSS-Fuzz ecosystem to enable continuous, long-term fuzz testing.   3.Currently, the go-mfp project, aimed to implement a full-featured behaviour-accurate MFP simulator together with collection of the MFP testing/validation/troubleshooting tools, lacks the support of WS-Scan protocol. We already have eSCL, partially implemented IPP, virtual USB MFP simulation (IPP over USB and legacy 7/1/1 USB printer), but WS-Scan support is not yet completed.\n4.Currently, the go-mfp simulator already has very basic support of the legacy USB 7/1/1 printer emulation. However, it doesn't somehow interpret the data sent to the emulated printer and doesn't provide any response (as 7/1/2 devices should do).\n\nThe project goal is to implement the Go io.Reader (for 7/1/1 devices) and Go io.ReadWriter that consumes raw data bytes, sent to the emulated printer and able to properly identify document format being sent (i.e., PostScript, PDF, PCL5, ESC/P, …) and based on that identification properly detect the document or page boundaries (for example, PostScript and PDF documents are terminated by the Ctrl-D character, ESC/P and PCL5 may use end-of-page character etc).\n\nHaving that implemented we can add saving documents to file for further analysis and troubleshooting and document rendering for printed image evaluation.\n\nAlso, the bidirectional (USB 7/1/2) printers implement a simple PJL interpreter and generate proper responses, which also needs to be implemented in the io.ReadWriter interface with functionality enough to make CUPS happy.\n5.The contributor should study how the legacy printer works, how the graphical documents are sent to the printer and how the printer recognizes that document transmission is finished. The printed documents need to be extracted from the unstructured host to printer data flow and passed separately to the upper layer, which will decide what to do with these documents (just to save to the log file, to render etc).\n\nRendering of printed documents is out of the scope of this project, so very detailed understanding of the relevant formats is not required.\n\nAlso, for the implementation of the bidirectional (USB 7/1/2) printers the contributor needs to understand the behaviour expectations, based on specifications and CUPS implementation and to write a simple simulator.\n\nThe representation of the emulated printer as a virtual USB device already done in the go-mfp and out of scope of this project. At this level the contributor needs only to implement the Go io.Reader and io.ReadWriter interfaces that can properly consume the data sent to the printer and to generate the proper response, the task of transporting this data from/to the host is out of scope of this project (and already solved at the first glance).\n\nAs result of this project, the code contribution into the go-mfp is expected, with the reasonable test coverage and integration with the \"big project\".",
    techstack: ["C", "Shell", "GIT", "Github actions", "Static analysers"],
    github: "https://github.com/OpenPrinting/libcupsfilters, https://github.com/OpenPrinting/cups-filters, https://github.com/OpenPrinting/cpdb-libs, https://github.com/OpenPrinting/cpdb-backend-cups, https://github.com/OpenPrinting/cups-snap, https://github.com/OpenPrinting/libppd, https://github.com/OpenPrinting/pappl-retrofit",
    mentors: [
      {
        name: "Till Kamppeter",
        socials: {
          linkedin: "https://www.linkedin.com/in/kamppetertill/",
          discord: "tillkamppeter",
          email: "till.kamppeter@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Alexander Pevzner",
        socials: {
          linkedin: "https://www.linkedin.com/in/alexander-pevzner-6046161/",
          discord: "",
          email: "pzz@apevzner.com",
          twitter: "",
        },
      },
      {
        name: "Uddhav Phatak",
        socials: {
          linkedin: "https://www.linkedin.com/in/uddhavphatak",
          discord: "",
          email: "uddhavphatak@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Mohammed Imaduddin",
        socials: {
          linkedin: "https://www.linkedin.com/in/mdimado/",
          discord: "",
          email: "mdimad005@gmail.com",
          twitter: "",
        },
      },
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  // {
  //   name: "Redis Operator , K8s Vault Webhook , Logging Operator",
  //   developer: "OpsTree Global",
  //   desc: "1.Problem Statement -\nA golang based redis operator that will make/oversee Redis standalone/cluster/replication/sentinel mode setup on top of the Kubernetes.\n\nFocus Areas\nThe focus area will be backend controller development along with performance optimization.\nStudent Contribution Guide (Idea Page)\n• Backup & Restore CRD\n• Add a RedisBackup CR to trigger backups (e.g., using BGSAVE, snapshots, or RDB dumps).\n• Similarly, a RedisRestore CR to restore from snapshot.\n• Integrate with object storage (S3, GCS) for snapshot uploads.\n• Automated Certificate Management\n• Integrate with cert-manager to automate TLS certificates for Redis and Sentinel pods.\n• Support cert rotation.\n• Auto-Scaling\n• Add horizontal scaling logic: based on usage (memory, CPU, keyspace, throughput), operator can scale the number of replicas or shards.\n• Alternatively, integrate with Kubernetes Horizontal Pod Autoscaler (HPA) or a custom scaler.\n\n2. Problem Statement -\nk8s-vault-webhook is a Kubernetes admission webhook which listen for the events related to Kubernetes resources for injecting secret directly from secret manager to pod, secret, and configmap. The motive of creating this project is to provide a dynamic secret injection to containers/pods running inside Kubernetes from different secret managers for enhanced security.\nFocus Area -\nThe focus should be to stabilize the existing secret manager integrations, along with new feature support for secret manager.\nStudent Contribution Guide -\nSupport for more secret managers / backends: maybe add support for secret managers not yet supported, or improve existing ones.\n• Secrets versioning and rotation: introduce versioning of secrets, or periodic re-injection when secrets change in Vault.\n• Custom annotations or templating: allow more flexible templating for how secrets should be injected (e.g., naming conventions, path transformations).\n• RBAC / policy management UI or CRD: build a CRD or UI to manage which service accounts map to which Vault policies, instead of manual policy definitions.\n• Backup/reconciliation: maintain a reconciliation loop that ensures injected secrets remain up-to-date even after pod restarts, or if secret manager data changes.\n• Observability: expose metrics from the webhook (such as number of admission requests, failed injections, latency) via Prometheus.\n• Fault tolerance: handle cases when the secret manager is down, or when the webhook's certificate expires, more gracefully.\n\n3.Problem Statement -\nA golang based operator to create and manage EFK (Elasticsearch, Fluentd, and Kibana) stack on Kubernetes\nFocus Area -\n• Development of backend API features to support elasticsearch, fluentd, and kibana integration.\nStudent Contribution Guide -\n\nSupport for Alternative Log Collectors / Forwarders\n• Add support for Fluent Bit as a daemonset collector + Fluentd / ES / other outputs.\n(Although some upstream logging operators use Fluent Bit + Fluentd; if not present, this is big.)\n• Support for Loki as a storage backend (instead of or in addition to Elasticsearch) or other outputs (S3, Kafka, etc.).\n• Automatic Scaling & Lifecycle Management\n• Add CR-driven scaling for Elasticsearch nodes (master / data / ingestion) based on resource usage.\n• Implement lifecycle management of indices:\nrollover, retention, delete-old-index policies via CRD\n(or enhance existing index lifecycle CR).\n• Secure Multi-Tenancy / Namespacing\n• Build better namespace isolation of logging pipelines: allow CR per namespace, or per team, with RBAC.\n• Add validation / policy CRs to enforce which namespaces can write to which logging pipeline, or limit ES resources per tenant.\n• Observability Enhancements\n• Expose metrics from the operator: reconciliation time, number of CRs, failures, etc., via Prometheus.\n• Build Grafana dashboards for EFK stack health (ES metrics, Fluentd throughput, Kibana usage).",
  //   techstack: ["GoLang", "Kubernetes"],
  //   github: "https://github.com/OT-CONTAINER-KIT/redis-operator, https://github.com/OT-CONTAINER-KIT/k8s-vault-webhook, https://github.com/OT-CONTAINER-KIT/logging-operator",
  //   mentors: [
  //     {
  //       name: "Abhishek Dubey",
  //       socials: {
  //         linkedin: "https://www.linkedin.com/in/shubham-gupta-8b1168244/",
  //         discord: "shubamgupta6536",
  //         email: "iamshubhamgupta200@gmail.com",
  //         twitter: "",
  //       },
  //     },
  //     {
  //       name: "Samyak Jain",
  //       socials: {
  //         linkedin: "https://www.linkedin.com/in/samyyaakk",
  //         discord: "samyyaakk",
  //         email: "samyak.jain@opstree.com",
  //         twitter: "",
  //       },
  //     },
  //   ],
  //   socials: {
  //     linkedin: "",
  //     discord: "",
  //     email: "",
  //     twitter: "",
  //   },
  // },
  {
    name: "WallGodds Web",
    developer: "WallGodds",
    desc: "A modern wallpaper website offering high-quality wallpapers for mobile, tablet, and desktop devices. Features include user uploads, categorization, and profile management.\n• Problem Statement: Many existing wallpaper platforms lack proper screen-size categorization and often overwhelm users with cluttered interfaces. WallGodds addresses this by offering a clean, minimal, and intuitive experience for browsing wallpapers across mobile, tablet, and desktop, while also allowing users to freely upload their own collections.\n\n• Focus Areas: UI/UX enhancement, performance optimization, and backend API development.\n\n• Student Contribution Guide (Idea Page): Contributors are encouraged to work on issues within our core focus areas or propose fresh, creative ideas. Collaboration with designers and developers is highly welcomed as we continue building a smoother, smarter, and more engaging platform together.",
    techstack: ["React", "Firebase"],
    github: "https://github.com/WallGodds/WallGodds-Web",
    mentors: [
      {
        name: "Parnab Bagchi",
        socials: {
          linkedin: "https://www.linkedin.com/in/parnab-bagchi-072966251/",
          discord: "Parnab_03",
          email: "pb7439578071@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Soumik Ghosh",
        socials: {
          linkedin: "https://www.linkedin.com/in/parnab-bagchi-072966251/",
          discord: "soumikghosh_999",
          email: "soumikghosh09072004@gmail.com",
          twitter: "",
        },
      },
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "WallGodds App",
    developer: "WallGodds",
    desc: "WallGodds is reimagined for mobile — fast, clean, and loaded with stunning high-res wallpapers for every screen. It's more than an app — it's your personal visual canvas, made for those who style their screen with every swipe.\n\n• Problem Statement: Applying wallpapers directly from the WallGodds website on mobile is often a long, repetitive process. Our goal is to simplify this through a dedicated mobile app that provides a seamless wallpaper experience while still allowing users to freely upload and share their own collections.\n\n• Focus Areas: UI/UX enhancement, performance optimization, and backend API development.\n\n• Student Contribution Guide (Idea Page): Contributors are encouraged to work on issues within our core focus areas or propose fresh, creative ideas. Collaboration with designers and developers is highly welcomed as we continue building a smoother, smarter, and more engaging platform together.",
    techstack: ["Kotlin", "Compose", "Firebase"],
    github: "https://github.com/WallGodds/WallGodds-App",
    mentors: [
      {
        name: "Sayan Basak",
        socials: {
          linkedin: "https://www.linkedin.com/in/sayan-basak003/",
          discord: "cyanb",
          email: "sayanbasak42@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Shankhadeep Paria",
        socials: {
          linkedin: "https://www.linkedin.com/in/shankhadeepparia/",
          discord: "shankyy69",
          email: "pariashankhadeep@gmail.com",
          twitter: "",
        },
      },
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
];


const asset = {

  discord: discordlogo,
  linkedin: linkedinlogo,
  twitter: twitterlogo,
  email: emaillogo
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="relative w-[85%] sm:w-[30%] m-[2%] sm:m-[1%]">
      <Image className="backdrop-blur" src={projectcard} alt="project card" />
      <div className='absolute top-[4%] left-[10%] w-[80%] align-middle font-chakra text-scale-60 text-center text-brand text-nowrap overflow-hidden'>
        {project.name.toUpperCase()}
      </div>
      <div className='absolute top-[16%] left-[20%] w-[60%] align-middle font-chakra text-scale-30-2 text-center text-[#CADEFF] text-nowrap overflow-hidden'>
        {project.developer.toUpperCase()}
      </div>
      <div className='absolute top-[27%] left-0 py-[3%] px-[4%] w-full h-[53%] flex justify-center flex-wrap gap-x-[3%] text-grey text-center items-start text-scale-30 overflow-x-hidden overflow-y-auto scrollbar'>
        {project.techstack.map((tech, index) => {
          return (
            <div key={index} className="text-brand font-chakra p-[2.5%] h-fit w-fit border-[thin] rounded-[calc(0.3*(1vw-4px)+3px)] text-scale-30-2">{tech}</div>
          );
        })}
      </div>
      <div className='absolute bottom-[0.75%] left-[0.75%] w-[48%] h-[16%] p-[2.5%] font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden hover:scale-110 duration-700' onClick={openModal}>
        Know More
      </div>
      <a href={project.github} className='absolute bottom-[0.75%] left-[51.25%] w-[48%] h-[16%] p-[2.5%] font-chakra text-scale-30-2 text-center text-brand text-nowrap overflow-hidden hover:scale-110 duration-700' rel="noopener noreferrer" target="_blank">
        See project
      </a>
      {isOpen && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-75 flex items-center justify-center backdrop-blur-[calc(0.1*(1vw-3.6px)+0.5px)] modal" onClick={handleBackdropClick}>
          <div className="relative w-[75%]">
            <Image src={projectmodal} alt="project modal" />
            <div className="absolute font-chakra text-brand top-[0%] left-[0%] w-[30.2%] h-[89%] p-[1.5%] text-center overflow-x-hidden overflow-y-auto scrollbar text-scale-20-4 flex flex-col justify-between gap-[2%]" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 5%)" }}>
              {project.name.toUpperCase()}
              <div className='text-scale-60-2 w-full text-[#CADEFF]'>
                {project.developer.toUpperCase()}
              </div>
              <div className="flex gap-x-[5%] gap-y-0  flex-wrap pt-[5%] justify-center">
                {project.techstack.map((tech, index) => {
                  return (
                    <div key={index} className="text-brand px-[2.5%] py-[1.5%] font-chakra h-fit w-fit my-[2%] border-[thin] rounded-[calc(0.3*(1vw-4px)+3px)]">{tech}</div>
                  );
                })}
              </div>
              <div className='w-full flex-col flex items-baseline mt-[5%]'>
                {project.mentors.map((mentor, index) => (
                  <div key={index} className="flex-col flex items-baseline w-full my-[2%]">
                    <div className=' text-brand font-chakra text-scale-100-3 w-full'>{mentor.name}</div>
                    <div key={index} className="flex items-baseline w-full justify-center gap-[5%]">
                      {(Object.keys(mentor.socials) as (keyof Socials)[]).map((key) => {
                        if (!mentor.socials[key]) return null;
                        var social = mentor.socials[key];
                        if (key == "email")
                          social = "mailto:" + social;
                        return (
                          <a key={key} href={social} rel="noopener noreferrer" target="_blank" className="w-[15%] min-w-[15px] aspect-square py-[2%] hover:scale-110 duration-700">
                            <Image src={asset[key]} alt={key} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-baseline w-full justify-center gap-[5%] border-t-[1px] pt-[3.5%]">
                {(Object.keys(project.socials) as (keyof Socials)[]).map((key) => {
                  if (!project.socials[key]) return null;
                  const social = project.socials[key];
                  return (
                    <a key={key} href={social} rel="noopener noreferrer" target="_blank" className="w-[15%] min-w-[15px] aspect-square py-[2%] hover:scale-110 duration-700">
                      <Image src={asset[key]} alt={key} />
                    </a>
                  );
                })}
              </div>
            </div>
            <a href={project.github} rel="noopener noreferrer" target="_blank" className="absolute font-kleemax text-black bottom-[0%] left-[0%] w-[30%] py-[1.5%] h-[9%] text-center align-middle text-scale-15-1 hover:scale-105 duration-700">VISIT PROJECT</a>
            <pre className='absolute top-0 left-[31.5%] w-[65.5%] h-[88%] m-[3%] pr-[3%] font-chakra text-scale-15-5 text-brand text-wrap break-words overflow-y-auto shadow scrollbar'>{project.desc}</pre>
          </div>
        </div>
      )}
    </div>
  );
};


const Projects = () => {
  var TBA = false;
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedTech, setSelectedTech] = useState('');

  // Get all unique tech stacks
  const allTechStacks = useMemo(() => {
    const techs = new Set<string>();
    projectData.forEach(project => {
      project.techstack.forEach(tech => techs.add(tech.toUpperCase()));
    });
    return Array.from(techs)
      .sort()
      .map(tech => tech.charAt(0).toUpperCase() + tech.slice(1)); // optional: capitalize first letter
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projectData.filter(project => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase());

      // Case-insensitive techstack match
      const matchesTech =
        !selectedTech ||
        project.techstack.some(
          tech => tech.toLowerCase() === selectedTech.toLowerCase()
        );

      return matchesSearch && matchesTech;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'developer':
          return a.developer.localeCompare(b.developer);
        case 'techCount':
          return b.techstack.length - a.techstack.length;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, selectedTech]);

  return (
    <section className='w-full h-full mx-auto pt-[10%] bg-black' id="projects">
      <div className='px-[5%]'>
        <div className='text-center text-brand font-kleemax text-scale-50 drop-shadow-blue'>
          PROJECTS
          <div className='-z-10 w-[25%] absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-40.5%]'>
            <Image className="mx-auto w-full" src={projectbanner} alt="projectbanner" />
          </div>
        </div>

        {/* Horizontal Filters - Right Side Below Title */}
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center justify-end mt-10 mb-2 relative z-10 px-4 sm:px-0'>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='px-4 sm:px-6 py-3 bg-black border-[2px] border-brand rounded-lg text-brand font-chakra text-[14px] sm:text-[18px] focus:outline-none focus:border-[#CADEFF] w-full sm:w-[300px] appearance-none'
          />

          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className='px-4 sm:px-6 py-3 bg-black border-[2px] border-brand rounded-lg text-brand font-chakra text-[14px] sm:text-[18px] focus:outline-none focus:border-[#23CADEFF] w-full sm:w-[300px] appearance-none cursor-pointer'
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2323CADEFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '20px'
            }}
          >
            <option value="">Search by Techstacks</option>
            {allTechStacks.map((tech) => (
              <option key={tech} value={tech}>{tech}</option>
            ))}
          </select>

          {(searchTerm || selectedTech || sortBy !== 'name') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTech('');
                setSortBy('name');
              }}
              className='px-4 sm:px-6 py-3 bg-brand/20 hover:bg-brand/30 text-brand border-[2px] border-brand rounded-lg font-chakra text-[14px] sm:text-[18px] transition-all duration-300 w-full sm:w-auto'
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {TBA ?
        <div className="pt-[5%] flex w-full justify-center text-brand drop-shadow-blue font-kleemax text-scale-40 font-semibold">TO BE ANNOUNCED</div>
        :
        <div className='w-full p-[5%] sm:p-[3%] flex justify-center flex-wrap'>
          {filteredProjects.map((project, index) =>
            <ProjectCard key={index} project={project} />
          )}
          {filteredProjects.length === 0 && (
            <div className="w-full text-center py-12 text-brand font-chakra text-scale-20">
              No projects found matching your criteria...
            </div>
          )}
        </div>
      }
      <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black" />
    </section>
  );
}

export default Projects;