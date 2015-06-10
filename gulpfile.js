var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    watch = require('gulp-watch');
 
gulp.task('sass-app', function() {
    return sass('./theme/scss/', { container: 'gulp-ruby-sass-app' })
    .on('error', function (err) {
      console.error('Error', err.message);
   })
    .pipe(gulp.dest('./theme/css/'));
});
 
gulp.task('default', ['sass-app'], function(){
    watch('./theme/scss/*.scss', function () {
        return sass('./theme/scss/', { container: 'gulp-ruby-sass-app' })
        .on('error', function (err) {
          console.error('Error', err.message);
       })
        .pipe(gulp.dest('./theme/css/'));
    });
});