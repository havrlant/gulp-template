const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');

module.exports = function (gulp, config) {
    return gulp.task('images', function () {
        if (!config.src.images) return;

        return gulp.src(config.src.images.inputFiles)
            .pipe(imagemin())
            .pipe(gulp.dest(config.src.images.outputDir))
            .pipe(connect.reload());
    });
};