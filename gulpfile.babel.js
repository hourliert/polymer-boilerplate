import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import BrowserSync from 'browser-sync';
import polybuild from 'polybuild';
import runSequence from 'run-sequence';

import config from './webpack.config';

const browserSync = BrowserSync.create();

const reload = browserSync.reload;

gulp.task('default', ['build']);

gulp.task('serve', ['bundle:watch'], () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: ['./src'],
      routes: {
        '/bower_components': 'bower_components',
        '/build': 'build'
      }
    }
  });

  gulp.watch(['./build/bundle.js', './src/**/*.html'], browserSync.reload);
});

gulp.task('bundle:watch', (callback) => {
  const compiler = webpack(config);

  compiler.watch({
    aggregateTimeout: 200
  }, (err, stats) => {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
  })

  callback();
});

gulp.task('bundle', (callback) => {
  const compiler = webpack(config);

  compiler.run((err, stats) => {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  })
});

gulp.task('polybuild', () => {
  return gulp.src('./src/index.html')
    .pipe(polybuild({
      maximumCrush: true
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('build', (cb) => {
  runSequence(
    'bundle',
    'polybuild',
    cb
  );
});
