# Project Structure

This document describes the folder and file structure of the CRM Broker project.

## Root Structure
```
crm-broker/
├── backend/              # Backend API and server code
├── docs/                 # Project documentation
│   ├── features/         # Feature-specific documentation
│   ├── prompts/          # AI prompts and templates
│   └── *.md              # General project documentation
└── frontend/             # Next.js frontend application
```

## Frontend Structure
```
frontend/
├── components.json       # Shadcn UI configuration
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── next-env.d.ts         # Next.js TypeScript definitions
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── public/               # Static assets
│   ├── *.svg            # SVG icons and images
├── src/                  # Source code
│   ├── app/             # Next.js App Router pages and routes
│   │   ├── agenda/      # Agenda feature route
│   │   ├── client/      # Client management route
│   │   ├── dashboard/   # Dashboard page
│   │   ├── funil/       # Sales funnel route
│   │   ├── favicon.ico  # Site favicon
│   │   ├── globals.css  # Global styles and TailwindCss v4 configuration
│   │   ├── layout.tsx   # Root layout component
│   │   └── page.tsx     # Home page
│   ├── components/      # React components
│   │   ├── base/        # Base/granular/shared UI components (Shadcn)
│   │   ├── layout/      # Layout-specific components
│   │   └── ui/          # block application-specific UI components (non-granular)
│   └── shared/          # Shared utilities and providers
│       ├── react/       # React-specific shared code
│       │   ├── hooks/   # Custom React hooks
│       │   └── providers/  # React context providers
│       └── utils/       # Utility functions
└── README.md            # Frontend-specific documentation
```

## Backend Structure
```
backend/
└── (currently empty - to be structured)
```

## Documentation Structure
```
docs/
├── features/            # Feature-specific documentation with the PRDs of each feature
├── prompts/             # AI prompts and templates
├── productOverview.md   # General Product Requirements Document (high-level project description)
├── projectStructure.md  # This file - project structure documentation
├── techStackPatterns.md # Technology stack and coding patterns
└── README.md            # Documentation index/overview
```

## Directory Conventions

### Frontend (`frontend/src/`)
- **`app/`**: Next.js App Router directory
  - Each subdirectory represents a route
  - `page.tsx` files define page components
  - `layout.tsx` defines layout wrappers
  - `globals.css` contains global styles

- **`components/`**: React component organization
  - **`base/`**: Base/granular/shared UI components (typically Shadcn UI components)
  - **`layout/`**: Layout-related components (header, sidebar, page wrappers)
  - **`ui/`**: Application-specific UI components

- **`shared/`**: Shared code across the application
  - **`react/`**: React-specific shared code
    - **`hooks/`**: Custom React hooks
    - **`providers/`**: React context providers
  - **`utils/`**: Utility functions and helpers

### Naming Conventions
- **Files**: camelCase (e.g., `appHeader.tsx`, `useMobile.ts`)
- **Components**: PascalCase (e.g., `AppHeader`, `ThemeToggleButton`)
- **Types**: PascalCase ending with "T" (e.g., `UserT`, `ButtonPropsT`)
- **Folders**: camelCase (e.g., `appSidebar`, `shared`)


## File Organization Patterns
1. **Component Co-location**: Related components are grouped in folders (e.g., `appSidebar/`)
2. **Separation of Concerns**: Base components, layout components, and UI components are separated
3. **Shared Code**: Utilities and providers are centralized in `shared/`
4. **Route-based Structure**: Pages follow Next.js App Router conventions

## Notes
- The `backend/` directory is currently empty and will be structured as the backend is developed
- Several route directories (`agenda/`, `client/`, `funil/`) exist but are empty, indicating planned features
- The project follows functional programming patterns and avoids classes/OOP
- All functions use the `function` keyword instead of `const` arrow functions

