import type { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';

import postcssConfig from './postcss.config.ts';

export const config: Config = {
  namespace: 'boilerplate-stencil-core',
  suppressReservedPublicNameWarnings: true,
  validatePrimaryPackageOutputTarget: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      isPrimaryPackageOutputTarget: true
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      externalRuntime: false
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        {
          src: '../node_modules/ckeditor5/dist/browser',
          dest: 'ckeditor5',
          warn: true
        }
      ]
    }
  ],

  rollupPlugins: {
    before: [
      {
        name: 'external-deps',
        resolveId(id: string) {
          // Mark ckeditor5 as external - don't bundle it
          if (id === 'ckeditor5' || id.startsWith('ckeditor5/')) {
            return { id, external: true };
          }
        }
      }
    ]
  },
  plugins: [postcss(postcssConfig)],
  testing: {
    browserHeadless: true
  },
  extras: {
    experimentalSlotFixes: true
  }
};
