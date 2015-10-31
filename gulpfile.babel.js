import gulp from 'gulp';
import { serve } from './tasks/serve';
import { bundle } from './tasks/js';
import { htmlBundle } from './tasks/html';
import { build } from './tasks/build';
import { test } from './tasks/test';
import { lintWithEslint, lintWithJscs } from './tasks/linter';
import { clean } from './tasks/clean';

gulp.task('default', ['build']);
gulp.task('serve', ['build'], serve);
gulp.task('bundle', bundle);
gulp.task('polybuild', htmlBundle);
gulp.task('build', build);
gulp.task('test', test);
gulp.task('eslint', lintWithEslint);
gulp.task('jscs', lintWithJscs);
gulp.task('lint', ['eslint', 'jscs']);
gulp.task('clean', clean);
