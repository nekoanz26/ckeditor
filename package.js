Package.describe({
    name: 'nekoanz:ckeditor',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'CKEditor wrapper for meteorjs',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/nekoanz26/ckeditor',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(['templating','ecmascript'], 'client');
    api.addFiles([
        'ckeditor.min.js',
        'ckeditor.js',
        'ckeditor-template.html',
        'ckeditor-template.js',

    ],'client');

    /*
     * Static Scripts
     */
    api.addAssets([
        'config.js',
        'styles.js',
        'lang/en.js',
    ], 'client');

    /*
     * Styles
     */
    api.addAssets([
        'contents.css'
    ], 'client');

    /*
     * Skins
     */
    api.addAssets([
        'skins/moono/editor.css',
        'skins/moono/icons_hidpi.png',
    ], 'client');
    
    /*
     * Plugins
     */
    api.addAssets([
        'plugins/about/dialogs/about.js',
        'plugins/about/dialogs/logo_ckeditor.png',
    ], 'client');
});