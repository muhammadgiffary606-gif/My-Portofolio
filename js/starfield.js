/**
 * STARFIELD & METEOR ENGINE (2D Canvas)
 * High-performance cosmic background with multi-depth stars and glowing meteors
 */

class Starfield {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.stars = [];
    this.meteors = [];
    this.starCount = 220;
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Populate stars
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push(this.createStar());
    }

    // Mouse drift interaction
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX - window.innerWidth / 2) * 0.03;
      this.mouse.targetY = (e.clientY - window.innerHeight / 2) * 0.03;
    });

    // Spawn random meteors periodically
    this.scheduleNextMeteor();

    // Start animation loop
    this.render = this.render.bind(this);
    requestAnimationFrame(this.render);
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  createStar() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      size: Math.random() * 1.8 + 0.4,
      color: this.getRandomStarColor(),
      alpha: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      depth: Math.random() * 2 + 0.5, // Parallax depth layer
    };
  }

  getRandomStarColor() {
    const colors = [
      '#ffffff',
      '#00f2fe',
      '#7928ca',
      '#93c5fd',
      '#fef08a',
      '#ff7ac6'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  scheduleNextMeteor() {
    const delay = Math.random() * 4000 + 3000; // Meteor every 3-7s
    setTimeout(() => {
      this.spawnMeteor();
      this.scheduleNextMeteor();
    }, delay);
  }

  spawnMeteor(customOrigin) {
    const startX = customOrigin ? customOrigin.x : Math.random() * this.width * 0.9;
    const startY = customOrigin ? customOrigin.y : Math.random() * (this.height * 0.35);
    const speed = Math.random() * 8 + 12;
    const angle = (Math.PI / 4) + (Math.random() * 0.2 - 0.1); // ~45 degrees diagonal

    this.meteors.push({
      x: startX,
      y: startY,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      length: Math.random() * 80 + 70,
      thickness: Math.random() * 2 + 1.2,
      color: Math.random() > 0.4 ? '#00f2fe' : '#ff007f',
      life: 1.0,
      decay: Math.random() * 0.018 + 0.012
    });
  }

  burstMeteors(count = 6) {
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        this.spawnMeteor({
          x: Math.random() * (this.width * 0.7) + (this.width * 0.1),
          y: Math.random() * (this.height * 0.4)
        });
      }, i * 220);
    }
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Smooth mouse interpolation
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Draw & update stars
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];

      // Twinkle effect
      star.alpha += star.twinkleSpeed;
      if (star.alpha > 1 || star.alpha < 0.2) {
        star.twinkleSpeed = -star.twinkleSpeed;
      }

      // Parallax translation based on depth
      const drawX = star.x - (this.mouse.x * star.depth);
      const drawY = star.y - (this.mouse.y * star.depth);

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
      this.ctx.fillStyle = star.color;
      this.ctx.shadowBlur = star.size * 2;
      this.ctx.shadowColor = star.color;

      this.ctx.beginPath();
      this.ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    }

    // Draw & update meteors
    for (let i = this.meteors.length - 1; i >= 0; i--) {
      const m = this.meteors[i];
      m.x += m.dx;
      m.y += m.dy;
      m.life -= m.decay;

      if (m.life <= 0 || m.x > this.width + 100 || m.y > this.height + 100) {
        this.meteors.splice(i, 1);
        continue;
      }

      // Calculate tail coordinates
      const tailX = m.x - (m.dx / Math.hypot(m.dx, m.dy)) * m.length;
      const tailY = m.y - (m.dy / Math.hypot(m.dx, m.dy)) * m.length;

      const grad = this.ctx.createLinearGradient(m.x, m.y, tailX, tailY);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.3, m.color);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      this.ctx.save();
      this.ctx.globalAlpha = m.life;
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = m.thickness;
      this.ctx.lineCap = 'round';
      this.ctx.shadowBlur = 12;
      this.ctx.shadowColor = m.color;

      this.ctx.beginPath();
      this.ctx.moveTo(m.x, m.y);
      this.ctx.lineTo(tailX, tailY);
      this.ctx.stroke();

      // Bright head point
      this.ctx.fillStyle = '#ffffff';
      this.ctx.beginPath();
      this.ctx.arc(m.x, m.y, m.thickness * 1.2, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.restore();
    }

    requestAnimationFrame(this.render);
  }
}

// Export instance
let globalStarfield = null;
document.addEventListener('DOMContentLoaded', () => {
  globalStarfield = new Starfield('starfield-canvas');

  // Hook meteor trigger button
  const meteorBtn = document.getElementById('trigger-meteor-btn');
  if (meteorBtn) {
    meteorBtn.addEventListener('click', () => {
      if (globalStarfield) globalStarfield.burstMeteors(8);
    });
  }
});

