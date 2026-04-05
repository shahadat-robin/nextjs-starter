import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const [nextConfig, nextTypescriptConfig, ...nextCoreWebVitalsRest] = nextCoreWebVitals;

export default defineConfig([
  nextConfig,
  ...nextCoreWebVitalsRest,
  {
    extends: [...compat.extends('prettier')],

    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'react/jsx-uses-react': 'warn',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: nextTypescriptConfig.languageOptions,
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
]);
