const TWO_PI = Math.PI;

class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  // Common operations

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
  }

  // get operations
  getNorm() {
    return Math.sqrt( this.x * this.x + this.y * this.y);
  }

  getHeading() {
    return Math.atan2(this.y, this.x);
  }

  // helpers

  dup() {
    return new Vec2(this.x, this.y);
  }

  dupUnit() {
    let norm = this.getNorm();
    return new Vec2(this.x / norm, this.y / norm);
  }

  distTo(vec) {
    let xDiff = this.x - vec.x;
    let yDiff = this.y - vec.y;
    return Math.sqrt(
      xDiff * xDiff + yDiff * yDiff
    );
  }

  limit(mag) {
    if (this.getNorm() > mag) {
      this.setMag(mag);
    };
  }

  setMag(mag) {
    this.normalize();
    this.scale(mag);
  }

  project(vec) {
    let vecUnit = vec.dupUnit();
    return this.dup().dot(vecUnit);
  }

  // Class methods

  static dot(vec1, vec2) {
    return (vec1.x * vec2.x + vec1.y * vec2.y)
  }

  static cross(vec1, vec2) {
    return (vec1.x * vec2.y - vec1.y * vec2.x)
  }

  static angleBetween(vec1, vec2) {
    return Math.acos(
      Vec2.dot(vec1, vec2) / (vec1.getNorm() * vec2.getNorm())
    )
  }

  static angleRel(vec1, vec2) {
    let angle = Math.atan2(vec2.y, vec2.x) - Math.atan2(vec1.y, vec1.x);
    if (angle > Math.PI) angle -= TWO_PI
    else if (angle < -Math.PI) angle += TWO_PI;
    return angle; 
  }

  // // Class Methods gen
  static randFromMag(minMag, maxMag) {
    if (!maxMag) {
      maxMag = minMag;
      minMag = 0;
    }
    const mag = (maxMag - minMag) * random() + minMag,
      angle = random() * Math.TWO_PI,
      x = mag * cos(angle),
      y = mag * sin(angle);

    return new Vec2(x, y);
  };

}

export default Vec2;