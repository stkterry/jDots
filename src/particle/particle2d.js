import Vec2 from "../vector/Vec2";


class Particle2D {
  constructor(pos, vel, acc) {
    this.pos = new Vec2(pos.x, pos.y) || new Vec2();
    this.vel = new Vec2(vel.x, vel.y) || new Vec2();
    this.acc = new Vec2(acc.x, acc.y) || new Vec2();
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

export default Particle2D;