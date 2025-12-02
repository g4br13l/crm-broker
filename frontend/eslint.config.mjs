import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import importLite from 'eslint-plugin-import-lite'
import prettier from 'eslint-config-prettier/flat'



const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  importLite.configs.recommended,
  prettier,
  {

    'rules': {
      // 'nextTs/consistent-type-definitions': ['warn', 'type'],
      'arrow-parens': ['warn', 'always'],
      // 'padded-blocks': ['warn', { 'blocks': 'start' }],
      'no-console': ['warn'],
      'indent': ['warn', 2],
      'semi': ['warn', 'never'],
      'quotes': ['warn', 'single'],
      'jsx-quotes':['warn', 'prefer-double'],
      'max-len': ['warn', {'code': 100, 'ignoreStrings': true, 'ignoreComments': true }],
      'eol-last': ['warn', 'always'],
      'no-multiple-empty-lines': ['warn', { max: 3 }],
      'import-lite/newline-after-import': ['warn', { count: 3 }],
      'operator-linebreak': ['warn', 'before', {
        overrides: {
          '=': 'after'
        }
      }],
    }

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
