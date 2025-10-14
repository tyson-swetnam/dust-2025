# Lesson 1: Foundations of Open Science

!!! info "Lesson Overview"
    **Duration:** 50 minutes

    **Structure:**

    - Introduction (5 min)
    - Core Concepts (25 min)
    - Hands-on Activity (15 min)
    - Wrap-up (5 min)

## Learning Objectives

!!! success "After completing this lesson, you will be able to:"
    - Define open science and explain its core components
    - Identify the six pillars of open science
    - Describe the behaviors and practices of open science
    - Explain why open science matters in education, research, and society
    - Understand both the advantages and challenges of implementing open science
    - Evaluate your own research practices against open science principles

---

## Introduction (5 minutes)

### What Brings You Here?

Take a moment to reflect:

!!! question "Self-Reflection"
    - What does "open" mean to you in the context of your research?
    - Have you encountered barriers to accessing research materials you needed?
    - What concerns do you have about sharing your own work?

### Why Open Science Matters Now

In 2023, the White House declared the Year of Open Science, joined by federal agencies and over 85 universities. While the political landscape has shifted, the fundamental principles of transparency, accessibility, and reproducibility remain critical to scientific progress.

Open science is not just an ideological movement - it is increasingly becoming a requirement:

- **Federal funders** now mandate data management plans
- **Publishers** increasingly require data and code availability
- **Universities** are recognizing open practices in promotion and tenure
- **The public** expects access to publicly-funded research

---

## Core Concepts (25 minutes)

### Defining Open Science

Multiple definitions exist, each emphasizing different aspects:

!!! quote "Key Definitions"
    **"Open Science is transparent and accessible knowledge that is shared and developed through collaborative networks"**

    — [Vincente-Saez & Martinez-Fuentes (2018)](https://doi.org/10.1016/j.jbusres.2017.12.043)

    **"Open Science is defined as an inclusive construct that combines various movements and practices aiming to make multilingual scientific knowledge openly available, accessible and reusable for everyone"**

    — [UNESCO](https://www.unesco.org/en/natural-sciences/open-science)

    **"A series of reforms that interrogate every step in the research life cycle to make it more efficient, powerful and accountable in our emerging digital society"**

    — Jeffrey Gillan

### The Research Life Cycle

Open science touches every stage of research:

<figure markdown>
  ![Research Life Cycle](https://www.fosteropenscience.eu/sites/default/files/images/OpenScienceBuildingBlocks.jpg){ width="500" }
  <figcaption>The Research Life Cycle encompasses planning, execution, analysis, and dissemination</figcaption>
</figure>

Each stage offers opportunities to embrace openness:

1. **Planning** - Pre-registration, open protocols
2. **Execution** - Open notebooks, transparent methods
3. **Analysis** - Reproducible workflows, version control
4. **Dissemination** - Open access publishing, data sharing

### The Six Pillars of Open Science

Open science rests on six foundational pillars:

| **:material-pillar: Open Access** | **:material-pillar: Open Data** | **:material-pillar: Open Education** |
|:-:|:-:|:-:|
| Publications freely available to all | Research data FAIR and accessible | Educational resources open to everyone |

| **:material-pillar: Open Methodology** | **:material-pillar: Open Peer Review** | **:material-pillar: Open Source** |
|:-:|:-:|:-:|
| Transparent, reproducible methods | Review process open and attributed | Software code freely available |

??? question "How Many Pillars Are There Really?"
    The number varies from [4](https://narratives.insidehighered.com/four-pillars-of-open-science/) to [8](https://www.ucl.ac.uk/library/research-support/open-science/8-pillars-open-science) depending on the framework. Some combine categories, others separate them. What matters is understanding the principles, not memorizing a number.

#### :material-pillar: Open Access Publications

<figure markdown>
  [![Open Access Logo](https://upload.wikimedia.org/wikipedia/commons/f/f3/Open_Access_PLoS.svg){width=150}](https://en.wikipedia.org/wiki/Open_access)
</figure>

!!! quote "Definition"
    "Open access is a publishing model for scholarly communication that makes research information available to readers at no cost, as opposed to the traditional subscription model"

    — [OpenAccess.nl](https://www.openaccess.nl/en/what-is-open-access)

**Publishing Models:**

1. **Subscription model** - Author pays little or nothing; publisher charges readers/institutions
2. **Open Access model** - Author pays publication fee; article is freely available
   - Nature Open Access: $12,290
   - PLOS ONE: $2,290

**Article Versions:**

- **Preprint** - Pre-peer review version, freely available on preprint servers
- **Author Accepted Manuscript (AAM)** - Post-peer review, pre-typesetting
- **Version of Record (VOR)** - Final published version with publisher formatting

!!! example "Preprint Repositories"
    - [arXiv](https://arxiv.org/) - Physics, math, computer science
    - [bioRxiv](https://www.biorxiv.org/) - Biology
    - [EarthArXiv](https://eartharxiv.org/) - Earth sciences
    - [PsyArXiv](https://psyarxiv.com/) - Psychology
    - [OSF Preprints](https://osf.io/preprints/) - Multi-disciplinary

#### :material-pillar: Open Data

!!! quote "Definition"
    "Open data and content can be freely used, modified, and shared by anyone for any purpose"

    — [The Open Definition](https://opendefinition.org/)

Data are the foundation of science. The **FAIR Principles** guide data management:

**Findable** - Globally unique identifiers, rich metadata, searchable registries

**Accessible** - Retrievable via standard protocols, metadata persists even when data are restricted

**Interoperable** - Standard formats and vocabularies enable data integration

**Reusable** - Clear licenses, detailed provenance, community standards

!!! warning "As Open as Possible, as Closed as Necessary"
    Not all data should be open:

    - Human health data (HIPAA regulations)
    - Endangered species locations
    - Indigenous data (see CARE Principles)
    - Data that could cause harm if misused

    The **CARE Principles** for Indigenous Data Governance emphasize:

    - **C**ollective Benefit
    - **A**uthority to Control
    - **R**esponsibility
    - **E**thics

#### :material-pillar: Open Educational Resources

<figure markdown>
  [![OER Logo](https://upload.wikimedia.org/wikipedia/commons/2/20/Global_Open_Educational_Resources_Logo.svg){width=200}](https://www.unesco.org/en/communication-information/open-solutions/open-educational-resources)
</figure>

!!! quote "Definition"
    "Open Educational Resources (OER) are learning, teaching and research materials in any format and medium that reside in the public domain or are under copyright that have been released under an open license"

    — [UNESCO](https://www.unesco.org/en/communication-information/open-solutions/open-educational-resources)

**Examples of OER Providers:**

- [The Carpentries](https://carpentries.org/) - Foundational coding and data science
- [Project Pythia](https://projectpythia.org/) - Geoscience Python education
- [OER Commons](https://www.oercommons.org/) - Multi-disciplinary resources

#### :material-pillar: Open Methodology

!!! quote "Definition"
    "An open methodology is one which has been described in sufficient detail to allow other researchers to repeat the work and apply it elsewhere"

    — [Watson (2015)](https://doi.org/10.1186/s13059-015-0669-2)

**Key Practices:**

- **Code Sharing** - GitHub, GitLab for version-controlled code
- **Protocol Publishing** - Detailed methods in protocols.io, Nature Protocols
- **Pre-registration** - Documenting analysis plans before data collection

<figure markdown>
  ![Preregistration](https://www.cos.io/hs-fs/hubfs/COS_Icons_Preregistration-Circle-White.png?width=300){ width="200" }
  <figcaption>Pre-registration distinguishes hypothesis-generating from hypothesis-testing research</figcaption>
</figure>

!!! tip "Why Pre-register?"
    - Prevents p-hacking and HARKing (Hypothesizing After Results are Known)
    - Separates exploratory from confirmatory research
    - Increases credibility of findings
    - Platforms: [OSF](https://osf.io/), [AsPredicted](https://aspredicted.org/)

#### :material-pillar: Open Peer Review

Traditional peer review has limitations:

- Unreliable and inconsistent
- Delays and expense
- Lack of accountability
- Publication biases
- No incentives for reviewers

**Open peer review options:**

- Signed reviews (reviewers identity known)
- Published reviews (reviews public alongside paper)
- Reviewer participation (broader community involvement)
- Pre-print review (review before journal submission)

!!! example "Open Review Platforms"
    - [F1000Research](https://f1000research.com/) - Post-publication peer review
    - [PREreview](https://prereview.org/) - Preprint review
    - [PubPeer](https://pubpeer.com/) - Post-publication commenting

#### :material-pillar: Open Source Software

<figure markdown>
  [![Open Source Logo](https://upload.wikimedia.org/wikipedia/commons/4/42/Opensource.svg){width=200}](https://opensource.org/)
</figure>

!!! quote "Definition"
    "Open source software is code that is designed to be publicly accessible—anyone can see, modify, and distribute the code as they see fit"

    — [Red Hat](https://www.redhat.com/en/topics/open-source/what-is-open-source)

Research relies on open source:

- Linux, Python, R, Git
- Scientific libraries: NumPy, SciPy, Pandas, PyTorch
- Data platforms: Jupyter, RStudio, CyVerse

<figure markdown>
  <a href="https://xkcd.com/2347/">![Dependency](https://imgs.xkcd.com/comics/dependency.png){ width="400" }</a>
  <figcaption>Modern digital infrastructure relies on open source - handle with care! [XKCD](https://xkcd.com/2347/)</figcaption>
</figure>

### Why Do Open Science?

[Bartling & Friesike (2014)](https://doi.org/10.1007/978-3-319-00026-8) identified five schools of thought (motivations):

1. **Democratic** - Making scholarship freely available to everyone
2. **Pragmatic** - Improving quality through collaboration and critique
3. **Infrastructure** - Building better platforms and tools
4. **Public** - Engaging society through citizen science and clear communication
5. **Measurement** - Developing alternative impact metrics beyond journal publications

We add a sixth:

6. **Compliance** - Meeting requirements from funders and institutions

!!! question "Discussion: Your Motivation"
    Which school resonates with you? Are there other motivations not captured here?

---

## Hands-on Activity (15 minutes)

### Open Science Self-Assessment

Work individually or in small groups to assess your current practices:

!!! question "Assessment Questions"

    **Publications**

    1. Are your published papers freely available?
    2. Do you share preprints before peer review?
    3. Have you retained rights to distribute your work?

    **Data**

    4. Where do you store your research data?
    5. Could someone else understand your data without contacting you?
    6. Have you assigned persistent identifiers (DOIs) to datasets?

    **Methods**

    7. Is your analysis code version controlled and publicly available?
    8. Could someone reproduce your analysis from your documentation?
    9. Have you pre-registered any studies?

    **Education**

    10. Do you share teaching materials under open licenses?
    11. Do you contribute to or use OER in your teaching?

    **Software**

    12. Do you contribute to open source projects?
    13. Is your research software publicly available with a license?

### Group Discussion

Share with your group:

- Which pillar of open science is strongest in your work?
- Which pillar could you improve most easily?
- What barriers prevent you from being more open?
- What would motivate you to adopt more open practices?

### Action Planning

Identify ONE concrete action you can take this month:

!!! example "Example Actions"
    - Create an ORCID profile
    - Upload a preprint to a repository
    - Add a LICENSE file to a GitHub repository
    - Create a data management plan for current project
    - Share course materials under CC-BY license

---

## Wrap-up (5 minutes)

### Key Takeaways

!!! success "Remember These Concepts"
    1. Open science is about **transparency, accessibility, and collaboration**
    2. The **six pillars** provide a framework for openness
    3. Open science benefits **you, your field, and society**
    4. Start with **small, practical steps** rather than perfection
    5. **As open as possible, as closed as necessary** - openness has limits

### Self-Assessment Quiz

Test your understanding:

??? question "True or False: All research papers in Nature and Science are Open Access"
    **False**

    These journals offer Open Access options but charge substantial fees ($12,000+). Authors must pay extra to make papers freely available. However, recent federal mandates require publicly-funded research to be Open Access by 2026.

??? question "True or False: Data 'available upon request' meets the definition of Open Data"
    **False**

    Open data must be freely accessible in a public repository with a persistent identifier. "Available upon request" does not meet FAIR principles as data are not findable, accessible without barriers, or guaranteed to remain available.

??? question "Using GitHub for your analysis code is an example of..."
    **Open Methodology**

    Version control systems document your computational methods transparently. This enables others to understand, verify, and build upon your work - core principles of open methodology.

??? question "If an author states their software is open source but refuses to share it, is it open source?"
    **No**

    Claiming a license without actually making the code publicly available does not make it open source. True open source software must be publicly accessible with a recognized license that permits use, modification, and distribution.

### Looking Ahead

In Lesson 2, we will put these principles into practice by learning how to:

- Manage research data throughout its lifecycle
- Create effective documentation
- Implement FAIR principles
- Write a data management plan

### Additional Resources

- [UNESCO Open Science Toolkit](https://www.unesco.org/en/open-science/about)
- [Foster Open Science](https://www.fosteropenscience.eu/)
- [The Turing Way](https://book.the-turing-way.org/)
- [Center for Open Science](https://www.cos.io/)

---

**Next:** [Lesson 2: Modern Data Management →](../lesson2_data_management/index.md)

---

**Last updated:** {{ git_revision_date_localized }}
