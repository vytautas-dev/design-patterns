// The Singleton pattern allows you to limit the number of instances of a particular object to one.
// This single instance is called the singleton. Singletons reduce the need for global variables
// which is particularly important in JavaScript because it limits namespace pollution and associated
// risk of name collisions. The singleton pattern is one of the most controversial yet easiest to implement
// design patterns. Many people say you should never use the singleton design pattern, but there are still
// plenty of cases where the singleton pattern is the perfect solution.
// After the first object is created, it will return additional references to itself (the same instance).

class Settings {
  constructor() {
    if (Settings.instance instanceof Settings) {
      return Settings.instance;
    }
    this.settingObject = {
      background: "#ff0000",
      version: Math.floor(Math.random() * 4000),
    };
    Object.freeze(this.settingObject);
    Object.freeze(this);
    Settings.instance = this;
  }

  get(key) {
    return this.settingObject[key];
  }
}

const setting = new Settings();
const setting2 = new Settings();
console.log(setting);
console.log(setting2);
console.log(setting === setting2);
