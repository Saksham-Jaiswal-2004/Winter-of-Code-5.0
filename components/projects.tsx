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
    name: "SQLPage",
    developer: "SQLPage",
    desc: "SQLPage allows developers to build dynamic web applications using only SQL queries. It currently supports MySQL, SQLite, PostgreSQL, and Microsoft SQL Server. The project is seeking contributions to expand its functionality and usability.\nOfficial website: https://sql.datapage.app\nQuick start guide: https://learnsqlpage.com/sqlpage_quickstart.html\nYouTube tutorial videos: https://www.youtube.com/@SQLPage/playlists\n\nFocus Areas for Contribution:\n1.ODBC Connector:\nImplement an ODBC connector to allow SQLPage to connect seamlessly with any database system, broadening its compatibility beyond the currently supported databases(currently supports MySQL, SQLite, PostgreSQL, and Microsoft SQL Server).\n2.New Components:\nDevelop additional components, such as an interactive calendar (like Google Calendar), to expand SQLPage's capabilities and make it more versatile for real-world applications.\n3.OIDC Integration:\nAdd OpenID Connect (OIDC) support to enable Single Sign-On (SSO) authentication directly within SQLPage, enhancing security and user management.\n4.New Additions:\nPropose and implement new features or improvements that can further enrich SQLPage’s functionality and user experience.",
    techstack: [
      "Rust",
      "Handlebars",
      "SQL",
      "JavaScript",
      "TypeScript",
      "Dockerfile",
    ],
    github: "https://github.com/sqlpage/sqlpage",
    mentors: [
      {
        name: "Ophir Lojkine",
        socials: {
          linkedin: "",
          discord: "",
          email: "contact@ophir.dev",
          twitter: "",
        },
      },
      {
        name: "Alexis Rouge Carrassat",
        socials: {
          linkedin: "",
          discord: "",
          email: "alexis.rcarrassat@gmail.com",
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
    name: "Tiled",
    developer: "MapEditor",
    desc: "Tiled is a free and open source, easy to use, and flexible level editor.\n\n1) Next Generation Tiled Extensions\nThis project is about exploring the possibility of using QML rather than JavaScript to author Tiled extensions.\nMore information at https://github.com/mapeditor/tiled/wiki/Next-generation-Tiled-extensions\n\n2) glTF Export for Maps\nThis project is about implement a glTF export feature for maps, allowing them to be quickly imported for use in other frameworks without that framework needing to implement support for all of Tiled's features.\nMore information at https://github.com/mapeditor/tiled/wiki/GSoC-2022#gltf-export-for-maps\n\n3) Smaller proposal idea could also be found among Tiled's open issues.",
    techstack: ["C++", "QML", "JavaScript"],
    github: "https://github.com/mapeditor/tiled",
    mentors: [{
      name: "Thorbjørn Lindeijer",
      socials: {
        linkedin: '',
        discord: '',
        email: "bjorn@lindeijer.nl",
        twitter: "https://twitter.com/TiledApp"
      }
    },
    {
      name: "dogboydog",
      socials: {
        linkedin: '',
        discord: '',
        email: "https://github.com/dogboydog/",
        twitter: ""
      }
    }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    }
  },



  {
    name: "DebugSwift",
    developer: "DebugSwift",
    desc: "DebugSwift is a comprehensive toolkit designed to simplify and enhance the debugging process for Swift-based applications. Whether you're troubleshooting issues or optimizing performance, DebugSwift offers powerful features to make your debugging experience faster and more efficient.\n\n1) Main Thread Checker\nHelp create and improve a checker to detect any actions occurring off the main thread.\nMore information at https://github.com/DebugSwift/DebugSwift/issues/67\n\n2) Deep Link Opening\nContribute to the functionality that allows apps to open deep links smoothly.\nMore information at https://github.com/DebugSwift/DebugSwift/issues/28\n\n3) Improve Resources\nWork on optimizing resource management features for more efficient debugging.\nMore information at https://github.com/DebugSwift/DebugSwift/issues/88\n\nRequirements:\nXcode version: 14+\nmacOS version: Recommended for compatibility with Xcode 14 and the latest Swift features.\nDependencies: Any necessary dependencies will be mentioned within the respective project issue on GitHub.",
    techstack: ["Swift", "Ruby"],
    github: "https://github.com/DebugSwift/DebugSwift",
    mentors: [{
      name: "Matheus Gois",
      socials: {
        linkedin: "http://linkedin.com/in/maatheusgois/",
        discord: "",
        email: "matheusgoislimasilva@gmail.com",
        twitter: ""
      }
    },
    {
      name: "Murilo Teixeira",
      socials: {
        linkedin: "https://www.linkedin.com/in/murilot/",
        discord: "",
        email: "muriloo.teixeira@gmail.com",
        twitter: "",
      },
    },],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    }
  },




  {
    name: "TensorZero",
    developer: "TensorZero",
    desc: "TensorZero is a platform designed to optimize large language model (LLM) applications by creating a feedback loop that turns production data into smarter, faster, and cheaper models.\n\nProposal Ideas:\n1) Recipes: Create new optimization recipes. Simple ones include adapting fine-tuning recipes to other providers. More complex ones include RLHF/RLAIF, APE, and more.\n\n2) Examples & Demos: Apply TensorZero to new datasets, use cases (e.g. RAG), etc. Use it to demonstrate better performance than out-of-the-box models.\n\n3) Integrations: Add support for additional inference providers like Deepseek, xAI, and others to expand TensorZero’s capabilities.\n\n4) Other smaller projects for beginners are available with the label 'good-first-issue'\nhttps://github.com/tensorzero/tensorzero/issues?q=is%3Aissue+is%3Aopen+label%3Agood-first-issue",
    techstack: ["Python", "Rust", "Machine Learning"],
    github: "https://github.com/tensorzero/tensorzero/",
    mentors: [{
      name: "Gabriel Bianconi",
      socials: {
        linkedin: "",
        discord: "",
        email: "gabriel@tensorzero.com",
        twitter: "",
      }
    },
    {
      name: "Viraj Mehta",
      socials: {
        linkedin: "",
        discord: "",
        email: "viraj@tensorzero.com",
        twitter: "",
      },
    },],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    }
  },


  {
    name: "ClassroomIO",
    developer: "ClassroomIO",
    desc: "ClassroomIO is an open-source platform focused on improving educational workflows and classroom management. The project provides tools to simplify tasks for students, teachers, and administrators, offering features like assignment tracking, collaboration tools, and streamlined communication.\n\nProposal Ideas:\n1) Standard Code Formatting: Improve code quality and maintain consistency across the project.\nMore information at https://github.com/classroomio/classroomio/issues/516\n\n2) Self-host with Docker: Enable self-hosting with Docker for easier deployment.\nMore information at https://github.com/classroomio/classroomio/issues/508\n\n3) Self-paced Course: Implement features to create and manage self-paced courses.\nMore information at https://github.com/classroomio/classroomio/issues/513\n\n4) Export All Students: Add functionality to export student data for administrative tasks.\nMore information at https://github.com/classroomio/classroomio/issues/502\n\n5) Background Jobs: Improve background job handling for better performance.\nMore information at https://github.com/classroomio/classroomio/issues/494\n\n6) Improve Email Sending: Enhance email functionality for better reliability and performance.\nMore information at https://github.com/classroomio/classroomio/issues/519\n\n7) Email Tests: Implement proper testing for email functionality.\nMore information at https://github.com/classroomio/classroomio/issues/520\n\n8) Experiments:\n   - Youtube to Course: Convert YouTube content into course material.\n   More information at https://github.com/classroomio/classroomio/issues/486\n   \n   - Documentation and Blog Posts to Course: Create courses from documentation and blogs.\n   More information at https://github.com/classroomio/classroomio/issues/521\n\n9) Minor Improvements:\n   - Additional UI and functionality fixes.\n   https://github.com/classroomio/classroomio/issues/488\n   https://github.com/classroomio/classroomio/issues/478\n   https://github.com/classroomio/classroomio/issues/489",
    techstack: [
      "PLpgSQL",
      "Svelte",
      "HTML",
      "JavaScript",
      "TypeScript",
      "MDX",
    ],
    github: "https://github.com/classroomio/classroomio",
    mentors: [
      {
        name: "Rotomi Best",
        socials: {
          linkedin: "https://www.linkedin.com/in/best-r-7487b283/",
          discord: "rotimibest",
          email: "best@classroomio.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },

  {
    name: "Brisa",
    developer: "Brisa",
    desc: "Brisa is an experimental web framework inspired by others, taking the best of each one.\n\nProposal Ideas:\n1) Expand Documentation and Playground: Make the framework more accessible by improving documentation and creating an interactive playground.\n\n2) Develop Adapters: Extend cloud provider support by creating adapters for various platforms.\n\n3) UI Component Library: Build a UI component library (inspired by shadcn) entirely with Brisa, showcasing its capabilities.\n\n4) TypeScript Type Definitions: Improve TypeScript type definitions to enhance the developer experience.\n\n5) Bug Fixes: Contribute by fixing bugs labeled as \"good first issue\" to onboard new contributors.",
    techstack: [
      "TypeScript",
      "CSS",
    ],
    github: "https://github.com/brisa-build/brisa",
    mentors: [
      {
        name: "Aral Roca Gomez",
        socials: {
          linkedin: "",
          discord: "",
          email: "contact@aralroca.com",
          twitter: "",
        },
      },
      {
        name: "Albert Sabaté",
        socials: {
          linkedin: "",
          discord: "",
          email: "albert@zenettechnology.com",
          twitter: "",
        },
      },
    ],
    socials: {
      linkedin: "",
      discord: "https://discord.com/invite/MsE9RN3FU4",
      email: "",
      twitter: "",
    },
  },
  {
    name: "DashPress",
    developer: "DashPress",
    desc: "Dashpress is an admin app generator to help you transform your database schema into a sleek, customizable and performant admin dashboards quickly and efficiently.\n\nProposal Ideas:\n1. Resend Integration\n2. WhatsApp Integration\n3. Allow users inject analytics scripts: https://github.com/dashpresshq/dashpress/issues/102 \n\nMore Information about contributing at:\nhttps://github.com/dashpresshq/dashpress/blob/master/docs/CONTRIBUTING.md",
    techstack: [
      "TypeScript"
    ],
    github: "https://github.com/dashpresshq/dashpress",
    mentors: [
      {
        name: "Ayobami Akingbade",
        socials: {
          linkedin: "",
          discord: "",
          email: "akingbadefred@gmail.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "Laudspeaker",
    developer: "Laudspeaker",
    desc: "Proposal Ideas (ranked in priority):\n\n1) Add SMTP support to Laudspeaker\n-- Laudspeaker offers email sending capabilities via API like sendgrid and mailgun, we should allow users to configure using their own SMTP server as well\n\n2) Add whatsapp support to Laudspeaker\n-- Laudspeaker aims to offer messaging across any messaging platform, we should offer the ability to add, and send via a users whatsapp business account\n\n3) Add React Native library to Laudspeaker\n-- Laudspeaker has mobile sdks for android, and ios, we should add one for react native as well, as well as docs and a sample app showing how to set this up\n\n4) Add New UpsertBatch API endpoint\n-- Laudspeaker currently has an upsert endpoint, which allows developers to update or insert a single user at a time, we should also support an upsertbatch endpoint which allows a user to add or edit an arbitrarily large number of users at once\n\n5) Add Deep linking functionality to ios and android sdks\n\n6) Add Install attribution functionality to ios and android sdks\n\n7) Test, and improve deletion API\n-- Laudspeaker has a delete function, but we need to test it works in all scenarios and update if there are errors\n\n8) Add deployment instructions for community, and easy deploy to render quickstart\n-- laudspeaker wants to make it easier for the community to use the product, and part of that is making it easier to deploy\n\n9) Add Live Activities support to Laudspeaker's ios sdk\n-- Apple recently released live Activities",
    techstack: ["TypeScript", "CSC", "Javascript", "Shell", "Dockerfile", "Java", "Swift", "MDX"
    ],
    github: "https://github.com/laudspeaker/laudspeaker",
    mentors: [
      {
        name: "Mahamad C.",
        socials: {
          linkedin: "https://www.linkedin.com/in/mahamad-c-a025b9193/",
          discord: "",
          email: "",
          twitter: "",
        },
      },
      {
        name: "Abheek Basu",
        socials: {
          linkedin: "https://www.linkedin.com/in/abheek-basu-4a72a398/",
          discord: "",
          email: "",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },


  {
    name: "Laudspeaker Swift SDK",
    developer: "Laudspeaker",
    desc: "Proposal Ideas (ranked in priority):\n\n1) Add SMTP support to Laudspeaker\n-- Laudspeaker offers email sending capabilities via API like sendgrid and mailgun, we should allow users to configure using their own SMTP server as well\n\n2) Add whatsapp support to Laudspeaker\n-- Laudspeaker aims to offer messaging across any messaging platform, we should offer the ability to add, and send via a users whatsapp business account\n\n3) Add React Native library to Laudspeaker\n-- Laudspeaker has mobile sdks for android, and ios, we should add one for react native as well, as well as docs and a sample app showing how to set this up\n\n4) Add New UpsertBatch API endpoint\n-- Laudspeaker currently has an upsert endpoint, which allows developers to update or insert a single user at a time, we should also support an upsertbatch endpoint which allows a user to add or edit an arbitrarily large number of users at once\n\n5) Add Deep linking functionality to ios and android sdks\n\n6) Add Install attribution functionality to ios and android sdks\n\n7) Test, and improve deletion API\n-- Laudspeaker has a delete function, but we need to test it works in all scenarios and update if there are errors\n\n8) Add deployment instructions for community, and easy deploy to render quickstart\n-- laudspeaker wants to make it easier for the community to use the product, and part of that is making it easier to deploy\n\n9) Add Live Activities support to Laudspeaker's ios sdk\n-- Apple recently released live Activities",
    techstack: ["Swift"
    ],
    github: "https://github.com/laudspeaker/laudspeaker-swift-sdk",
    mentors: [
      {
        name: "Mahamad C.",
        socials: {
          linkedin: "https://www.linkedin.com/in/mahamad-c-a025b9193/",
          discord: "",
          email: "",
          twitter: "",
        },
      },
      {
        name: "Abheek Basu",
        socials: {
          linkedin: "https://www.linkedin.com/in/abheek-basu-4a72a398/",
          discord: "",
          email: "",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },

  {
    name: "Laudspeaker Android SDK",
    developer: "Laudspeaker",
    desc: "Proposal Ideas (ranked in priority):\n\n1) Add SMTP support to Laudspeaker\n-- Laudspeaker offers email sending capabilities via API like sendgrid and mailgun, we should allow users to configure using their own SMTP server as well\n\n2) Add whatsapp support to Laudspeaker\n-- Laudspeaker aims to offer messaging across any messaging platform, we should offer the ability to add, and send via a users whatsapp business account\n\n3) Add React Native library to Laudspeaker\n-- Laudspeaker has mobile sdks for android, and ios, we should add one for react native as well, as well as docs and a sample app showing how to set this up\n\n4) Add New UpsertBatch API endpoint\n-- Laudspeaker currently has an upsert endpoint, which allows developers to update or insert a single user at a time, we should also support an upsertbatch endpoint which allows a user to add or edit an arbitrarily large number of users at once\n\n5) Add Deep linking functionality to ios and android sdks\n\n6) Add Install attribution functionality to ios and android sdks\n\n7) Test, and improve deletion API\n-- Laudspeaker has a delete function, but we need to test it works in all scenarios and update if there are errors\n\n8) Add deployment instructions for community, and easy deploy to render quickstart\n-- laudspeaker wants to make it easier for the community to use the product, and part of that is making it easier to deploy\n\n9) Add Live Activities support to Laudspeaker's ios sdk\n-- Apple recently released live Activities",
    techstack: ["Java"
    ],
    github: "https://github.com/laudspeaker/laudspeaker-android-sdk",
    mentors: [
      {
        name: "Mahamad C.",
        socials: {
          linkedin: "https://www.linkedin.com/in/mahamad-c-a025b9193/",
          discord: "",
          email: "",
          twitter: "",
        },
      },
      {
        name: "Abheek Basu",
        socials: {
          linkedin: "https://www.linkedin.com/in/abheek-basu-4a72a398/",
          discord: "",
          email: "",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },

  {
    name: "Pumpbin",
    developer: "Pumpbin",
    desc: "The iced has released version 0.13.1, but this project is still using version 0.13.0-dev.\n\n1. Participants should update the project to version 0.13.1 of Iced, test the changes, and resolve any potential issues caused by the version upgrade.\n\n2. Check if the remaining dependencies can be upgraded, and update them.\n\n3. This project has English documentation, but unfortunately, it is mostly AI-translated with minimal manual verification. One would require to gain a thorough understanding of PumpBin and subsequently improve the English documentation, it would be a significant contribution and quite a challenging task.\n\nImportant points:\n1. Proficiency in the Rust programming language is required.\n2. After modifying the code, a comprehensive test is required.\n3. Initiate a discussion before making significant changes.",
    techstack: [
      "Rust", "Shell"
    ],
    github: "https://github.com/pumpbin/pumpbin",
    mentors: [
      {
        name: "Xingquan Liu",
        socials: {
          linkedin: "",
          discord: "",
          email: "b1nhack@proton.me",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },

  {
    name: "rust-shellcode",
    developer: "b1nhack",
    desc: " The project uses the windows-sys crate (from the windows-rs repository by Microsoft).\n\n1. Participants should update it to the latest version to take advantage of recent improvements, bug fixes, and updates provided by the maintainers.\n\n2. If new techniques for executing shellcode on the Windows platform have emerged recently but are not included in the rust-shellcode repository, participants are encouraged to identify and add them.\n\nImportant points:\n1. Proficiency in the Rust programming language is required.\n2. After modifying the code, a comprehensive test is required.\n3. Initiate a discussion before making significant changes.",
    techstack: [
      "Rust", "Shell"
    ],
    github: "https://github.com/b1nhack/rust-shellcode",
    mentors: [
      {
        name: "Xingquan Liu",
        socials: {
          linkedin: "",
          discord: "",
          email: "b1nhack@proton.me",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },

  {
    name: "Holidays Framework",
    developer: "Vacanza",
    desc: "Proposal ideas:\n\nv1 Version: Focus on breaking changes for improved structure, standardization, and feature expansion.\n\n- Design and implement custom exceptions system\n- Work on entities standardization according to ISO-3166 standard\n- Improve l10n approach to have messages grouped by locale\n- Migrate documentation to mkdocs\n- Implement iCal data export support\n\nMore details at: https://github.com/vacanza/holidays/labels/woc2025",
    techstack: [
      "Python"
    ],
    github: "https://github.com/vacanza/holidays/",
    mentors: [
      {
        name: "Arkadii Yakovets",
        socials: {
          linkedin: "https://www.linkedin.com/in/arkid15r/",
          discord: "arkid15r",
          email: "arkadii.yakovets@gmail.com",
          twitter: "",
        },
      }, {
        name: "Kate Golovanova",
        socials: {
          linkedin: "https://www.linkedin.com/in/kate-golovanova",
          discord: "",
          email: "kasya8888@gmail.com",
          twitter: "",
        },
      }

    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "BriefBox",
    developer: "Charles David Mupende",
    desc: "Briefbox is a tool designed for archiving emails from multiple IMAP and POP3 accounts. It provides a user-friendly web interface to manage email accounts, search archived emails, and view email details along with attachments.\n\nProposal Ideas:\n1. Search Optimization: Develop methods to quickly locate relevant emails at scale.\n2. Email Import/Export: Create features for importing and exporting emails easily.\n3. OAuth Integration: Implement OAuth to link Briefbox with other email providers for easier access.",
    techstack: ["Python", "Javascript"
    ],
    github: "https://github.com/bandundu/email-archiver",
    mentors: [
      {
        name: "Charles David Mupende",
        socials: {
          linkedin: "https://www.linkedin.com/in/mahamad-c-a025b9193/",
          discord: "charlesmcgray",
          email: "charlesdavid@mupende.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "Snapcrafters.org",
    developer: "Snapcrafters",
    desc: "Proposal Ideas:\n\n1. Blog Section: Create a new section to display blog posts. Participants can take inspiration from https://soumyadghosh.github.io/website/ or https://merlijn.sebrechts.be/.\n\n2. Contact Page: Develop a functional contact page. Allow users to directly contact and request snaps.\n\nDocumentation Reference: https://gohugo.io/documentation/\n\nGeneral Notes for Participants:\n\n1. Core Skills Needed:\n   - Bash scripting.\n   - Hugo development.\n   - Debugging and maintaining software/snaps.\n\n2. Students are encouraged to propose their own ideas, especially around improving the CI system or enhancing the website."
    ,
    techstack: ["HTML", "JavaScript", "Hugo", "Bash"
    ],
    github: "https://github.com/snapcrafters/snapcrafters.org",
    mentors: [
      {
        name: "Soumyadeep Ghosh",
        socials: {
          linkedin: "https://www.linkedin.com/in/soumyadghosh/",
          discord: "soumyatheman",
          email: "soumyadghosh@ubuntu.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "GDevelop",
    developer: "GDevelop",
    desc: "GDevelop is a full-featured, no-code, open-source game development software. You can build 2D, 3D and multiplayer games for mobile (iOS, Android), desktop and the web. GDevelop is fast and easy to use: the game logic is built up using an intuitive and powerful event-based system and reusable behaviors.\n\nFor further detail visit following link: https://gdevelop.notion.site/Public-WOC-2025-Project-descriptions-and-mentors-1618b47a33d280da9b4ef9c1232e8bbc"
    ,
    techstack: ["C", "C++", "JavaScript", "TypeScript", "CSS"
    ],
    github: "https://github.com/4ian/GDevelop",
    mentors: [
      {
        name: "Clemet",
        socials: {
          linkedin: "",
          discord: "",
          email: "clement@gdevelop.io",
          twitter: "",
        },
      },
      {
        name: "Alexandre",
        socials: {
          linkedin: "",
          discord: "",
          email: "alexandre@gdevelop.io ",
          twitter: "",
        },
      },
      {
        name: "Davy",
        socials: {
          linkedin: "",
          discord: "",
          email: "davy@gdevelop.io",
          twitter: "",
        },
      },
      {
        name: "Florian",
        socials: {
          linkedin: "",
          discord: "",
          email: "florian@gdevelop.io",
          twitter: "",
        },
      }


    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "Snapcrafters CI",
    developer: "Snapcrafters",
    desc: "Proposal Ideas:\n\n1. Implement CI System in Repositories:\n   - Integrate the custom CI system into snap repositories that don’t currently use it.\n   - Verify and update snaps as needed. A comprehensive list of snaps, including their CI integration status and whether they are up-to-date, can be found here: https://snapcrafters.org/snap-packages/.\n\nDocumentation Reference: https://github.com/snapcrafters/ci-workshop\n\nGeneral Notes for Participants:\n\n1. Core Skills Needed:\n   - Bash scripting.\n   - Hugo development.\n   - Debugging and maintaining software/snaps.\n\n2. Students are encouraged to propose their own ideas, especially around improving the CI system or enhancing the website.",
    techstack: ["Bash", "Makefile"
    ],
    github: "https://github.com/snapcrafters/ci",
    mentors: [
      {
        name: "Soumyadeep Ghosh",
        socials: {
          linkedin: "https://www.linkedin.com/in/soumyadghosh/",
          discord: "soumyatheman",
          email: "soumyadghosh@ubuntu.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "The FFmpeg snap",
    developer: "snapcrafters",
    desc: "Proposal Ideas:\n\n1. Update the FFmpeg Snap:\n   - Fix existing issues in the FFmpeg snap.\n   - Update the snap to align with the latest FFmpeg release.\n\nDocumentation Reference: https://github.com/snapcrafters/snap-quickstart-workshop\n\nGeneral Notes for Participants:\n\n1. Core Skills Needed:\n   - Bash scripting.\n   - Hugo development.\n   - Debugging and maintaining software/snaps.\n\n2. Students are encouraged to propose their own ideas, especially around improving the CI system or enhancing the website."
    ,
    techstack: ["Shell"
    ],
    github: "https://github.com/snapcrafters/ffmpeg",
    mentors: [
      {
        name: "Soumyadeep Ghosh",
        socials: {
          linkedin: "https://www.linkedin.com/in/soumyadghosh/",
          discord: "soumyatheman",
          email: "soumyadghosh@ubuntu.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },

  {
    name: "libcupsfilters",
    developer: "OpenPrinting",
    desc: "Proposal Ideas:\n Add support for JPEG-XL as input format: https://github.com/OpenPrinting/libcupsfilters/issues/73\n Participants are encouraged to explore OpenPrinting in general (https://github.com/OpenPrinting/) and propose their own ideas."
    ,
    techstack: ["C", "C++"
    ],
    github: "https://github.com/OpenPrinting/libcupsfilters",
    mentors: [
      {
        name: "Till Kamppeter",
        socials: {
          linkedin: "",
          discord: "tillkamppeter",
          email: "till.kamppeter@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Uddhav Phatak",
        socials: {
          linkedin: "",
          discord: "",
          email: "uddhavphatak2022@vitbhopal.ac.in",
          twitter: "",
        },
      }


    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },


  {
    name: "Fuzzing",
    developer: "OpenPrinting",
    desc: "Proposal Ideas:\n\nApply OSS-Fuzz to cups-browsed: https://github.com/OpenPrinting/fuzzing/issues/4\n Participants are encouraged to explore OpenPrinting in general (https://github.com/OpenPrinting/) and propose their own ideas."
    ,
    techstack: ["C", "C++", "Shell", "Makefile"
    ],
    github: "https://github.com/OpenPrinting/fuzzing",
    mentors: [
      {
        name: "Till Kamppeter",
        socials: {
          linkedin: "",
          discord: "tillkamppeter",
          email: "till.kamppeter@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Jiongchi Yu",
        socials: {
          linkedin: "",
          discord: "",
          email: "jiongchiyu@gmail.com",
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
    name: "cups-browsed",
    developer: "OpenPrinting",
    desc: "Proposal Ideas:\n\nReview locking/multi-threading implementation: https://github.com/OpenPrinting/cups-browsed/issues/36\n Participants are encouraged to explore OpenPrinting in general (https://github.com/OpenPrinting/) and propose their own ideas."
    ,
    techstack: ["C", "M4", "Shell", "Roff", "Makefile"
    ],
    github: "https://github.com/OpenPrinting/cups-browsed",
    mentors: [
      {
        name: "Till Kamppeter",
        socials: {
          linkedin: "",
          discord: "tillkamppeter",
          email: "till.kamppeter@gmail.com",
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
    name: "Fuzzing",
    developer: "OpenPrinting",
    desc: "Proposal Ideas:\n\nApply OSS-Fuzz to cups-browsed: https://github.com/OpenPrinting/fuzzing/issues/4\n Participants are encouraged to explore OpenPrinting in general (https://github.com/OpenPrinting/) and propose their own ideas."
    ,
    techstack: ["C", "C++", "Shell", "Makefile"
    ],
    github: "https://github.com/OpenPrinting/fuzzing",
    mentors: [
      {
        name: "Till Kamppeter",
        socials: {
          linkedin: "",
          discord: "tillkamppeter",
          email: "till.kamppeter@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Jiongchi Yu",
        socials: {
          linkedin: "",
          discord: "",
          email: "jiongchiyu@gmail.com",
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
    name: "IPP-USB",
    developer: "OpenPrinting",
    desc: "Proposal Ideas:\n Create an OCI container image of ipp-usb: https://github.com/OpenPrinting/ipp-usb/issues/93\n Participants are encouraged to explore OpenPrinting in general (https://github.com/OpenPrinting/) and propose their own ideas."
    ,
    techstack: ["Go"
    ],
    github: "https://github.com/OpenPrinting/ipp-usb",
    mentors: [
      {
        name: "Till Kamppeter",
        socials: {
          linkedin: "",
          discord: "tillkamppeter",
          email: "till.kamppeter@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Rudra Pratap Singh",
        socials: {
          linkedin: "",
          discord: "",
          email: "rudransh.iitm@gmail.com",
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
    name: "API Dash",
    developer: "API Dash",
    desc: "API Dash is a beautiful open-source cross-platform (macOS, Windows, Linux, Android & iOS) API Client built using Flutter, designed to help you easily create & customize API requests, visually inspect responses and generate API integration code. It serves as a lightweight alternative to Postman/Insomnia.\n\nProblem Statement:\nContributors are welcome to add the following features to API Dash:\n- WebSocket support\n- SSE support\n- MQTT support\n- GraphQL support\n- gRPC support\n- Figuring out how to build for various Linux packaging formats\n- Importers for OpenAPI, Insomnia, Hurl, HAR\n- Embedded WebView in Response Previewer\n- Git Support\n- API Workflow Builder\n- OAuth 2.0 auth"
    ,
    techstack: ["Dart"
    ],
    github: "https://github.com/foss42/apidash",
    mentors: [
      {
        name: "Ashita Prasad",
        socials: {
          linkedin: "https://www.linkedin.com/in/ashitaprasad/",
          discord: "",
          email: "ashitaprasad.in@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Ankit Mahato",
        socials: {
          linkedin: "https://www.linkedin.com/in/ankitmahato/",
          discord: "",
          email: "ankit@apidash.dev",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },


  /*
  {
    name: "Awesome Open Source Flutter Apps",
    developer: "Flutter Gems",
    desc: "A curated list of awesome open source Flutter apps. Analyse open source Flutter apps and derive unique insights helpful for other developers.\n\nProblem Statement:\nContributors are welcome to add new open source Flutter apps and develop code to analyze the listed Flutter apps to derive insights such as package dependencies, project health, project activity, and more."
  ,
    techstack: [ "Dart"
    ],
    github: "https://github.com/fluttergems/awesome-open-source-flutter-apps",
    mentors: [
      {
        name: "Ashita Prasad",
        socials: {
          linkedin: "https://www.linkedin.com/in/ashitaprasad/",
          discord: "",
          email: "ashitaprasad.in@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Ankit Mahato",
        socials: {
          linkedin: "https://www.linkedin.com/in/ankitmahato/",
          discord: "",
          email: "ankit@apidash.dev",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  
  
  {
    name: "Learn Python 3",
    developer: "Ankit Mahato",
    desc: "Free & Open Source book to master Python 3.\nProblem Statement:\nContributors are welcome to plan the next edition of the open-source Python Book, curate the existing contributions, and add new content to successfully release the next edition of the book."
  ,
    techstack: [ "Python"
    ],
    github: "https://github.com/animator/learn-python",
    mentors: [
      {
        name: "Ashita Prasad",
        socials: {
          linkedin: "https://www.linkedin.com/in/ashitaprasad/",
          discord: "",
          email: "ashitaprasad.in@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Ankit Mahato",
        socials: {
          linkedin: "https://www.linkedin.com/in/ankitmahato/",
          discord: "",
          email: "ankit@apidash.dev",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  
  //*/
  {
    name: "ChartDB",
    developer: "ChartDB",
    desc: "ChartDB is a powerful, web-based database diagramming editor. Instantly visualize your database schema with a single \"Smart Query.\" Customize diagrams, export SQL scripts, and access all features - no account required.\n\nProposal Ideas:\n\n1) Optimize the canvas to handle more tables by identifying and resolving performance bottlenecks incrementally, focusing on rendering, memory usage, and event handling.\n\n2) Add support for more databases - Snowflake, Oracle, ...\n\n3) Add a section to list database-related errors in diagrams (e.g., mismatched foreign key types).\n\nhttps://github.com/chartdb/chartdb/issues/485\n\n4) Optimize size & performance on SVG export.\n\nhttps://github.com/chartdb/chartdb/issues/375\n\n5) Improve flexibility and performance of the Docker setup.\n\nhttps://github.com/chartdb/chartdb/issues/428\n\n6) Add support custom types like enums.\n\nhttps://github.com/chartdb/chartdb/issues/475\n\n7) Add support for various export/import dialects.\n\nhttps://github.com/chartdb/chartdb/issues/383\n\nhttps://github.com/chartdb/chartdb/issues/72\n\n8) Extend field properties to include default values and size, ensuring these options are conditional based on the field type (e.g., size not applicable for integers).\n\n9) Bug Fixes: Contribute by fixing bugs labeled as \"good first issue\" to onboard new contributors."
    ,
    techstack: ["React", "Typescript", "CSS"
    ],
    github: "https://github.com/chartdb/chartdb",
    mentors: [
      {
        name: "Jonathan Fishner",
        socials: {
          linkedin: "https://www.linkedin.com/in/jonathanfishner/",
          discord: "https://discord.gg/QeFwyWSKwC",
          email: "jonathan@buckle.dev",
          twitter: "",
        },
      },
      {
        name: "Guy Ben Aharon",
        socials: {
          linkedin: "https://www.linkedin.com/in/guy-ben-aharon/",
          discord: "https://discord.gg/QeFwyWSKwC",
          email: "guybenah@gmail.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "BrainPunk",
    developer: "Ankit Mahato",
    desc: "A Brain Story Game (Puzzles + Lore) built using Flutter + Flame.\nProblem Statement:\n  BrainPunk was a game project offering a refreshing take on puzzle games. Contributors are welcome to:\n- Improve the game storyline and interweave more exciting puzzles.\n- Generate AI art for each puzzle and the storyline.\n- Add responsive design.\n- Release the game on Android and Apple app stores."
    ,
    techstack: ["Dart", "HTML"
    ],
    github: "https://github.com/animator/brain_punk",
    mentors: [
      {
        name: "Ashita Prasad",
        socials: {
          linkedin: "https://www.linkedin.com/in/ashitaprasad/",
          discord: "",
          email: "ashitaprasad.in@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Ankit Mahato",
        socials: {
          linkedin: "https://www.linkedin.com/in/ankitmahato/",
          discord: "",
          email: "ankit@apidash.dev",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },

  {
    name: "Mifos-Gazelle",
    developer: "Mifos",
    desc: "Proposal Idea:\n\nReview and update all pipelines and docker images to enable a build to run on ARM processors. This would be the first step to being able to deploy Mifos Gazelle on a Raspberry Pi-based lab.\n\nContributors are recommended to go through the \"README\" section on GitHub to have better understanding.",
    techstack: ["Shell", "Dockerfile"
    ],
    github: "https://github.com/openMF/mifos-gazelle",
    mentors: [
      {
        name: "Tom Daly",
        socials: {
          linkedin: "https://www.linkedin.com/in/tom-daly-63b0a72/",
          discord: "",
          email: "tdaly@mifos.org",
          twitter: "",
        },
      },
      {
        name: "David Higgins",
        socials: {
          linkedin: "https://www.linkedin.com/in/david-higgins-b70a10/",
          discord: "",
          email: "dhiggins@mifos.org",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },

  {
    name: "Mobile Wallet",
    developer: "Mifos",
    desc: "Mobile Wallet app built on top of the compose multi-platform.\nIn this Winter of Code, we are focusing on enabling AI-generated documentation and writing Unit and UI tests for end-to-end functionality on all platforms.\n\nProposal Ideas:\n-https://mifosforge.jira.com/browse/MW-161\n- https://mifosforge.jira.com/browse/MW-162"
    ,
    techstack: ["Shell", "Kotlin"
    ],
    github: "https://github.com/openMF/mobile-wallet",
    mentors: [
      {
        name: "Rajan Maurya",
        socials: {
          linkedin: "https://www.linkedin.com/in/therajanmaurya/",
          discord: "therajanmaurya",
          email: "rajanmaurya154@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Sk Niyaj Ali",
        socials: {
          linkedin: "https://www.linkedin.com/in/skniyajali/",
          discord: "",
          email: "skniyajali0@gmail.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },

  {
    name: "Mifos-Mobile",
    developer: "Mifos",
    desc: "An Android Application built on top of the MifosX Self-Service platform for end-user customers to view/transact on the accounts and loans they hold. Data visible to customers will be a sub-set of what staff can see. This is a native Android Application written in Kotlin.\n\nProposal Ideas:\n-https://mifosforge.jira.com/browse/MM-92\n-https://mifosforge.jira.com/browse/MM-93\n-https://mifosforge.jira.com/browse/MM-94"
    ,
    techstack: ["Kotlin"
    ],
    github: "https://github.com/openMF/mifos-mobile",
    mentors: [
      {
        name: "Rajan Maurya",
        socials: {
          linkedin: "https://www.linkedin.com/in/therajanmaurya/",
          discord: "therajanmaurya",
          email: "rajanmaurya154@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Sk Niyaj Ali",
        socials: {
          linkedin: "https://www.linkedin.com/in/skniyajali/",
          discord: "",
          email: "skniyajali0@gmail.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },



  {
    name: "Android-Client",
    developer: "Mifos",
    desc: "This Android application, built in Kotlin on the Mifos X platform, is designed for field officers to manage core banking operations. It facilitates transaction processing, client data management, group and center records, and account handling (loans, savings, recurring). It also enables generating client reports efficiently.\n\nProposal Ideas:\n-https://mifosforge.jira.com/browse/MIFOSAC-317\n-https://mifosforge.jira.com/browse/MIFOSAC-318",
    techstack: ["Kotlin"
    ],
    github: "https://github.com/openMF/android-client",
    mentors: [
      {
        name: "Rajan Maurya",
        socials: {
          linkedin: "https://www.linkedin.com/in/therajanmaurya/",
          discord: "therajanmaurya",
          email: "rajanmaurya154@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Sk Niyaj Ali",
        socials: {
          linkedin: "https://www.linkedin.com/in/skniyajali/",
          discord: "",
          email: "skniyajali0@gmail.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "DL-Simplified",
    developer: "Abhishek Sharma",
    desc: "Deep Learning Simplified is an open-source repository designed to guide contributors from beginner to advanced levels in deep learning. Whether you're just starting your journey or looking to sharpen your skills, this is the place for you.\n\nHere are some key points for contributors:\n\n1. Focus on Deep Learning Models: We encourage contributors to concentrate primarily on implementing deep learning models rather than basic machine learning models. Please review the issues section thoroughly, select one that matches your expertise, and propose your approach with various deep learning methods and models before requesting assignment.\n\n2. Explore OpenCV Implementations: Several issues in this repository involve OpenCV. Contributing to these will provide valuable hands-on experience and enhance your proficiency with OpenCV, which is a crucial skill for many deep learning tasks.\n\n3. NLP is a Key Area: We have several NLP-related issues that require attention. Be sure to fully understand the problem statements before diving into the implementation, and tailor your models to meet the requirements specified in each issue template."
    ,
    techstack: ["Python"
    ],
    github: "https://github.com/abhisheks008/DL-Simplified",
    mentors: [
      {
        name: "Abhishek Sharma",
        socials: {
          linkedin: "https://www.linkedin.com/in/abhishek-sharma-aa06a9183/",
          discord: "",
          email: "abhishek.opensource@gmail.com",
          twitter: "",
        },
      },
      {
        name: "Suveda Kakarala",
        socials: {
          linkedin: "https://www.linkedin.com/in/suveda-kakarala-626277290/",
          discord: "",
          email: "suveda999@gmail.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "Mixxx",
    developer: "Mixxx",
    desc: "Mixxx is a software that integrates the tools DJs need to perform creative live mixes with digital music files. Whether you are a new DJ with just a laptop or an experienced turntablist, Mixxx can support your style and techniques of mixing.\n\nProposal Ideas:\n\n1) Key Colors for Rate Slider:The Mixxx Rate Slider can change a track's key (when Keylock is off). This project will add color-coded hints along the slider to show the key the track will shift to at different slider positions.\n\n2) Key Tuning: Mixxx does not show tuning information of tracks, which makes harmonic mixing difficult in case of non 440 Hz tuning. The project will integrate a tuning detector and show tuning information in the library.\n\n3) Contributors are free to propose their own ideas\n\nFor more details visit:https://github.com/mixxxdj/mixxx/wiki/WOC"
    ,
    techstack: ["C++", "C", "JavaScript", "Shell"
    ],
    github: "https://github.com/mixxxdj/mixxx",
    mentors: [
      {
        name: "Daniel Schürmann",
        socials: {
          linkedin: "",
          discord: "",
          email: "daschuer@mixxx.org",
          twitter: "",
        },
      },
      {
        name: "Daniel Fernandes",
        socials: {
          linkedin: "https://www.linkedin.com/in/danferns/",
          discord: "",
          email: "dannywritescode@gmail.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "PortPy",
    developer: "PortPy",
    desc: "Proposal Ideas:\n\n1.Data Visualization:\n  1.1 Interactive Plot for Dose-Volume Histograms (DVH) Data\n  1.2 Animated Visualization of Multi-Leaf Collimator (MLC) Movements\n  1.3 Interactive Image Slice Navigation of CT Scan and Radiation Dose Map\n  1.4 User-Friendly Web Dashboard for PortPy Dataset Visualization\n\n2.Neural Network Model Development:\n  2.1 Implementing the Top 3 Neural Network Models of the 2020-OpenKBP Challenge in PortPy\n\n3.Optimization Algorithm:\n  3.1 Using Google's Jax.Opt to Solve PortPy Optimization Problems\n  3.2 Using SciPy.Optimize to Solve PortPy Optimization Problems\n  3.3 Python Implementation of Gradient Descent Algorithm for Solving PortPy Optimization Problems\n  3.4 Python Implementation of the ADMM Algorithm for PortPy Optimization Problems\n\n4.Creating a Documentation Website and Automated Unit Testing using GitOps CI/CD Features:\n  4.1 Creating a Documentation Website with GitOps CI/CD Features for PortPy\n  4.2 Creating Unit Tests with GitOps CI/CD Features for PortPy\n\nFor more detailed information visit:https://github.com/PortPy-Project/PortPy/blob/master/WOC/README.md\nTechStacks for each proposal are mentioned in above link"
    ,
    techstack: ["Python"
    ],
    github: "https://github.com/PortPy-Project/PortPy",
    mentors: [
      {
        name: "Masoud Zarepisheh",
        socials: {
          linkedin: "",
          discord: "",
          email: "zarepism@mskcc.org",
          twitter: "",
        },
      }, {
        name: "Gourav Jhanwar",
        socials: {
          linkedin: "",
          discord: "",
          email: "JhanwarG@mskcc.org",
          twitter: "",
        },
      }, {
        name: "Mojtaba Tefagh",
        socials: {
          linkedin: "",
          discord: "",
          email: "m.tefagh@ed.ac.uk",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "HPX",
    developer: "The STELLAR Group",
    desc: "HPX is a C++ Standard Library for Concurrency and Parallelism. It implements all of the corresponding facilities as defined by the C++ Standard.\n\nProposal Ideas:\n\n Create HPX executor type that connects HPX to CUDA-Quantum"
    ,
    techstack: ["C++", "CMake", "Python", "Shell"
    ],
    github: "https://github.com/STEllAR-GROUP/hpx",
    mentors: [
      {
        name: "Hartmut Kaiser",
        socials: {
          linkedin: "",
          discord: "hkaiser",
          email: "hartmut.kaiser@gmail.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "WallGodds",
    developer: "PARNAB BAGCHI",
    desc: "PROPOSAL IDEAS:\n\nFor Beginners:  \n- Clear and guided issues like fixing UI bugs, updating documentation, or implementing simple features.  \n- A detailed CONTRIBUTING.md file to help first-timers navigate the process.\n\nFor Intermediate Contributors:  \n- Tasks such as developing reusable components, optimizing the backend, and enhancing the responsiveness of the UI.  \n\nFor Advanced Developers:  \n- Complex challenges like implementing scalable API endpoints, integrating authentication systems, or improving database efficiency.  \n- Tasks that push creativity, such as advanced animations or new user workflows.\n\nFor Designers:  \n- A dedicated DESIGN.md document to provide guidelines and vision.  \n- Access to our Figma file for creating and refining minimalistic, user-friendly layouts.  \n- A design initiative that helps foster collaboration among designers, offering a platform to showcase and implement their ideas."
    ,
    techstack: ["JavaScript", "HTML", "CSS", "Figma"
    ],
    github: "https://github.com/Parnab03/WallGodds",
    mentors: [
      {
        name: "PARNAB BAGCHI",
        socials: {
          linkedin: "https://www.linkedin.com/in/parnab-bagchi-072966251",
          discord: "Parnab_03",
          email: "pb7439578071@gmail.com",
          twitter: "",
        },
      }, {
        name: "SOUMIK GHOSH",
        socials: {
          linkedin: "https://www.linkedin.com/in/soumik-ghosh-556651258/",
          discord: "soumikghosh_999",
          email: "soumikghosh09072004@gmail.com",
          twitter: "",
        },
      }, {
        name: "SHANKHADEEP PARIA",
        socials: {
          linkedin: "https://www.linkedin.com/in/shankhadeepparia/",
          discord: "shankyy69",
          email: "pariashankhadeep@gmail.com",
          twitter: "",
        },
      }
    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "APIsh",
    developer: "Nikhil Chopra",
    desc: "APIsh is a decentralized API marketplace that allows developers to publish APIs and users to access them via blockchain-based micropayments. This project aims to streamline the process of API integration and usage while ensuring secure and efficient transactions.\n\nProposal Ideas:\nAdding user metrics , improvement of pre-built chatbot templates\nContributors are free to explore and propose their own idea."
    ,
    techstack: ["Typescript"
    ],
    github: "https://github.com/nikhilchopra08/apish",
    mentors: [
      {
        name: "Ansh Garg",
        socials: {
          linkedin: "https://www.linkedin.com/in/ansh-garg-777ab7258/",
          discord: "NikhilChopra",
          email: "anshgarg030404@gmail.com",
          twitter: "",
        },
      }, {
        name: "Varun Jaiswal",
        socials: {
          linkedin: "https://www.linkedin.com/in/varun-jaiswal-19581726b/",
          discord: "dinosaur8861",
          email: "varunjaiswalvv@gmail.com",
          twitter: "",
        },
      }

    ],
    socials: {
      linkedin: "",
      discord: "",
      email: "",
      twitter: "",
    },
  },
  {
    name: "Retro",
    developer: "Lakshmi Pavananjali",
    desc: "RETRO is an online platform celebrating vintage aesthetics and timeless designs. It blends classic styles with modern usability, offering information on vintage collections and enabling users to place orders. RETRO provides a sophisticated experience where nostalgia meets innovation, bringing the charm of the past to life.\n\nContributors are free to explore and propose their own idea."
    ,
    techstack: ["Python", "Javascript", "CSS", "HTML"
    ],
    github: "https://github.com/Anjaliavv51/Retro",
    mentors: [
      {
        name: "Pamidi Lakshmi Pavananjali",
        socials: {
          linkedin: "https://www.linkedin.com/in/lakshmi-pavananjali-pamidi-766760296",
          discord: "",
          email: "plpanjali05@gmail.com",
          twitter: "",
        },
      }
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
  var TBA = true;
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