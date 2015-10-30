import runSequence from 'run-sequence';

export function build(cb) {
  runSequence(
    'bundle',
    'polybuild',
    cb
  );
}
