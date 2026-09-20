(() => {
  'use strict';

  /* ----------------------------------------------------------------- */
  /* Data                                                               */
  /* ----------------------------------------------------------------- */

  const ICONS = {
    prophet: `
      <svg viewBox="0 0 100 100"><g class="icon-stroke">
        <path d="M50 84 V28" />
        <path d="M50 28 C50 16 60 12 68 16 C60 20 56 24 50 28 Z" />
        <path d="M38 84 H62" />
        <path d="M50 8 L52 14 L58 14 L53 18 L55 24 L50 20 L45 24 L47 18 L42 14 L48 14 Z" />
      </g></svg>`,
    student: `
      <svg viewBox="0 0 100 100"><g class="icon-stroke">
        <path d="M50 30 L86 44 L50 58 L14 44 Z" />
        <path d="M28 50 V66 C28 72 38 78 50 78 C62 78 72 72 72 66 V50" />
        <path d="M86 44 V64" />
      </g></svg>`,
    nurse: `
      <svg viewBox="0 0 100 100"><g class="icon-stroke">
        <circle cx="50" cy="50" r="30" />
        <path d="M50 36 V64" />
        <path d="M36 50 H64" />
      </g></svg>`,
  };

  const BLURBS = {
    prophet: 'Called before you could speak. Every word you carry is borrowed from a Voice greater than your own.',
    student: 'Restless and unfinished — still deciding who you’ll become, carrying faith like a subject you haven’t yet passed.',
    nurse: 'You spend your days healing bodies you cannot always save. The mountain asks what mercy actually costs.',
  };

  const ROLE_ORDER = ['nurse', 'student', 'prophet'];

  const ROLE_LABEL = {
    nurse: 'The Nurse',
    student: 'The College Student',
    prophet: 'The Prophet',
  };

  /* ----------------------------------------------------------------- */
  /* State                                                              */
  /* ----------------------------------------------------------------- */

  const state = { gender: null, avatar: null };

  const screens = document.querySelectorAll('.screen');
  const avatarRow = document.getElementById('avatarRow');

  function show(name) {
    screens.forEach(s => s.classList.toggle('is-active', s.dataset.screen === name));
  }

  /* ----------------------------------------------------------------- */
  /* Avatar cards                                                       */
  /* ----------------------------------------------------------------- */

  function renderAvatarCards() {
    avatarRow.innerHTML = '';
    ROLE_ORDER.forEach(roleId => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'avatar-card';
      card.dataset.avatar = roleId;
      card.innerHTML = `
        <span class="avatar-card__sigil">${ICONS[roleId]}</span>
        <span class="avatar-card__name">${ROLE_LABEL[roleId]}</span>
        <span class="avatar-card__blurb">${BLURBS[roleId]}</span>
        <span class="avatar-card__choose">Choose</span>
      `;
      card.addEventListener('click', () => chooseAvatar(roleId));
      avatarRow.appendChild(card);
    });
  }

  function chooseAvatar(roleId) {
    state.avatar = roleId;
    document.getElementById('confirmSigil').innerHTML = ICONS[roleId];
    document.getElementById('confirmName').textContent = ROLE_LABEL[roleId];
    document.getElementById('confirmRole').textContent =
      (state.gender === 'male' ? 'Male' : 'Female') + ' — ' + ROLE_LABEL[roleId];
    document.getElementById('confirmBlurb').textContent = BLURBS[roleId];
    show('confirm');
  }

  /* ----------------------------------------------------------------- */
  /* Navigation wiring                                                  */
  /* ----------------------------------------------------------------- */

  document.getElementById('btnBegin').addEventListener('click', () => show('gender'));

  document.querySelectorAll('.gender-card').forEach(btn => {
    btn.addEventListener('click', () => {
      state.gender = btn.dataset.gender;
      renderAvatarCards();
      show('avatar');
    });
  });

  document.querySelectorAll('[data-back]').forEach(btn => {
    btn.addEventListener('click', () => show(btn.dataset.back));
  });

  document.getElementById('btnAscend').addEventListener('click', () => {
    document.getElementById('continueEyebrow').textContent =
      (state.gender === 'male' ? 'Male' : 'Female') + ' · ' + (ROLE_LABEL[state.avatar] || '');
    show('continue');
  });

  document.getElementById('btnRestart').addEventListener('click', () => {
    state.gender = null;
    state.avatar = null;
    show('title');
  });

  /* keyboard: any key begins from the title screen */
  window.addEventListener('keydown', (e) => {
    const titleActive = document.querySelector('.screen--title').classList.contains('is-active');
    if (titleActive && !['Tab', 'Shift', 'Control', 'Alt', 'Meta'].includes(e.key)) {
      show('gender');
    }
  });

  /* ----------------------------------------------------------------- */
  /* Ember particles                                                    */
  /* ----------------------------------------------------------------- */

  function spawnEmbers(count) {
    const host = document.getElementById('embers');
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'ember';
      const left = Math.random() * 100;
      const duration = 9 + Math.random() * 10;
      const delay = Math.random() * 14;
      const drift = (Math.random() * 80 - 40).toFixed(0) + 'px';
      el.style.left = left + 'vw';
      el.style.setProperty('--drift', drift);
      el.style.animationDuration = duration + 's';
      el.style.animationDelay = delay + 's';
      frag.appendChild(el);
    }
    host.appendChild(frag);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    spawnEmbers(28);
  }

  show('title');
})();
