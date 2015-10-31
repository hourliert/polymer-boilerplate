import Polymer from '../utils/polymer';
import page from 'page';
import auth from './auth';

class Router {
  constructor() {
    this.app = Polymer.dom(document).querySelector('#app');

    page('/about', () => {
      this.app.route = 'about';
    });

    page('/dashboard', ::this._authMiddleware, () => {
      this.app.route = 'dashboard';
    });

    page('/login', () => {
      this.app.route = 'login';
    });

    page('/logout', () => {
      this.app.route = 'logout';
    });

    page('/', '/about');

    page({
      hashbang: true,
    });
  }

  go(route) {
    page(route);
  }

  _authMiddleware(ctx, next) {
    if (!auth.loggedIn()) {
      this.go('/login');
    }

    next();
  }
}

export default new Router();
