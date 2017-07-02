// Constants
var IMAGE_OPT_LVL = 12;

// Dependencies
var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  concatCss = require('gulp-concat-css'),
  concat = require('gulp-concat'),
  minifyCss = require('gulp-minify-css'),
  plumber = require('gulp-plumber'),
  browsersync = require('browser-sync'),
  merge = require('merge-stream');

// Default
gulp.task('default', ['scripts', 'styles']);

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
  gulp.src(['js/**/*.js', "!js/vendor/**/*"])
  .pipe(plumber())
  .pipe(concat("app.js"))
  // .pipe(uglify())
  .pipe(plumber.stop())
  .pipe(gulp.dest('build'))
  .pipe(browsersync.stream({match: '**/*.js'}));
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
    // comment out if you are not me :)
    .pipe(gulp.dest('../react_resume/'))
    .pipe(browsersync.stream());
});
