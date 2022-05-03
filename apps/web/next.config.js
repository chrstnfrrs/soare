const withTM = require('next-transpile-modules')(['soare-utils']);

module.exports = withTM({
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
});
