Package.describe({
  name: 'insightfil:galil',
  version: '1.0.1',
  summary: 'Interact with the Galil controller',
  git: 'https://github.com/artaic/Galil',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  var both = ['client', 'server'];

  api.use([
    'mongo',
    'check',
    'ecmascript',
    'es5-shim',
    'promise',
    'erasaur:meteor-lodash@3.10.1'
  ], both);
  api.use('reactive-var', 'client')

  api.export('Galil', both);

  api.addFiles('lib/common.js', both);
  api.addFiles('lib/client.js', 'client');
  api.addFiles([
    'lib/server.js',
    'lib/wrappers/array.js'
  ], 'server');
});

Package.onTest(function(api) {
  api.use(['practicalmeteor:munit', 'ecmascript', 'erasaur:meteor-lodash']);
  api.use('insightfil:galil');

  api.addFiles(['test/init.js', 'test/connection.js']);
});

