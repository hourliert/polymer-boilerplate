import 'babel-core/polyfill';

window.addEventListener('WebComponentsReady', () => {
  require('./elements');
  require('./route');
});
