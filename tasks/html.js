import gulp from 'gulp';
import polybuild from 'polybuild';
import gulpFilter from 'gulp-filter';
import rename from 'gulp-rename';

const DEBUG = !process.argv.includes('release');

export function htmlBundle() {
  const filter = gulpFilter(['index.build.html'], {restore: true});

  return gulp.src('./src/index.html')
    .pipe(polybuild({
      maximumCrush: !DEBUG,
    }))
    .pipe(filter)
    .pipe(rename('index.html'))
    .pipe(filter.restore)
    .pipe(gulp.dest('./build'));
}
