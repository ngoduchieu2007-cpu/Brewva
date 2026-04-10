/* ---------- WELCOME ---------- */
function renderWelcome() {
  const app = $('app');
  app.innerHTML = `
    <div class="welcome">
      ${mascotSVG('celebrate')}
      <h1>Welcome to Brewva!</h1>
      <p class="tagline">Learn Java from zero — one cute lesson at a time.</p>
      <div class="actions">
        <button class="btn btn-primary btn-block btn-lg" id="start-btn">Let's go!</button>
      </div>
    </div>
  `;
  $('start-btn').onclick = () => {
    state.firstOpen = false;
    saveState();
    render();
  };
}

/* ---------- HOME / PATH ---------- */
function renderHome() {
  const app = $('app');
  app.innerHTML = renderTopbar() + `<div class="screen" id="path-screen"></div>`;
  bindTopbar();

  const screen = $('path-screen');
  let firstUnlocked = true;

  UNITS.forEach((unit, ui) => {
    const banner = el(`
      <div class="unit-banner" style="--unit-color:${unit.color};--unit-shadow:${unit.shadow};">
        <div class="unit-banner-info">
          <div class="unit-banner-eyebrow">${escapeHtml(unit.eyebrow)}</div>
          <div class="unit-banner-title">${escapeHtml(unit.name)}</div>
        </div>
        <div class="unit-banner-icon">${ICONS[unit.icon] || ICONS.cup}</div>
      </div>
    `);
    screen.appendChild(banner);

    const path = document.createElement('div');
    path.className = 'lesson-path';
    path.style.setProperty('--unit-color', unit.color);
    path.style.setProperty('--unit-shadow', unit.shadow);

    unit.lessons.forEach((lesson, li) => {
      const completed = !!state.completed[lesson.id];
      const locked = !isLessonUnlocked(unit, li);
      const isCurrent = !completed && !locked && firstUnlocked;
      if (isCurrent) firstUnlocked = false;

      const node = el(`
        <div class="lesson-node lesson-node-row-${(li % 6) + 1} ${isCurrent ? 'lesson-node-current' : ''}"
             data-locked="${locked}"
             data-completed="${completed}">
          ${isCurrent ? `<div class="start-tag" style="color:${unit.color}">START</div>` : ''}
          <button class="lesson-bubble" aria-label="${escapeHtml(lesson.title)}"
                  style="--node-bg:${completed ? 'var(--gold)' : (locked ? '#E5E5E5' : unit.color)};
                         --node-shadow:${completed ? 'var(--gold-dark)' : (locked ? '#BFBFBF' : unit.shadow)};">
            ${completed ? ICONS.crown : (locked ? ICONS.lock : ICONS.star)}
          </button>
          <div class="lesson-label">${escapeHtml(lesson.title)}</div>
        </div>
      `);
      const btn = node.querySelector('.lesson-bubble');
      if (locked) {
        btn.onclick = () => toast('Finish the previous lesson first!');
      } else {
        btn.onclick = () => startLesson(unit.id, lesson.id);
      }
      path.appendChild(node);
    });
    screen.appendChild(path);
  });
}

function isLessonUnlocked(unit, lessonIdx) {
  if (lessonIdx === 0) {
    // first lesson of unit: unlocked if all previous units done OR this is first unit
    const unitIdx = UNITS.findIndex(u => u.id === unit.id);
    if (unitIdx === 0) return true;
    const prevUnit = UNITS[unitIdx - 1];
    return prevUnit.lessons.every(l => state.completed[l.id]);
  }
  const prev = unit.lessons[lessonIdx - 1];
  return !!state.completed[prev.id];
}

/* ---------- TOPBAR ---------- */
function renderTopbar() {
  const isCold = !state.lastDate || (state.lastDate !== todayStr() && state.lastDate !== yesterdayStr());
  return `
    <div class="topbar">
      <div class="stat stat-streak ${isCold ? 'cold' : ''}">${ICONS.flame}<span>${state.streak}</span></div>
      <div class="stat stat-hearts">${ICONS.heart}<span>${state.hearts}</span></div>
      <div class="stat stat-xp">${ICONS.bolt}<span>${state.xp}</span></div>
      <div class="topbar-spacer"></div>
      <button class="icon-btn" id="reset-btn" aria-label="Reset progress" title="Reset">${ICONS.reset}</button>
    </div>
  `;
}
function bindTopbar() {
  const r = $('reset-btn');
  if (r) r.onclick = openResetModal;
}

function openResetModal() {
  const m = el(`
    <div class="modal-bg" id="reset-modal">
      <div class="modal">
        ${mascotSVG('think')}
        <h2>Reset progress?</h2>
        <p>This will clear ALL of your XP, streak, hearts, and lesson progress. You can't undo it.</p>
        <div class="modal-actions">
          <button class="btn btn-danger btn-block" id="r-yes">Yes, reset</button>
          <button class="btn btn-ghost btn-block" id="r-no">Cancel</button>
        </div>
      </div>
    </div>
  `);
  document.body.appendChild(m);
  $('r-yes').onclick = () => {
    localStorage.removeItem(SAVE_KEY);
    state = {...DEFAULT_STATE};
    m.remove();
    render();
  };
  $('r-no').onclick = () => m.remove();
}

/* ---------- LESSON SESSION ---------- */
function startLesson(unitId, lessonId) {
  const unit = UNITS.find(u => u.id === unitId);
  const lesson = unit.lessons.find(l => l.id === lessonId);
  session = {
    unit, lesson,
    qIdx: 0,
    correct: 0,
    wrong: 0,
    startTime: Date.now(),
    selected: null,
    built: [],
    answered: false,
    wasCorrect: false,
    phase: state.introsSeen[lessonId] ? 'q' : 'intro'
  };
  render();
}
function endSession() { session = null; render(); }

/* ---------- INTRO SCREEN ---------- */
function renderIntro() {
  const { lesson, unit } = session;
  const app = $('app');
  app.innerHTML = `
    <div class="lesson-header">
      <button class="icon-btn" id="close-btn" aria-label="Close">${ICONS.close}</button>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:0%;"></div></div>
    </div>
    <div class="lesson-body intro-card">
      ${mascotSVG('happy')}
      <h2>${escapeHtml(lesson.intro.title)}</h2>
      <div class="intro-content">${lesson.intro.html}</div>
    </div>
    <div class="check-bar">
      <button class="btn btn-primary btn-block btn-lg" id="continue-intro">Got it!</button>
    </div>
  `;
  $('close-btn').onclick = confirmQuit;
  $('continue-intro').onclick = () => {
    state.introsSeen[lesson.id] = true;
    saveState();
    session.phase = 'q';
    render();
  };
}

/* ---------- FINISH LESSON ---------- */
function finishLesson() {
  const { lesson } = session;
  if (!state.completed[lesson.id]) {
    state.completed[lesson.id] = true;
  }
  // XP: 10 per correct
  const earned = session.correct * 10;
  session.xpEarned = earned;
  state.xp += earned;
  const streakBumped = bumpStreak();
  session.streakBumped = streakBumped;
  saveState();
}

/* ---------- COMPLETE SCREEN ---------- */
function renderComplete() {
  const { lesson, startTime } = session;
  const seconds = Math.max(1, Math.round((Date.now() - startTime) / 1000));
  const mins = Math.floor(seconds / 60);
  const sec = seconds % 60;
  const timeStr = mins > 0 ? `${mins}:${String(sec).padStart(2,'0')}` : `${sec}s`;
  const accuracy = Math.round(session.correct / lesson.questions.length * 100);

  const app = $('app');
  app.innerHTML = `
    <div class="complete-screen">
      ${mascotSVG('celebrate')}
      <h1>Lesson complete!</h1>
      <p style="color:var(--text-soft); font-weight:700; margin-top:6px;">Great work — keep brewing.</p>
      <div class="reward-row">
        <div class="reward-card reward-xp">
          <div class="reward-label">XP</div>
          ${ICONS.bolt}
          <div class="reward-value">+${session.xpEarned}</div>
        </div>
        <div class="reward-card reward-time">
          <div class="reward-label">Time</div>
          ${ICONS.star}
          <div class="reward-value">${timeStr}</div>
        </div>
        <div class="reward-card">
          <div class="reward-label">Accuracy</div>
          ${ICONS.crown}
          <div class="reward-value" style="color:var(--green-dark)">${accuracy}%</div>
        </div>
      </div>
      <div style="width:100%; max-width:320px; margin: 8px auto 0;">
        <button class="btn btn-primary btn-block btn-lg" id="done-btn">Continue</button>
      </div>
    </div>
  `;
  $('done-btn').onclick = () => { session = null; render(); };
  fireConfetti();
}

function fireConfetti() {
  const colors = ['#FF8C42','#58CC02','#1CB0F6','#FFC800','#FF86B0','#CE82FF'];
  for (let i = 0; i < 40; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = (5 + Math.random() * 90) + '%';
    c.style.background = colors[i % colors.length];
    c.style.animationDelay = (Math.random() * 0.6) + 's';
    c.style.animationDuration = (1.8 + Math.random() * 1.4) + 's';
    if (Math.random() > 0.5) c.style.borderRadius = '50%';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3500);
  }
}

/* ---------- NO HEARTS ---------- */
function renderNoHearts() {
  const app = $('app');
  const remainingMs = state.lastHeartLoss
    ? Math.max(0, HEART_REGEN_MS - (Date.now() - state.lastHeartLoss))
    : 0;
  const mins = Math.ceil(remainingMs / 60000);
  app.innerHTML = `
    ${renderTopbar()}
    <div class="nohearts-screen">
      ${mascotSVG('sad')}
      <h1>Out of hearts!</h1>
      <p>${mins > 0 ? `One heart returns in about <b>${mins} min</b>.` : 'Heart on the way!'}<br>Or refill them now to keep going.</p>
      <div style="width:100%; max-width:320px; display:flex; flex-direction:column; gap:10px;">
        <button class="btn btn-java btn-block btn-lg" id="refill">Refill all hearts</button>
        <button class="btn btn-ghost btn-block btn-lg" id="back">Back to lessons</button>
      </div>
    </div>
  `;
  bindTopbar();
  $('refill').onclick = () => {
    state.hearts = state.maxHearts;
    state.lastHeartLoss = 0;
    saveState();
    render();
  };
  $('back').onclick = () => render();
}

/* ---------- QUIT CONFIRM ---------- */
function confirmQuit() {
  const m = el(`
    <div class="modal-bg">
      <div class="modal">
        ${mascotSVG('sad')}
        <h2>End lesson?</h2>
        <p>You'll lose your progress in this lesson.</p>
        <div class="modal-actions">
          <button class="btn btn-danger btn-block" id="q-yes">End lesson</button>
          <button class="btn btn-ghost btn-block" id="q-no">Keep going</button>
        </div>
      </div>
    </div>
  `);
  document.body.appendChild(m);
  $('q-yes').onclick = () => { m.remove(); session = null; render(); };
  $('q-no').onclick = () => m.remove();
}
