import { postcss } from '@stencil-community/postcss';

import postcssConfig from './postcss.config.ts';

export const config = {
  namespace: 'boilerplate-stencil-playground',
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
      serviceWorker: null,
      copy: []
    }
  ],
  plugins: [postcss(postcssConfig)],

  extras: {
    experimentalSlotFixes: true
  }
};
