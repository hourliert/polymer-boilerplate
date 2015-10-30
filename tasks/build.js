import runSequence from 'run-sequence';

export function build(cb) {
  runSequence(
    'lint',
    'bundle',
    'polybuild',
    cb
  );
}
