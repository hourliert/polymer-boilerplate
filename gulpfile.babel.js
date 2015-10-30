import gulp from 'gulp';
import { serve } from './tasks/serve';
import { bundle, watchBundle } from './tasks/js';
import { htmlBundle } from './tasks/html';
import { build } from './tasks/build';
import './tasks/test';


gulp.task('default', ['build']);
gulp.task('serve', ['bundle:watch'], serve);
gulp.task('bundle', bundle);
gulp.task('bundle:watch', watchBundle);
gulp.task('polybuild', htmlBundle);
gulp.task('build', build);
