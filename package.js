Package.describe({
  name: 'fallentech:numscale',
  summary: 'Display big numbers with suffixes',
  version: '0.0.4',
  git: 'https://github.com/FallenTech/meteor-numscale',
  documentation: 'Readme.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating');
  api.addFiles('numscale.js', ['server', 'client']);
  api.addFiles('helpers.js', ['client']);
  api.export('NumScale', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('fallentech:numscale', ['client', 'server']);
  api.addFiles('tests.js', ['client', 'server']);
});