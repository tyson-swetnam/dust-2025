# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DUST 2025 is an open science training website built with MkDocs and Material for MkDocs. It provides three 50-minute lessons on:
1. Foundations of Open Science
2. Modern Data Management for Computational Research
3. Ethics and Artificial Intelligence

The site is deployed automatically to GitHub Pages at https://tswetnam.github.io/dust-2025.

## Build and Development Commands

### Local Development
```bash
# Serve site with live reloading at http://127.0.0.1:8000/
mkdocs serve

# Build static site to site/ directory
mkdocs build

# Build with strict mode (fails on warnings - use before deployment)
mkdocs build --strict

# Build with verbose output (useful for debugging)
mkdocs build --strict --verbose
```

### Deployment
```bash
# Manual deployment to GitHub Pages (builds and pushes to gh-pages branch)
mkdocs gh-deploy
```

Note: Automatic deployment is configured via `.github/workflows/ci.yml` on push to main.

## Architecture

### Site Structure
- **`docs/`** - All markdown content and assets
  - `index.md` - Homepage
  - `about.md`, `resources.md`, `acknowledgments.md` - Supporting pages
  - `lesson1_open_science/`, `lesson2_data_management/`, `lesson3_ai_ethics/` - Lesson content
  - `assets/` - Images, icons, favicon
  - `stylesheets/extra.css` - Custom CSS
  - `javascripts/extra.js` - Custom JavaScript
- **`mkdocs.yml`** - MkDocs configuration (theme, navigation, plugins, markdown extensions)
- **`requirements.txt`** - Python dependencies
- **`.github/workflows/ci.yml`** - GitHub Actions deployment pipeline

### Configuration (mkdocs.yml)

**Theme:** Material for MkDocs with extensive customization including:
- Dark mode support with automatic/light/dark palette toggle
- Navigation tabs, instant loading, search with highlighting
- Code copy buttons and annotations
- Content edit/view actions
- Git revision dates for pages

**Plugins:**
- `search` - Full-text search with custom separators
- `git-revision-date-localized` - Show last updated dates (requires full git history)
- `minify` - HTML minification for production

**Markdown Extensions:**
- Standard: admonitions, footnotes, tables, definition lists, abbreviations
- PyMdown: code highlighting, tabs, task lists, emoji support, Mermaid diagrams, MathJax
- Code blocks support line numbers and syntax highlighting

### Navigation
Navigation is manually defined in `mkdocs.yml` (lines 15-25) and organized into Home, Lessons, and Resources sections. When adding new pages, update the `nav:` section.

## Content Guidelines

### Writing Style
- Each lesson designed for 50 minutes with clear learning objectives
- Include hands-on activities and self-assessment questions
- Provide real-world examples and additional resources
- Accessible tone for all experience levels

### Markdown Features
Use Material for MkDocs features extensively:
- **Admonitions** for tips, warnings, examples: `!!! note`, `!!! warning`, `!!! example`
- **Tabs** for organizing content: `=== "Tab Title"`
- **Code blocks** with syntax highlighting and line numbers
- **Mermaid diagrams** for flowcharts and visualizations
- **MathJax** for mathematical notation

### Assets
- Images go in `docs/assets/`
- Reference using relative paths: `![alt text](assets/image.png)`
- Favicon: `docs/assets/favicon.ico`

## GitHub Actions CI/CD

The workflow (`.github/workflows/ci.yml`) runs on push to main or manual dispatch:
1. Checks out repo with full git history (required for revision dates plugin)
2. Sets up Python 3.11 with pip caching
3. Installs dependencies from `requirements.txt`
4. Builds site with `mkdocs build --strict --verbose`
5. Uploads artifact and deploys to GitHub Pages

**Important:** The `--strict` flag causes build to fail on warnings (broken links, missing files, etc.).

## License and Attribution

Content is licensed CC-BY 4.0. When modifying:
- Maintain attribution to source materials (CyVerse FOSS, NCEMS, etc.)
- Keep acknowledgments up to date
- Follow existing style and tone
- Test locally before pushing

## Common Tasks

### Adding a New Lesson
1. Create directory: `docs/lesson4_topic_name/`
2. Add content: `docs/lesson4_topic_name/index.md`
3. Update navigation in `mkdocs.yml` nav section
4. Test locally: `mkdocs serve`
5. Validate: `mkdocs build --strict`

### Modifying Theme or Styling
- Theme config: `mkdocs.yml` theme section (lines 28-97)
- Custom CSS: `docs/stylesheets/extra.css`
- Custom JS: `docs/javascripts/extra.js`

### Adding New Dependencies
1. Update `requirements.txt`
2. Test locally after `pip install -r requirements.txt`
3. Verify CI/CD pipeline still works after push

### Troubleshooting Build Issues
- Use `mkdocs build --strict --verbose` to see detailed errors
- Check for broken internal links (must be relative, not absolute)
- Ensure all referenced images exist in `docs/assets/`
- Verify markdown extensions syntax is correct
