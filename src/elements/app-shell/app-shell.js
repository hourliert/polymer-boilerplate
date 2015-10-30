import Polymer from '../../utils/polymer';

class AppShell {
  beforeRegister() {
    this.is = 'app-shell';
    this.properties = {
      greeting: {
        type: String,
        value: 'Wait for it',
      },
    };
  }

  ready() {
    this.async(() => {
      this.greeting = 'Hello World!';
    }, 1500);
  }
}

export default new Polymer(AppShell);
