function define(name, value) {
  Object.defineProperty(exports, name, {
    value: value,
    enumerable: true,
  });
}

// JDoodle API
define("API", "https://api.jdoodle.com/execute");
