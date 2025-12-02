
# Tech Stack and Patterns
Use this tech stack and follow these patterns in this project.

## Technology Stack
- **Framework**: Next.js v16.0.3 (App Router)
- **Library**: React v19.2.0
- **Language**: TypeScript v5.9.3
- **Styling**: Tailwind CSS v4.1.17
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Icons**: lucide-react v0.555.0
- **Package Manager**: npm v11.6.4
- **Runtime**: Node.js v24.4.1
- **TypeScript schema validation**: Zod v4.x


Check the libraries used and their versions in the "frontend\package.json" file.
Consult the official documentation if you are working with it (you can use MCP for it).


## Patterns
- Use a Functional Programming approach. Avoid classes/OOP
- Use "function" to define functions. Avoid "const"
- Use Types. Avoid Interfaces
- Use camelCase naming in general for:
  - files, folders, functions, constants, variables
- Use PascalCase naming in general for:
  - Types, React components, React Hooks, Providers, Contexts
- If the lib or framework used defines a standard naming pattern, use it instead
- Type names must end with the "T" character
- Type Names must end with "PropsT" if used in function parameter
- When implementing or modifying code, prefer a simpler and clearer approach over a complex one
- Avoid code duplication. Use organized functions, hooks or similar approaches to it
- Use the shadcn UI components and block as the default UI components
- Consult the eslint configuration and follow the rules defined


### Formatting (aligned with ESLint config)

- **Indentation**: 2 spaces
- **Semicolons**: Never use semicolons
- **Quotes**: Single quotes for strings, double quotes for JSX attributes
- **Line Length**: Maximum 100 characters (ignore strings and comments)
- **Trailing Newline**: Always end files with a newline
- **Empty Lines**: Maximum 3 consecutive empty lines
- **Import Organization**: 
  - Group imports: external libraries, then internal imports
  - Add 3 empty lines after imports (before code)
- **Arrow Functions**: Use parentheses around parameters: `(param) => {}`
- **Operator Line Breaks**: Operators before line breaks, except `=` which goes after

