import gulp from 'gulp';
import runSequence from 'run-sequence';

const DEBUG = !process.argv.includes('--release');
const WATCH = process.argv.includes('--watch');

export function build(cb) {
  if (DEBUG) {
    runSequence(
      'clean',
      'bundle',
      cb
    );
  } else {
    runSequence(
      'clean',
      'lint',
      'bundle',
      'polybuild',
      cb
    );

    if (WATCH) {
      gulp.watch([
        './build/bundle.js',
        './src/**/*.html',
      ], ['polybuild']);
    }
  }
}
