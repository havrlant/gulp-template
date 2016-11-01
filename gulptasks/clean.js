const clean = require('gulp-clean');

module.exports = function (gulp, config) {
    gulp.task('clean', function () {
        return gulp.src(config.dist.dir, {read: false}).pipe(clean());
    });
};