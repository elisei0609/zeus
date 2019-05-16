
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', done => {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./sass-after'));
    done();
});
gulp.task('sass:watch', function() {
   gulp.watch('./sass/**/*.scss', gulp.series ('sass'))
   

 });
