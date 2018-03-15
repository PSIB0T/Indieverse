'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _User = require('./User');

Object.keys(_User).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _User[key];
    }
  });
});
//# sourceMappingURL=index.js.map