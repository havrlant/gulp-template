const less = require('gulp-less');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const connect = require('gulp-connect');

module.exports = function (gulp, config) {
    gulp.task('less', function () {
        return gulp.src(config.src.less.inputFiles)
            .pipe(sourcemaps.init({debug: true}))
            .pipe(less())
            .pipe(concat(config.src.less.outputFile))
            .pipe(sourcemaps.write(config.src.less.sourceMaps))
            .pipe(gulp.dest(config.dist.dir))
            .pipe(connect.reload());
    });
};

