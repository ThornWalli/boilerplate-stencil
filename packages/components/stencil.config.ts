// eslint-disable-next-line import-x/no-nodejs-modules
import { join } from 'node:path';

import { postcss } from '@stencil-community/postcss';
import resolvePkg from 'resolve-pkg';

import postcssConfig from './postcss.config.ts';

export const config = {
  namespace: 'boilerplate-stencil-components',
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
      copy: [
        {
          src: join(resolvePkg('@boilerplate-stencil/core')!, 'dist/boilerplate-stencil-core'),
          dest: 'boilerplate-stencil-core',
          warn: true
        }
      ]
    }
  ],
  plugins: [postcss(postcssConfig)],

  extras: {
    experimentalSlotFixes: true
  }
};
