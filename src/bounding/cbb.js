
import Vec2 from "../vector/vec2";

class CBB {
  constructor(r, pos) {
    this.radius = r || 0;
    this.pos = new Vec2(pos.x, pos.y) || new Vec2();
  }


  intersects(cbb) {
    let r = this.radius + cbb.radius;
    let xx = this.x + cbb.x;
    let yy = this.y + cbb.y;
    return r * r < xx * xx + yy * yy;
  }

}