type Mentor = {
  name: string;
  desc: string;
  discord?: string;
  email?: string;
  linkedin?: string;
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  problemStatement?: string;
  focusArea?: string;
  contributionGuide?: string;
  githubLink?: string;
};

type Contact = {
  label: string;
  value: string;
  href?: string;
};

type Org = {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  website: string;
  chat: string;
  repo: string;
  email: string;
  focusAreas: string[];
  stats: { label: string; value: string }[];
  contacts: Contact[];
  mentors: Mentor[];
  projects: Project[];
};

export const orgs: Record<string, Org> = {
  Openprinting: {
    name: "Open Printing",
    tagline: "",
    description:
      "OpenPrinting develops IPP-based printing technology for Linux®/Unix® operating systems. We make printing just work!",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://www.openprinting.org/",
    chat: "https://chat.example.org",
    repo: "https://github.com/openprinting",
    email: "contact@example.org",
    focusAreas: ["C", "Shell", "Git", "Go"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "openprinting.org", href: "https://www.openprinting.org/" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/openprinting",
        href: "https://github.com/openprinting",
      },
    ],
    mentors: [
      {
        name: "Till Kamppeter",
        desc: "Co-founder and lead of OpenPrinting (since 2001), introduced CUPS printing system in Mandrake Linux in 2000 working at MandrakeSoft, with this and a lot of evangelism (booths, talks, workshops) made the other distros switch to CUPS, 2006-2025 at Canonical, 2025-2026 funded by Sovereign Tech Fund, co-organizing annual meetings with the Printer Working Group (PWG), since 2008 every year mentoring in Google Summer of Code, fellow of the Linux Foundation. Does everything to make printing just work!",
        discord: "@tillkamppeter",
        email: "till.kamppeter@gmail.com",
        linkedin: "https://www.linkedin.com/in/kamppetertill/",
      },
      {
        name: "Alexander Pevzner",
        desc: "ystems software engineer. 35 years in IT. Writes system software in C and Go. Known in the open-source community as the creator of [ipp-usb](https://github.com/OpenPrinting/ipp-usb) and [sane-airscan](https://github.com/alexpevzner/sane-airscan), used in nearly all Linux distributions as well as in BSD. Member of OpenPrinting since 2020.",
        discord: "",
        email: "pzz@apevzner.com",
        linkedin: "https://www.linkedin.com/in/alexander-pevzner-6046161/",
      },
      {
        name: "Uddhav Phatak",
        desc: "Final year Computer Science Student. Ported libcupsfilters from C++ based QPDF to C based PDFio solving ABI compatibility issues. Leading the development for a PDF renderer based on PDFio, which would be the first renderer with permissible licenses. Member of OpenPrinting since 2024.",
        discord: "",
        email: "uddhavphatak@gmail.com",
        linkedin: "https://www.linkedin.com/in/uddhavphatak",
      },
      {
        name: "Mohammed Imaduddin",
        desc: "final year student at CBIT, Hyderabad. Mentee at Linux Foundation (O-RAN SC). GSoC 2025 contributor at Linux Foundation (OpenPrinting). Vice President, COSC.",
        discord: "",
        email: "mdimad005@gmail.com",
        linkedin: "https://www.linkedin.com/in/mdimado/",
      },
    ],
    projects: [
      {
        title: "LIBCUPSFILTERS",
        description:
          "",
        tech: ["C", "Shell", "GIT", "Github actions/workflows", "Static analysers and similar tools"],
        problemStatement:
          "As the software components we develop at OpenPrinting are an essential part of the operating system infrastructure, we want to have a solid CI testing of each commit to our GitHub repositories. CUPS (“cups” repository for 2.x) has already excellent CI done by Michael Sweet, consisting of GitHub actions/workflows which automatically apply static analysers, build and execution tests on different architectures and distros, This we want to have also in the other projects on OpenPrinting. \n **Note: As we have several repositories where we want to add improved CI testing, we can accept more than one contributor, each working on one of our repositories.**",
        focusArea:
          "Creating GitHub workflows and make them triggered with commits • Scripting to run analysers, build code, run test programs • C programming to write test programs",
        contributionGuide:
          "The contributor will study at first the CI done by Michael Sweet, especially in OpenPrinting’s CUPS repository but also in the repositories of Michael’s personal GitHub, especially PAPPL, PDFio, … Michael is an excellent example here. Then they will check the repository of the OpenPrinting project they are working on and implement the same functionality there. One part is to overtake and adapt the scripting, which is probably the smaller part, the other is to add extra tests to the “make check” run which will get executed after each build test.  Each added test functionality the contributor will have to test, and make sure that if the code under test is OK, the tests pass and in case of the tests failing to check whether it is their fault or a bug in the code under test (which they report).",
        githubLink: "https://github.com/OpenPrinting/libcupsfilters",
      },
      {
        title: "CUPS-FILTERS",
        description:
          "",
        tech: ["C", "Shell", "GIT", "Github actions/workflows", "Static analysers and similar tools"],
        problemStatement:
          "As the software components we develop at OpenPrinting are an essential part of the operating system infrastructure, we want to have a solid CI testing of each commit to our GitHub repositories. CUPS (“cups” repository for 2.x) has already excellent CI done by Michael Sweet, consisting of GitHub actions/workflows which automatically apply static analysers, build and execution tests on different architectures and distros, This we want to have also in the other projects on OpenPrinting. \n **Note: As we have several repositories where we want to add improved CI testing, we can accept more than one contributor, each working on one of our repositories.**",
        focusArea:
          "Creating GitHub workflows and make them triggered with commits • Scripting to run analysers, build code, run test programs • C programming to write test programs",
        contributionGuide:
          "The contributor will study at first the CI done by Michael Sweet, especially in OpenPrinting’s CUPS repository but also in the repositories of Michael’s personal GitHub, especially PAPPL, PDFio, … Michael is an excellent example here. Then they will check the repository of the OpenPrinting project they are working on and implement the same functionality there. One part is to overtake and adapt the scripting, which is probably the smaller part, the other is to add extra tests to the “make check” run which will get executed after each build test.  Each added test functionality the contributor will have to test, and make sure that if the code under test is OK, the tests pass and in case of the tests failing to check whether it is their fault or a bug in the code under test (which they report).",
        githubLink: "https://github.com/OpenPrinting/cups-filters",
      },
      {
        title: "CPDB-LIBS",
        description:
          "",
        tech: ["C", "Shell", "GIT", "Github actions/workflows", "Static analysers and similar tools"],
        problemStatement:
          "As the software components we develop at OpenPrinting are an essential part of the operating system infrastructure, we want to have a solid CI testing of each commit to our GitHub repositories. CUPS (“cups” repository for 2.x) has already excellent CI done by Michael Sweet, consisting of GitHub actions/workflows which automatically apply static analysers, build and execution tests on different architectures and distros, This we want to have also in the other projects on OpenPrinting. \n **Note: As we have several repositories where we want to add improved CI testing, we can accept more than one contributor, each working on one of our repositories.**",
        focusArea:
          "Creating GitHub workflows and make them triggered with commits • Scripting to run analysers, build code, run test programs • C programming to write test programs",
        contributionGuide:
          "The contributor will study at first the CI done by Michael Sweet, especially in OpenPrinting’s CUPS repository but also in the repositories of Michael’s personal GitHub, especially PAPPL, PDFio, … Michael is an excellent example here. Then they will check the repository of the OpenPrinting project they are working on and implement the same functionality there. One part is to overtake and adapt the scripting, which is probably the smaller part, the other is to add extra tests to the “make check” run which will get executed after each build test.  Each added test functionality the contributor will have to test, and make sure that if the code under test is OK, the tests pass and in case of the tests failing to check whether it is their fault or a bug in the code under test (which they report).",
        githubLink: "https://github.com/OpenPrinting/cpdb-libs",
      },
      {
        title: "CPDB-BACKEND-CUPS",
        description:
          "",
        tech: ["C", "Shell", "GIT", "Github actions/workflows", "Static analysers and similar tools"],
        problemStatement:
          "As the software components we develop at OpenPrinting are an essential part of the operating system infrastructure, we want to have a solid CI testing of each commit to our GitHub repositories. CUPS (“cups” repository for 2.x) has already excellent CI done by Michael Sweet, consisting of GitHub actions/workflows which automatically apply static analysers, build and execution tests on different architectures and distros, This we want to have also in the other projects on OpenPrinting. \n **Note: As we have several repositories where we want to add improved CI testing, we can accept more than one contributor, each working on one of our repositories.**",
        focusArea:
          "Creating GitHub workflows and make them triggered with commits • Scripting to run analysers, build code, run test programs • C programming to write test programs",
        contributionGuide:
          "The contributor will study at first the CI done by Michael Sweet, especially in OpenPrinting’s CUPS repository but also in the repositories of Michael’s personal GitHub, especially PAPPL, PDFio, … Michael is an excellent example here. Then they will check the repository of the OpenPrinting project they are working on and implement the same functionality there. One part is to overtake and adapt the scripting, which is probably the smaller part, the other is to add extra tests to the “make check” run which will get executed after each build test.  Each added test functionality the contributor will have to test, and make sure that if the code under test is OK, the tests pass and in case of the tests failing to check whether it is their fault or a bug in the code under test (which they report).",
        githubLink: "https://github.com/OpenPrinting/cpdb-backend-cups",
      },
      {
        title: "CUPS-SNAP",
        description:
          "",
        tech: ["C", "Shell", "GIT", "Github actions/workflows", "Static analysers and similar tools"],
        problemStatement:
          "As the software components we develop at OpenPrinting are an essential part of the operating system infrastructure, we want to have a solid CI testing of each commit to our GitHub repositories. CUPS (“cups” repository for 2.x) has already excellent CI done by Michael Sweet, consisting of GitHub actions/workflows which automatically apply static analysers, build and execution tests on different architectures and distros, This we want to have also in the other projects on OpenPrinting. \n **Note: As we have several repositories where we want to add improved CI testing, we can accept more than one contributor, each working on one of our repositories.**",
        focusArea:
          "Creating GitHub workflows and make them triggered with commits • Scripting to run analysers, build code, run test programs • C programming to write test programs",
        contributionGuide:
          "The contributor will study at first the CI done by Michael Sweet, especially in OpenPrinting’s CUPS repository but also in the repositories of Michael’s personal GitHub, especially PAPPL, PDFio, … Michael is an excellent example here. Then they will check the repository of the OpenPrinting project they are working on and implement the same functionality there. One part is to overtake and adapt the scripting, which is probably the smaller part, the other is to add extra tests to the “make check” run which will get executed after each build test.  Each added test functionality the contributor will have to test, and make sure that if the code under test is OK, the tests pass and in case of the tests failing to check whether it is their fault or a bug in the code under test (which they report).",
        githubLink: "https://github.com/OpenPrinting/cups-snap",
      },
      {
        title: "LIBPPD",
        description:
          "",
        tech: ["C", "Shell", "GIT", "Github actions/workflows", "Static analysers and similar tools"],
        problemStatement:
          "As the software components we develop at OpenPrinting are an essential part of the operating system infrastructure, we want to have a solid CI testing of each commit to our GitHub repositories. CUPS (“cups” repository for 2.x) has already excellent CI done by Michael Sweet, consisting of GitHub actions/workflows which automatically apply static analysers, build and execution tests on different architectures and distros, This we want to have also in the other projects on OpenPrinting. \n **Note: As we have several repositories where we want to add improved CI testing, we can accept more than one contributor, each working on one of our repositories.**",
        focusArea:
          "Creating GitHub workflows and make them triggered with commits • Scripting to run analysers, build code, run test programs • C programming to write test programs",
        contributionGuide:
          "The contributor will study at first the CI done by Michael Sweet, especially in OpenPrinting’s CUPS repository but also in the repositories of Michael’s personal GitHub, especially PAPPL, PDFio, … Michael is an excellent example here. Then they will check the repository of the OpenPrinting project they are working on and implement the same functionality there. One part is to overtake and adapt the scripting, which is probably the smaller part, the other is to add extra tests to the “make check” run which will get executed after each build test.  Each added test functionality the contributor will have to test, and make sure that if the code under test is OK, the tests pass and in case of the tests failing to check whether it is their fault or a bug in the code under test (which they report).",
        githubLink: "https://github.com/OpenPrinting/libppd",
      },
      {
        title: "PAPPL-RETROFIT",
        description:
          "",
        tech: ["C", "Shell", "GIT", "Github actions/workflows", "Static analysers and similar tools"],
        problemStatement:
          "As the software components we develop at OpenPrinting are an essential part of the operating system infrastructure, we want to have a solid CI testing of each commit to our GitHub repositories. CUPS (“cups” repository for 2.x) has already excellent CI done by Michael Sweet, consisting of GitHub actions/workflows which automatically apply static analysers, build and execution tests on different architectures and distros, This we want to have also in the other projects on OpenPrinting. \n **Note: As we have several repositories where we want to add improved CI testing, we can accept more than one contributor, each working on one of our repositories.**",
        focusArea:
          "Creating GitHub workflows and make them triggered with commits • Scripting to run analysers, build code, run test programs • C programming to write test programs",
        contributionGuide:
          "The contributor will study at first the CI done by Michael Sweet, especially in OpenPrinting’s CUPS repository but also in the repositories of Michael’s personal GitHub, especially PAPPL, PDFio, … Michael is an excellent example here. Then they will check the repository of the OpenPrinting project they are working on and implement the same functionality there. One part is to overtake and adapt the scripting, which is probably the smaller part, the other is to add extra tests to the “make check” run which will get executed after each build test.  Each added test functionality the contributor will have to test, and make sure that if the code under test is OK, the tests pass and in case of the tests failing to check whether it is their fault or a bug in the code under test (which they report).",
        githubLink: "https://github.com/OpenPrinting/pappl-retrofit",
      },
      {
        title: "GO-AVAHI",
        description:
          "",
        tech: ["Go", "Fuzz testing", "Security"],
        problemStatement:
          "The go-avahi project provides Go bindings for the Avahi/mDNS/DNS-SD stack and is used for network service discovery functionality within the OpenPrinting ecosystem. It acts as a bridge between Go applications and the underlying Avahi daemon through D-Bus. Currently, go-avahi has no fuzz testing, limited test coverage, and several input-handling paths may fail in unexpected ways for malformed or adversarial input. For this project,, fuzzing is especially important to uncover crashes, panics, and edge cases. This project aims to develop a comprehensive fuzzing setup for go-avahi, improve test coverage, and integrate the project into the OSS-Fuzz ecosystem to enable continuous, long-term fuzz testing.",
        focusArea:
          "Identify suitable fuzzing targets in go-avahi • Write Go fuzz tests for identified functions • Add mocks if needed to test • Prepare build scripts and configuration for OSS-Fuzz • Validate that fuzzers run in the OSS-Fuzz environment • Submit a PR to OSS-Fuzz",
        contributionGuide:
          "The contributor will begin by reviewing how fuzzing is already set up in the OpenPrinting/fuzzing repository and how other OpenPrinting projects are integrated into OSS-Fuzz. The contributor will study the structure of go-avahi, select entry points that benefit from fuzzing, and add fuzz tests using Go’s built-in fuzzing engine. They will introduce mocks if required to make fuzzing reproducible. After fuzzers work locally, the contributor will create the necessary OSS-Fuzz files and submit an integration. Throughout the project, they will review crashes, minimize test cases, and collaborate with maintainers to address issues found by the fuzzers.",
        githubLink: "https://github.com/OpenPrinting/go-avahi",
      },
      {
        title: "FUZZING",
        description:
          "",
        tech: ["Go", "Fuzz testing", "Security"],
        problemStatement:
          "The go-avahi project provides Go bindings for the Avahi/mDNS/DNS-SD stack and is used for network service discovery functionality within the OpenPrinting ecosystem. It acts as a bridge between Go applications and the underlying Avahi daemon through D-Bus. Currently, go-avahi has no fuzz testing, limited test coverage, and several input-handling paths may fail in unexpected ways for malformed or adversarial input. For this project,, fuzzing is especially important to uncover crashes, panics, and edge cases. This project aims to develop a comprehensive fuzzing setup for go-avahi, improve test coverage, and integrate the project into the OSS-Fuzz ecosystem to enable continuous, long-term fuzz testing.",
        focusArea:
          "Identify suitable fuzzing targets in go-avahi • Write Go fuzz tests for identified functions • Add mocks if needed to test • Prepare build scripts and configuration for OSS-Fuzz • Validate that fuzzers run in the OSS-Fuzz environment • Submit a PR to OSS-Fuzz",
        contributionGuide:
          "The contributor will begin by reviewing how fuzzing is already set up in the OpenPrinting/fuzzing repository and how other OpenPrinting projects are integrated into OSS-Fuzz. The contributor will study the structure of go-avahi, select entry points that benefit from fuzzing, and add fuzz tests using Go’s built-in fuzzing engine. They will introduce mocks if required to make fuzzing reproducible. After fuzzers work locally, the contributor will create the necessary OSS-Fuzz files and submit an integration. Throughout the project, they will review crashes, minimize test cases, and collaborate with maintainers to address issues found by the fuzzers.",
        githubLink: "https://github.com/OpenPrinting/fuzzing",
      },
      {
        title: "GO-MFP",
        description:
          "",
        tech: ["Go"],
        problemStatement:
          "Currently, the go-mfp project, aimed to implement a full-featured behaviour-accurate MFP simulator together with collection of the MFP testing/validation/troubleshooting tools, lacks the support of WS-Scan protocol. We already have eSCL, partially implemented IPP, virtual USB MFP simulation (IPP over USB and legacy 7/1/1 USB printer), but WS-Scan support is not yet completed.",
        focusArea: "Complete full-featured, specification-based WS-Scan protocol implementation • Integrate this part with the whole project • Provide a good test coverage for the newly added code",
        contributionGuide:
          "WS-Scan protocol is technically and semantically similar to the eSCL protocol, which is already implemented. The contributor will study the existing eSCL implementation and create WS-Scan implementation, using the similar architectural approach. The ability to read and understand technical specifications is strongly required, because we need the high-quality, reference-class protocol implementation, strictly based on the protocol specification, published by Microsoft.",
        githubLink: "https://github.com/OpenPrinting/go-mfp",
      },
      {
        title: "GO-MFP ESCL",
        description:
          "",
        tech: ["Go"],
        problemStatement:
          "Currently, the go-mfp project, aimed to implement a full-featured behaviour-accurate MFP simulator together with collection of the MFP testing/validation/troubleshooting tools, lacks the support of WS-Scan protocol. We already have eSCL, partially implemented IPP, virtual USB MFP simulation (IPP over USB and legacy 7/1/1 USB printer), but WS-Scan support is not yet completed.",
        focusArea: "Complete full-featured, specification-based WS-Scan protocol implementation • Integrate this part with the whole project • Provide a good test coverage for the newly added code",
        contributionGuide:
          "WS-Scan protocol is technically and semantically similar to the eSCL protocol, which is already implemented. The contributor will study the existing eSCL implementation and create WS-Scan implementation, using the similar architectural approach. The ability to read and understand technical specifications is strongly required, because we need the high-quality, reference-class protocol implementation, strictly based on the protocol specification, published by Microsoft.",
        githubLink: "https://github.com/OpenPrinting/go-mfp/tree/master/proto/escl",
      },
      {
        title: "GO-MFP IEEE",
        description:
          "",
        tech: ["Go", "Fluent reading of C is required, because CUPS sources is important source of information"],
        problemStatement:
          "Currently, the go-mfp simulator already has very basic support of the legacy USB 7/1/1 printer emulation. However, it doesn’t somehow interpret the data sent to the emulated printer and doesn’t provide any response (as 7/1/2 devices should do). The project goal is to implement the Go [io.Reader](https://pkg.go.dev/io#Reader) (for 7/1/1 devices) and Go [io.ReadWriter](https://pkg.go.dev/io#ReadWriter) that consumes raw data bytes, sent to the emulated printer and able to properly identify document format being sent (i.e., PostScript, PDF, PCL5, ESC/P, …) and based on that identification properly detect the document or page boundaries (for example, PostScript and PDF documents are terminated by the Ctrl-D character, ESC/P and PCL5 may use end-of-page character etc). Having that implemented we can add saving documents to file for further analysis and troubleshooting and document rendering for printed image evaluation. Also, the bidirectional (USB 7/1/2) printers implement a simple PJL interpreter and generate proper responses, which also needs to be implemented in the [io.ReadWriter](https://pkg.go.dev/io#ReadWriter) interface with functionality enough to make CUPS happy.",
        focusArea: "Understanding the already implemented parts of the legacy printer simulation • Understanding the relevant documents formats in details enough to be able to perform the automatic format identification and to detect page or job boundaries • Understanding PJL in details enough to be able to process commands generated by CUPS and provide a proper responses",
        contributionGuide:
          "The contributor should study how the legacy printer works, how the graphical documents are sent to the printer and how the printer recognizes that document transmission is finished. The printed documents need to be extracted from the unstructured host to printer data flow and passed separately to the upper layer, which will decide what to do with these documents (just to save to the log file, to render etc). Rendering of printed documents is out of the scope of this project, so very detailed understanding of the relevant formats is not required. Also, for the implementation of the bidirectional (USB 7/1/2) printers the contributor needs to understand the behaviour expectations, based on specifications and CUPS implementation and to write a simple simulator. The representation of the emulated printer as a virtual USB device already done in the go-mfp and out of scope of this project. At this level the contributor needs only to implement the Go [io.Reader](https://pkg.go.dev/io#Reader) and [io.ReadWriter](https://pkg.go.dev/io#ReadWriter) interfaces that can properly consume the data sent to the printer and to generate the proper response, the task of transporting this data from/to the host is out of scope of this project (and already solved at the first glance). As result of this project, the code contribution into the go-mfp is expected, with the reasonable test coverage and integration with the “big project”.",
        githubLink: "https://github.com/OpenPrinting/go-mfp",
      },
      {
        title: "GO-MFP ESCL IEEE",
        description:
          "",
        tech: ["Go", "Fluent reading of C is required, because CUPS sources is important source of information"],
        problemStatement:
          "Currently, the go-mfp simulator already has very basic support of the legacy USB 7/1/1 printer emulation. However, it doesn’t somehow interpret the data sent to the emulated printer and doesn’t provide any response (as 7/1/2 devices should do). The project goal is to implement the Go [io.Reader](https://pkg.go.dev/io#Reader) (for 7/1/1 devices) and Go [io.ReadWriter](https://pkg.go.dev/io#ReadWriter) that consumes raw data bytes, sent to the emulated printer and able to properly identify document format being sent (i.e., PostScript, PDF, PCL5, ESC/P, …) and based on that identification properly detect the document or page boundaries (for example, PostScript and PDF documents are terminated by the Ctrl-D character, ESC/P and PCL5 may use end-of-page character etc). Having that implemented we can add saving documents to file for further analysis and troubleshooting and document rendering for printed image evaluation. Also, the bidirectional (USB 7/1/2) printers implement a simple PJL interpreter and generate proper responses, which also needs to be implemented in the [io.ReadWriter](https://pkg.go.dev/io#ReadWriter) interface with functionality enough to make CUPS happy.",
        focusArea: "Understanding the already implemented parts of the legacy printer simulation • Understanding the relevant documents formats in details enough to be able to perform the automatic format identification and to detect page or job boundaries • Understanding PJL in details enough to be able to process commands generated by CUPS and provide a proper responses",
        contributionGuide:
          "The contributor should study how the legacy printer works, how the graphical documents are sent to the printer and how the printer recognizes that document transmission is finished. The printed documents need to be extracted from the unstructured host to printer data flow and passed separately to the upper layer, which will decide what to do with these documents (just to save to the log file, to render etc). Rendering of printed documents is out of the scope of this project, so very detailed understanding of the relevant formats is not required. Also, for the implementation of the bidirectional (USB 7/1/2) printers the contributor needs to understand the behaviour expectations, based on specifications and CUPS implementation and to write a simple simulator. The representation of the emulated printer as a virtual USB device already done in the go-mfp and out of scope of this project. At this level the contributor needs only to implement the Go [io.Reader](https://pkg.go.dev/io#Reader) and [io.ReadWriter](https://pkg.go.dev/io#ReadWriter) interfaces that can properly consume the data sent to the printer and to generate the proper response, the task of transporting this data from/to the host is out of scope of this project (and already solved at the first glance). As result of this project, the code contribution into the go-mfp is expected, with the reasonable test coverage and integration with the “big project”.",
        githubLink: "https://github.com/OpenPrinting/go-mfp/tree/master/proto/ieee1284",
      },
      {
        title: "PDFIO",
        description:
          "",
        tech: ["C", "shell scripting", "Understanding of PDF file structure"],
        problemStatement:
          "libpdfrip is a PDF renderer in development, aiming to be the first fully open, permissively licensed PDF renderer built on top of PDFio and using Cairo as its backend. A key missing feature for real-world PDFs is **Form XObject** (/Subtype /Form) rendering. Form XObjects are reusable content blocks (logos, icons, repeated UI elements, stamps, etc.) that are referenced via the “Do” operator in content streams. Many production PDFs rely on forms to avoid duplicating vector content. Currently, libpdfrip does not support Form XObjects. This project aims to add **Form XObject rendering** support to libpdfrip, including lookup through the resource dictionary, proper graphics state handling, and recursive interpretation of form content streams, with a minimal test suite and demo tooling to validate the implementation.",
        focusArea: "Understand PDF Form XObjects in the PDF specification such as : /Subtype /Form, /BBox, /Matrix, /Resources, and content streams",
        contributionGuide:
          "The contributor will begin by setting up a local development environment for **libpdfrip**, building the library and any existing demo tools. After this, they should study the basic structure of PDF files: how pages, resources, XObjects, and content streams are organized, and how different elements are referenced and reused within a document. Next, the contributor should go through the **PDFio** documentation to understand how to access PDF metadata and structure using the library’s APIs. This includes learning how to locate pages, resource dictionaries, XObjects, and content streams through PDFio. With this foundation in place, the student can start with the implementation of the actual Form XObject rendering path: saving the current graphics state, applying the form’s transformation matrix, clipping based on /BBox, recursively interpreting the form’s content stream with the correct resource dictionary, and finally restoring the graphics state. They will ensure that the same form can be reused multiple times at different positions and scales, and add safeguards against infinite recursion when forms reference each other. This work can be submitted as a standalone module or contributed directly to the **libpdfrip** codebase. To validate the implementation, the contributor will have to create a small set of synthetic PDFs (manually or via a generator) that use Form XObjects for simple shapes and logos, and add C tests or a lightweight test harness that renders these PDFs with libpdfrip (for example, to PNG via Cairo) and checks for successful execution and basic correctness.",
        githubLink: "https://github.com/michaelrsweet/pdfio",
      },
      {
        title: "LIBPDFRIP",
        description:
          "",
        tech: ["C", "shell scripting", "Understanding of PDF file structure"],
        problemStatement:
          "libpdfrip is a PDF renderer in development, aiming to be the first fully open, permissively licensed PDF renderer built on top of PDFio and using Cairo as its backend. A key missing feature for real-world PDFs is **Form XObject** (/Subtype /Form) rendering. Form XObjects are reusable content blocks (logos, icons, repeated UI elements, stamps, etc.) that are referenced via the “Do” operator in content streams. Many production PDFs rely on forms to avoid duplicating vector content. Currently, libpdfrip does not support Form XObjects. This project aims to add **Form XObject rendering** support to libpdfrip, including lookup through the resource dictionary, proper graphics state handling, and recursive interpretation of form content streams, with a minimal test suite and demo tooling to validate the implementation.",
        focusArea: "Understand PDF Form XObjects in the PDF specification such as : /Subtype /Form, /BBox, /Matrix, /Resources, and content streams",
        contributionGuide:
          "The contributor will begin by setting up a local development environment for **libpdfrip**, building the library and any existing demo tools. After this, they should study the basic structure of PDF files: how pages, resources, XObjects, and content streams are organized, and how different elements are referenced and reused within a document. Next, the contributor should go through the **PDFio** documentation to understand how to access PDF metadata and structure using the library’s APIs. This includes learning how to locate pages, resource dictionaries, XObjects, and content streams through PDFio. With this foundation in place, the student can start with the implementation of the actual Form XObject rendering path: saving the current graphics state, applying the form’s transformation matrix, clipping based on /BBox, recursively interpreting the form’s content stream with the correct resource dictionary, and finally restoring the graphics state. They will ensure that the same form can be reused multiple times at different positions and scales, and add safeguards against infinite recursion when forms reference each other. This work can be submitted as a standalone module or contributed directly to the **libpdfrip** codebase. To validate the implementation, the contributor will have to create a small set of synthetic PDFs (manually or via a generator) that use Form XObjects for simple shapes and logos, and add C tests or a lightweight test harness that renders these PDFs with libpdfrip (for example, to PNG via Cairo) and checks for successful execution and basic correctness.",
        githubLink: "https://github.com/OpenPrinting/libpdfrip)",
      },
    ],
  },
  owasp: {
    name: "Owasp",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  qcdevs: {
    name: "QC Devs",
    tagline: "",
    description:
      "QC-Devs develops free, open-source, and cross-platform libraries for the computational sciences, focusing on theoretical and computational chemistry. Our goal is to make programming accessible to students and researchers, to catalyze scientific collaborations, and to promote precepts of sustainable software development. We’re adapting some of the same principles to develop free and open-source educational materials (qc-edu.org) to modernize scientific education by integrating hands-on computation and computer programming.",
    heroImage: "/orgs/QC Devs.png",
    website: "https://qcdevs.org",
    chat: "",
    repo: "https://github.com/theochem",
    email: "contact@example.org",
    focusAreas: ["OOP", "C++", "DevOps", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "qcdevs.org", href: "https://qcdevs.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "",
      },
      {
        label: "Email",
        value: "contact@qcdevs.org",
        href: "ayers@mcmaster.ca",
      },
      {
        label: "GitHub",
        value: "github.com/theochem",
        href: "https://github.com/theochem",
      },
    ],
    mentors: [
      {
        name: "Paul W. Ayers",
        desc: "A professor of theoretical chemistry who has been developing open-source software for more than 20 years. His research focus is the quantum many-body problem (~400 scientific publications), but numerical algorithms related to problems in the computational sciences are a consistent theme. Co-author of well over 10 software packages/libraries and several open data sets.",
        discord: "@ayersp",
        email: "ayers@mcmaster.ca",
        linkedin: "https://www.linkedin.com/in/paul-ayers-800b8976/",
      },
      {
        name: "Farnaz Heidar-Zadeh",
        desc: "An assistant professor of theoretical chemistry; developing open-source software is among the core activities in her research program, which is focused on machine-learning methods in quantum chemistry, molecular featurization, and applications in nanotechnology.",
        discord: "",
        email: "farnaz.heidarzadeh@queensu.ca",
        linkedin: "https://www.linkedin.com/in/farnaz-heidar-zadeh-248bb1126/",
      },
      {
        name: "Toon Verstraelen",
        desc: "A professor of physics who has led the software-development efforts at the Center for Molecular Modelling for nearly 20 years. Aside from software development, his research focusses on molecular mechanics force field development (especially polarizable force fields and electronegativity equalization methods), population analysis methods, and molecular dynamics.",
        discord: "",
        email: "toon.verstraelen@ugent.be",
        linkedin: "https://www.linkedin.com/in/toonverstraelen/",
      },
      {
        name: "Esteban Vöringer-Martinez",
        desc: "A professor of theoretical chemistry, with a strong interest in biophysics. His research speciality is enzymatic modelling, including molecular dynamics, free-energy sampling, improved molecular mechanics force fields, and multiscale modelling methods.",
        discord: "",
        email: "estebanvohringer@qcmmlab.com",
        linkedin: "https://www.linkedin.com/in/esteban-v%C3%B6hringer-martinez-59607818/",
      },
      {
        name: "Marco Martínez-González",
        desc: "Ph.D. (theoretical chemistry) University of Havana; then assistant professor there. Research interests include scientific software development, mostly for quantum chemistry but also for data science.",
        discord: "",
        email: "martm27@mcmaster.ca",
        linkedin: "https://www.linkedin.com/in/marco-mart%C3%ADnez-gonz%C3%A1lez-95576758/",
      },
      {
        name: "Fanwang Meng",
        desc: "Ph.D. (chemistry) McMaster; postdoctoral fellow (engineering) MIT; now Banting postdoctoral fellow (Carbon to Metal Coating Institute) Queen’s University. Working at the interface of theoretical chemistry, molecular medicine, and machine learning. Experienced open-source developer, especially for open data sets (medicinal/drug discovery applications) and computational sciences (related to data diversity and bias).",
        discord: "",
        email: "fanwang.meng@queensu.ca",
        linkedin: "https://www.linkedin.com/in/fanwang-m-3687a6a2/",
      },
      {
        name: "Michelle Richer",
        desc: "Ph.D. (chemistry) McMaster University. Research interests include mathematical chemistry, optimal transport, numerical algorithms, and the development of highly efficient software libraries.",
        discord: "",
        email: "michellericher93@gmail.com",
        linkedin: "",
      },
    ],
    projects: [
      {
        title: "Arbitrary-order Overlap Integrals (and evaluations enabled thereby)",
        description:
          "Add functionality to the GBasis library for arbitrary-order overlaps. One motivation of this is to support the evaluation of the intracule (the distribution function for the interelectronic distance) and the extracule (the distribution function for the center-of-mass of electron pairs).",
        tech: ["Python", "GitHub Actions", "Object-oriented programming"],
        problemStatement:
          "Your main focus will be to add functionality for the overlaps of arbitrarily many Gaussian basis functions. It is important to include screening, as otherwise the evaluations can be quite expensive. An important application, which should be supported with an appropriate API, is evaluation of the intracule and extracule. Another important application is the evaluation of near-arbitrary interparticle repulsions. This is possible because, using tricks popularized by Beylkin and Monzon, almost any interparticle repulsion can be written as a sum of Gaussians. This would include the (many-body) interactions associated with nucleon and other types of cofermions and cobosons. This is a place where some creativity can be exercised, as innovative new algorithms and improved fits are being consistently proposed. That said, these potential applications are beyond the scope of this specific issue, though they are relatively easy extensions thereto. This functionality also allows us to compute arbitrary positive integer powers of the electron density and related density matrices analytically. (Typical approaches rely, instead, on numerical integration that become increasingly ill-conditioned for high powers.) This is sometimes useful when describing (very) multicenter bonding. 3- and 4-Gaussian overlaps from PySCF can be used for testing. 1-Gaussian overlaps and 2-Gaussian overlaps are built-in already and can be used for testing. An algorithm similar to what is needed here is already included in IODATA (for two Gaussians). See also the overlap integrals in GBasis.Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.\n** Expected Outcomes: • Implement the overlap for an arbitrary number of (contracted, Cartesian or spherical) Gaussian basis functions. • Add support for screening, with appropriate default parameters. • Add functionality for evaluating the intracule and extracule. • Utilities for computing positive integer powers of the electron density and relevant density matrices. • Support for (near) arbitrary interparticle repulsion integrals. This uses the aforementioned trick of Beylkin and Monzon. A similar trick is used in MADNESS, which can be used for inspiration. • Write comprehensive tests and documentation for all new functionality. • Write tutorial Jupyter notebooks that show how to use the new functionality. ***Notes: An algorithm (two algorithms, in fact) for doing this are included in the attached notes, which were developed in the context of the intracule and extracule. The attached notes are old and have Fortran-style pseudocode (they are that old). [To be clear, I would not suggest implementing the direct algorithms for the intracule/extracule. It is better to pass through the multi-Gaussian overlaps.] Note that multi-Gaussian overlaps are extremely sparse, so a sparse tensor structure should be used. The main operation one needs are tensor contractions (usually pairing indices to one or more copies of the 1- or 2-electron density matrix), which will determine the type of structure one uses to store the tensor. One may need to use pytorch functionality for this.",
        focusArea:
          "Implementation and testing of numerical algorithms. • Development of API (porcelain) to support the use of the new functionality. • Writing documentation and tutorial notebooks.",
        contributionGuide:
          "See the contributing guidelines: https://iodata.qcdevs.org/contributing.html",
        githubLink: "https://github.com/theochem/gbasis",
      },
      {
        title: "Better Linking Between libint with GBasis",
        description:
          "GBasis uses libcint as a back end for efficient integral evaluation. Unfortunately, the default installation of GBasis (with PyPI) doesn’t include libcint, and installation from source is not easy for some users. The primary goal of this project is to fix this. The secondary, subsidiary, goal is to provide better support for the very rich set of integrals that libcint supports.",
        tech: ["Python", "object-oriented programming", "GitHub Actions", "C++"],
        problemStatement:
          "Your main focus will be to prepare a release of GBasis that includes libcint for PyPI. We want to support Windows, Linux, and Mac. Note that when we say libcint this includes libcint (generic C++ library) and its high-performance version qcint, for hardware platforms that support it. There might be multiple ways to do this, using, for example, Hatch. We are agnostic as to the way it is done, but we note that (a) compiling libcint can be hairy and (b) we want an automated workflow so that updating GBasis is easy and new versions of libcint are easily supported. ***Expected Outcomes • It becomes possible to pip install GBasis with the libcint integral engine. • More (most?) of the integrals in libcint are accessible from GBasis. (This is basically wrapping more integrals. It isn’t always trivial. #149) • Write comprehensive tests and documentation for all new functionality. • Write tutorial Jupyter notebooks that show how to use the new functionality.",
        focusArea:
          "DevOps: automatic building, testing, and releasing of Python packages with compiled back ends. • Development of API (porcelain) to support the use of the additional integrals from libcint. • Writing documentation and tutorial notebooks.",
        contributionGuide:
          "See the contributing guidelines: https://iodata.qcdevs.org/contributing.html",
        githubLink: "https://github.com/theochem/gbasis",
      },
      {
        title: "2-electron integrals: better performance and more flexibility",
        description:
          "Add functionality to the GBasis library for evaluating 2-electron integrals, including non-Coulomb repulsions. The current Python implementation is very slow, but it also uses a very inefficient algorithm. A more efficient algorithm, combining the Obara–Saika and Head-Gordon–Pople recursions, would fix this issue. One advantage of having this coded in (pure) Python is that it makes it easy to explore new screening methods, exploit sparsity, and include unconventional integrals (e.g., screened Coulomb interactions). Here is a good introduction to Gaussian integral evaluation, which can help you get your bearings without overwhelming you with (important!) details.",
        tech: ["Python", "GitHub Actions", "Object-oriented programming"],
        problemStatement:
          "Your main focus will be to (re)implement the 2-electron integrals in GBasis. This is important partly because it seems we may have a bug in the integrals for high angular momentum (cf. #216) and because the current implementation is painfully slow. It is very helpful for many people to have a pure Python implementation of the 2-electron integrals because, while it will always be (relatively) slow, it allows more flexibility for development of new algorithms and facilitates cross-platform code interoperability. In addition, in many cases integral evaluation is not the performance bottleneck. The key steps will be to • Understand the recursive evaluation of Gaussian integrals. • Implement the key recursions (vertical, horizontal, electron-transfer). • Apply these recursions in sequence to evaluate the 2-electron integrals. • Write functions for different “initializations” of the Boys function to support different types of 2-electron integrals. 2-electron integrals from PySCF can be used for testing, as can a recursion check against existing integrals (which are surely reliable for low angular momentum). For more general integral types, one will have to test by manual verification (e.g., numerical integration using Grid) ***Expected Outcomes: • Implement the recursive evaluation of 2-electron integrals into GBasis using the algorithm in the notes. • This requires implementing several different recursions, which are the “building blocks” for the algorithm as a whole. •Implement several different “generalized Boys functions” so that multiple types of 2-electron integrals are supported. • Write comprehensive tests and documentation for all new functionality. • Write tutorial Jupyter notebooks that show how to use the new functionality.",
        focusArea: "Implementation and testing of numerical algorithms. • Development of API (porcelain) to support the use of the new functionality. • Writing documentation and tutorial notebooks.",
        contributionGuide:
          "See the contributing guidelines: https://iodata.qcdevs.org/contributing.html",
        githubLink: "https://github.com/theochem/gbasis",
      },
    ],
  },
  mixxx: {
    name: "MIXXX",
    tagline: "",
    description:
      "Mixxx is a feature rich DJ mixing application. It supports many MIDI and HID DJ controllers, runs on Win Linux and MacOs. It supports effects, harmonic mixing and beatmatching.",
    heroImage: "/past-orgs/Mixxx.webp",
    website: "https://mixxx.org/",
    chat: "https://mixxx.zulipchat.com/",
    repo: "https://github.com/mixxxdj",
    email: "contact@example.org",
    focusAreas: ["First-year programming", "C++", "JavaScript", "Signal processing knowledge"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "mixxx.org", href: "https://mixxx.org/" },
      {
        label: "Community Chat",
        value: "chat.mixxx.org",
        href: "https://mixxx.zulipchat.com/",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/mixxxdj",
        href: "https://github.com/mixxxdj",
      },
    ],
    mentors: [
      {
        name: "Daniel Schürmann",
        desc: "Treasurer",
        discord: "@daschuer9032",
        email: "daschuer@mixxx.org",
        linkedin: "",
      },
      {
        name: "Armaan Chowfin",
        desc: "Successful GSoC Contributor",
        discord: "",
        email: "by6charm@gmail.com",
        linkedin: "",
      },
    ],
    projects: [
      {
        title: "Spin-Up/Spin-Down Effect on Play/Pause",
        description:
          "",
        tech: ["First-year programming", "Js", "C++"],
        problemStatement:
          "A real turntable cannot instantly start and stop a track. The tempo increases gradually when pressing play and spins down after pressing pause. This effect has been implemented in various controller mappings but is not yet available for GUI controls and keyboard. The project aims to review existing mapping solutions and move them into the C++ domain of Mixxx.",
        focusArea:
          "",
        contributionGuide:
          "https://github.com/mixxxdj/mixxx/wiki/WOC",
        githubLink: "https://github.com/mixxxdj/mixxx/issues/15071",
      },
      {
        title: "Fader Start",
        description:
          "",
        tech: ["First-year programming", "Js", "C++"],
        problemStatement:
          "Radio DJs are used to start the tracks with the fader only. There shall be no need for touching play/cue/pause. This feature has been implement in various controller mappings but is not yet available for GUI controls. The project aims to review existing mapping solutions and move them into the C++ domain of Mixxx.",
        focusArea:
          "",
        contributionGuide:
          "https://github.com/mixxxdj/mixxx/wiki/WOC",
        githubLink: "https://github.com/mixxxdj/mixxx/issues/5587",
      },
      {
        title: "Reverb Band Pass Effect",
        description:
          "",
        tech: ["C++", "First-year programming"],
        problemStatement:
          "Mixxx has an effect rack with a couple of built-in effects. We have a request to integrate a band pass filter with the reverb effect. The work requires to analyse how the reverb and the band pass filter works, integrate code and tweak the default parameters for a pleasant effect.",
        focusArea: "",
        contributionGuide:
          "https://github.com/mixxxdj/mixxx/wiki/WOC",
        githubLink: "https://github.com/mixxxdj/mixxx/issues/12504",
      },
      {
        title: "Formant Effect",
        description:
          "",
        tech: ["Good programming (C++)", "signal processing knowledge"],
        problemStatement:
          "Mixxx has an effect rack with a couple of built-in effects. This project aims to add a Formant shift effect. A Formant effect can be used to make vocals like chipmunks without changing the pitch. The work requires review of existing Formant filters and implementing it in the Mixxx code base.",
        focusArea: "",
        contributionGuide:
          "https://github.com/mixxxdj/mixxx/wiki/WOC",
        githubLink: "https://github.com/mixxxdj/mixxx/issues/9300",
      },
    ],
  },
  vacanza: {
    name: "Open World Holidays Framework",
    tagline: "At Vacanza, we strive to make global holiday data universally accessible and localized for every community and connect the world through data.",
    description:
      "A fast, efficient Python library for generating country- and subdivision- (e.g. state or province) specific sets of government-designated holidays on the fly. It aims to make determining whether a specific date is a holiday as fast and flexible as possible",
    heroImage: "/past-orgs/HolidaysFramework.webp",
    website: "https://github.com/vacanza/",
    chat: "https://chat.example.org",
    repo: "https://github.com/vacanza/holidays",
    email: "community@vacanza.dev",
    focusAreas: ["Python", "pytest"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "vacanza.org", href: "https://github.com/vacanza/" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "community@vacanza.dev",
        href: "mailto:community@vacanza.dev",
      },
      {
        label: "GitHub",
        value: "github.com/vacanza",
        href: "https://github.com/vacanza/",
      },
    ],
    mentors: [
      {
        name: "Arkadii Yakovets",
        desc: "Project leader",
        discord: "@alex-r",
        email: "arkadii.yakovets@gmail.com",
        linkedin: "https://www.linkedin.com/in/arkid15r/",
      },
      {
        name: "Panpakorn Siripanich",
        desc: "Project leader",
        discord: "@alex-r",
        email: "",
        linkedin: "https://th.linkedin.com/in/panpakorn-siripanich-073650193",
      },
      {
        name: "Serhii Murza",
        desc: "Project leader",
        discord: "@alex-r",
        email: "",
        linkedin: "https://www.linkedin.com/in/jhellico",
      },
    ],
    projects: [
      {
        title: "Open World Holidays Framework",
        description:
          "A fast, efficient Python library for generating country- and subdivision- (e.g. state or province) specific sets of government-designated holidays on the fly. It aims to make determining whether a specific date is a holiday as fast and flexible as possible.",
        tech: ["Python", "pytest"],
        problemStatement:
          "Our mission is to create an open, standardized framework that empowers developers and organizations to seamlessly integrate culturally accurate holiday information into their applications. We aim to provide developers and businesses with accurate, localized, and multi-language holiday frameworks that celebrate the diversity of financial markets, countries, and regions.​",
        focusArea:
          "Entity holidays accuracy improvement • Holiday names localization • Documentation technical writing • Performance optimization",
        contributionGuide:
          "Any open and available for work issues from https://github.com/vacanza/holidays/issues​ We’re accepting new issues too (subject to approval). If accepted we’ll add a WoC 5.0 label for easy search and will help students to come up with meaningful and realistic projects/milestones.​",
        githubLink: "https://github.com/vacanza/holidays",
      },
    ],
  },
  opstree: {
    name: "OpsTree Global",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  performanc: {
    name: "PerformanC",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  keploy: {
    name: "Keploy",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  devsocaec: {
    name: "Development Society AEC",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  fossia: {
    name: "FOSSIA",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  opensourcechandigarh: {
    name: "Open Source Chandigarh",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  cookethorg: {
    name: "Cooketh Org",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  psmri: {
    name: "PSMRI",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  wallgodds: {
    name: "WallGodds",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  rootsprout: {
    name: "Rootsprout",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
  ppts: {
    name: "Programmers' Paradise Technical Society",
    tagline: "Building inclusive tools for global collaboration.",
    description:
      "Example Open Source Lab is a community-driven organization focused on developer experience, accessibility, and data tooling. We mentor newcomers, ship production-grade libraries, and help contributors grow with thoughtful code reviews.",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://example.org",
    chat: "https://chat.example.org",
    repo: "https://github.com/example/example-repo",
    email: "contact@example.org",
    focusAreas: ["C", "C++", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "example.org", href: "https://example.org" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "https://chat.example.org",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/example",
        href: "https://github.com/example",
      },
    ],
    mentors: [
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Alex Rivera",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Priya Verma",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
      {
        name: "Samir Khan",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@alex-r",
        email: "abc@gmail.com",
        linkedin: "linkedin.com",
      },
    ],
    projects: [
      {
        title: "CLI UX Overhaul",
        description:
          "A modern overhaul of our CLI to make complex tasks intuitive and traceable. The goal is to reduce friction for contributors and power users with clearer messaging, step-aware progress, and composable subcommands.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "Our current CLI provides minimal feedback and lacks a robust subcommand architecture. As workflows scale, users cannot easily see what is happening, retry failed steps, or compose commands safely. This results in confusion, longer onboarding, and lower contributor confidence.",
        focusArea:
          "Developer Experience • Command Design • Tracing • Error Handling",
        contributionGuide:
          "Start by auditing existing commands and grouping related functionality into subcommands. Propose a progress reporting pattern using spinners/bars and structured logs, then add tracing hooks (timestamps, step IDs). Implement retries and helpful error messages. Add unit/integration tests for the new composition layer and update the README with examples.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Accessibility Audit Dashboard",
        description:
          "A polished audit dashboard that surfaces accessibility findings across builds, product areas, and time. It empowers teams to catch regressions early and prioritize fixes that matter most.",
        tech: ["React", "Tailwind", "a11y", "Playwright", "Vitest"],
        problemStatement:
          "Multiple teams ship changes without unified visibility into accessibility health. Findings are scattered across tools and CI logs, making it difficult to track regressions, identify ownership, and measure improvements over time. This leads to inconsistent standards and user-impacting issues.",
        focusArea:
          "Accessibility • Reporting • CI Integration • Trend Analysis",
        contributionGuide:
          "Integrate automated scanners (axe, pa11y) into CI, normalize results, and store them in a lightweight data layer. Build views for trends, severity, and ownership, with filters for releases and components. Add export/share features and a “how to fix” playbook. Write tests for parsers and core UI states, and ship clear docs for integrating new apps.",
        githubLink: "https://github.com/example/example-repo",
      },
      {
        title: "Data Viz Templates",
        description:
          "A collection of well-crafted, accessible chart templates with strong defaults that make data storytelling effortless. Focused on practical patterns and maintainable APIs.",
        tech: ["D3", "TypeScript", "Storybook", "Testing Library"],
        problemStatement:
          "Teams repeatedly reinvent chart components, often missing accessibility and consistency. Without opinionated templates and examples, new contributors struggle to create reliable visuals that communicate clearly.",
        focusArea: "Data Visualization • Component Libraries • Accessibility",
        contributionGuide:
          "Define a small template API (line, bar, pie) with sensible defaults, keyboard navigation, and color contrast. Add documentation and Storybook demos showcasing real-world data. Include tests for rendering and accessibility. Encourage contributions via a template RFC and starter examples.",
        githubLink: "https://github.com/example/example-repo",
      },
    ],
  },
};
