![hero](public/image.png)

<p align="center">
	<h1 align="center"><b>Polaris</b></h1>
<p align="center">
    A modern, responsive personal portfolio template built with <a href="https://astro.build">Astro</a>.
    <br />
    <br />
    <a href="#whats-included"><strong>What's included</strong></a> ·
    <a href="#prerequisites"><strong>Prerequisites</strong></a> ·
    <a href="#getting-started"><strong>Getting Started</strong></a> ·
    <a href="#how-to-use"><strong>How to use</strong></a> ·
    <a href="#customization"><strong>Customization</strong></a>
  </p>
</p>

Everything you need to build a stunning personal portfolio website. Polaris is an opinionated Astro template designed for designers and developers who want to showcase their work with a clean, modern aesthetic. Built with performance and user experience in mind, it provides a solid foundation that grows with your career.

## What's included

[Astro](https://astro.build/) - Static site generator<br>
[React](https://reactjs.org/) - Interactive components<br>
[Tailwind CSS](https://tailwindcss.com/) - Utility-first styling<br>
[Lucide](https://lucide.dev/) - Beautiful icon library<br>
[TypeScript](https://www.typescriptlang.org/) - Type safety<br>
[MDX](https://mdxjs.com/) - Enhanced markdown for content<br>
[Sharp](https://sharp.pixelplumbing.com/) - Image optimization<br>
[Class Variance Authority](https://cva.style/) - Component variant management<br>
[Radix UI](https://www.radix-ui.com/) - Accessible component primitives<br>

## Directory Structure

```
.
├── public/                    # Static assets
│   ├── favicon.svg           # Site favicon
│   └── image.png             # Hero image
├── src/
│   ├── components/           # Reusable components
│   │   ├── ui/              # UI components (buttons, dropdowns, etc.)
│   │   ├── fade.astro       # Fade animation component
│   │   └── listProjects.astro # Project listing component
│   ├── config/
│   │   └── site.json        # Site configuration and content
│   ├── content/
│   │   └── projects/        # Project markdown files and images
│   ├── layouts/
│   │   └── Layout.astro     # Main layout component
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── projects/        # Dynamic project pages
│   └── styles/
│       └── global.css       # Global styles
├── astro.config.mjs         # Astro configuration
├── components.json          # UI components configuration
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vercel.json              # Vercel deployment configuration
```

## Prerequisites

Node.js (version 18 or higher)<br>
pnpm (recommended) or npm<br>
Git<br>

## Getting Started

Clone this repo locally with the following command:

```bash
git clone <repository-url>
cd polaris
```

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Start the development server:

```sh
pnpm dev
```

3. Open your browser and navigate to `http://localhost:4321`

## How to use

This template is designed to be a starting point for your personal portfolio. It includes everything you need to showcase your work professionally while maintaining excellent performance and user experience.

### Key Features

- **Modern Tech Stack**: Built with Astro for optimal performance and React for interactive components
- **Responsive Design**: Fully responsive layout that looks great on all devices
- **Project Showcase**: Dynamic project pages with detailed case studies using MDX
- **Clean Design**: Minimalist aesthetic with smooth transitions and interactions
- **Content Management**: Markdown-based content for easy updates and maintenance
- **Performance Optimized**: Static site generation with optimized images and assets
- **Accessible**: Built with accessibility in mind using Radix UI primitives

### Available Scripts

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## Customization

### Site Configuration

Update `src/config/site.json` to modify:

- Personal information and bio
- Contact details and social links
- Professional experience timeline
- Project grid layout preferences
- Company information and specialties

### Adding Projects

1. Create a new markdown file in `src/content/projects/`
2. Add project images to `src/content/projects/images/`
3. Use the existing project structure as a template with frontmatter for metadata

### Styling

- Global styles are in `src/styles/global.css`
- Component-specific styles use Tailwind CSS classes
- Smooth transitions and interactions built with CSS
- UI components follow a consistent design system

### Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any static hosting**: Upload the contents of the `dist` folder

## Recognition

Built with ❤️ by [Eduardo Calvo](https://github.com/educlopez) - UI Designer & Frontend Developer based in Madrid, Spain.
