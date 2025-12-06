// @ts-expect-error - eslint-config-next subpath exports not recognized by TypeScript
import nextVitals from 'eslint-config-next/core-web-vitals'
// @ts-expect-error - eslint-config-next subpath exports not recognized by TypeScript
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import importLite from 'eslint-plugin-import-lite'
import unicorn from 'eslint-plugin-unicorn'
import folderNameConvention from 'eslint-plugin-folder-name-convention'
import { defineConfig, globalIgnores } from 'eslint/config'
import path from 'path'
import { fileURLToPath } from 'url'



const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)



const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  importLite.configs.recommended,
  prettier,
  {
    plugins: {
      unicorn,
      'folder-name-convention': folderNameConvention,
    },

    'rules': {
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          suffix: ['T'],
        },
      ],
      'arrow-parens': ['warn', 'always'],
      // 'padded-blocks': ['warn', 'always'],
      'no-console': ['warn'],
      'indent': ['warn', 2],
      'semi': ['warn', 'never'],
      'quotes': ['warn', 'single'],
      'jsx-quotes':['warn', 'prefer-double'],
      'max-len': ['warn', { 'code': 100, 'ignoreStrings': true, 'ignoreComments': true }],
      'eol-last': ['warn', 'always'],
      'no-multiple-empty-lines': ['warn', { max: 3 }],
      'import-lite/newline-after-import': ['warn', { count: 3 }],
      'operator-linebreak': ['warn', 'before', {
        overrides: {
          '=': 'after',
        },
      }],
      'comma-dangle': ['warn', 'always-multiline'],
      'object-curly-spacing': ['warn', 'always'],
      'unicorn/filename-case': [
        'warn',
        {
          case: 'camelCase',
          ignore: [
            // Next.js convention files
            /^page\.(tsx?|jsx?)$/,
            /^layout\.(tsx?|jsx?)$/,
            /^loading\.(tsx?|jsx?)$/,
            /^error\.(tsx?|jsx?)$/,
            /^not-found\.(tsx?|jsx?)$/,
            /^route\.(tsx?|jsx?)$/,
            /^template\.(tsx?|jsx?)$/,
            /^default\.(tsx?|jsx?)$/,
            // Config files
            /^next-env\.d\.ts$/,
            /^eslint\.config\.(mjs|cjs|js)$/,
            /^next\.config\.(mjs|cjs|ts|js)$/,
            /^tailwind\.config\.(mjs|cjs|ts|js)$/,
            /^postcss\.config\.(mjs|cjs|js)$/,
            /^tsconfig\.json$/,
          ],
        },
      ],
      'folder-name-convention/enforce': [
        'warn',
        {
          pattern: 'camelCase',
          rootDir: path.resolve(__dirname, 'src'),
          ignore: [
            // Next.js private folders (folders starting with _)
            '_data',
            '_ui',
            // Build and config folders
            'node_modules',
            '.git',
            '.next',
            '.vscode',
            'out',
            'build',
          ],
        },
      ],
    },

  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '**/.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '**/.turbo/**',
    '**/node_modules/**',
    '**/.npmrc/**',
    '**/.pnpm-lock.yaml/**',
    '**/.vscode/**',
  ]),
])

export default eslintConfig
