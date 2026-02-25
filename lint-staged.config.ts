export default {
  '*.{ts,tsx}': ['eslint --flag unstable_native_nodejs_ts_config .'],
  '*.{pcss,css}': ['npm run lint:style']
};
