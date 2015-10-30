import gulp from 'gulp';
import eslint from 'gulp-eslint';
import jscs from 'gulp-jscs';

export function lintWithEslint() {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

export function lintWithJscs() {
  return gulp.src(['src/**/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter());
}
