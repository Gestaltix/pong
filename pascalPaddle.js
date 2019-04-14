class Paddle {
  constructor(offset, keys, vertical = true) {
    this.offset = offset;
    this.keys = keys;
    this.vertical = vertical;
    this.position = 200;
    this.handle = document.addEventListener("keydown", (ev) => this.changeDir(ev));
    this.handleRelease = document.addEventListener("keyup", (ev) => this.stop(ev));
    this.vel = 0;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    this.vertical ? ctx.fillRect(this.offset, this.position, 10, 100) : ctx.fillRect(this.position, this.offset, 100, 10);
  }
  changeDir(ev) {
    if (ev.key === this.keys[0] && this.position > 20) {
      this.vel = -10;
    }
    if (ev.key === this.keys[1] && this.position < 380) {
      this.vel = 10;
    }
  }
  stop(ev) {
    if (ev.key === this.keys[0] || ev.key === this.keys[1]) {
      this.vel = 0;
    }
  }
  move() {
    this.position += this.vel;
    if (this.position < 20 || this.position > 380) {
      this.vel = 0;
    }
  }
  moveAndRender(ctx) {
    this.render(ctx);
    this.move();
  }
}
