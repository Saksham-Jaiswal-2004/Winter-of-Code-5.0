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
  // Openprinting
  Openprinting: {
    name: "Open Printing",
    tagline: "",
    description:
      "OpenPrinting develops IPP-based printing technology for Linux®/Unix® operating systems. We make printing just work!",
    heroImage: "/past-orgs/OpenPrinting.webp",
    website: "https://www.openprinting.org/",
    chat: "",
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





  // OWASP
  owasp: {
    name: "Owasp",
    tagline: "",
    description:
      "The Open Worldwide Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software",
    heroImage: "/orgs/OWASP Nest.png",
    website: "https://owasp.org/",
    chat: "",
    repo: "https://github.com/OWASP/Nest",
    email: "",
    focusAreas: ["Python", "Django", "TypeScript", "React", "Next.js", "TailwindCSS", "GraphQL", "Docker", "AWS. Comprehensive test coverage and clean code culture: Pytest, Jest, PlayWright, Snyk, SonarQube, CodeQL, CodeRabbit."],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "owasp.org", href: "https://owasp.org/"},
      {
        label: "Community Chat",
        value: "",
        href: "",
      },
      {
        label: "Email",
        value: "contact@example.org",
        href: "mailto:contact@example.org",
      },
      {
        label: "GitHub",
        value: "github.com/OWASp",
        href: "https://github.com/OWASP/Nest",
      },
    ],
    mentors: [
      {
        name: "Arkadii Yakovets",
        desc: "Cybersecurity lead (OWASP Nest, OWASP Nettacker), open source contributor, home automation enthusiast. A perfectionist with deadlines. CCSP · CISSP · CSSLP.",
        discord: "@arkid15r",
        email: "arkadii.yakovets@owasp.org",
        linkedin: "https://www.linkedin.com/in/arkid15r/",
      },
      {
        name: "Kateryna Golovanova",
        desc: "Software Engineer at Skill Struck. CC.",
        discord: "",
        email: "kateryna.golovanova@owasp.org",
        linkedin: "https://www.linkedin.com/in/kate-golovanova/",
      },
    ],
    projects: [
      {
        title: "OWASP Nest",
        description:
          "Your gateway to OWASP. Discover, engage, and help shape the future!",
        tech: ["Python", "Django", "TypeScript", "React", "Next.js", "TailwindCSS", "GraphQL", "Docker", "AWS. Comprehensive test coverage and clean code culture: Pytest, Jest, PlayWright, Snyk, SonarQube, CodeQL, CodeRabbit."],
        problemStatement:
          "OWASP Nest is a comprehensive platform designed to enhance collaboration and contribution within the OWASP community. The application serves as a central hub for exploring OWASP projects and ways to contribute to them, empowering contributors to find opportunities that align with their interests and expertise.",
        focusArea:
          "Backend (Python, Django, Ninja, Strawberry) • Frontend (TypeScript, Next.js, React, TailwindCSS) • NestBot (Slack API, Python, OpenAI API)",
        contributionGuide:
          "Any open and available for work issues from https://github.com/OWASP/Nest/issues We’re accepting new issues too (subject to approval). If accepted we’ll add a WoC 5.0 label for easy search and will help students to come up with meaningful and realistic projects/milestones. ",
        githubLink: "https://github.com/OWASP/Nest",
      },
    ],
  },






  // QC Devs
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






  // MIXXX
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






  // Vacanza
  vacanza: {
    name: "Open World Holidays Framework",
    tagline: "At Vacanza, we strive to make global holiday data universally accessible and localized for every community and connect the world through data.",
    description:
      "A fast, efficient Python library for generating country- and subdivision- (e.g. state or province) specific sets of government-designated holidays on the fly. It aims to make determining whether a specific date is a holiday as fast and flexible as possible",
    heroImage: "/past-orgs/HolidaysFramework.webp",
    website: "https://github.com/vacanza/",
    chat: "",
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






  // OpsTree Global
  opstree: {
    name: "OpsTree Global",
    tagline: "",
    description: "OpsTree Global Consulting is a Digital Transformation and Platform Engineering partner that empowers technology leaders and teams to achieve impactful, scalable tech outcomes. Our expertise spans across Modernization, Data & AI,Observability & SRE, Cloud & DevSecOps, Security, Quality Engineering, and End-to-End Software Delivery — enabling businesses to accelerate their digital journeys with the right outcomes.",
    heroImage: "/orgs/OpsTree Global.png",
    website: "https://opstree.com/",
    chat: "",
    repo: "https://github.com/OT-CONTAINER-KIT",
    email: "contact@example.org",
    focusAreas: ["GoLang"],
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
        name: "Abhishek Dubey",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@iamabhishekdubey",
        email: "abhishek.dubey@opstree.com",
        linkedin: "https://www.linkedin.com/in/abhishek-dubey-09b43ab6/",
      },
      {
        name: "Shubham Gupta",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@shubamgupta6536",
        email: "iamshubhamgupta200@gmail.com",
        linkedin: "https://www.linkedin.com/in/shubham-gupta-8b1168244/",
      },
      {
        name: "Samyak Jain",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, harum et optio obcaecati reprehenderit aperiam soluta facere veniam numquam voluptatibus laudantium a sequi ducimus, consequuntur vero dolorum, odit labore ad.",
        discord: "@samyyaakk",
        email: "samyak.jain@opstree.com",
        linkedin: "https://www.linkedin.com/in/samyyaakk",
      },
    ],
    projects: [
      {
        title: "Redis Operator",
        description:
          "",
        tech: ["GoLang"],
        problemStatement:
          "A golang based redis operator that will make/oversee Redis standalone/cluster/replication/sentinel mode setup on top of the Kubernetes.",
        focusArea:
          "The focus area will be backend controller development along with performance optimization.",
        contributionGuide:
          "Backup & Restore CRD • Add a RedisBackup CR to trigger backups (e.g., using BGSAVE, snapshots, or RDB dumps). • Similarly, a RedisRestore CR to restore from snapshot. • Integrate with object storage (S3, GCS) for snapshot uploads. • Automated Certificate Management • Integrate with cert-manager to automate TLS certificates for Redis and Sentinel pods. • Support cert rotation. • Auto-Scaling • Add horizontal scaling logic: based on usage (memory, CPU, keyspace, throughput), operator can scale the number of replicas or shards. • Alternatively, integrate with Kubernetes Horizontal Pod Autoscaler (HPA) or a custom scaler. • Advanced Configuration Customization • Allow users to pass raw Redis config via CRD (configMap or embedded). • Support config version upgrades / migrations (managing rolling restarts when config changes happen).",
        githubLink: "https://github.com/OT-CONTAINER-KIT/redis-operator",
      },
      {
        title: "K8s Vault Webhook",
        description:
          "",
        tech: ["GoLang"],
        problemStatement:
          "k8s-vault-webhook is a Kubernetes admission webhook which listen for the events related to Kubernetes resources for injecting secret directly from secret manager to pod, secret, and configmap. The motive of creating this project is to provide a dynamic secret injection to containers/pods running inside Kubernetes from different secret managers for enhanced security.",
        focusArea:
          "The focus should be to stabilize the existing secret manager integrations, along with new feature support for secret manager.",
        contributionGuide:
          "Support for more secret managers / backends: maybe add support for secret managers not yet supported, or improve existing ones. • Secrets versioning and rotation: introduce versioning of secrets, or periodic re-injection whensecrets change in Vault. • Custom annotations or templating: allow more flexible templating for how secrets should be injected (e.g., naming conventions, path transformations). • RBAC / policy management UI or CRD: build a CRD or UI to manage which service accounts map to which Vault policies, instead of manual policy definitions. • Backup/reconciliation: maintain a reconciliation loop that ensures injected secrets remain up-to-date even after pod restarts, or if secret manager data changes. • Observability: expose metrics from the webhook (such as number of admission requests, failed injections, latency) via Prometheus. • Fault tolerance: handle cases when the secret manager is down, or when the webhook’s certificate expires, more gracefully.",
        githubLink: "https://github.com/OT-CONTAINER-KIT/k8s-vault-webhook",
      },
      {
        title: "Logging Operator",
        description:
          "",
        tech: ["GoLang"],
        problemStatement:
          "A golang based operator to create and manage EFK (Elasticsearch, Fluentd, and Kibana) stack on Kubernetes",
        focusArea: "Development of backend API features to support elasticsearch, fluentd, and kibana integration.",
        contributionGuide:
          "Support for Alternative Log Collectors / Forwarders • Add support for Fluent Bit as a daemonset collector + Fluentd / ES / other outputs. (Although some upstream logging operators use Fluent Bit + Fluentd; if not present, this is big.) • Support for Loki as a storage backend (instead of or in addition to Elasticsearch) or other outputs (S3, Kafka, etc.). • Automatic Scaling & Lifecycle Management • Add CR-driven scaling for Elasticsearch nodes (master / data / ingestion) based on resource usage. • Implement lifecycle management of indices: rollover, retention, delete- old-index policies via CRD (or enhance existing index lifecycle CR). • Secure Multi-Tenancy / Namespacing • Build better namespace isolation of logging pipelines: allow CR per namespace, or per team, with RBAC. • Add validation / policy CRs to enforce which namespaces can write to which logging pipeline, or limit ES resources per tenant. • Observability Enhancements • Expose metrics from the operator: reconciliation time, number of CRs, failures, etc., via Prometheus. • Build Grafana dashboards for EFK stack health (ES metrics, Fluentd throughput, Kibana usage).",
        githubLink: "https://github.com/OT-CONTAINER-KIT/logging-operator",
      },
    ],
  },






  // PerformanC
  performanc: {
    name: "The PerformanC Organization",
    tagline: "",
    description:
      "An organization focusing on making high-performance, simple, projects for public usage.",
    heroImage: "/orgs/PerformanC.png",
    website: "https://github.com/PerformanC",
    chat: "",
    repo: "https://github.com/PerformanC",
    email: "performancorg@gmail.com",
    focusAreas: ["C", "C++", "JavaScript"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "performanc.org", href: "https://github.com/PerformanC" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "",
      },
      {
        label: "Email",
        value: "performancorg@gmail.com",
        href: "mailto:performancorg@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/PerformanC",
        href: "https://github.com/PerformanC",
      },
    ],
    mentors: [
      {
        name: "Pedro",
        desc: "A 16y old brazilian full-stack C/JavaScript developer, keen in Android and music related development. ***Role in the organization: Organization owner, lead maintainer",
        discord: "@pedro.js",
        email: "pedroolimpio@proton.me",
        linkedin: "",
      },
      {
        name: "RainyXeon",
        desc: "I'm RainyXeon (aka Rainy), a full-stack JS/TS and Lua developer from Vietnam. With one dream: to build, share useful open-source tools. ***Role in the organization: Designer, maintainer",
        discord: "@rainyxeon",
        email: "rainyxeon@gmail.com",
        linkedin: "",
      },
      {
        name: "Lucas",
        desc: "Hello, my name is Lucas, 19-year-old JS/TS developer. I do reverse engineering, I've been a programmer for 6 years, new right? ***Role in the organization: NodeLink lead maintainer",
        discord: "@1lucas1.apk",
        email: "1lucas1apk@gmail.com",
        linkedin: "",
      },
    ],
    projects: [
      {
        title: "NodeLink",
        description:
          "A standalone music node to allow Discord bots to easily interact with Discord Voice API and play audios from multiple different sources, being interacted via LavaLink API.  ***Difficulty: Medium",
        tech: ["JavaScript"],
        problemStatement:
          "Students are meant to improve the project's control flow; Implement new sources to be played; Add support to more audio codecs.",
        focusArea:
          "",
        contributionGuide:
          "",
        githubLink: "https://github.com/PerformanC/NodeLink",
      },
      {
        title: "ReZygisk",
        description:
          "Zygote injection implementation, allowing to inject into Android application processes through injection into Zygote. ***Difficulty/Complex: Hard-medium/High-medium",
        tech: ["C", "C++"],
        problemStatement:
          "Students are meant to improve the project's control flow by simplifying the codebase; Find better ways to implement some sub-system. E.g. ptrace injection; Improve project performance while maintaining its hiding capabilities.",
        focusArea:
          "",
        contributionGuide:
          "",
        githubLink: "https://github.com/PerformanC/ReZygisk",
      },
    ],
  },






  // Keploy
  keploy: {
    name: "Keploy",
    tagline: "",
    description:
      "Keploy is an open-source, AI-powered automation testing platform designed to eliminate regressions. It automatically generates unit and API tests by observing your codebase, saving up to 60% of QA effort for engineering teams all without requiring you to write a single line of code.",
    heroImage: "/orgs/Keploy.png",
    website: "https://keploy.io/",
    chat: "",
    repo: "https://github.com/keploy/blog-website",
    email: "hello@keploy.io",
    focusAreas: ["Wordpress", "JavaScript", "Typescript"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "keploy.org", href: "https://keploy.io/" },
      {
        label: "Community Chat",
        value: "",
        href: "",
      },
      {
        label: "Email",
        value: "hello@keploy.io",
        href: "mailto:hello@keploy.io",
      },
      {
        label: "GitHub",
        value: "github.com/keploy",
        href: "https://github.com/keploy/blog-website",
      },
    ],
    mentors: [
      {
        name: "Amaan bhati",
        desc: "Role in the organisation : Devrel at Keploy",
        discord: "@amaan_bhati",
        email: "amaan.bhati@keploy.io",
        linkedin: "https://www.linkedin.com/in/amaan-bhati/",
      },
      {
        name: "Hermione Dadheech",
        desc: "Role in the organisation : SDE-1 at Keploy",
        discord: "@hermione_dadheech_66979",
        email: "hermione.dadheech@keploy.io",
        linkedin: "https://www.linkedin.com/in/hermione-dadheech/",
      },
    ],
    projects: [
      {
        title: "Keploy blog website",
        description:
          "The Keploy Blog Website is the official blogging platform of Keploy, an open-source, AI-powered test automation platform. Our goal is to make the blog: ● Clean and modern in UI  ● Fast and performant  ● Easy to navigate and read  ● Friendly for contributors and writers",
        tech: ["TypeScript", "Wordpress", "JavaScript"],
        problemStatement:
          "We’re looking to improve the current Keploy blog website. There are several issues already listed in the Keploy repository, please pick one and start working on it. You’re also encouraged to create new issues by taking inspiration from other blog websites and suggesting improvements. The end goal is to enhance the blog website in terms of both UI and performance.",
        focusArea:
          "Backend API development • UI/UX improvements • Documentation • Performance optimization • DevOps",
        contributionGuide:
          "First, please visit our repository and pick an issue to work on from the list: Issues: https://github.com/keploy/keploy/issues?q=is%3Aissue%20state%3Aopen%20label%3Ablog-website ● You’re also welcome to create a new issue if you have ideas or improvements you’d like to work on. Note: Please attach a short video of your changes so mentors can review them easily and share feedback quickly. ***What Can You Contribute? You can contribute in many ways, including but not limited to: 🔹 UI / UX Improvements ● Improve layout, spacing, typography, or responsiveness ● Enhance readability and accessibility ● Improve blog listing, navigation, or search experience🔹 Performance Optimization ● Improve page load times ● Optimize assets (images, scripts, styles) ● Reduce unnecessary JavaScript or CSS 🔹 Bug Fixes ● Fix broken layouts, styling issues, or functionality bugs ● Resolve issues already reported in the repository🔹 New Feature Ideas ● Suggest and implement features inspired by other popular blog websites ● Improve author pages, categories, tags, or SEO 🔹 Documentation   ● Improve README or developer setup instructions ● Add clarity for future contributors ***Pull Request Guidelines ● Keep PRs focused and small ● Link the related issue in the PR description ● Add screenshots or videos for UI changes ● Clearly explain: ○ What you changed ○ Why you changed it ● Be open to feedback and iteration",
        githubLink: "https://github.com/keploy/blog-website",
      },
    ],
  },
  





  // Development Society AEC
  devsocaec: {
    name: "Development Society AEC",
    tagline: "",
    description:
      "A community initiative focused on building tools and guide students on their technical journey",
    heroImage: "/orgs/Development Society AEC.png",
    website: "https://devsoc-landing.vercel.app/",
    chat: "",
    repo: "https://github.com/Nilam-Kumari-Mahato/rapid-quiz-relay",
    email: "arnabchatterjee.ac.2@gmail.com",
    focusAreas: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Convex"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "devsoc.org", href: "https://devsoc-landing.vercel.app/" },
      {
        label: "Community Chat",
        value: "",
        href: "",
      },
      {
        label: "Email",
        value: "arnabchatterjee.ac.2@gmail.com",
        href: "mailto:arnabchatterjee.ac.2@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/Nilam-Kumari-Mahato/rapid-quiz-relay",
        href: "https://github.com/Nilam-Kumari-Mahato/rapid-quiz-relay",
      },
    ],
    mentors: [
      {
        name: "Asif Qamar",
        desc: "Passionate Full Stack Developer experienced in building interactive web applications and guiding open-source contributors. ***Role in the organisation: Tech Sub Committee Member (Backend Developer)",
        discord: "@gamedotexe",
        email: "asifqamar1832004@gmail.com",
        linkedin: "https://www.linkedin.com/in/asif-qamar",
      },
      {
        name: "Nilam Kumari Mahato",
        desc: "Role : Tech Sub Committee Member (Frontend developer)",
        discord: "@Nilam_Mahato",
        email: "nilamkumarimahato10@gmail.com",
        linkedin: "https://www.linkedin.com/in/nilam-kumari-mahato-5a2710307",
      },
      {
        name: "Prerna Priya",
        desc: "Hello!, I am Prerna Priya, a passionate and curious 2nd year B.Tech CSE student with a growing interest in full-stack web development, hands-on projects, and real-world problem solving. From HTML, CSS, JS to Node.js, Express.js, PostgreSQL, and React.js, I’m actively building my skillset to create meaningful, user-centric applications. Currently diving into React while balancing college academics and tech community involvement",
        discord: "@yuna086841",
        email: "prerp.6299@gmail.com",
        linkedin: "https://www.linkedin.com/in/prerna-priya-ab3581329",
      },
      {
        name: "Amartya Chowdhury",
        desc: "Role: Mentor",
        discord: "@paraxius",
        email: "amartyachowdhury4@gmail.com",
        linkedin: "https://linkedin.com/in/amartya-chowdhury",
      },
      {
        name: "Arnab chatterjee",
        desc: "Role : Mentor",
        discord: "@arnabch20k",
        email: "arnabchatterjee.ac.2@gmail.com",
        linkedin: "https://www.linkedin.com/in/arnab-chatterjee-905ab3219/",
      },
      {
        name: "Swarup Goswami",
        desc: "Role : Mentor",
        discord: "@swarup_goswami",
        email: "goswamiswarup97@gmail.com",
        linkedin: "https://www.linkedin.com/in/swarup-goswami-7a9444311",
      },
    ],
    projects: [
      {
        title: "Quizora",
        description:
          "",
        tech: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Convex"],
        problemStatement:
          "Traditional learning and assessment methods often lack engagement and real-time feedback, leading to lower student participation. 'Rapid Quiz Relay' solves this by introducing a gamified, fast-paced environment where users can test their knowledge under time constraints, fostering competitive learning.",
        focusArea:
          "Backend API Development & Real-time data handling • UI/UX improvements for seamless quiz transitions • Performance optimization for concurrent users • Gamification logic (Leaderboards, Relay timers)",
        contributionGuide:
          "Students will work on enhancing the quiz engine, implementing new question types, and optimizing the relay timer logic. o Milestone 1: Setup environment and fix minor UI bugs. o Milestone 2: Implement user authentication and profile tracking. o Milestone 3: Develop real-time leaderboard and 'Relay' mode features.",
        githubLink: "https://github.com/Nilam-Kumari-Mahato/rapid-quiz-relay",
      },
    ],
  },
  





  // FOSSIA
  fossia: {
    name: "FOSSIA",
    tagline: "",
    description:
      "FOSSIA is a women-centric commnunity aimed to bring underrepresented people to contribute to the Indian FOSS ecosystem. We primarily work on projects and initiatives related to inclusion and accessibility.",
    heroImage: "/orgs/FOSSIA.png",
    website: "https://fossia.org/",
    chat: "https://matrix.to/#/#fossiaorg:matrix.org",
    repo: "https://codeberg.org/fossiaorg",
    email: "fossia@riseup.net",
    focusAreas: ["FastAPI", "Python", "Docker", "Chakra UI", "Next.js"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "fossia.org", href: "https://fossia.org" },
      {
        label: "Community Chat",
        value: "",
        href: "",
      },
      {
        label: "Email",
        value: "fossia@riseup.net",
        href: "mailto:fossia@riseup.net",
      },
      {
        label: "GitHub",
        value: "github.com/fossiaorg/transcribeit",
        href: "https://github.com/fossiaorg/transcribeit",
      },
    ],
    mentors: [
      {
        name: "Keerthana Rajesh Kumar",
        desc: "Keerthana is the founder of FOSSIA and is passionate about building inclusive and assistive technologies for the community with focus on community building, privacy, responsible AI and documentation",
        discord: "@grittypuffy",
        email: "grittypuffy@riseup.net",
        linkedin: "https://www.linkedin.com/in/keerthana304",
      },
    ],
    projects: [
      {
        title: "TranscribeIt - Video transcription for videos and live streams",
        description:
          "",
        tech: ["Next.js", "FastAPI", "Python", "Chakra UI", "Docker"],
        problemStatement:
          "Hard of hearing and speech population, people with visual impairments and sensory processing disorders have difficulty navigating video content. With online platforms providing little to no transcriptions or inaccurate transcriptions, especially for live streams, it hinders acccessibility. TransribeIt aims to provide customized and diarized transcriptions for making video content accessible.",
        focusArea:
          "*Backend: API development• asynchronous processing • ASR (automatic speech recognition) • diariazation • video processing   *Frontend: Accessibility • testing • UI development  *Deployment: Containerized deployment • monitoring • performance optimization *Documentation: Onboarding instructions for developers • technical documentation",
        contributionGuide:
          "1. Backend Contributions • Optimize ASR pipelines for both pre-recorded videos and live streams from local content. • Integrate speaker diarization for multi-speaker videos with customization for speaker identification. • Streamline asynchronous video processing workflows using Python and FastAPI for real-world usage. • Provide alternative formats for exporting transcripts and streamline transcript generation *Expected Outcomes: • Robust backend capable of handling multiple video formats and live streams. • Efficient, accurate transcription with speaker labels in customized manner • Formats such as Markdown, PDF and JSON for exports. 2. Frontend Contributions • Develop an accessible UI using Next.js and Chakra UI for the features described in backend section. • Implement features such as searchable transcripts, speaker highlighting, transcript exporting and timestamps for accessibility. • Perform accessibility testing (screen readers, keyboard navigation, color contrast) and integrate accessibility focused tooling for WCAG compliance. • Create a responsive design for desktop and mobile. Expected Outcomes: • User-friendly interface for uploading videos and viewing transcriptions and providing URLs. • Improved accessibility for users with visual and hearing impairments. • Enhanced user experience with intuitive navigation and customization options. 3. Deployment Contributions • Set up orchestration using Docker Compose for self-hosting by optimizing existing Docker setup. • Implement monitoring for system health and performance metrics for production. • Optimize backend performance for large video files or multiple concurrent live streams. Expected Outcomes: • Easy-to-deploy, scalable system for developers and end-users. • Improved stability and uptime. • Clear deployment guides for development and production environments. 4. Documentation Contributions • Write technical documentation for technical implementation in an integrated manner. • Create developer onboarding guides, including setup instructions. • Document API endpoints and video processing workflows using Swagger and VitePress • Maintain changelogs and contribution guidelines for future developers. Expected Outcomes: • Well-documented codebase for future contributors. • Reduced onboarding time for new developers. • Clear usage instructions for both developers and end-users. ***Milestones 1. Milestone 1 – Setup & Familiarization • Set up local development environment (Docker, FastAPI, Next.js) • Explore existing codebase and documentation 2. Milestone 2 – Core Backend Development • Create endpoints for video transcriptions in aternative formats • Optimize video transcription for larger videos • Implement speaker diarization with customisations 3. Milestone 3 – Frontend Integration • Display transcription results with timestamps and speaker information • Develop user interface for exporting transcripts in prefered format 4. Milestone 4 – Deployment & Monitoring • Containerize application for self-hosting and optimize existing Docker setup • Add logging, monitoring, and performance optimization for observability 5. Milestone 6 – Documentation & Final Touches • Complete developer guide • Conduct accessibility testing",
        githubLink: "https://codeberg.org/fossiaorg/transcribeit",
      },
    ],
  },






  // OpenSource Chandigarh
  opensourcechandigarh: {
    name: "Open Source Chandigarh",
    tagline: "",
    description:
      "Open-Source Chandigarh is a student-driven tech community at Chitkara University dedicated to making open-source accessible to everyone. We bring together like-minded learners to collaborate, contribute and grow through experiences and interactions. OSC regularly hosts tech events, expert sessions, challenges, coding cups and hackathons,creating a space where every student can explore technology, build skills and become part of the open-source ecosystem. Our motto, 'Learn. Foster. Express. Because Open Source is fun.' reflects our passion towards Open Source, technology and community spirit.",
    heroImage: "/orgs/Open Source Chandigarh.png",
    website: "https://github.com/Open-Source-Chandigarh",
    chat: "https://discord.gg/CqD6HY732h",
    repo: "https://github.com/Open-Source-Chandigarh",
    email: "opensourcechandigarh@chitkara.edu.in",
    focusAreas: ["C++", "Golang", "Next.js (React)", "Node.js with Express.js", "MongoDB", "Prisma", ],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "osc.org", href: "https://github.com/Open-Source-Chandigarh" },
      {
        label: "Community Chat",
        value: "chat.osc.org",
        href: "https://discord.gg/CqD6HY732h",
      },
      {
        label: "Email",
        value: "opensourcechandigarh@chitkara.edu.in",
        href: "mailto:opensourcechandigarh@chitkara.edu.in",
      },
      {
        label: "GitHub",
        value: "github.com/Open-Source-Chandigarh",
        href: "https://github.com/Open-Source-Chandigarh",
      },
    ],
    mentors: [
      {
        name: "Angad Sudan",
        desc: "Angad Sudan is the current Technical Lead at Open Source Chandigarh and an ex-intern @TBB Media. A Fullstack and MERN developer who is also a devops enthusiast with a strong focus on backend systems, he enjoys working with open source technologies and creating Saas Products. Role in the organisation: Technical Lead",
        discord: "@angadsudan",
        email: "angadsudan453@gmail.com",
        linkedin: "https://linkedin.com/in/angadsudan/",
      },
      {
        name: "Ayush Chauhan",
        desc: "Ayush is the current Technical Lead at Open Source Chandigarh and a LFX graduate. A Go and Rust enthusiast with a strong focus on backend systems, he enjoys working with open source technologies and advocating for the FOSS culture. Role in the organisation: Technical Lead",
        discord: "@bakayu",
        email: "ayu.0067abc@gmail.com",
        linkedin: "https://www.linkedin.com/in/ayuch",
      },
      {
        name: "Dhruv Ranger",
        desc: "Dhruv is a Computer Science undergraduate (Class of 2028) with a deep passion for Systems Programming and Graphics. He built Pyre from the ground up to explore the limits of C++ and OpenGL. His goal is to help mentees transition from 'coding' to 'engineering' by tackling the complex, rewarding challenges of low-level graphics development",
        discord: "@dhruv0154",
        email: "dhruvranger97@gmail.com",
        linkedin: "https://www.linkedin.com/in/dhruv-ranger-716564383",
      },
    ],
    projects: [
      {
        title: "Orycon (Event Management System)",
        description:
          "Orcyon is a comprehensive platform built with Next.js, Node.js, and MongoDB to help college societies plan, organize, and execute events with ease. It streamlines everything from content creation and social media scheduling to logistics coordination and real-time attendance tracking. Designed for Students, Team Admins, and specialized teams, the system provides a centralized and intuitive workspace that enhances collaboration, automates repetitive tasks, and improves the overall efficiency of event management.",
        tech: ["● Frontend: Next.js (React)", "● Backend: Node.js with Express.js", "● Database: MongoDB", "● ORM/ODM: Prisma", "● Architecture: Monorepo managed with Turborepo", "● Tools: Git, GitHub Actions, QR Code Generator, Calendar Integrations", "● Others: Rich Text Editors, Social Media Scheduling Utilities"],
        problemStatement:
          "College societies often struggle to manage events efficiently due to scattered tools for planning, content creation, social media, logistics, and attendance tracking. This Event Management System solves that problem by unifying all workflows into a single platform, enabling teams to collaborate smoothly while giving students an easy way to register and mark attendance. Although the system greatly improves coordination and execution, it currently lacks features like advanced analytics, automated social media publishing, and integrated payment handling. These enhancements are planned for future releases to further boost efficiency and scalability.",
        focusArea:
          "Backend Logic: Implementing advanced modules such as automated attendance processing, documentation generation, post-event analytics, and improved role-based access across teams. • UI/UX: Enhancing dashboards for each team, adding intuitive scheduling interfaces, improving the idea management flow, and refining the overall navigation for a smoother multi-team experience. • Technical Writing: Creating clear documentation for team workflows—covering event planning, content creation, social media scheduling, logistics management, and onboarding guides for new users.",
        contributionGuide:
          "The project will have two phases. Completing Phase 1 is required before moving to Phase 2, while Phase 2 is optional and can be completed if time permits.  Phase 1: Implementation of New Core Features *In this phase, the student is expected to focus on backend and frontend development to deliver core system improvements. Features include: 1. Attendance Automation Enhancements: Implement improved logic for automatic attendance generation, walk-in detection, and streamlined QR-based verification. 2. Social Media Scheduler Improvements: Build features for calendar-based scheduling, automatic reminders, and version control for social posts (text, image, video). 3. Content Documentation Generator: Develop the automated documentation generation tool that compiles event details, speeches, and write-ups into structured reports. 4. Meeting Scheduler Expansion: Add multi-team invite support, RSVP tracking, and integration with common calendar formats. 5. Idea Box Upgrades: Implement voting, commenting, and category tagging, along with a cleaner moderation workflow for Team Admins. 6. Logistics & Feedback Analyzer: Enhance the analytics pipeline to process event feedback and provide post-event summaries using charts, sentiment indicators, or basic insights. 7. Hiring Portal Development: Develop the hiring portal with options to mark candidates as Selected, Maybe, or Rejected, and the ability to transfer applicants between teams Phase 2: Technical Writing and Knowledge Resources *This phase focuses on creating educational and onboarding materials for new users and teams across the system. 1. Team Workflow Guides: Write clear documentation explaining how each team (Organising, Content, Social Media, Logistics, Admin) should use the system for their daily tasks. 2. Feature Tutorials: Produce step-by-step guides for modules built in Phase 1—such as scheduling posts, generating documentation, running meetings, or analyzing feedback. 3. Event Management Handbook: Create a structured learning section with best practices for planning and executing events using the platform. 4. Student Onboarding Material: Write simple, visual guides showing students how to log in, register for events, and mark attendance via QR codes.",
        githubLink: "https://github.com/Open-Source-Chandigarh/orycon",
      },
      {
        title: "gitx",
        description:
          "gitx is a Terminal User Interface (TUI) built with Golang to help you learn and interact with git. It provides a visual way to handle common git commands, making it easier for both beginners and experienced users to manage their repositories without leaving the terminal.",
        tech: ["Language: Golang", "Frameworks: Bubbletea, Hugo", "Tools: Git, Github Actions, Hugo for docs"],
        problemStatement:
          "Beginners often struggle with git commands when getting started with git and version control, gitx was developed to solve this very problem and provide a platform inside the terminal to provide a beginner friendly interface, which provides an abstraction over git, takes away the complexity and allows user to learn and use git more easily. While gitx provides a great overview of git repositories, currently it lacks granular control for advanced workflows (like staging specific lines) and the documentation on tutorials and guides is also lacking.",
        focusArea:
          "Backend Logic: Implementing new features to add more git operations to the Terminal User Interface • UI/UX: Enhancing the visual diff viewer and adding interactive elements. • Technical Writing: Writing documentation for the “Learn” section on how to use the TUI.",
        contributionGuide:
          "The project will have 2 phases, completing the first is necessary to move onto the second phase, while the second phase would be optional and can be completed if the time allows. Phase 1: Implementation of New Core Features *In this phase, the student would be expected to focus on coding and delivering the features listed on gitxtui.github.io/docs/contribute/roadmap; Also listed below: ● Repository Initialization: Implement the ability to initialize a new Git repository (like git init) directly from the startup screen or command menu if one doesn't exist. ● Safety Warnings: Add a confirmation and warning system for sensitive actions, such as initializing a repository in a non-empty directory or home folder. ● Improved Visual Diff Viewer: Refactor the MainPanel view to provide a clearer, syntax-highlighted, or side-by-side representation of file changes. ● Interactive Staging: Develop the functionality to select and stage specific lines or code hunks interactively from within the diff viewer. ● Custom Keybindings: Update configuration file logic to allow users to remap keybindings (currently hardcoded in keys.go). Phase 2: Technical Writing and Education Resources This phase focuses on documenting and helping new users learn git through gitx. ● 'Learn' Section Content: specific hands-on document series explaining how to use the TUI for various Git workflows. ● Feature Tutorials: Comprehensive guides and examples for the new features built in Phase 1 (e.g., 'How to interactively stage changes').",
        githubLink: "https://github.com/gitxtui/gitx",
      },
      {
        title: "Pyre",
        description:
          "Pyre is a custom-built, modular 3D graphics engine designed to bridge the gap between theoretical graphics programming and practical game engine development. It focuses on clean architecture, exposing the raw OpenGL pipeline while managing complexity through robust design patterns like ECS (Entity Component System).",
        tech: ["Language: C++ (Modern C++17/20 standards)", "Graphics API: OpenGL (Core Profile)", "Windowing & Input: GLFW", "Mathematics: GLM (OpenGL Mathematics)", "Asset Loading: Assimp (Models), stb_image (Textures)", "Build System: CMake", "Target Integration: Dear ImGui"],
        problemStatement:
          "Many computer science students learn graphics theory—the mathematics of drawing a single triangle—but never cross the chasm to building a system robust enough to be called an 'engine'. *Solution Pyre addresses this by offering a robust codebase that exposes students to the raw OpenGL pipeline. It currently supports advanced features like Deferred-style architecture preparation, Stencil buffers, Framebuffers, Skyboxes, and Blinn-Phong lighting.",
        focusArea: "Engine Tooling: Building in-engine GUI (ImGui) tools for runtime debugging and scene manipulation. • Mathematics: Upgrading core systems from Euler angles to Quaternions. • Visual Fidelity: Implementing advanced post-processing (Gaussian Blur, Edge Detection) and lighting visualization. • Robustness: Creating error-safe asset loading pipelines to handle missing files gracefully.",
        contributionGuide:
          "We have categorized contribution tasks into three tiers based on complexity and the required background in Linear Algebra and C++. Tier 1: Beginner / Warm-up Focus: Input handling, Game Logic, and Basic Visual Helpers. ● Debug Toggle System: Implement a runtime toggle (e.g., binding the H key) to show/hide helper objects like light diamonds that currently clutter the view. ● Camera Speed Control: Implement dynamic camera speed adjustment (e.g., pressing + / - to increase/decrease speed) to assist with navigating large scenes vs inspecting details. ● Expanded Light Visualizers: Implement wireframe gizmos for Directional Lights (lines indicating sun direction) and Spotlights (wireframe cones indicating influence and cutoff). Tier 2: Intermediate (The 'Editor' Features) Focus: Library Integration, UI, and Buffer Manipulation. ● ImGui Integration (Primary Focus): Integrate the Dear ImGui library into the render loop to create a basic 'Inspector' window for changing light colors, intensity, and positions in real-time. ● Advanced Post-Processing: Implement Gaussian Blur (requires multi-pass rendering) and Edge Detection (Sobel Operator) for stylized/outline rendering. ● Asset Loader Hardening: Improve the Assimp model loader to detect missing texture files, log a warning, and load a default 'checkerboard' texture instead of crashing or showing errors. Tier 3: Advanced (Math & Algorithms) Focus: Linear Algebra and Complex Rendering ipelines. ● Quaternion Camera System: Upgrade the camera class from Euler Angles to Quaternions to eliminate Gimbal Lock and allow for true 6-DOF (Degree of Freedom) movement. ● Shadow Mapping: Implement the first pass of a Shadow Mapping system by rendering scene depth from the Light's perspective to a Framebuffer and using it to determine occluded fragments.",
        githubLink: "https://github.com/Open-Source-Chandigarh/pyre",
      },
    ],
  },






  // Cooketh Org
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






  // PSMRI
  psmri: {
    name: "PSMRI",
    tagline: "",
    description:
      "At Piramal Swasthya Management and Research Institute (PSMRI), we are committed to leveraging technology and systems thinking to improve public health outcomes and transform lives across India. Our initiatives address systemic challenges in healthcare delivery by fostering digital adoption, decentralization, and evidence-based governance. PSMRI is part of the Piramal Foundation, a purpose-driven organization that has touched over 100 million lives in 27 states over the past 17 years. Focused on creating sustainable impact, we address critical issues in healthcare, education, sustainability, and gender inclusion. Our mission is to build भारत through leadership, digitization, and inclusion, led by women and youth.",
    heroImage: "/orgs/PSMRI.png",
    website: "https://www.piramalswasthya.org/",
    chat: "",
    repo: "https://github.com/PSMRI/AMRIT/",
    email: "amrit@piramalswasthya.org",
    focusAreas: ["Java", "Kotlin", "TypeScript", "Python", "JavaScript"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "psmri.org", href: "https://www.piramalswasthya.org/" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "",
      },
      {
        label: "Email",
        value: "amrit@piramalswasthya.org",
        href: "mailto:amrit@piramalswasthya.org",
      },
      {
        label: "GitHub",
        value: "github.com/PSMRI/AMRIT",
        href: "https://github.com/PSMRI/AMRIT/",
      },
    ],
    mentors: [
      {
        name: "Dr. Mithun James",
        desc: "",
        discord: "",
        email: "mithun.james@piramalswasthya.org",
        linkedin: "",
      },
    ],
    projects: [
      {
        title: "AMRIT",
        description:
          "AMRIT is our open-source EHR platform.",
        tech: ["TypeScript", "Node.js", "CLI", "Jest"],
        problemStatement:
          "AMRIT is an EHR platform. Students will get exposure to healthcare domain and technology that powers grass root level operations in different parts of India. We will file issues under the GitHub issues section. All issues will be posted here:  https://github.com/PSMRI/AMRIT/issues",
        focusArea:
          "",
        contributionGuide:
          "",
        githubLink: "https://github.com/PSMRI/AMRIT",
      },
    ],
  },






  // WallGodds
  wallgodds: {
    name: "WallGodds",
    tagline: "",
    description:
      "WallGodds is a modern, open-source wallpaper platform designed for people who love personalizing their screens with stunning visuals. Shaped by a passionate community, it embodies a shared effort to create something beautiful, seamless, and truly inspiring.",
    heroImage: "/orgs/WallGodds.png",
    website: "https://www.linkedin.com/company/wallgodds",
    chat: "https://discord.gg/kTQ5KWANp8",
    repo: "https://github.com/WallGodds/",
    email: "wallgodds@gmail.com",
    focusAreas: ["Kotlin", "Compose", "Firebase", "React"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "wallgodds.org", href: "https://www.linkedin.com/company/wallgodds" },
      {
        label: "Community Chat",
        value: "chat.wallgodds.org",
        href: "https://discord.gg/kTQ5KWANp8",
      },
      {
        label: "Email",
        value: "wallgodds@gmail.com",
        href: "mailto:wallgodds@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/WallGodds",
        href: "https://github.com/WallGodds",
      },
    ],
    mentors: [
      {
        name: "Parnab Bagchi",
        desc: "I craft clean, high-impact digital experiences — from web apps to full-stack solutions. Currently leading and expanding WallGodds across web and Android. A frontend lover exploring the depths of backend tech. Patent holder for ThirdEye (2023). Open-source contributor and community builder, driven to turn ideas into products that actually make a difference. Role in the organisation: Owner",
        discord: "@Parnab_03",
        email: "pb7439578071@gmail.com",
        linkedin: "https://www.linkedin.com/in/parnab-bagchi-072966251/",
      },
      {
        name: "Soumik Ghosh",
        desc: "A web developer and open-source mentor with experience guiding contributors across community programs like GSSoC, WOC, JWOC, and Apertre. Focused on helping newcomers learn, collaborate, and grow through real-world open-source projects. Role in the organisation: Web Developer",
        discord: "@soumikghosh_999",
        email: "soumikghosh09072004@gmail.com",
        linkedin: "https://www.linkedin.com/in/soumik-ghosh-556651258/",
      },
      {
        name: "Sayan Basak",
        desc: "An android developer with core proficiency in Java and Kotlin with Jetpack Compose. Experienced in building responsive mobile apps and familiar with full-stack web development. Skilled in working collaboratively to deliver effective and practical solutions. Role in the organisation: App Developer",
        discord: "@cyanb",
        email: "sayanbasak42@gmail.com",
        linkedin: "https://www.linkedin.com/in/sayan-basak003/",
      },
      {
        name: "Shankhadeep Paria",
        desc: "Not your average pixel pusher or code cruncher, I’m a design-led developer who believes that great ideas deserve beautiful execution. From wireframes to real-time interfaces, I bring clarity, creativity, and clean design to every digital experience I touch. I vibe with minimal aesthetics, bold experiments, and building stuff that just feels right. Role in the organisation: Designer",
        discord: "@shankyy69",
        email: "pariashankhadeep@gmail.com",
        linkedin: "https://www.linkedin.com/in/shankhadeepparia/",
      },
    ],
    projects: [
      {
        title: "WallGodds Web",
        description:
          "A modern wallpaper website offering high-quality wallpapers for mobile, tablet, and desktop devices. Features include user uploads, categorization, and profile management.",
        tech: ["React", "Firebase",],
        problemStatement:
          "Many existing wallpaper platforms lack proper screen-size categorization and often overwhelm users with cluttered interfaces. WallGodds addresses this by offering a clean, minimal, and intuitive experience for browsing wallpapers across mobile, tablet, and desktop, while also allowing users to freely upload their own collections.",
        focusArea:
          "UI/UX enhancement • Performance optimization • Backend API development",
        contributionGuide:
          "Contributors are encouraged to work on issues within our core focus areas or propose fresh, creative ideas. Collaboration with designers and developers is highly welcomed as we continue building a smoother, smarter, and more engaging platform together.",
        githubLink: "https://github.com/WallGodds/WallGodds-Web",
      },
      {
        title: "WallGodds App",
        description:
          "WallGodds is reimagined for mobile — fast, clean, and loaded with stunning high-res wallpapers for every screen. It’s more than an app — it’s your personal visual canvas, made for those who style their screen with every swipe.",
        tech: ["Kotlin", "Compose", "Firebase"],
        problemStatement:
          "Applying wallpapers directly from the WallGodds website on mobile is often a long, repetitive process. Our goal is to simplify this through a dedicated mobile app that provides a seamless wallpaper experience while still allowing users to freely upload and share their own collections.",
        focusArea:
          "UI/UX enhancement • Performance optimization • Backend API development",
        contributionGuide:
          "Contributors are encouraged to work on issues within our core focus areas or propose fresh, creative ideas. Collaboration with designers and developers is highly welcomed as we continue building a smoother, smarter, and more engaging platform together.",
        githubLink: "https://github.com/WallGodds/WallGodds-App",
      },
    ],
  },






  // Rootsprout
  rootsprout: {
    name: "Rootsprout",
    tagline: "",
    description:
      "At RootSprout, we believe the best way to truly learn is to start from the roots — break things down to their fundamentals, and then grow them back up into fully working systems.",
    heroImage: "/orgs/Rootsprout.png",
    website: "https://www.rootsprouthub.com/",
    chat: "https://github.com/orgs/RootSprout/discussions",
    repo: "https://www.linkedin.com/company/rootsprout/",
    email: "rootsprout1@gmail.com",
    focusAreas: ["C"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "rootsprout.org", href: "hhttps://www.rootsprouthub.com/" },
      {
        label: "Community Chat",
        value: "chat.rootsprout.org",
        href: "https://github.com/orgs/RootSprout/discussions",
      },
      {
        label: "Email",
        value: "rootsprout1@gmail.com",
        href: "mailto:rootsprout1@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/rootsprout",
        href: "https://www.linkedin.com/company/rootsprout/",
      },
    ],
    mentors: [
      {
        name: "Meerthika S R",
        desc: "Maintainer",
        discord: "",
        email: "rootsprout1@gmail.com",
        linkedin: "",
      },
      {
        name: "Vinoth kumar",
        desc: "Maintainer",
        discord: "",
        email: "rootsprout1@gmail.com",
        linkedin: "",
      },
    ],
    projects: [
      {
        title: "Exsh",
        description:
          "A Unix like shell",
        tech: ["C"],
        problemStatement:
          "",
        focusArea:
          "Students can learn built from scratch implementations. • Everything is built in low level language (C), no abstraction.",
        contributionGuide:
          "",
        githubLink: "https://github.com/RootSprout/Exsh",
      },
      {
        title: "CTP",
        description:
          "A Serial datalink transport protocol",
        tech: ["C"],
        problemStatement:
          "",
        focusArea:
          "Students can learn built from scratch implementations. • Everything is built in low level language (C), no abstraction.",
        contributionGuide:
          "",
        githubLink: "https://github.com/RootSprout/CTP",
      },
      {
        title: "Kira-Kafka",
        description:
          "kafka implemented by features",
        tech: ["C"],
        problemStatement:
          "",
        focusArea: "Students can learn built from scratch implementations. • Everything is built in low level language (C), no abstraction.",
        contributionGuide:
          "",
        githubLink: "https://github.com/RootSprout/Kira-Kafka",
      },
    ],
  },






  // Programmer's Paradise Technical Society
  ppts: {
    name: "Programmers' Paradise Technical Society",
    tagline: "",
    description:
      "Programmers' Paradise has evolved into a full-fledged Technical Society. We are a vibrant and inclusive community dedicated to fostering innovation, technical excellence, and collaborative learning among students. Whether you're diving into programming for the first time or you're a seasoned developer, there's something here for everyone. Our mission is to empower students through technical skill development, peer collaboration, and hands-on experience. We aim to provide a supportive platform for learning, creating, and growing in diverse areas of technology through events, workshops, and projects.",
    heroImage: "/orgs/Programmers' Paradise Technical Society.png",
    website: "https://www.programmers-paradise.tech/",
    chat: "",
    repo: "https://github.com/Programmers-Paradise",
    email: "programmers.paradise.utd@csvtu.ac.in",
    focusAreas: ["TypeScript", "HTML", "JavaScript", "Python"],
    stats: [
      { label: "Active Mentors", value: "12" },
      { label: "Contributors", value: "350+" },
      { label: "Open Issues", value: "42" },
      { label: "Good First Issues", value: "18" },
    ],
    contacts: [
      { label: "Website", value: "ppts.org", href: "https://www.programmers-paradise.tech/" },
      {
        label: "Community Chat",
        value: "chat.example.org",
        href: "",
      },
      {
        label: "Email",
        value: "programmers.paradise.utd@csvtu.ac.in",
        href: "mailto:programmers.paradise.utd@csvtu.ac.in",
      },
      {
        label: "GitHub",
        value: "github.com/Programmers-Paradise",
        href: "https://github.com/Programmers-Paradise",
      },
    ],
    mentors: [
      {
        name: "Aksh Agrawal",
        desc: "",
        discord: "@hextrovert_10",
        email: "aksh.300012824005@csvtu.ac.in",
        linkedin: "www.linkedin.com/in/akshagr10",
      },
    ],
    projects: [
      {
        title: "Ak-dskit (DsKit) - Unified Data Science & ML Toolkit",
        description:
          "",
        tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "SHAP", "XGBoost", "LightGBM", "CatBoost", "Optuna", "Hyperopt", "PyPI"],
        problemStatement:
          "Data scientists and ML engineers often spend 60-80% of their time on repetitive tasks like data cleaning, EDA, preprocessing, and basic modeling. There's a need for a unified, production-ready toolkit that wraps complex operations into simple 1-line commands while maintaining flexibility and comprehensive feature coverage. Ak-dskit solves this by providing 221+ wrapper functions that streamline the entire ML pipeline - from data loading to model deployment - making data science accessible, efficient, and production-ready. What Students Will Work On: • Beginner Level: 1. Writing documentation and tutorials 2. Creating example notebooks 3. Adding unit tests for existing functions 4. Fixing bugs and improving error handling 5. Enhancing function docstrings • Intermediate Level: 1. Implementing new preprocessing methods 2. Adding visualization functions 3. Creating data validation utilities 4. Building feature engineering tools 5. Developing data profiling capabilities • Advanced Level: 1. Implementing advanced AutoML features 2. Building custom ML algorithms 3. Creating model deployment pipelines 4. Developing distributed computing support 5. Implementing neural network wrappers Expected Outcomes:  1. At least 10-15 new utility functions added to the library 2. Comprehensive test coverage (target: >80%)  3. 5+ tutorial notebooks demonstrating real-world use cases 4. Improved documentation with API reference updates 5. Performance optimization for core functions 6. New features like automated report generation, data drift detection, or A/B testing utilities",
        focusArea:
          "Extending data cleaning and preprocessing capabilitie • Adding new feature engineering methods • Improving automated EDA functions • Enhancing model validation utilities • Visualization & Explainability • Creating new interactive visualization functions • Improving SHAP integration for model explainability • Building custom plotting utilities for specific use cases • Developing hyperplane visualization for advanced algorithms • AutoML & Optimization • Expanding hyperparameter tuning capabilities • Adding support for new ML algorithms • Implementing ensemble methods • Building automated feature selection tools • Documentation & Testing • Writing comprehensive tutorials and guides • Creating Jupyter notebook examples • Developing unit tests for existing functions • Improving API documentation • DevOps & Deployment • Setting up CI/CD pipelines • Creating Docker containers for deployment • Building model serving utilities • Implementing monitoring and logging features • Database & Time Series • Enhancing database utility functions • Expanding time series analysis capabilities • Adding support for new data sources • Building data versioning tools • Student Contribution Guide (Idea Page)",
        contributionGuide:
          "",
        githubLink: "https://github.com/Programmers-Paradise/DsKit",
      },
      {
        title: "Annie",
        description:
          "",
        tech: ["Rust", "PyO3", "Python", "ML"],
        problemStatement:
          "A lightning-fast, Rust-powered Approximate Nearest Neighbour library for Python with multiple backends, thread-safety, and GPU acceleration. Core Features: • Multiple Backends:  ◦ Brute-force (exact) with SIMD acceleration    ◦ HNSW (approximate) for large-scale datasets • Multiple Distance Metrics: Euclidean, Cosine, Manhattan, Chebyshev • Batch Queries for efficient processing • Thread-safe indexes with concurrent access • Zero-copy NumPy integration • On-disk Persistence with serialization • Filtered Search with custom Python callbacks • GPU Acceleration for brute-force calculations • Multi-platform support (Linux, Windows, macOS) • Automated CI with performance tracking",
        focusArea:
          "Student need to work on 'issues' present in the repository.",
        contributionGuide:
          "",
        githubLink: "https://github.com/Programmers-Paradise/Annie",
      },

    ],
  },






  // Kornia
  Kornia: {
    name: "Kornia",
    tagline: "",
    description:
      "Kornia is a high-performance, differentiable computer vision library for PyTorch. Beyond classic operators, it provides a production-ready ecosystem for State-of-the-Art (SOTA) Vision-Language Models (VLM) and Vision-Language-Action (VLA) models, enabling seamless integration of perception and reasoning for the next generation of AI agents.",
    heroImage: "/orgs/Kornia.png",
    website: "https://kornia.org/",
    chat: "",
    repo: "https://github.com/kornia",
    email: "contact@example.org",
    focusAreas: ["Python", "PyTorch", "Kornia", "Ray", "ONNX Runtime", "TensorRT", "Rust", "Zenoh", "MCAP"],
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
      // {
      //   name: "",
      //   desc: "",
      //   discord: "",
      //   email: "",
      //   linkedin: "",
      // },
    ],
    projects: [
      {
        title: "High-Performance Augmentation Benchmarking",
        description:
          "",
        tech: ["Python", "PyTorch"],
        problemStatement:
          "Kornia is architected for speed, but we currently lack a robust, automated method to track performance regressions over time. We need to rigorously benchmark our augmentation pipeline against competing libraries (like Albumentations or torchvision) to ensure we maintain our competitive edge.",
        focusArea:
          "Performance Optimization, DevOps/CI, Data Visualization.",
        contributionGuide:
          "• Optimize Performance: Refine kornia.augmentation logic to achieve the highest possible speed. • Create Benchmarks: Develop a standardized benchmarking suite specifically for Kornia augmentations. • Automate Tracking: Integrate these benchmarks into our CI/CD pipelines to automatically detect performance drops in new Pull Requests. • Analyze Throughput: Conduct comprehensive comparisons of throughput (images/second) across different hardware (CPU vs. GPU) and modes (single image vs. batch).",
        githubLink: "https://github.com/kornia",
      },
      {
        title: "Data and Fine-Tuning API + Model Expansion for VLMs",
        description:
          "",
        tech: ["PyTorch", "Kornia", "Ray"],
        problemStatement:
          "Vision-Language Models (VLMs) represent the current frontier of AI. To stay relevant, Kornia requires a streamlined, native API to fine-tune these models on niche datasets. Additionally, the library needs to be expanded to support the latest VLM architectures.",
        focusArea:
          "Backend API Development, Model Modeling, Deep Learning.",
        contributionGuide:
          "• Build the API: Implement an experimental, 'Kornia-native' kornia.data and fine-tuning API (kornia.train) designed specifically for VLMs. • Expand Model Support: Integrate 2-3 modern VLM architectures into the Kornia ecosystem and validate them via fine-tuning. • Demonstrate Usage: Create high-quality example notebooks for downstream tasks such as Visual Question Answering (VQA) or Image Captioning.",
        githubLink: "https://github.com/kornia",
      },
      {
        title: "Universal Compatibility: ONNX Export & Torch.compile",
        description:
          "",
        tech: ["Python", "PyTorch", "ONNX Runtime", "TensorRT"],
        problemStatement:
          "For production deployment, Kornia operators must be easily exportable. This project ensures the entire codebase is compatible with torch.compile (full graph mode) and exports cleanly to ONNX without relying on inefficient 'fallback' operations.",
        focusArea: "Production Engineering, Graph Compilers, Performance Optimization.",
        contributionGuide:
          "• Audit Codebase: Review current modules to identify compatibility gaps with torch.compile. • Refactor Logic: Rewrite non-traceable code (such as dynamic branching) to be symbolic-friendly. • Verify Outputs: Establish a strict verification suite to ensure ONNX exports match PyTorch outputs within a precise epsilon.",
        githubLink: "https://github.com/kornia",
      },
      {
        title: "Robot Learning (Advanced)",
        description:
          "",
        tech: ["PyTorch", "Kornia", "Rust", "Zenoh", "MCAP"],
        problemStatement:
          "We aim to extend Kornia's capabilities into the robotics domain, focusing on differentiable rendering, spatial transformations, and policy learning. This requires high-level qualifications in robotics integration. Team must have a robot (with mobile platform)",
        focusArea: "Robotics, Imitation Learning.",
        contributionGuide:
          "• Integrate Platform: expand bubbaloop to connect a specific robot (hardware, depending on availability) to a new robot learning framework, create datasets, and train a VLA. https://github.com/kornia/bubbaloop • Structure Data: Iterate on and improve the data structure used for robot learning datasets to ensure scalability and ease of use.",
        githubLink: "https://github.com/kornia",
      },
    ],
  },
};
