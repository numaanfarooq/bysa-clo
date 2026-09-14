document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('productGrid');
  const filtersEl = document.getElementById('filters');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('modalBody');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  function money(n){
    return '₹' + n.toLocaleString('en-IN');
  }

  function renderFilters(){
    filtersEl.innerHTML = COLLECTIONS.map(c =>
      `<button class="filter-btn${c.key==='all' ? ' active' : ''}" data-key="${c.key}">${c.label}</button>`
    ).join('');
  }

  function cardHTML(p){
    return `
      <div class="card" data-collection="${p.collection}" data-id="${p.id}">
        <div class="card-media">
          <span class="card-tag">${p.collection}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="card-body">
          <h3>${p.name}</h3>
          <div class="card-price">${money(p.price)}</div>
          <span class="card-cta">View details →</span>
        </div>
      </div>`;
  }

  function renderGrid(filter){
    const items = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.collection === filter);
    grid.innerHTML = items.map(cardHTML).join('');
    attachCardEvents();
    observeCards();
  }

  function attachCardEvents(){
    grid.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => openModal(Number(card.dataset.id)));
    });
  }

  function observeCards(){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    grid.querySelectorAll('.card').forEach(c => io.observe(c));
  }

  function openModal(id){
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    modalBody.innerHTML = `
      <button class="modal-close" id="modalClose">&times;</button>
      <div class="modal-media"><img src="${p.image}" alt="${p.name}"></div>
      <div class="modal-info">
        <div class="tag">${p.collection}</div>
        <h3>${p.name}</h3>
        <div class="modal-price">${money(p.price)}</div>
        <p class="modal-desc">${p.description}</p>
        <div class="modal-meta"><strong>Fabric:</strong> ${p.fabric}</div>
        <div class="modal-meta"><strong>Sizes</strong></div>
        <div class="modal-sizes">${p.sizes.map(s => `<span class="size-pill">${s}</span>`).join('')}</div>
        <div class="modal-actions">
          <a class="btn btn-primary" target="_blank" rel="noopener" href="${INSTAGRAM_URL}">Order on Instagram</a>
          <a class="btn btn-outline" target="_blank" rel="noopener" href="https://instagram.com/direct/new/?text=${encodeURIComponent('Hi! I\\'m interested in the ' + p.name)}">DM to Enquire</a>
        </div>
      </div>`;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalClose').addEventListener('click', closeModal);
  }

  function closeModal(){
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  filtersEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(btn.dataset.key);
  });

  if (navToggle){
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  // Simple parallax on hero blobs based on scroll
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const offset = window.scrollY * 0.25;
    hero.style.backgroundPosition = `center ${offset}px`;
  });

  renderFilters();
  renderGrid('all');
});
