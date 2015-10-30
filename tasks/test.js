import gulp from 'gulp';
import WCT from 'web-component-tester';
import runSequence from 'run-sequence';

WCT.gulp.init(gulp);

export function test(cb) {
  runSequence(
    'bundle',
    'test:local',
    cb
  );
}

export function remoteTest(cb) {
  runSequence(
    'bundle',
    'test:remote',
    cb
  );
}
