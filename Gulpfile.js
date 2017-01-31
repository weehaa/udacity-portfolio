var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

// minify CSS task
gulp.task('styles', function(){
  gulp.src('css/main.css')
      .pipe(minifyCSS())
      .pipe(rename('css/main.min.css'))
      .pipe(gulp.dest('./'));
});

//concat all min.css files task
gulp.task('concat', function(){
  gulp.src('css/*.min.css')
      .pipe(concat('style.css'))
      .pipe(gulp.dest('./css/'));
});

// watch task
gulp.task('watch', function(){
  gulp.watch('css/*.css', ['styles']);
});

gulp.task('default', ['styles']);
