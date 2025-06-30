import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  cwd: __dirname
});

const eslintConfig = [
  // 1. Next.js recommended configurations
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // 2. Add JSX A11y plugin for accessibility rules
  ...compat.extends('plugin:jsx-a11y/recommended'),

  // 3. Prettier configuration (MUST BE LAST)
  ...compat.extends('plugin:prettier/recommended'),

  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    rules: {}
  },

  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  }
];

export default eslintConfig;
