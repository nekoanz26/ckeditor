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
    ], 'client');

    /*
     * Languages
     */
    api.addAssets([
        'lang/af.js',
        'lang/ar.js',
        'lang/bg.js',
        'lang/bn.js',
        'lang/bs.js',
        'lang/ca.js',
        'lang/cs.js',
        'lang/cy.js',
        'lang/da.js',
        'lang/de.js',
        'lang/el.js',
        'lang/en-au.js',
        'lang/en-ca.js',
        'lang/en-gb.js',
        'lang/en.js',
        'lang/eo.js',
        'lang/es.js',
        'lang/et.js',
        'lang/eu.js',
        'lang/fa.js',
        'lang/fi.js',
        'lang/fo.js',
        'lang/fr-ca.js',
        'lang/fr.js',
        'lang/gl.js',
        'lang/gu.js',
        'lang/he.js',
        'lang/hi.js',
        'lang/hr.js',
        'lang/hu.js',
        'lang/id.js',
        'lang/is.js',
        'lang/it.js',
        'lang/ja.js',
        'lang/ka.js',
        'lang/km.js',
        'lang/ko.js',
        'lang/ku.js',
        'lang/lt.js',
        'lang/lv.js',
        'lang/mk.js',
        'lang/mn.js',
        'lang/ms.js',
        'lang/nb.js',
        'lang/nl.js',
        'lang/no.js',
        'lang/pl.js',
        'lang/pt-br.js',
        'lang/pt.js',
        'lang/ro.js',
        'lang/ru.js',
        'lang/si.js',
        'lang/sk.js',
        'lang/sl.js',
        'lang/sq.js',
        'lang/sr-latn.js',
        'lang/sr.js',
        'lang/th.js',
        'lang/tr.js',
        'lang/tt.js',
        'lang/ug.js',
        'lang/uk.js',
        'lang/vi.js',
        'lang/zh-cn.js',
        'lang/zh.js',
    ], 'client')

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
        'skins/moono/dialog.css',
        'skins/moono/dialog_ie.css',
        'skins/moono/dialog_ie7.css',
        'skins/moono/dialog_ie8.css',
        'skins/moono/dialog_iequirks.css',
        'skins/moono/editor.css',
        'skins/moono/editor_gecko.css',
        'skins/moono/editor_ie.css',
        'skins/moono/editor_ie7.css',
        'skins/moono/editor_ie8.css',
        'skins/moono/editor_iequirks.css',
        'skins/moono/icons.png',
        'skins/moono/icons_hidpi.png',
    ], 'client');

    /*
     * Plugins
     */
    api.addAssets([
        'plugins/about/dialogs/about.js',
        'plugins/about/dialogs/logo_ckeditor.png',
    ], 'client');

    api.addAssets([
        'plugins/link/dialogs/anchor.js',
        'plugins/link/dialogs/link.js',
    ], 'client');
});