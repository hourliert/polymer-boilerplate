import 'babel-core/polyfill';

window.addEventListener('WebComponentsReady', () => {
  require('./elements');
  require('./core/router');
});
