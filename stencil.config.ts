import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';
import postcssConfig from './postcss.config.ts';
export const config: Config = {
  namespace: 'boilerplate-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss(postcssConfig)
  ]
};
