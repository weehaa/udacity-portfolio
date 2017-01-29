var gulp = require('gulp'),
    rename = require('gulp-rename');
    minifyCSS = require('gulp-minify-css');

// minify CSS task
gulp.task('styles', function(){
  gulp.src('css/main.css')
      .pipe(minifyCSS())
      .pipe(rename('css/main.min.css'))
      .pipe(gulp.dest('./'));
});

// watch task
gulp.task('watch', function(){
  gulp.watch('css/*.css', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
