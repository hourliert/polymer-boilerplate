import gulp from 'gulp';
import BrowserSync from 'browser-sync';

const browserSync = BrowserSync.create();
const reload = browserSync.reload;

export function serve() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: ['./src'],
      routes: {
        '/bower_components': 'bower_components',
        '/build': 'build',
      },
    },
  });

  gulp.watch(['./build/bundle.js', './src/**/*.html'], reload);
}
