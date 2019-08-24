"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const TWO_PI = Math.PI;

class Vec3 {
  constructor() {
    let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    this.x = x;
    this.y = y;
    this.z = z;
  } // Common operations


  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
    this.z += vec.z;
    return this;
  }

  sub(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    this.z -= vec.z;
    return this;
  }

  scale(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }

  div(mag) {
    this.x /= mag;
    this.y /= mag;
    this.z /= mag;
    return this;
  }

  normalize() {
    let norm = this.getNorm();
    return this.div(norm);
  } // get operations


  getNorm() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  getHeading() {
    let rho = this.getNorm();
    let phi = acos(this.z, rho);
    let theta = atan2(this.y, this.x);
    return {
      rho,
      phi,
      theta
    };
  } // helpers


  dup() {
    return new Vec3(this.x, this.y, this.z);
  }

  dupUnit() {
    let norm = this.getNorm();
    return new Vec2(this.x / norm, this.y / norm, this.z / norm);
  }

  distTo(vec) {
    let xDiff = this.x - vec.x;
    let yDiff = this.y - vec.y;
    let zDiff = this.z = vec.z;
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff + zDiff * zDiff);
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
    return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
  }

  static cross(vec1, vec2) {
    let x = vec1.y * vec2.z - vec1.z * vec2.y;
    let y = vec1.z * vec2.x - vec1.x * vec2.z;
    let z = vec1.x * vec2.y - vec1.y * vec2.x;
    return new Vec3(x, y, z);
  }

  static angleBetween(vec1, vec2) {
    return Math.acos(Vec2.dot(vec1, vec2) / (vec1.getNorm() * vec2.getNorm()));
  } // // Class Methods gen


  static randFromMag(minMag, maxMag) {
    if (!maxMag) {
      maxMag = minMag;
      minMag = 0;
    }

    const mag = (maxMag - minMag) * random() + minMag;
    const theta = Math.random() * Math.PI;
    const phi = Math.random() * Math.PI * 2 - Math.PI;
    return new Vec3(mag * Math.sin(theta) * Math.cos(phi), mag * Math.sin(theta) * Math.sin(phi), mag * Math.cos(theta));
  }

}

var _default = Vec3;
exports.default = _default;