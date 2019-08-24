import Vec2 from "../vector/vec2";

class SAT2 {
  constructor(ctr=null, pts=null, rot=0) {
    this.pts = (pts) ? (
      pts.map(pt => new Vec2(pt.x, pt.y))
    ) : (
      pts.map(pt => new Vec2())
    );
    this.rot = rot;
    this.ctr = ctr;
  }

  getNorms() {

    let len = this.pts.length;
    let normals = new Array(len);
    let p2, p1;
    for (let i = 0, k = len - 1; i < k; i++) {
      p2 = this.pts[i+1];
      p1 = this.pts[i];
      normals[i] = new Vec2(p2.x - p1.x, p2.y - p1.y).normalize();
    }
    p2 = this.pts[0];
    p1 = this.pts[len - 1];
    normals[len - 1] = new Vec2(p2.x - p1.x, p2.y - p1.y).normalize();

    return normals;
  }

  // intersects(sat) {
  //   let b1 = this.getNorms();
  //   let b2 = sat.getNorms();



  // }
}