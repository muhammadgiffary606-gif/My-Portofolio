/**
 * PROJECTS DATA & GALLERY ENGINE
 * Interactive project gallery, categories, realtime search, and modal preview
 */

const portfolioProjects = [
  {
    id: 'astro-pay',
    title: 'AstroPay - Decentralized Cosmic Finance',
    category: 'web',
    categoryName: 'Web Application',
    tagline: 'Platform keuangan terdesentralisasi masa depan dengan analitik real-time dan enkripsi kuantum.',
    description: 'AstroPay adalah platform DeFi multi-chain generasi baru yang menyederhanakan transaksi aset digital lintas galaksi (blockchain). Dilengkapi dengan dashboard visualisasi likuiditas 3D, smart contract audit otomatis, dan antarmuka bertema luar angkasa dengan latency ultra-rendah.',
    imageSvg: `
      <svg viewBox="0 0 800 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="apGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="50%" stop-color="#1e1b4b"/>
            <stop offset="100%" stop-color="#020617"/>
          </linearGradient>
          <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00f2fe"/>
            <stop offset="100%" stop-color="#4facfe"/>
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#apGrad)"/>
        <circle cx="400" cy="225" r="160" fill="none" stroke="rgba(0, 242, 254, 0.2)" stroke-width="2" stroke-dasharray="8 6"/>
        <circle cx="400" cy="225" r="110" fill="none" stroke="rgba(121, 40, 202, 0.4)" stroke-width="2"/>
        <circle cx="400" cy="225" r="60" fill="url(#neonCyan)" opacity="0.85"/>
        <path d="M280 280 L400 160 L520 280 Z" fill="none" stroke="#fff" stroke-width="3"/>
        <text x="400" y="380" fill="#f8fafc" font-size="28" font-family="'Orbitron', sans-serif" font-weight="bold" text-anchor="middle">ASTROPAY CORE</text>
        <text x="400" y="410" fill="#00f2fe" font-size="14" font-family="monospace" text-anchor="middle">CROSS-CHAIN LIQUIDITY PROTOCOL</text>
      </svg>
    `,
    features: [
      'Multi-chain Bridge dengan validasi zero-knowledge proof',
      'Visualisasi portofolio interaktif 3D menggunakan WebGL',
      'Smart contract teruji aman & latency transaksi < 400ms',
      'Mode gelap futuristik dengan visualisasi real-time graph'
    ],
    tags: ['React', 'TypeScript', 'Web3.js', 'TailwindCSS', 'WebGL', 'Solidity'],
    metrics: '99.98% Uptime | $4.2M Volume Simulasi',
    demoUrl: 'https://example.com/astropay-demo',
    githubUrl: 'https://github.com/example/astropay'
  },
  {
    id: 'nebula-ai',
    title: 'NebulaAI - Deep Space Image Synthesis',
    category: 'ai',
    categoryName: 'AI & Data Science',
    tagline: 'Sistem pengenalan dan pemulihan citra teleskop luar angkasa dengan Deep Learning.',
    description: 'NebulaAI adalah aplikasi kecerdasan buatan berbasis computer vision yang dirancang untuk membersihkan noise kosmik pada citra teleskop deep-field dan merekonstruksi struktur nebula serta galaksi spiral yang berjarak miliaran tahun cahaya.',
    imageSvg: `
      <svg viewBox="0 0 800 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#180b2d"/>
            <stop offset="100%" stop-color="#050510"/>
          </linearGradient>
          <radialGradient id="nebulaCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ff007f" stop-opacity="0.8"/>
            <stop offset="40%" stop-color="#7928ca" stop-opacity="0.5"/>
            <stop offset="100%" stop-color="#180b2d" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="800" height="450" fill="url(#nbGrad)"/>
        <circle cx="400" cy="225" r="180" fill="url(#nebulaCore)"/>
        <g stroke="#00f2fe" stroke-width="1.5" opacity="0.6">
          <line x1="250" y1="200" x2="350" y2="150"/>
          <line x1="350" y1="150" x2="480" y2="180"/>
          <line x1="480" y1="180" x2="550" y2="280"/>
          <line x1="350" y1="150" x2="400" y2="280"/>
          <line x1="250" y1="200" x2="400" y2="280"/>
          <line x1="400" y1="280" x2="550" y2="280"/>
        </g>
        <circle cx="350" cy="150" r="5" fill="#fff"/>
        <circle cx="480" cy="180" r="5" fill="#00f2fe"/>
        <circle cx="400" cy="280" r="6" fill="#ff007f"/>
        <circle cx="250" cy="200" r="4" fill="#fbbf24"/>
        <circle cx="550" cy="280" r="5" fill="#fff"/>
        <text x="400" y="380" fill="#f8fafc" font-size="28" font-family="'Orbitron', sans-serif" font-weight="bold" text-anchor="middle">NEBULA AI ENGINE</text>
        <text x="400" y="410" fill="#ff7ac6" font-size="14" font-family="monospace" text-anchor="middle">DEEP TELESCOPE NOISE REDUCTION</text>
      </svg>
    `,
    features: [
      'Model Convolutional Neural Network (CNN) untuk rekonstruksi citra resolusi tinggi',
      'API interaktif berbasis FastAPI dengan streaming response',
      'Web-based interactive image diff & spectral analysis inspector',
      'Optimasi inference tensor via ONNX Runtime & WebGPU'
    ],
    tags: ['Python', 'PyTorch', 'FastAPI', 'Next.js', 'TailwindCSS', 'Docker'],
    metrics: '98.4% Akurasi Rekonstruksi | 65ms Inference Time',
    demoUrl: 'https://example.com/nebula-ai-demo',
    githubUrl: 'https://github.com/example/nebula-ai'
  },
  {
    id: 'orbit-flow',
    title: 'OrbitFlow - Mission Control Workspace',
    category: 'web',
    categoryName: 'Web Application',
    tagline: 'Manajemen proyek kolaboratif real-time dengan tampilan peta orbital dan Gantt futuristik.',
    description: 'OrbitFlow adalah workspace produktivitas generasi modern yang dirancang untuk tim engineering dan teknologi. Menawarkan komunikasi instan, papan sprint interaktif, pelacakan telemetry server, dan otomatisasi alur kerja tanpa hambatan.',
    imageSvg: `
      <svg viewBox="0 0 800 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0a1226"/>
            <stop offset="100%" stop-color="#030712"/>
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#ofGrad)"/>
        <!-- Window Mockup -->
        <rect x="140" y="60" width="520" height="300" rx="12" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(0, 242, 254, 0.3)" stroke-width="2"/>
        <line x1="140" y1="100" x2="660" y2="100" stroke="rgba(255, 255, 255, 0.1)"/>
        <circle cx="165" cy="80" r="5" fill="#ef4444"/>
        <circle cx="185" cy="80" r="5" fill="#f59e0b"/>
        <circle cx="205" cy="80" r="5" fill="#10b981"/>
        <!-- UI Cards Inside -->
        <rect x="170" y="125" width="130" height="150" rx="6" fill="rgba(0, 242, 254, 0.1)" stroke="rgba(0, 242, 254, 0.2)"/>
        <rect x="330" y="125" width="130" height="180" rx="6" fill="rgba(121, 40, 202, 0.15)" stroke="rgba(121, 40, 202, 0.3)"/>
        <rect x="490" y="125" width="130" height="120" rx="6" fill="rgba(16, 185, 129, 0.1)" stroke="rgba(16, 185, 129, 0.3)"/>
        <text x="400" y="405" fill="#f8fafc" font-size="24" font-family="'Orbitron', sans-serif" font-weight="bold" text-anchor="middle">ORBITFLOW DASHBOARD</text>
      </svg>
    `,
    features: [
      'Sinkronisasi data real-time menggunakan WebSocket & CRDT',
      'Pelacakan status milestone dengan visual orbital ring',
      'Integrasi webhook GitHub, GitLab & Slack',
      'Enkripsi end-to-end untuk catatan dan dokumen sensitif'
    ],
    tags: ['Vue 3', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'TailwindCSS'],
    metrics: '12k+ Active Users | < 50ms Sync Latency',
    demoUrl: 'https://example.com/orbitflow-demo',
    githubUrl: 'https://github.com/example/orbitflow'
  },
  {
    id: 'stardust-os',
    title: 'StarDust OS - Web-based Futuristic Desktop',
    category: 'ui',
    categoryName: 'UI / UX Design',
    tagline: 'Sistem operasi berbasis web dengan jendela modular, terminal kosmik, dan tema sci-fi dinamis.',
    description: 'StarDust OS membawa pengalaman komputasi desktop ke dalam browser modern dengan performa tinggi. Dilengkapi dengan terminal UNIX virtual bertema matrix, audio visualizer, window management fleksibel, dan toko aplikasi open-source.',
    imageSvg: `
      <svg viewBox="0 0 800 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#120e29"/>
            <stop offset="100%" stop-color="#02040a"/>
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#sdGrad)"/>
        <!-- Futuristic UI Desktop layout -->
        <rect x="100" y="50" width="400" height="240" rx="8" fill="rgba(10, 16, 38, 0.85)" stroke="rgba(0, 242, 254, 0.4)"/>
        <text x="120" y="85" fill="#00f2fe" font-size="14" font-family="monospace">&gt; stardust-kernel --status active</text>
        <text x="120" y="115" fill="#34d399" font-size="13" font-family="monospace">[OK] Orbit telemetry online</text>
        <text x="120" y="140" fill="#94a3b8" font-size="13" font-family="monospace">[OK] Neural bus connected</text>
        <text x="120" y="165" fill="#cbd5e1" font-size="13" font-family="monospace">CPU: 18% | RAM: 3.2GB / 16GB</text>
        <!-- Mini window overlay -->
        <rect x="360" y="140" width="340" height="210" rx="8" fill="rgba(20, 15, 45, 0.9)" stroke="rgba(255, 0, 128, 0.4)"/>
        <circle cx="530" cy="245" r="50" fill="none" stroke="#ff007f" stroke-width="3" stroke-dasharray="10 5"/>
        <text x="400" y="415" fill="#f8fafc" font-size="24" font-family="'Orbitron', sans-serif" font-weight="bold" text-anchor="middle">STARDUST OS ENVIRONMENT</text>
      </svg>
    `,
    features: [
      'Multi-window manager dengan drag, resize, maximize, & minimize',
      'Built-in terminal simulator dengan 30+ custom commands',
      'Synthesized sound effects dan audio player terintegrasi',
      'State persistence tersimpan di IndexedDB & LocalStorage'
    ],
    tags: ['Vanilla JavaScript', 'HTML5 Canvas', 'Web Audio API', 'CSS Grid', 'IndexedDB'],
    metrics: '60 FPS Ultra-Smooth | 0 External Library Dependencies',
    demoUrl: 'https://example.com/stardust-os',
    githubUrl: 'https://github.com/example/stardust-os'
  },
  {
    id: 'cosmo-fit',
    title: 'CosmoFit - Astronaut Physical Training App',
    category: 'mobile',
    categoryName: 'Mobile App',
    tagline: 'Aplikasi kebugaran mobile dengan program latihan gravitasi mikro dan pelacak biometrik.',
    description: 'CosmoFit dirancang untuk menjaga kesehatan fisik astronot dan atlet modern. Menawarkan analisis postur berbasis kamera AI real-time, sinkronisasi smartwatch, dan jadwal latihan adaptif berbasis intensitas kardiovaskular.',
    imageSvg: `
      <svg viewBox="0 0 800 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#061826"/>
            <stop offset="100%" stop-color="#020810"/>
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#cfGrad)"/>
        <!-- Mobile Frame Mockup -->
        <rect x="310" y="40" width="180" height="340" rx="28" fill="#0b112c" stroke="rgba(0, 242, 254, 0.4)" stroke-width="4"/>
        <line x1="365" y1="58" x2="435" y2="58" stroke="rgba(255, 255, 255, 0.3)" stroke-width="3" stroke-linecap="round"/>
        <!-- Ring Tracker inside phone -->
        <circle cx="400" cy="180" r="48" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="8"/>
        <circle cx="400" cy="180" r="48" fill="none" stroke="#00f2fe" stroke-width="8" stroke-dasharray="210 300"/>
        <text x="400" y="186" fill="#fff" font-size="18" font-family="'Orbitron', sans-serif" font-weight="bold" text-anchor="middle">84%</text>
        <text x="400" y="250" fill="#38bdf8" font-size="12" font-family="sans-serif" text-anchor="middle">DAILY RECOVERY</text>
        <text x="400" y="420" fill="#f8fafc" font-size="22" font-family="'Orbitron', sans-serif" font-weight="bold" text-anchor="middle">COSMOFIT MOBILE APPS</text>
      </svg>
    `,
    features: [
      'Pelacakan postur latihan dengan TensorFlow Lite di perangkat (on-device)',
      'Sinkronisasi Apple HealthKit & Google Health Connect',
      'Mode offline tanpa koneksi internet saat ekspedisi lapangan',
      'Visualisasi pencapaian dengan lencana astronomi 3D'
    ],
    tags: ['Flutter', 'Dart', 'TensorFlow Lite', 'Firebase', 'GraphQL'],
    metrics: '4.8★ App Store Rating | 45k+ Unduhan',
    demoUrl: 'https://example.com/cosmofit-demo',
    githubUrl: 'https://github.com/example/cosmofit'
  },
  {
    id: 'exo-explorer',
    title: 'ExoPlanet 3D - Solar System Visualizer',
    category: 'ui',
    categoryName: 'Creative / WebGL',
    tagline: 'Eksplorasi interaktif 3D ribuan planet ekstrasurya berdasarkan dataset NASA Exoplanet Archive.',
    description: 'Aplikasi edukasi dan visualisasi berbasis browser yang merender model tata surya dan sistem eksoplanet secara presisi menggunakan WebGL Three.js. Pengguna dapat mengubah kecepatan waktu, meninjau zona layak huni (habitable zone), dan membaca data spektroskopi.',
    imageSvg: `
      <svg viewBox="0 0 800 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="exoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#140727"/>
            <stop offset="100%" stop-color="#030208"/>
          </linearGradient>
        </defs>
        <rect width="800" height="450" fill="url(#exoGrad)"/>
        <!-- Sun glowing -->
        <circle cx="200" cy="220" r="70" fill="#fbbf24" opacity="0.9"/>
        <circle cx="200" cy="220" r="100" fill="none" stroke="rgba(251, 191, 36, 0.3)" stroke-width="2"/>
        <!-- Orbit Ellipses -->
        <ellipse cx="200" cy="220" rx="220" ry="80" fill="none" stroke="rgba(0, 242, 254, 0.3)" stroke-width="1.5" stroke-dasharray="6 4"/>
        <ellipse cx="200" cy="220" rx="380" ry="140" fill="none" stroke="rgba(168, 85, 247, 0.3)" stroke-width="1.5"/>
        <circle cx="380" cy="180" r="16" fill="#00f2fe"/>
        <circle cx="520" cy="280" r="22" fill="#ff007f"/>
        <text x="400" y="415" fill="#f8fafc" font-size="24" font-family="'Orbitron', sans-serif" font-weight="bold" text-anchor="middle">EXOPLANET 3D SIMULATOR</text>
      </svg>
    `,
    features: [
      'Render 3D real-time dengan Three.js & Custom GLSL Shaders',
      'Integrasi data langsung ke NASA Exoplanet API',
      'Perhitungan orbit Keplerian dengan akurasi fisika tinggi',
      'Audio spasial untuk setiap rotasi dan atmosfer planet'
    ],
    tags: ['Three.js', 'WebGL', 'GLSL', 'JavaScript ES6', 'NASA Open API'],
    metrics: '5,000+ Eksoplanet Terdata | 60 FPS Orbit Render',
    demoUrl: 'https://example.com/exoplanet-3d',
    githubUrl: 'https://github.com/example/exoplanet-3d'
  }
];

class ProjectGallery {
  constructor() {
    this.projects = portfolioProjects;
    this.currentCategory = 'all';
    this.searchQuery = '';

    this.gridEl = document.getElementById('projects-grid');
    this.searchInput = document.getElementById('project-search');
    this.filterButtons = document.querySelectorAll('.filter-btn');

    // Modal elements
    this.modal = document.getElementById('project-modal');
    this.modalContainer = document.getElementById('modal-container');
    this.modalCloseBtn = document.getElementById('modal-close-btn');

    this.init();
  }

  init() {
    this.render();

    // Category filters
    this.filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        this.filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.getAttribute('data-filter') || 'all';
        this.render();
      });
    });

    // Search input
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.render();
      });
    }

    // Modal close listeners
    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.closeModal();
      }
    });
  }

  getFilteredProjects() {
    return this.projects.filter((p) => {
      const matchCategory = this.currentCategory === 'all' || p.category === this.currentCategory;
      const matchSearch =
        !this.searchQuery ||
        p.title.toLowerCase().includes(this.searchQuery) ||
        p.tagline.toLowerCase().includes(this.searchQuery) ||
        p.description.toLowerCase().includes(this.searchQuery) ||
        p.tags.some((tag) => tag.toLowerCase().includes(this.searchQuery));

      return matchCategory && matchSearch;
    });
  }

  render() {
    if (!this.gridEl) return;

    const filtered = this.getFilteredProjects();

    if (filtered.length === 0) {
      this.gridEl.innerHTML = `
        <div class="projects-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m15 9-6 6"></path>
            <path d="m9 9 6 6"></path>
          </svg>
          <h3 style="margin-bottom: 0.5rem; font-size: 1.3rem;">Tidak Ada Misi Ditemukan</h3>
          <p>Coba kata kunci pencarian lain atau pilih kategori yang berbeda.</p>
        </div>
      `;
      return;
    }

    this.gridEl.innerHTML = filtered
      .map(
        (project) => `
        <article class="project-card tilt-card" data-project-id="${project.id}">
          <div class="project-thumb">
            <div class="project-category-badge">${project.categoryName}</div>
            ${project.imageSvg}
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.tagline}</p>
            <div class="project-tags">
              ${project.tags.slice(0, 4).map((t) => `<span class="tag-pill">${t}</span>`).join('')}
            </div>
            <div class="project-footer-actions">
              <span class="link-detail">
                Lihat Detail Misi
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
              <div class="link-icons" onclick="event.stopPropagation()">
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="link-icon-btn" title="GitHub Repository">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                </a>
                <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="link-icon-btn" title="Live Preview">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>
      `
      )
      .join('');

    // Attach card click handlers for modal
    const cards = this.gridEl.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-project-id');
        this.openModal(id);
      });
    });
  }

  openModal(projectId) {
    const project = this.projects.find((p) => p.id === projectId);
    if (!project || !this.modal) return;

    // Populate modal body
    const modalMedia = document.getElementById('modal-media-content');
    const modalBody = document.getElementById('modal-body-content');

    if (modalMedia) {
      modalMedia.innerHTML = project.imageSvg;
    }

    if (modalBody) {
      modalBody.innerHTML = `
        <span class="modal-badge">${project.categoryName}</span>
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-desc">${project.description}</p>
        
        <h3 class="modal-section-title">Fitur & Arsitektur Utama</h3>
        <ul class="modal-features-list">
          ${project.features.map((f) => `<li>${f}</li>`).join('')}
        </ul>

        <h3 class="modal-section-title">Teknologi & Instrumen</h3>
        <div class="modal-tags-wrap">
          ${project.tags.map((t) => `<span class="tag-pill" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">${t}</span>`).join('')}
        </div>

        <div class="modal-cta-row">
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-cosmic btn-shine">
            Buka Live Demo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-cosmic">
            Lihat Source Code
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </a>
          <span style="margin-left: auto; font-family: var(--font-mono); font-size: 0.85rem; color: var(--color-cyan);">
            ${project.metrics}
          </span>
        </div>
      `;
    }

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ProjectGallery();
});

