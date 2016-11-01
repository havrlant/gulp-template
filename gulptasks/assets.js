const connect = require('gulp-connect');
const cache = require('gulp-cached');

module.exports = function (gulp, config) {
    gulp.task('assets', function () {
        if (!config.src.assets) return;

        return gulp.src(config.src.assets.inputFiles)
            .pipe(cache('assets', {optimizeMemory: true}))
            .pipe(gulp.dest(config.src.assets.outputDir))
            .pipe(connect.reload());
    });
};