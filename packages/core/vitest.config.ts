import { defineVitestConfig } from '@stencil/vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineVitestConfig({
  stencilConfig: './stencil.config.ts',
  test: {
    projects: [
      // Unit tests - node environment for functions / logic
      {
        test: {
          name: 'unit',
          include: ['src/**/*.unit.{ts,tsx}'],
          environment: 'node'
        }
      },

      // Spec tests - via a node DOM of your choice
      {
        test: {
          name: 'spec',
          include: ['src/**/*.spec.{ts,tsx}'],
          environment: 'stencil',
          setupFiles: ['./vitest-setup.ts']

          // Optional environment options

          // environmentOptions: {
          //   stencil: {
          //     domEnvironment: 'happy-dom' | 'jsdom' | 'mock-doc' (default)
          //                      ^^ Make sure to install relevant packages
          //   },
          // },
        }
      },
      // Browser tests
      // {
      //   test: {
      //     name: 'browser',
      //     include: ['src/**/*.e2e.{ts,tsx}'],
      //     setupFiles: ['./vitest-setup.ts'],
      //     browser: {
      //       enabled: true,
      //       provider: playwright(),
      //       headless: true,
      //       instances: [{ browser: 'chromium' }],
      //     },
      //   },
      // },

      {
        test: {
          name: 'browser',
          include: ['**/*.e2e.{ts,tsx}'],
          setupFiles: ['./vitest-setup.ts'],
          browser: {
            enabled: true,
            provider: playwright(),
            headless: true,
            instances: [{ browser: 'chromium' }],
            expect: {
              toMatchScreenshot: {
                comparatorName: 'pixelmatch',
                comparatorOptions: {
                  threshold: 0.5,
                  allowedMismatchedPixels: 100
                },
                resolveScreenshotPath: ({ arg, browserName, ext, testFileName, screenshotDirectory, testFileDirectory, root }) =>
                  `${root}/${testFileDirectory}/${screenshotDirectory}/${testFileName}/${arg}-${browserName}${ext}`
              }
            }
          }
        }
      }
    ]
  }
});
