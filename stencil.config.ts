import type { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';

import postcssConfig from './postcss.config.ts';
export const config: Config = {
  namespace: 'boilerplate-stencil',
  suppressReservedPublicNameWarnings: true,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  excludeUnusedDependencies: true,
  plugins: [postcss(postcssConfig)],
  testing: {
    browserHeadless: true
  },
  extras: {
    experimentalSlotFixes: true
  }
};
