import gulp from 'gulp';
import changed from 'gulp-changed';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babelify from 'babelify';

const paths = {
  webpages: {
    src: ['./src/**/*.html', './src/**/*.php', './src/img/**/*'],
    dest: './dist'
  },
  less: {
    src: './src/css/*',
    dest: './dist/css'
  },
  libs: {
    src: [
      './node_modules/normalize-css/normalize.css',
    ],
    dest: './dist/libs'
  },
};

gulp.task('libs', () =>
  gulp.src(paths.libs.src)
    .pipe(gulp.dest(paths.libs.dest))
);

gulp.task('web-pages', () =>
  gulp.src(paths.webpages.src, {base: './src'})
    .pipe(changed(paths.webpages.dest))
    .pipe(gulp.dest(paths.webpages.dest))
);

gulp.task('browserify', () => {
  let b = browserify({
    entries: './src/js/index.js',
    transform: [babelify],
    debug: true
  });
  return b.bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist/js'))
  ;
});

gulp.task('default', ['web-pages', 'browserify']);
gulp.task('build', ['libs', 'web-pages', 'browserify']);
