"use strict";

var _Vec = _interopRequireDefault(require("./vector/Vec2"));

var _Vec2 = _interopRequireDefault(require("./vector/Vec3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Vec2: _Vec.default,
  Vec3: _Vec2.default
};