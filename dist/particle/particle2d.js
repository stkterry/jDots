"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vec2D = _interopRequireDefault(require("../vector/vec2D"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Particle2D {
  constructor(pos, vel, acc) {
    this.pos = new _vec2D.default(pos.x, pos.y) || new _vec2D.default();
    this.vel = new _vec2D.default(vel.x, vel.y) || new _vec2D.default();
    this.acc = new _vec2D.default(acc.x, acc.y) || new _vec2D.default();
  }

  update(acc) {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    if (acc) this.acc.add(acc);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 8, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }

}

var _default = Particle2D;
exports.default = _default;