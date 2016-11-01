const connect = require('gulp-connect');
const cache = require('gulp-cached');

module.exports = function (gulp, config) {
    gulp.task('html', function () {
        return gulp.src(config.src.html.inputFiles)
            .pipe(cache('html', {optimizeMemory: true}))
            .pipe(gulp.dest(config.src.html.outputDir))
            .pipe(connect.reload());
    });
};