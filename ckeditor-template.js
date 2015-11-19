Template.CKEditor.rendered = function () {
    // Set BASEPATH for dependent files
    window.CKEDITOR_BASEPATH = "/packages/nekoanz_ckeditor/";

    window.CKEDITOR.basePath = "/packages/nekoanz_ckeditor/";
    
    CKEDITOR.replace('editor1');
};