const gulp                    = require('gulp'),
      sass                    = require('gulp-sass'),
      concat                  = require('gulp-concat'),
      del                     = require('del'),
      cleanCSS                = require('gulp-clean-css'),
      autoprefixer            = require('autoprefixer'),
      postcss                 = require('gulp-postcss'),
      browserSync             = require('browser-sync').create();


function MySass() {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(postcss([ autoprefixer({
        cascade: false
    }) ]))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src('app/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
}

function watch(){
  browserSync.init({
    server: {
      basedir: "./"
    },
    open: true
  });
  gulp.watch('app/sass/**/*.sass', MySass);
  gulp.watch('app/js/**/*.js', scripts);
  gulp.watch('*.html', browserSync.reload);
}

function clean(){
  return del(['dist/*']);
}


gulp.task('js', scripts);
gulp.task('sass', MySass);
gulp.task('watch', watch);

gulp.task('build', gulp.series( clean, gulp.parallel(MySass, scripts)));

gulp.task('dev', gulp.series('build', 'watch'));