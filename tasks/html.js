import gulp from 'gulp';
import polybuild from 'polybuild';
import gulpFilter from 'gulp-filter';
import rename from 'gulp-rename';

export function htmlBundle() {
  const filter = gulpFilter(['index.build.html'], {restore: true});

  return gulp.src('./src/index.html')
    .pipe(polybuild({
      maximumCrush: true,
    }))
    .pipe(filter)
    .pipe(rename('index.html'))
    .pipe(filter.restore)
    .pipe(gulp.dest('./build'));
}
