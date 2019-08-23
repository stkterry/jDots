import Vec2D from "../vector/vec2D";


class Particle2D {
  constructor(pos, vel, acc) {
    this.pos = new Vec2D(pos.x, pos.y) || new Vec2D();
    this.vel = new Vec2D(vel.x, vel.y) || new Vec2D();
    this.acc = new Vec2D(acc.x, acc.y) || new Vec2D();
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