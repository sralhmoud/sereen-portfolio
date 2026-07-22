/* =========================================================
   Sereen Alhmoud — Projects rendering (cards + detail modal)
   Reads from PROJECTS (js/projects-data.js)
   ========================================================= */

(function () {
  const grid = document.getElementById('projects-grid');

  const projectsLeft = document.querySelector('.projects-arrow-left');
const projectsRight = document.querySelector('.projects-arrow-right');
const projectsProgress = document.querySelector('.projects-progress');
const projectsProgressThumb = document.querySelector('.projects-progress-thumb');


/* =========================================
   Projects Horizontal Navigation
   ========================================= */

function updateProjectsNavigation() {
  if (!grid || !projectsProgressThumb) return;

  const maxScroll = grid.scrollWidth - grid.clientWidth;

  if (maxScroll <= 0) {
    projectsProgressThumb.style.width = '100%';
    projectsProgressThumb.style.transform = 'translateX(0)';
    
    if (projectsLeft) projectsLeft.disabled = true;
    if (projectsRight) projectsRight.disabled = true;

    return;
  }

  /* Calculate progress */
  const scrollPercentage = grid.scrollLeft / maxScroll;

  /* Calculate thumb width */
  const visibleRatio = grid.clientWidth / grid.scrollWidth;
  const thumbWidth = Math.max(20, visibleRatio * 100);

  projectsProgressThumb.style.width = `${thumbWidth}%`;

  /* Move thumb */
  const availableTrack = 100 - thumbWidth;
  projectsProgressThumb.style.transform =
    `translateX(${scrollPercentage * availableTrack}%)`;

  /* Disable arrows at edges */
  if (projectsLeft) {
    projectsLeft.disabled = grid.scrollLeft <= 5;
  }

  if (projectsRight) {
    projectsRight.disabled =
      grid.scrollLeft >= maxScroll - 5;
  }
}


/* Move left */

projectsLeft?.addEventListener('click', () => {
  grid.scrollBy({
    left: -404,
    behavior: 'smooth'
  });
});


/* Move right */

projectsRight?.addEventListener('click', () => {
  grid.scrollBy({
    left: 404,
    behavior: 'smooth'
  });
});


/* Update progress while scrolling */

grid.addEventListener('scroll', updateProjectsNavigation);


/* Update after resizing */

window.addEventListener('resize', updateProjectsNavigation);


/* Click on progress bar to jump */

projectsProgress?.addEventListener('click', (e) => {
  const rect = projectsProgress.getBoundingClientRect();

  const clickPosition =
    (e.clientX - rect.left) / rect.width;

  const maxScroll =
    grid.scrollWidth - grid.clientWidth;

  grid.scrollTo({
    left: clickPosition * maxScroll,
    behavior: 'smooth'
  });
});


/* Initial state */

setTimeout(updateProjectsNavigation, 100);
  const overlay = document.getElementById('project-modal-overlay');
  const modal = document.getElementById('project-modal');
  const modalScroll = document.getElementById('modal-scroll');
  const modalClose = document.getElementById('modal-close');

  if (!grid || typeof PROJECTS === 'undefined') return;

  /* ---------- Helpers ---------- */

  // Renders an image if src exists, otherwise a landscape placeholder box
  function mediaBox(src, altText, extraClass) {
    if (src) {
      return `<div class="media-box ${extraClass || ''}"><img src="${src}" alt="${altText}" loading="lazy"></div>`;
    }
    return `
      <div class="media-box media-placeholder ${extraClass || ''}">
        <i class="fa-solid fa-image"></i>
        <span>Screenshot coming soon</span>
      </div>`;
  }

  function tagChips(tags) {
    return tags.map(t => `<span class="tag-chip">${t}</span>`).join('');
  }

  // Collage of real screenshots shown ONLY on the outer card cover (never inside the modal).
  // Rendered as two overlapping "browser window" mockups (own title bar + traffic-light dots),
  // stacked at an offset — matching the reference stacked-panel style.
function cardCoverCollage(project) {
  const images = project.coverImages || [];

  // ===== Mubeen =====
  if (project.id === "mubeen") {
    return `
      <div class="card-cover-collage collage-mubeen">

        <div class="collage-window window-main">
          <div class="collage-window-bar">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="collage-window-img">
            <img src="${images[0]}" alt="${project.title}">
          </div>
        </div>

        <div class="collage-window window-top">
          <div class="collage-window-bar">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="collage-window-img">
            <img src="${images[1]}" alt="${project.title}">
          </div>
        </div>

        <div class="collage-window window-bottom">
          <div class="collage-window-bar">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>
          <div class="collage-window-img">
            <img src="${images[2]}" alt="${project.title}">
          </div>
        </div>

      </div>
    `;
  }

  // ===== Travelly =====
if (project.id === "travelly" || project.id === "arabic-piqa") {
    return `
      <div class="card-cover-collage collage-travelly">

        <div class="collage-window back">
          <div class="collage-window-bar">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>

          <div class="collage-window-img">
            <img src="${images[0]}" alt="${project.title}">
          </div>
        </div>

        <div class="collage-window front">
          <div class="collage-window-bar">
            <span class="dot dot-red"></span>
            <span class="dot dot-yellow"></span>
            <span class="dot dot-green"></span>
          </div>

          <div class="collage-window-img">
            <img src="${images[1]}" alt="${project.title}">
          </div>
        </div>

      </div>
    `;
  }
if (project.id === "planbee") {
  return `
    <div class="card-cover-collage collage-planbee">

      <div class="collage-window img1">
        <div class="collage-window-bar">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="collage-window-img">
          <img src="${images[0]}" alt="${project.title}">
        </div>
      </div>

      <div class="collage-window img2">
        <div class="collage-window-bar">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="collage-window-img">
          <img src="${images[1]}" alt="${project.title}">
        </div>
      </div>

      <div class="collage-window img3">
        <div class="collage-window-bar">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="collage-window-img">
          <img src="${images[2]}" alt="${project.title}">
        </div>
      </div>

    </div>
  `;
}

  // ===== Default =====
  return mediaBox(project.cover, project.title);
}

  // ---- Generated visual for "dataset" type projects (no screenshots available) ----
  function datasetCoverMini() {
    return `
      <div class="dataset-cover">
        <div class="dataset-flow">
          <span class="flow-chip flow-chip-en">EN</span>
          <i class="fa-solid fa-right-left flow-arrow"></i>
          <span class="flow-chip flow-chip-ar">AR</span>
        </div>
        <div class="dataset-bars" aria-hidden="true">
          <span style="height:26%"></span>
          <span style="height:34%"></span>
          <span style="height:58%"></span>
          <span style="height:82%"></span>
          <span style="height:100%"></span>
        </div>
        <span class="dataset-cover-label"><i class="fa-solid fa-database"></i> Dataset &amp; Benchmarking</span>
      </div>`;
  }

  function datasetHero() {
    const stages = [
      { icon: 'fa-solid fa-file-lines', label: 'English PIQA' },
      { icon: 'fa-solid fa-language', label: 'Translate &amp; Adapt' },
      { icon: 'fa-solid fa-filter', label: 'Filter &amp; QA' },
      { icon: 'fa-solid fa-database', label: 'Arabic Dataset' },
      { icon: 'fa-solid fa-robot', label: 'Benchmark Models' }
    ];
    return `
      <div class="modal-hero-dataset">
        <div class="hero-pipeline-mini">
          ${stages.map((s, i) => `
            <div class="stage">
              <div class="stage-icon"><i class="${s.icon}"></i></div>
              <span class="stage-label">${s.label}</span>
            </div>
            ${i < stages.length - 1 ? '<span class="stage-connector"></span>' : ''}
          `).join('')}
        </div>
        <div class="hero-stats-strip">
          <div class="hero-stat"><strong>3,076</strong><span>Dataset Items</span></div>
          <div class="hero-stat"><strong>5</strong><span>Transformer Models</span></div>
          <div class="hero-stat"><strong>93.50%</strong><span>Top Accuracy (GPT-4o)</span></div>
        </div>
      </div>`;
  }

  /* ---------- Card (grid preview) ---------- */

  function buildCard(project, index) {
    const card = document.createElement('article');
    card.className = 'project-card glass';
    card.setAttribute('data-reveal', '');
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Open ${project.title} project details`);
    card.dataset.projectId = project.id;

    const isDataset = project.type === 'dataset';
    const hasCollage = project.coverImages && project.coverImages.length;
    card.innerHTML = `
    <span class="card-year-badge">${project.year}</span>
      <div class="card-cover ${isDataset ? 'card-cover-dataset' : ''} ${hasCollage ? 'card-cover-has-collage' : ''}">
        ${hasCollage ? cardCoverCollage(project) : (isDataset ? datasetCoverMini() : mediaBox(project.cover, project.title, 'card-cover-img'))}
        ${!hasCollage ? `
        <div class="card-mockup">
          <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
        </div>` : ''}
        
      </div>
      <div class="card-body ${hasCollage ? 'card-body-compact' : ''}">
        <h3 class="card-title">${project.title}${project.titleArabic ? ` <span class="card-title-ar">${project.titleArabic}</span>` : ''}</h3>
        <p class="card-summary">${project.cardSummary}</p>
        <div class="card-tags">${tagChips(project.tags.slice(0, 3))}</div>
        <span class="card-cta">View Project <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
      </div>
    `;

    card.addEventListener('click', () => openProjectModal(project));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openProjectModal(project);
    });

    return card;
  }

  function renderCards() {
    grid.innerHTML = '';
    PROJECTS.forEach((project, i) => {
      grid.appendChild(buildCard(project, i));
    });

    // re-run reveal-on-scroll for newly injected cards
    if (window.reobserveReveal) window.reobserveReveal();
  }

  /* ---------- Detail Modal ---------- */

  function buildTechStack(techStack) {
    return Object.entries(techStack).map(([group, items]) => `
      <div class="tech-group">
        <span class="tech-group-label">${group}</span>
        <div class="tech-group-items">
          ${items.map(i => `<span class="tag-chip tag-chip-tech">${i}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  function buildFeatures(features) {
    return features.map(f => `
      <div class="feature-item">
        <div class="feature-icon"><i class="${f.icon}"></i></div>
        <div>
          <h4>${f.title}</h4>
          <p>${f.desc}</p>
        </div>
      </div>
    `).join('');
  }

  function buildList(items) {
    return `<ul class="detail-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
  }

  function buildArchitecture(arch) {
    if (!arch) return '';
    return `
      <div class="detail-block">
        <h3><i class="fa-solid fa-sitemap"></i> System Architecture</h3>
        <p class="detail-text">${arch.summary}</p>
        <div class="arch-columns">
          <div class="arch-col">
            <h4><i class="fa-solid fa-mobile-screen"></i> Client Side</h4>
            ${buildList(arch.client)}
          </div>
          <div class="arch-col">
            <h4><i class="fa-solid fa-server"></i> Server Side</h4>
            ${buildList(arch.server)}
          </div>
        </div>
      </div>`;
  }

  function buildLinks(links) {
    if (!links || !links.length) return '';
    return `
      <div class="modal-links">
        ${links.map(l => `<a href="${l.url}" target="_blank" rel="noopener" class="btn btn-outline btn-sm"><i class="${l.icon}"></i> ${l.label}</a>`).join('')}
      </div>`;
  }

  /* ---------- Dataset-type detail builders (Arabic PIQA etc.) ---------- */

  function buildPipeline(pipeline) {
    if (!pipeline || !pipeline.length) return '';
    return `
      <div class="detail-block">
        <h3><i class="fa-solid fa-route"></i> Dataset Construction Pipeline</h3>
        <div class="pipeline-steps">
          ${pipeline.map(p => `
            <div class="pipeline-step">
              <span class="pipeline-step-num">${p.step}</span>
              <div class="pipeline-step-body">
                <h4>${p.title}</h4>
                <ul class="detail-list">${p.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
              </div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function buildDatasetStats(stats) {
    if (!stats) return '';
    const order = ['full', 'train', 'val', 'test'];
    return `
      <div class="detail-block">
        <h3><i class="fa-solid fa-chart-pie"></i> Dataset Overview</h3>
        <div class="stats-grid">
          ${order.filter(k => stats[k]).map(k => `
            <div class="stat-card ${k === 'full' ? 'stat-card-main' : ''}">
              <span class="stat-card-value">${stats[k].items}</span>
              <span class="stat-card-label">${stats[k].label}</span>
              <span class="stat-card-note">${stats[k].note}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function buildLinguisticStats(items) {
    if (!items || !items.length) return '';
    return `
      <div class="detail-block">
        <h3><i class="fa-solid fa-spell-check"></i> Corpus &amp; Linguistic Analysis</h3>
        <div class="linguistic-grid">
          ${items.map(i => `
            <div class="linguistic-item">
              <span class="linguistic-value">${i.value}</span>
              <span class="linguistic-label">${i.label}</span>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function buildCorpusMethods(methods) {
    if (!methods || !methods.length) return '';
    return `
      <div class="detail-block">
        <h3><i class="fa-solid fa-magnifying-glass-chart"></i> Corpus Analysis Methods</h3>
        <div class="method-tags">${methods.map(m => `<span class="tag-chip tag-chip-tech">${m}</span>`).join('')}</div>
      </div>`;
  }

  function buildAdaptations(adaptations) {
    if (!adaptations || !adaptations.length) return '';
    return `
      <div class="detail-block">
        <h3><i class="fa-solid fa-earth-africa"></i> Cultural &amp; Translation Adaptations</h3>
        <div class="adaptations-grid">
          ${adaptations.map(a => `
            <div class="adaptation-item">
              <div class="adaptation-icon"><i class="${a.icon}"></i></div>
              <span class="adaptation-value">${a.value}</span>
              <span class="adaptation-label">${a.label}</span>
              <p class="adaptation-desc">${a.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function buildModelsComparison(models) {
    if (!models || !models.length) return '';
    const maxAcc = Math.max(...models.map(m => m.accuracy));
    return `
      <div class="detail-block">
        <h3><i class="fa-solid fa-ranking-star"></i> Models Performance Comparison</h3>
        <div class="models-comparison">
          ${models.map(m => `
            <div class="model-row">
              <div class="model-row-head">
                <span class="model-name">${m.model}</span>
                <span class="model-accuracy">${m.accuracy}%</span>
              </div>
              <div class="model-bar-track"><div class="model-bar-fill" style="width:${(m.accuracy / maxAcc) * 100}%"></div></div>
              ${m.sequential !== 'N/A' ? `<span class="model-improvement">${m.sequential}</span>` : ''}
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function buildTransformerComparison(items) {
    if (!items || !items.length) return '';
    const maxAcc = Math.max(...items.map(i => i.accuracy));
    return `
      <div class="detail-block">
        <h3><i class="fa-solid fa-microchip"></i> Transformer Models Comparison</h3>
        <div class="transformer-bars">
          ${items.map(i => `
            <div class="transformer-bar-row">
              <span class="transformer-bar-label">${i.model}</span>
              <div class="transformer-bar-track"><div class="transformer-bar-fill" style="width:${(i.accuracy / maxAcc) * 100}%">${i.accuracy}%</div></div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function buildTrainingConfig(config) {
    if (!config || !config.length) return '';
    return `
      <div class="detail-block">
        <h3><i class="fa-solid fa-sliders"></i> Training Configuration</h3>
        <div class="config-chips">
          ${config.map(c => `<div class="config-chip"><span class="config-chip-value">${c.value}</span><span class="config-chip-label">${c.label}</span></div>`).join('')}
        </div>
      </div>`;
  }

  function buildErrorAnalysis(err) {
    if (!err) return '';
    return `
      <div class="detail-block">
        <h3><i class="fa-solid fa-bug"></i> Error Analysis</h3>
        <p class="detail-text">${err.summary}</p>
        <div class="error-categories">${err.categories.map(c => `<span class="tag-chip">${c}</span>`).join('')}</div>
        <div class="fixes-table">
          ${err.fixes.map(f => `
            <div class="fix-row">
              <span class="fix-type">${f.type}</span>
              <span class="fix-values"><strong>${f.before}%</strong> <i class="fa-solid fa-arrow-right"></i> <strong>${f.after}%</strong> <em class="fix-change">(${f.change})</em></span>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function buildDatasetModalContent(project) {
    return `
      ${datasetHero()}

      <div class="modal-header">
        <p class="modal-eyebrow">${project.status}</p>
        <h2 id="modal-title" class="modal-title">${project.title} ${project.titleArabic ? `<span class="modal-title-ar">${project.titleArabic}</span>` : ''}</h2>
        <p class="modal-tagline">${project.tagline}</p>
        <div class="modal-meta">
          <span><i class="fa-solid fa-calendar"></i> ${project.duration}</span>
          <span><i class="fa-solid fa-user-tie"></i> ${project.role}</span>
        </div>
        <div class="card-tags modal-tags">${tagChips(project.tags)}</div>
        ${buildLinks(project.links)}
      </div>

      <div class="modal-body">
        <div class="detail-block">
          <h3><i class="fa-solid fa-lightbulb"></i> Overview</h3>
          <p class="detail-text">${project.overview}</p>
        </div>

        ${(project.motivation || project.relevance) ? `
        <div class="detail-grid-2">
          ${project.motivation ? `
          <div class="detail-block">
            <h3><i class="fa-solid fa-triangle-exclamation"></i> Motivation</h3>
            ${buildList(project.motivation)}
          </div>` : ''}
          ${project.relevance ? `
          <div class="detail-block">
            <h3><i class="fa-solid fa-puzzle-piece"></i> Relevance</h3>
            ${buildList(project.relevance)}
          </div>` : ''}
        </div>` : ''}

        ${buildPipeline(project.pipeline)}
        ${buildCorpusMethods(project.corpusAnalysisMethods)}
        ${buildDatasetStats(project.datasetStats)}
        ${buildLinguisticStats(project.linguisticStats)}
        ${buildAdaptations(project.adaptations)}
        ${buildModelsComparison(project.modelsComparison)}
        ${buildTransformerComparison(project.transformerComparison)}
        ${buildTrainingConfig(project.trainingConfig)}
        ${buildErrorAnalysis(project.errorAnalysis)}

        ${project.generativeAI ? `
        <div class="detail-block">
          <h3><i class="fa-solid fa-robot"></i> Use of Generative AI</h3>
          ${buildList(project.generativeAI)}
        </div>` : ''}

        ${project.lessonsLearned ? `
        <div class="detail-block">
          <h3><i class="fa-solid fa-graduation-cap"></i> Lessons Learned</h3>
          ${buildList(project.lessonsLearned)}
        </div>` : ''}

      </div>
    `;
  }

  function buildModalContent(project) {
    if (project.type === 'dataset') return buildDatasetModalContent(project);
    return `
      <div class="modal-header modal-header-no-hero">
        <p class="modal-eyebrow">${project.status}</p>
        <h2 id="modal-title" class="modal-title">${project.title} ${project.titleArabic ? `<span class="modal-title-ar">${project.titleArabic}</span>` : ''}</h2>
        <p class="modal-tagline">${project.tagline}</p>
        <div class="modal-meta">
          <span><i class="fa-solid fa-calendar"></i> ${project.duration}</span>
          <span><i class="fa-solid fa-user-tie"></i> ${project.role}</span>
        </div>
        <div class="card-tags modal-tags">${tagChips(project.tags)}</div>
        ${buildLinks(project.links)}
      </div>

      <div class="modal-body">
        <div class="detail-block">
          <h3><i class="fa-solid fa-lightbulb"></i> Overview</h3>
          <p class="detail-text">${project.overview}</p>
        </div>

        <div class="detail-grid-2">
          <div class="detail-block">
            <h3><i class="fa-solid fa-triangle-exclamation"></i> The Problem</h3>
            <p class="detail-text">${project.problem}</p>
          </div>
          <div class="detail-block">
            <h3><i class="fa-solid fa-puzzle-piece"></i> The Solution</h3>
            <p class="detail-text">${project.solution}</p>
          </div>
        </div>

        ${project.vision ? `
        <div class="detail-block vision-block">
          <h3><i class="fa-solid fa-eye"></i> Product Vision</h3>
          <p class="detail-text">${project.vision}</p>
        </div>` : ''}

        <div class="detail-block">
          <h3><i class="fa-solid fa-star"></i> Key Features</h3>
          <div class="features-grid">${buildFeatures(project.features)}</div>
        </div>

        ${project.objectives ? `
        <div class="detail-block">
          <h3><i class="fa-solid fa-bullseye"></i> Objectives</h3>
          ${buildList(project.objectives)}
        </div>` : ''}

        <div class="detail-block">
          <h3><i class="fa-solid fa-layer-group"></i> Tech Stack</h3>
          <div class="tech-groups">${buildTechStack(project.techStack)}</div>
        </div>

        ${buildArchitecture(project.architecture)}

        ${project.methodology ? `
        <div class="detail-block">
          <h3><i class="fa-solid fa-diagram-project"></i> Methodology</h3>
          <p class="detail-text">${project.methodology}</p>
        </div>` : ''}

        ${project.results ? `
        <div class="detail-block">
          <h3><i class="fa-solid fa-flag-checkered"></i> Results &amp; Testing</h3>
          ${buildList(project.results)}
        </div>` : ''}
      </div>
    `;
  }

  function openProjectModal(project) {
    modalScroll.innerHTML = buildModalContent(project);
    overlay.classList.add('open');
    document.body.classList.add('modal-open');
    modal.scrollTop = 0;
  }

  function closeProjectModal() {
    overlay.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  modalClose.addEventListener('click', closeProjectModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeProjectModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  renderCards();
})();
