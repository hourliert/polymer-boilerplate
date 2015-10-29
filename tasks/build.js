import gulp from 'gulp';
import runSequence from 'run-sequence';

export function build () {
  gulp.task('build', (cb) => {
    runSequence(
      'bundle',
      'polybuild',
      cb
    );
  });
};
