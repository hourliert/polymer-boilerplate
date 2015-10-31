class Auth {
  constructor() {
    this.localStorage = {};
    this.onChangeCB = null;
  }

  pretendRequest(email, pass) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'john' && pass === '1234') {
          resolve({
            authenticated: true,
            token: Math.random().toString(36).substring(7),
          });
        } else {
          reject(new Error('Wrong credentials'));
        }
      }, Math.floor(Math.random() * 1000));
    });
  }

  login(email, pass) {
    return new Promise(async (resolve, reject) => {
      if (this.localStorage.token) {
        resolve(true);
        this.onChangeCB(true);
      } else {
        try {
          const res = await this.pretendRequest(email, pass);
          if (res.authenticated) {
            this.localStorage.token = res.token;
            resolve(true);
            this.onChangeCB(true);
          }
        } catch (err) {
          reject(err);
          this.onChangeCB(false);
        }
      }
    });
  }

  logout(cb) {
    delete this.localStorage.token;
    if (cb) {
      cb();
    }

    this.onChangeCB(false);
  }

  setChangeCB(cb) {
    this.onChangeCB = cb;
  }

  loggedIn() {
    return !!this.localStorage.token;
  }

  getToken() {
    return this.localStorage.token;
  }
}

export default new Auth();
