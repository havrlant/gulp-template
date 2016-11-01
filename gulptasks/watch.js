module.exports = function (gulp, config) {
    const watch = require('gulp-chokidar')(gulp);

    gulp.task('watch', function() {
        watch(config.src.js.inputFiles, ['javascript']);
        watch(config.src.html.inputFiles, ['html']);
        watch(config.src.less.inputFiles, ['less']);
        watch(config.src.assets.inputFiles, ['assets']);
        watch(config.src.images.inputFiles, ['images']);
    });
};