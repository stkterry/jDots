import Vec2 from "../vector/vec2";

class AABB2 {
  constructor(min, max, rot) {
    this.min = new Vec2(min.x, min.y) || Vec2(); // top left corner
    this.max = new Vec2(max.x, max.y) || Vec2(); // bottom right corner
    this.rot = rot || 0;
    
  }

  intersect(aabb) {
    if (this.max.x < aabb.min.x || this.min.x > aabb.max.x) return false;
    if (this.max.y < aabb.min.y || this.min.y > aabb.max.y) return false;
    return true;
  }
}