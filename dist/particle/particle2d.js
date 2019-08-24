"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Vec = _interopRequireDefault(require("../vector/Vec2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Particle2D {
  constructor(pos, vel, acc) {
    this.pos = new _Vec.default(pos.x, pos.y) || new _Vec.default();
    this.vel = new _Vec.default(vel.x, vel.y) || new _Vec.default();
    this.acc = new _Vec.default(acc.x, acc.y) || new _Vec.default();
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