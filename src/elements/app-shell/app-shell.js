import Polymer from '../../utils/polymer';
import auth from '../../core/auth';

import '../about-page/about-page';
import '../login-page/login-page';
import '../logout-page/logout-page';
import '../dashboard-page/dashboard-page';

class AppShell {
  beforeRegister() {
    this.is = 'app-shell';
    this.properties = {
      greeting: {
        type: String,
        value: 'Wait for it',
      },
      route: {
        type: String,
      },
      _isAuth: {
        type: Boolean,
        value: false,
      },
    };
  }

  ready() {
    auth.setChangeCB(::this._updateAuth);
    this.async(() => {
      this.greeting = 'Hello World!';
    }, 1500);
  }

  _updateAuth(isAuth) {
    this._isAuth = isAuth;
  }

  _handlePageChange(ev) {
    if (this.$.logout === ev.detail.item) {
      auth.logout();
    }
  }

}

export default new Polymer(AppShell);
