const connect = require('gulp-connect');

module.exports = function (gulp, config) {
    gulp.task('html', function () {
        return gulp.src(config.src.html.inputFiles)
            .pipe(gulp.dest(config.src.html.outputDir))
            .pipe(connect.reload());
    });
};