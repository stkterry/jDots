"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const TWO_PI = Math.PI;

class Vec2D {
  constructor() {
    let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.x = x;
    this.y = y;
  } // Common operations


  set(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }

  sub(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  }

  scale(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  div(mag) {
    this.x /= mag;
    this.y /= mag;
    return this;
  }

  normalize() {
    let norm = this.getNorm();
    return this.div(norm);
  } // get operations


  getNorm() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  getHeading() {
    return Math.atan2(this.y, this.x);
  } // helpers


  dup() {
    return new Vec2D(this.x, this.y);
  }

  dupUnit() {
    let norm = this.getNorm();
    return new Vec2D(this.x / norm, this.y / norm);
  }

  distTo(vec) {
    return Math.sqrt(Math.pow(this.x - vec.x, 2) + Math.pow(this.y - vec.y, 2));
  }

  limit(mag) {
    if (this.getNorm() > mag) {
      this.setMag(mag);
    }

    ;
  }

  setMag(mag) {
    this.normalize();
    this.scale(mag);
  } // Class methods


  static dot(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y;
  }

  static cross(vec1, vec2) {
    return vec1.x * vec2.y - vec1.y * vec2.x;
  }

  static angleBetween(vec1, vec2) {
    return Math.acos(Vec2D.dot(vec1, vec2) / (vec1.getNorm() * vec2.getNorm()));
  }

  static angleRel(vec1, vec2) {
    let angle = Math.atan2(vec2.y, vec2.x) - Math.atan2(vec1.y, vec1.x);
    if (angle > Math.PI) angle -= TWO_PI;else if (angle < -Math.PI) angle += TWO_PI;
    return angle;
  } // // Class Methods gen


  static randFromMag(minMag, maxMag) {
    if (!maxMag) {
      maxMag = minMag;
      minMag = 0;
    }

    const mag = (maxMag - minMag) * random() + minMag,
          angle = random() * Math.TWO_PI,
          x = mag * cos(angle),
          y = mag * sin(angle);
    return new Vec(x, y);
  }

}

var _default = Vec2D;
exports.default = _default;