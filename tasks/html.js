import gulp from 'gulp';
import polybuild from 'polybuild';

export function htmlBundle () {
  return gulp.src('./src/index.html')
    .pipe(polybuild({
      maximumCrush: true
    }))
    .pipe(gulp.dest('./build'));
};
