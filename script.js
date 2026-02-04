/**
 * Kyro Zhao · Personal Site
 * Modal interactions + accessibility
 */

(function () {
  'use strict';

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  }

  function unlockScroll() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.removeAttribute('hidden');
    lockScroll();
    modal.querySelector('.modal-close').focus();
    document.addEventListener('keydown', handleEscape);
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.setAttribute('hidden', '');
    unlockScroll();
    document.removeEventListener('keydown', handleEscape);
  }

  function handleEscape(e) {
    if (e.key === 'Escape') {
      const openModalEl = document.querySelector('.modal:not([hidden])');
      if (openModalEl) closeModal(openModalEl.id);
    }
  }

  function init() {
    // Portfolio cards: click to open modal
    document.querySelectorAll('.portfolio-card').forEach((card) => {
      const modalId = card.getAttribute('data-modal');
      if (!modalId) return;

      const open = () => openModal(modalId);

      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-close]')) return;
        open();
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });

    // Modal: close button + backdrop click
    document.querySelectorAll('.modal [data-close]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) closeModal(modal.id);
      });
    });

    // Prevent modal content click from closing
    document.querySelectorAll('.modal-content').forEach((content) => {
      content.addEventListener('click', (e) => e.stopPropagation());
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
