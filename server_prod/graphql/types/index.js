'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Album = require('./Album');

Object.keys(_Album).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Album[key];
    }
  });
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

var _Music = require('./Music');

Object.keys(_Music).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Music[key];
    }
  });
});
//# sourceMappingURL=index.js.map