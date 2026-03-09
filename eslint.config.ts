import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginSecurity from 'eslint-plugin-security';
import { importX } from 'eslint-plugin-import-x';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

import eslintIgnores from './eslint.ignore.ts';

export default defineConfig([
  eslintIgnores,
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
  eslintPluginPrettierRecommended,
  importX.flatConfigs.recommended,
  {
    files: ['**/*.js', '**/*.ts', '**/*.d.ts', '**/*.tsx', '**/*.d.tsx'],
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver(/* Your override options go here */)
        // createNodeResolver(/* Your override options go here */),
      ]
    },
    rules: {
      'prettier/prettier': 'error',
      classPrivateMethods: 'off',
      'block-spacing': 'error',
      'no-debugger': 'off',
      'no-console': 'off',
      'no-empty-function': 'error',
      'security/detect-non-literal-fs-filename': 'off',
      complexity: [
        'error',
        {
          max: 7
        }
      ],

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1
        }
      ],
      'security/detect-object-injection': 'off',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': 'warn',
      'import-x/no-unresolved': 'error',
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always'
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^h$'
        }
      ]
    }
  }
]);
