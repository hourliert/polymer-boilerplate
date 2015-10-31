import gulp from 'gulp';
import BrowserSync from 'browser-sync';

const DEBUG = !process.argv.includes('--release');
const WATCH = process.argv.includes('--watch');
const browserSync = BrowserSync.create();
const reload = browserSync.reload;

export function serve() {
  const serverOptions = DEBUG ? {
    baseDir: ['./src'],
    routes: {
      '/bower_components': 'bower_components',
      '/build': 'build',
    },
  } : {
    baseDir: ['./build'],
  };

  browserSync.init({
    notify: false,
    server: serverOptions,
  });

  if (WATCH) {
    gulp.watch(
      DEBUG ? [
        './build/bundle.js',
        './src/**/*.html',
      ] : [
        './build/*.html',
      ],
    reload);
  }
}
