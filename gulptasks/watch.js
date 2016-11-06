const watch = require('gulp-watch');

module.exports = function (gulp, config) {
    gulp.task('watch', function() {
        watchJavaScript();
        watchHtml();
        watchLess();
        watchAssets();
        watchImages();
    });

    function watchJavaScript() {
        watch(config.src.js.inputFiles, function (err) {
            gulp.start('javascript');
        }).on('error', createErrorHandler("js"));
    }

    function watchHtml() {
        watch(config.src.html.inputFiles, function () {
            gulp.start('html');
        }).on('error', createErrorHandler("html"));
    }

    function watchLess() {
        watch(config.src.less.watchedFiled || config.src.less.inputFiles, function () {
            gulp.start('less');
        }).on('error', createErrorHandler("less"));
    }

    function watchAssets() {
        if (config.src.assets) {
            watch(config.src.assets.inputFiles, function () {
                gulp.start('assets');
            }).on('error', createErrorHandler("assets"));
        }
    }

    function watchImages() {
        if (config.src.images) {
            watch(config.src.images.inputFiles, function () {
                gulp.start('images');
            }).on('error', createErrorHandler("images"));
        }
    }

    function createErrorHandler(watchId) {
        return function (error) {
            console.log("An error occurred when running " + watchId + " watch task:", error.message);
        };
    }
};