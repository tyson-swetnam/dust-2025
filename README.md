# DUST 2025: Open Science Training

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![MkDocs](https://img.shields.io/badge/docs-mkdocs-blue)](https://www.mkdocs.org/)
[![Material for MkDocs](https://img.shields.io/badge/material-mkdocs-blue)](https://squidfunk.github.io/mkdocs-material/)

A comprehensive training program covering three essential topics for modern researchers:

1. **Foundations of Open Science** - Principles, practices, and the six pillars of open science
2. **Modern Data Management for Computational Research** - FAIR principles, data lifecycle, and practical tools
3. **Ethics and Artificial Intelligence** - Bias, responsible use, and ethical frameworks for AI in research

## Website

Visit the training site: **[https://tyson-swetnam.github.io/dust-2025](https://tyson-swetnam.github.io/dust-2025)**

## Features

Each 50-minute lesson includes:

- Clear learning objectives
- Core concepts with real-world examples
- Hands-on activities for practice
- Self-assessment questions
- Additional resources for deeper learning

### Design Principles

- **Accessible** - Free, open, and designed for all experience levels
- **Practical** - Immediately applicable to research projects
- **Evidence-based** - Built on proven pedagogical approaches
- **Modern** - Reflects current tools, policies, and best practices

## Local Development

### Prerequisites

- Python 3.8 or higher
- Git

### Setup

1. Clone the repository:

```bash
git clone https://github.com/tyson-swetnam/dust-2025.git
cd dust-2025
```

2. Create a virtual environment (recommended):

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

### Build and Serve Locally

To build and serve the site locally with live reloading:

```bash
mkdocs serve
```

The site will be available at `http://127.0.0.1:8000/`

Any changes to the documentation will automatically trigger a rebuild and refresh your browser.

### Build Static Site

To build the static site for deployment:

```bash
mkdocs build
```

The built site will be in the `site/` directory.

### Validate Build

To build with strict mode (recommended before deployment):

```bash
mkdocs build --strict
```

This will fail if there are any warnings, helping catch broken links or missing files.

## Project Structure

```
dust-2025/
├── docs/                          # Documentation source files
│   ├── index.md                   # Homepage
│   ├── about.md                   # About the training
│   ├── resources.md               # Additional resources
│   ├── acknowledgments.md         # Credits and attribution
│   ├── lesson1_open_science/      # Lesson 1 content
│   │   └── index.md
│   ├── lesson2_data_management/   # Lesson 2 content
│   │   └── index.md
│   ├── lesson3_ai_ethics/         # Lesson 3 content
│   │   └── index.md
│   ├── assets/                    # Images, icons, etc.
│   ├── stylesheets/               # Custom CSS
│   │   └── extra.css
│   └── javascripts/               # Custom JavaScript
│       └── extra.js
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions for deployment
├── mkdocs.yml                     # MkDocs configuration
├── requirements.txt               # Python dependencies
├── README.md                      # This file
└── LICENSE                        # CC-BY 4.0 license
```

## Technology Stack

This site is built with:

- **[MkDocs](https://www.mkdocs.org/)** - Static site generator for project documentation
- **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** - Modern theme with powerful features
- **[GitHub Actions](https://github.com/features/actions)** - Automated CI/CD pipeline
- **[GitHub Pages](https://pages.github.com/)** - Free hosting for open source projects

### Key Features

- **Responsive design** - Works on desktop, tablet, and mobile
- **Dark mode** - Automatic or manual theme switching
- **Search** - Full-text search across all content
- **Navigation** - Instant loading with smooth transitions
- **Code highlighting** - Syntax highlighting for code examples
- **Admonitions** - Styled callouts for tips, warnings, examples
- **Tabs** - Organize content in tabbed interfaces
- **Mermaid diagrams** - Create flowcharts and diagrams
- **Git integration** - Show last updated dates for pages
- **Accessibility** - WCAG 2.1 compliant, keyboard navigation

## Content Sources

This training synthesizes materials from:

- [CyVerse FOSS](https://foss.cyverse.org) - Foundational Open Science Skills
- [NCEMS Pre-Summit Training](https://ncems.github.io/pre-summit-foss) - Open science for NCEMS community
- [Intro to GPT Workshop](https://tyson-swetnam.github.io/intro-gpt) - AI ethics and prompt engineering
- [Awesome Open Science](https://tyson-swetnam.github.io/awesome-open-science) - Curated open science resources

See [Acknowledgments](https://tyson-swetnam.github.io/dust-2025/acknowledgments/) for detailed attribution.

## Contributing

We welcome contributions to improve this training!

### Ways to Contribute

- **Report issues** - Found a typo, broken link, or error? [Open an issue](https://github.com/tyson-swetnam/dust-2025/issues)
- **Suggest improvements** - Have ideas for better examples or explanations? [Open an issue](https://github.com/tyson-swetnam/dust-2025/issues)
- **Submit changes** - Fix or enhance content by submitting a pull request
- **Share feedback** - Tell us how you used these materials and what worked well

### Pull Request Process

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test locally (`mkdocs serve`)
5. Commit with clear message (`git commit -m 'Add improved example for FAIR principles'`)
6. Push to your fork (`git push origin feature/improvement`)
7. Open a Pull Request

Please ensure your contributions:

- Follow the existing style and tone
- Include appropriate citations for external sources
- Are licensed under CC-BY 4.0 (by contributing, you agree to this)
- Work correctly when built locally

## Using These Materials

### For Workshops and Teaching

These materials are licensed CC-BY 4.0, which means you can:

- Use in workshops, courses, and training programs
- Adapt content to your discipline or context
- Remix and build upon the materials
- Use commercially (training programs, consulting)

You must:

- Give appropriate credit to this project and source materials
- Indicate if changes were made
- Provide a link to the license

**Suggested Attribution:**

> Adapted from "DUST 2025: Open Science Training" by Tyson Swetnam
> ([https://tyson-swetnam.github.io/dust-2025](https://tyson-swetnam.github.io/dust-2025)),
> licensed under CC-BY 4.0

### For Self-Study

Work through lessons at your own pace:

1. Start with [Lesson 1: Foundations of Open Science](https://tyson-swetnam.github.io/dust-2025/lesson1_open_science/)
2. Continue to [Lesson 2: Modern Data Management](https://tyson-swetnam.github.io/dust-2025/lesson2_data_management/)
3. Finish with [Lesson 3: AI Ethics](https://tyson-swetnam.github.io/dust-2025/lesson3_ai_ethics/)

Each lesson takes approximately 50 minutes. Complete activities and self-assessments to maximize learning.

### Creating Your Own Version

Want to customize for your institution or discipline?

1. Fork this repository
2. Modify content in `docs/` directory
3. Update `mkdocs.yml` with your branding
4. Adjust `extra.css` for custom styling
5. Deploy to your own GitHub Pages or hosting platform

See [MkDocs documentation](https://www.mkdocs.org/) and [Material theme docs](https://squidfunk.github.io/mkdocs-material/) for customization options.

## Deployment

### GitHub Pages (Automatic)

This repository is configured for automatic deployment:

1. Push to `main` branch
2. GitHub Actions builds the site
3. Deploys to GitHub Pages
4. Site available at `https://tyson-swetnam.github.io/dust-2025`

### Manual Deployment

To deploy manually to GitHub Pages:

```bash
mkdocs gh-deploy
```

This builds the site and pushes to the `gh-pages` branch.

### Other Hosting

The built site (`site/` directory) is static HTML/CSS/JS and can be hosted anywhere:

- Netlify
- Vercel
- AWS S3
- Your own web server

## Citation

If you use these materials in research, teaching, or publication, please cite:

**BibTeX:**

```bibtex
@misc{swetnam2025dust,
  title={DUST 2025: Open Science Training},
  author={Swetnam, Tyson L.},
  year={2025},
  howpublished={\url{https://tyson-swetnam.github.io/dust-2025}},
  note={Licensed under CC-BY 4.0}
}
```

**APA:**

> Swetnam, T. L. (2025). DUST 2025: Open Science Training.
> https://tyson-swetnam.github.io/dust-2025

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

You are free to:

- **Share** - copy and redistribute in any medium or format
- **Adapt** - remix, transform, and build upon the material for any purpose

Under these terms:

- **Attribution** - Give appropriate credit, provide a link to the license, and indicate if changes were made

See [LICENSE](LICENSE) file for full legal text.

## Contact

- **Author:** Tyson L. Swetnam
- **Email:** tswetnam@arizona.edu
- **Website:** [https://tysonswetnam.com](https://tysonswetnam.com)
- **GitHub:** [@tyson-swetnam](https://github.com/tyson-swetnam)
- **ORCID:** [0000-0002-6639-7181](https://orcid.org/0000-0002-6639-7181)

## Acknowledgments

This training builds on excellent work by:

- CyVerse Science Team
- NCEMS Community
- Open science communities worldwide

See [Acknowledgments](https://tyson-swetnam.github.io/dust-2025/acknowledgments/) for complete credits.

## Support

- **Technical issues:** [Open an issue](https://github.com/tyson-swetnam/dust-2025/issues)
- **Questions about content:** [Open a discussion](https://github.com/tyson-swetnam/dust-2025/discussions)
- **General inquiries:** Email tswetnam@arizona.edu

---

**Star this repository** ⭐ if you find it useful!

**Share** with colleagues who would benefit from open science training.

**Contribute** to make these materials even better for the community.
