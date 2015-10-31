import gulp from 'gulp';
import WCT from 'web-component-tester';
import runSequence from 'run-sequence';

WCT.gulp.init(gulp);

const REMOTE = process.argv.includes('--remote');

export function test(cb) {
  runSequence(
    'bundle',
    !REMOTE ? 'test:local' : 'test:remote',
    cb
  );
}
