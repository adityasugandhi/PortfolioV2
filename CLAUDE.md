# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 13, showcasing projects, blog posts, and professional experience. The portfolio features an elegant sidebar navigation, project showcases with detailed content, and a blog system built with MDX.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Create production build  
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

**Framework & Core:**
- Next.js 13.4.19 with App Router
- React 18.2.0
- TypeScript 5.1.6

**Styling & UI:**
- Tailwind CSS 3.3.3 with custom config
- Framer Motion 10.16.1 for animations
- @tabler/icons-react for icons
- Custom color variables with CSS custom properties

**Content & Blog:**
- MDX with @next/mdx for blog posts
- Remark GFM for GitHub Flavored Markdown
- Rehype Prism for syntax highlighting
- @tailwindcss/typography for rich text styling

## Architecture

### Directory Structure

**App Router Structure (`src/app/`):**
- Root pages: `page.tsx` (home), `layout.tsx` (root layout)
- Route groups: `/about`, `/blog`, `/contact`, `/experience`, `/projects`, `/resume`
- Blog posts: `/blog/[post-name]/content.mdx` with individual `page.tsx` files
- Dynamic routes: `/projects/[slug]/page.tsx` for project details

**Components (`src/components/`):**
- Reusable UI components following atomic design principles
- Key components: `Sidebar`, `Container`, `Heading`, `Products`, `BlogLayout`
- Layout components: `Footer`, navigation components

**Constants (`src/constants/`):**
- `products.tsx` - Project data with rich content, images, and tech stacks
- `timeline.tsx` - Professional experience and work history
- `navlinks.tsx` - Navigation structure
- `socials.tsx` - Social media links

**Types (`src/types/`):**
- TypeScript interfaces for navigation, blog posts, and products

### Key Patterns

**Project Data Structure:**
Projects in `constants/products.tsx` include:
- Rich content with JSX/React components
- Multiple images and thumbnails
- Technology stack arrays
- Detailed descriptions and external links

**Blog System:**
- MDX files with metadata exports (`meta` object)
- `getAllBlogs()` utility for fetching and sorting blog posts
- Individual blog post pages with dynamic content
- Syntax highlighting with Prism and custom `CodeWindow` component

**Navigation & Layout:**
- Responsive sidebar with mobile toggle
- Framer Motion animations for sidebar state
- Active link highlighting with `usePathname`
- Custom utility for mobile detection

## Styling Approach

**Tailwind Configuration:**
- Custom color variables (`--neutral-700`, `--neutral-500`)
- Extended color palette with CSS custom properties
- Typography plugin for rich text content

**Component Styling:**
- `twMerge` for conditional class merging
- Consistent spacing and typography scales
- Custom animations with Framer Motion
- Responsive design with mobile-first approach

## Image and Asset Handling

**Images:**
- Static assets in `public/images/` directory
- External images from Unsplash (configured in `next.config.mjs`)
- Project thumbnails and hero images
- Technology stack logos in `public/images/logos/`

**Fonts:**
- Custom font: CalSans-SemiBold.woff2 in `/fonts`
- Inter font from Google Fonts with full weight range

## Content Management

**Blog Posts:**
- Individual directories under `src/app/blog/`
- Each post has `content.mdx` and `page.tsx`
- Metadata in `meta` export object (date, title, description, tags)
- Automatic sorting by date in `getAllBlogs()`

**Project Showcase:**
- Rich project data with embedded React components
- External links to GitHub repositories and live demos
- Technology stack visualization
- Detailed project descriptions with context

## Development Notes

**Import Organization:**
- React imports first
- External library imports  
- Internal imports with `@/` path alias
- Type imports clearly separated

**Code Conventions:**
- Functional components with TypeScript
- Props destructuring in component signatures
- Consistent naming: PascalCase for components, camelCase for functions
- Component co-location with related utilities

## Song Selection

**Current Development Music:**
- SENSITIVE (SLOWED TO PERFECTION)
- Frequency • SENSITIVE • 2024