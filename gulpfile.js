// Constants
var IMAGE_OPT_LVL = 12;

// Dependencies
var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  // concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  concatCss = require('gulp-concat-css'),
  minifyCss = require('gulp-minify-css'),
  plumber = require('gulp-plumber'),
  browsersync = require('browser-sync'),
  merge = require('merge-stream'),
  // util = require('gulp-util'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  imageop = require('gulp-image-optimization');

// Default
gulp.task('default', ['scripts', 'styles','images','watch']);

// Watch
gulp.task('watch', function() {
  browsersync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('styles/**/*.scss', ['styles']);
  gulp.watch('styles/**/*.css', ['styles']);
  gulp.watch('js/**/*.js', ['scripts']);
  // gulp.watch('imgs/*', ['images']);
  // gulp.watch('build/styles/**/*.css').on('change', browsersync.reload);
  gulp.watch('*.html').on('change', browsersync.reload);
  gulp.watch('js/**/*.html').on('change', browsersync.reload);
  gulp.watch('js/**/*.html').on('change', browsersync.reload);
  gulp.watch('views/*.html').on('change', browsersync.reload);
  gulp.watch('js/**/*.js').on('change', browsersync.reload);
});

// Tasks
// TODO
gulp.task('scripts',function(){
//   gulp.src('js/**/*.js')
//   .pipe(plumber())
//   .pipe(uglify())
//   .pipe(plumber.stop())
//   .pipe(gulp.dest('build/js'))
//   .pipe(browsersync.stream({match: '**/*.js'}));
});

gulp.task('styles', function() {
  var sassStream = gulp.src('styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['> 5%']
    }))
    .pipe(plumber.stop());

    var cssStream = gulp.src('styles/**/*.css')
      .pipe(plumber())
      .pipe(autoprefixer({
        browsers: ['> 5%','safari 5']
      }))
      .pipe(plumber.stop());

      // Merge and concat css ans scss streams into one file
    merge(sassStream,cssStream)
    .pipe(concatCss('build/styles/css/app.css'))
    .pipe(plumber())
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(plumber.stop())
    .pipe(gulp.dest('.'))
    .pipe(browsersync.stream());

});

gulp.task('images', function() {

  return gulp.src("imgs/*")
    .pipe(imageop({
            optimizationLevel: IMAGE_OPT_LVL,
            progressive: true,
            interlaced: true
        }))
    .pipe(gulp.dest('build/imgsopt'));
});
