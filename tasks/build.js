import runSequence from 'run-sequence';

export function build(cb) {
  runSequence(
    'clean',
    'lint',
    'bundle',
    'polybuild',
    cb
  );
}
