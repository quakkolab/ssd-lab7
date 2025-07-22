import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import pluginReact from 'eslint-plugin-react';
import pluginSecurity from 'eslint-plugin-security';

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { security: pluginSecurity },
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:security/recommended',
    ],
    rules: {
      'security/detect-eval-with-expression': 'error',
      ...js.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
    },
  },
]);
