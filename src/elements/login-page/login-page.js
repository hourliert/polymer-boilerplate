import Polymer from '../../utils/polymer';
import Router from '../../core/router';
import auth from '../../core/auth';

class LoginPage {
  beforeRegister() {
    this.is = 'login-page';

    this.properties = {
      error: {
        type: Boolean,
        value: false,
      },
      authenticating: {
        type: Boolean,
        value: false,
      },
    };

    this.listeners = {
      login: '_onLogin',
    };
  }

  async _onLogin(ev) {
    this.error = false;
    this.authenticating = true;
    try {
      const isAuth = await auth.login(ev.detail.username, ev.detail.password);
      if (isAuth) {
        Router.go('/dashboard');
      } else {
        this.error = true;
      }
    } catch (err) {
      this.error = true;
    } finally {
      this.authenticating = false;
    }
  }

}

export default new Polymer(LoginPage);
