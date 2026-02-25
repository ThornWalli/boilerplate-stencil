export default {
  arrowParens: 'avoid',
  bracketSameLine: false,
  trailingComma: 'none',
  singleQuote: true,
  semi: true,
  printWidth: 160,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'angular'
      }
    }
  ]
};
