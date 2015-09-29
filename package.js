Package.describe({
  name: 'extremeandy:es6-promisify',
  version: '0.1.0',
  summary: 'es6-promisify for Meteor',
  git: 'https://github.com/extremeandy/meteor-es6-promisify',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.use('cosmos:browserify', 'client');

  api.addFiles('es6-promisify.js', 'server');

  //.browserify.js extension is required due to a meteor bug to get it to handle properly. This will be fixed shortly.
  api.addFiles('es6-promisify.browserify.js', 'client');

  api.export('Promisify');
});

Npm.depends({
  'es6-promisify': '3.0.0'
});