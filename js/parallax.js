/**
 * PARALLAX & 3D TILT ENGINE
 * Multi-layer scroll parallax, celestial mouse-drift, and 3D Card tilt
 */

class ParallaxEngine {
  constructor() {
    this.mouse = { x: 0, y: 0, currentX: 0, currentY: 0 };
    this.scroll = { y: 0, currentY: 0 };
    this.layers = [];
    this.tiltCards = [];
    this.isTouch = window.matchMedia('(pointer: coarse)').matches;

    this.init();
  }

  init() {
    // Collect parallax celestial layers
    this.layers = Array.from(document.querySelectorAll('[data-parallax-speed]')).map((el) => ({
      el,
      speed: parseFloat(el.getAttribute('data-parallax-speed')) || 0.1,
      mouseSpeed: parseFloat(el.getAttribute('data-mouse-speed')) || 0.04,
      originTransform: window.getComputedStyle(el).transform !== 'none' ? window.getComputedStyle(el).transform : ''
    }));

    // Mouse listener (desktop only)
    if (!this.isTouch) {
      window.addEventListener('mousemove', (e) => {
        this.mouse.x = (e.clientX - window.innerWidth / 2);
        this.mouse.y = (e.clientY - window.innerHeight / 2);
      });

      this.init3DTilt();
    }

    // Scroll listener
    window.addEventListener('scroll', () => {
      this.scroll.y = window.pageYOffset || document.documentElement.scrollTop;
    }, { passive: true });

    // Render loop
    this.update = this.update.bind(this);
    requestAnimationFrame(this.update);
  }

  init3DTilt() {
    // Select tilt elements
    const elements = document.querySelectorAll('.tilt-card, .astronaut-card');
    elements.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within element
        const y = e.clientY - rect.top;  // y position within element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // max 10 deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.5s ease-out';
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out';
      });
    });
  }

  update() {
    // Lerp mouse
    this.mouse.currentX += (this.mouse.x - this.mouse.currentX) * 0.06;
    this.mouse.currentY += (this.mouse.y - this.mouse.currentY) * 0.06;

    // Lerp scroll
    this.scroll.currentY += (this.scroll.y - this.scroll.currentY) * 0.08;

    // Update parallax layers
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      const scrollOffset = this.scroll.currentY * layer.speed;
      const mouseOffsetX = this.mouse.currentX * layer.mouseSpeed;
      const mouseOffsetY = this.mouse.currentY * layer.mouseSpeed;

      layer.el.style.transform = `translate3d(${mouseOffsetX.toFixed(2)}px, ${(-scrollOffset + mouseOffsetY).toFixed(2)}px, 0)`;
    }

    requestAnimationFrame(this.update);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ParallaxEngine();
});

