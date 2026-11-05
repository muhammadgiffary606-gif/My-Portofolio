/**
 * COSMIC AMBIENT AUDIO SYNTHESIZER (Web Audio API)
 * Zero external audio files. 100% synthesized ambient drone & UI blips.
 */

class CosmicAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.droneOsc1 = null;
    this.droneOsc2 = null;
    this.filter = null;
    this.toggleBtn = document.getElementById('audio-toggle-btn');

    this.init();
  }

  init() {
    if (!this.toggleBtn) return;

    this.toggleBtn.addEventListener('click', () => {
      this.togglePlayState();
    });

    // Attach subtle UI blip sounds to interactive buttons
    document.querySelectorAll('.btn, .filter-btn, .nav-link').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (this.isPlaying) this.playBlip(520, 0.04);
      });
      el.addEventListener('click', () => {
        if (this.isPlaying) this.playBlip(780, 0.08);
      });
    });
  }

  initAudioContext() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    // Master volume gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Warm Lowpass Filter
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(280, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(4, this.ctx.currentTime);
    this.filter.connect(this.masterGain);

    // Deep Space Drone Oscillators (Sine + Sawtooth detuned)
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc1.type = 'sine';
    this.droneOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // Low A1

    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc2.type = 'triangle';
    this.droneOsc2.frequency.setValueAtTime(110.5, this.ctx.currentTime); // Harmonic A2 detuned

    this.droneOsc1.connect(this.filter);
    this.droneOsc2.connect(this.filter);

    this.droneOsc1.start();
    this.droneOsc2.start();
  }

  togglePlayState() {
    this.initAudioContext();

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (!this.isPlaying) {
      // Fade in ambient drone smoothly
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 1.5);

      this.isPlaying = true;
      this.toggleBtn.classList.add('playing');
      this.toggleBtn.querySelector('.audio-label').textContent = 'Audio: ON';
    } else {
      // Fade out smoothly
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);

      this.isPlaying = false;
      this.toggleBtn.classList.remove('playing');
      this.toggleBtn.querySelector('.audio-label').textContent = 'Audio: OFF';
    }
  }

  playBlip(freq = 600, duration = 0.05) {
    if (!this.ctx || !this.isPlaying) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Ignore audio glitches safely
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CosmicAudioEngine();
});

