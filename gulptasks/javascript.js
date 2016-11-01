const concat = require('gulp-concat');
const connect = require('gulp-connect');

module.exports = function (gulp, config) {
    gulp.task('javascript', function () {
        return gulp.src(config.src.js.inputFiles)
            .pipe(concat(config.src.js.outputFile))
            .pipe(gulp.dest(config.dist.dir))
            .pipe(connect.reload());
    });
};