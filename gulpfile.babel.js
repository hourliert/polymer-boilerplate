import gulp from 'gulp';
import { serve } from './tasks/serve';
import { bundle, watchBundle } from './tasks/js';
import { htmlBundle } from './tasks/html';
import { build } from './tasks/build';
import { test, remoteTest } from './tasks/test';
import { lintWithEslint, lintWithJscs } from './tasks/linter';

gulp.task('default', ['build']);
gulp.task('serve', ['bundle:watch'], serve);
gulp.task('bundle', bundle);
gulp.task('bundle:watch', watchBundle);
gulp.task('polybuild', htmlBundle);
gulp.task('build', build);
gulp.task('test', test);
gulp.task('test:remote', remoteTest);
gulp.task('eslint', lintWithEslint);
gulp.task('jscs', lintWithJscs);
gulp.task('lint', ['eslint', 'jscs']);
