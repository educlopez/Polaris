# Polaris - Personal Portfolio

A modern, responsive personal portfolio website built with [Astro](https://astro.build), showcasing UI design and frontend development work. This portfolio features a clean, minimalist design with smooth animations and a focus on showcasing projects and professional experience.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro, React, and Tailwind CSS
- **Responsive Design**: Optimized for all devices and screen sizes
- **Project Showcase**: Dynamic project pages with detailed case studies
- **Smooth Animations**: Enhanced with Motion library for engaging interactions
- **Content Management**: Markdown-based content for easy updates
- **Performance Optimized**: Fast loading with Astro's static site generation

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **Components**: [React](https://reactjs.org) - Interactive components
- **Animations**: [Motion](https://motion.dev) - Smooth animations and transitions
- **Icons**: [Lucide](https://lucide.dev) - Beautiful icon library
- **UI Components**: [Radix UI](https://www.radix-ui.com) - Accessible component primitives

## 📁 Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components (buttons, dropdowns, etc.)
│   │   ├── fade.astro     # Fade animation component
│   │   └── listProjects.astro # Project listing component
│   ├── config/
│   │   └── site.json      # Site configuration and content
│   ├── content/
│   │   └── projects/      # Project markdown files and images
│   ├── layouts/
│   │   └── Layout.astro   # Main layout component
│   ├── lib/
│   │   └── utils.ts       # Utility functions
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   └── projects/      # Dynamic project pages
│   └── styles/
│       └── global.css     # Global styles
├── astro.config.mjs       # Astro configuration
├── components.json        # UI components configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd template
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Start the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📝 Available Scripts

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🎨 Customization

### Site Configuration

Update `src/config/site.json` to modify:

- Personal information and bio
- Contact details
- Professional experience
- Project grid layout

### Adding Projects

1. Create a new markdown file in `src/content/projects/`
2. Add project images to `src/content/projects/images/`
3. Use the existing project structure as a template

### Styling

- Global styles are in `src/styles/global.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations are handled through the Motion library

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any static hosting**: Upload the contents of the `dist` folder

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About

**Eduardo Calvo** - UI Designer & Frontend Developer based in Madrid, Spain. Specializing in creating beautiful, functional, and user-friendly digital experiences through thoughtful UI design and modern frontend development.

---

Built with ❤️ using [Astro](https://astro.build)
