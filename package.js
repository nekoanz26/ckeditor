Package.describe({
  name: 'nekoanz:ckeditor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'CKEditor wrapper for meteorjs',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('ckeditor.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('nekoanz:ckeditor');
  api.addFiles('ckeditor-tests.js');
});
