const watch = require('gulp-watch');

module.exports = function (gulp, config) {
    gulp.task('watch', function() {

        watch(config.src.js.inputFiles, function () {
            gulp.start('javascript');
        });

        watch(config.src.html.inputFiles, function () {
            gulp.start('html');
        });

        watch(config.src.less.watchedFiled || config.src.less.inputFiles, function () {
            gulp.start('less');
        });

        if (config.src.assets) {
            watch(config.src.assets.inputFiles, function () {
                gulp.start('assets');
            });
        }

        if (config.src.images) {
            watch(config.src.images.inputFiles, function () {
                gulp.start('images');
            });
        }
    });
};