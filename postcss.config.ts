import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import postcssSortMediaQueries from 'postcss-sort-media-queries';

export default {
  injectGlobalPaths: [],
  plugins: [
    postcssImport({
      root: process.cwd()
    }),
    postcssPresetEnv({
      preserve: false,
      stage: 0,
      features: {
        'nesting-rules': true
      }
    }),
    postcssSortMediaQueries()
  ]
};





