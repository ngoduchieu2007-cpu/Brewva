/* ---------- QUESTION SCREEN ---------- */
function renderQuestion() {
  const { lesson, qIdx } = session;
  const q = lesson.questions[qIdx];
  const total = lesson.questions.length;
  const progress = (qIdx / total) * 100;

  const app = $('app');
  app.innerHTML = `
    <div class="lesson-header">
      <button class="icon-btn" id="close-btn" aria-label="Close">${ICONS.close}</button>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:${progress}%;"></div></div>
      <div class="stat stat-hearts">${ICONS.heart}<span id="hearts-num">${state.hearts}</span></div>
    </div>
    <div class="lesson-body">
      <div class="question-prompt">${escapeHtml(q.q)}</div>
      ${q.code ? `<div class="code-block">${escapeHtml(q.code)}</div>` : ''}
      <div id="q-content"></div>
    </div>
    <div class="check-bar" id="check-bar">
      <button class="btn btn-primary btn-block btn-lg" id="check-btn" disabled>Check</button>
    </div>
  `;
  $('close-btn').onclick = confirmQuit;

  if (q.type === 'mc' || q.type === 'tf') renderMC(q);
  else if (q.type === 'build') renderBuild(q);
  else if (q.type === 'fill') renderFill(q);
  else if (q.type === 'type') renderType(q);

  $('check-btn').onclick = onCheck;
}

/* ---------- MC / TF ---------- */
function renderMC(q) {
  const c = $('q-content');
  const opts = q.type === 'tf' ? ['True','False'] : q.opts;
  const wrap = document.createElement('div');
  wrap.className = 'options';
  opts.forEach((opt, i) => {
    const btn = el(`
      <button class="option" data-i="${i}">
        <span class="opt-key">${i+1}</span>
        <span class="opt-label">${q.mono ? `<span class="mono">${escapeHtml(opt)}</span>` : escapeHtml(opt)}</span>
      </button>
    `);
    btn.onclick = () => {
      if (session.answered) return;
      wrap.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      btn.classList.add('selected');
      session.selected = i;
      $('check-btn').disabled = false;
    };
    wrap.appendChild(btn);
  });
  c.appendChild(wrap);
}

/* ---------- BUILD ---------- */
function renderBuild(q) {
  const c = $('q-content');
  // Shuffle tiles deterministically (per session+question) by reversing & rotating
  const shuffled = q.tiles.slice();
  // simple stable shuffle: pseudo-random based on lesson id + qIdx
  const seed = (session.lesson.id + session.qIdx).split('').reduce((a,c)=>a+c.charCodeAt(0),0);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = (seed * (i+1)) % (i+1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  c.innerHTML = `
    <div class="build-area" id="build-area"></div>
    <div class="tile-pool" id="tile-pool"></div>
  `;
  const pool = $('tile-pool');
  const area = $('build-area');
  session.built = [];

  shuffled.forEach((text, idx) => {
    const tile = el(`<button class="tile" data-tx="${escapeHtml(text)}" data-idx="${idx}">${escapeHtml(text)}</button>`);
    tile.onclick = () => {
      if (session.answered) return;
      if (tile.classList.contains('used')) return;
      tile.classList.add('used');
      const placed = el(`<button class="tile" data-orig="${idx}">${escapeHtml(text)}</button>`);
      placed.onclick = () => {
        if (session.answered) return;
        placed.remove();
        tile.classList.remove('used');
        session.built = [...area.querySelectorAll('.tile')].map(t => t.textContent);
        $('check-btn').disabled = session.built.length === 0;
      };
      area.appendChild(placed);
      session.built = [...area.querySelectorAll('.tile')].map(t => t.textContent);
      $('check-btn').disabled = session.built.length === 0;
    };
    pool.appendChild(tile);
  });
}

/* ---------- FILL ---------- */
function renderFill(q) {
  const c = $('q-content');
  // Render template with blank
  const parts = q.template.split('____');
  const left = escapeHtml(parts[0] || '');
  const right = escapeHtml(parts[1] || '');
  c.innerHTML = `
    <div class="fb-prompt">
      <div class="code-block"><code>${left}<span class="fb-blank" id="fb-blank">___</span>${right}</code></div>
    </div>
    <div class="options" id="fb-opts"></div>
  `;
  const wrap = $('fb-opts');
  q.opts.forEach((opt, i) => {
    const btn = el(`<button class="option" data-i="${i}"><span class="opt-key">${i+1}</span><span class="mono">${escapeHtml(opt)}</span></button>`);
    btn.onclick = () => {
      if (session.answered) return;
      wrap.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      btn.classList.add('selected');
      session.selected = i;
      const blank = $('fb-blank');
      blank.textContent = opt;
      blank.classList.add('filled');
      $('check-btn').disabled = false;
    };
    wrap.appendChild(btn);
  });
}

/* ---------- TYPE (write code) ---------- */
function renderType(q) {
  const c = $('q-content');
  c.innerHTML = `
    <div class="code-input-wrap">
      <textarea class="code-input" id="code-input"
        spellcheck="false"
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
        placeholder="${escapeHtml(q.hint || 'Type your code here…')}"></textarea>
      ${q.starter ? `<div class="code-hint">${ICONS.bulb || ''} Tip: starts with <span class="mono">${escapeHtml(q.starter)}</span></div>` : ''}
    </div>
  `;
  const ta = $('code-input');
  // Pre-fill if there's a prefix the user shouldn't have to retype
  if (q.prefill) { ta.value = q.prefill; }
  ta.focus();
  ta.addEventListener('input', () => {
    if (session.answered) return;
    session.typed = ta.value;
    $('check-btn').disabled = ta.value.trim().length === 0;
  });
}

/* Normalize code: collapse whitespace, strip space around operators/punct, normalize smart quotes */
function normCode(s) {
  return String(s)
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/\s*([=+\-*/%(){}<>!,;])\s*/g, '$1')
    .trim();
}

function checkTypeAnswer(q, userInput) {
  const u = normCode(userInput);
  return q.accept.some(a => normCode(a) === u);
}

/* ---------- CHECK ANSWER ---------- */
function onCheck() {
  const { lesson, qIdx } = session;
  const q = lesson.questions[qIdx];
  let correct = false;

  if (q.type === 'mc' || q.type === 'fill') {
    correct = session.selected === q.ans;
  } else if (q.type === 'tf') {
    correct = (session.selected === 0) === q.ans;
  } else if (q.type === 'build') {
    correct = session.built.length === q.ans.length &&
              session.built.every((t,i) => t === q.ans[i]);
  } else if (q.type === 'type') {
    correct = checkTypeAnswer(q, session.typed || '');
  }

  session.answered = true;
  session.wasCorrect = correct;

  // Visual feedback on options
  if (q.type === 'mc' || q.type === 'fill' || q.type === 'tf') {
    const opts = document.querySelectorAll('.option');
    opts.forEach((o, i) => {
      const idx = parseInt(o.dataset.i, 10);
      o.classList.remove('selected');
      const correctIdx = q.type === 'tf' ? (q.ans ? 0 : 1) : q.ans;
      if (idx === correctIdx) o.classList.add('correct');
      else if (idx === session.selected) o.classList.add('wrong');
    });
  } else if (q.type === 'type') {
    const ta = $('code-input');
    if (ta) {
      ta.classList.add(correct ? 'correct' : 'wrong');
      ta.disabled = true;
    }
  }

  if (correct) {
    session.correct += 1;
  } else {
    session.wrong += 1;
    state.hearts -= 1;
    state.lastHeartLoss = Date.now();
    saveState();
    flashHeart();
    if (state.hearts <= 0) {
      // give them a moment to see feedback, then game-over
      showFeedback(false, q);
      setTimeout(() => { session = null; render(); }, 1800);
      return;
    }
  }
  showFeedback(correct, q);
}

function flashHeart() {
  const el = document.querySelector('.stat-hearts');
  if (!el) return;
  el.style.transition = 'transform 0.2s';
  el.style.transform = 'scale(1.3)';
  setTimeout(()=> el.style.transform = '', 250);
  const num = $('hearts-num');
  if (num) num.textContent = state.hearts;
}

function showFeedback(correct, q) {
  // remove check bar
  const cb = $('check-bar');
  if (cb) cb.remove();

  const wrongAns = !correct && q.type === 'build'
    ? `<p>Correct order: <code>${escapeHtml(q.ans.join(' '))}</code></p>`
    : (!correct && q.type === 'type'
        ? `<p>One correct answer: <code>${escapeHtml(q.accept[0])}</code></p>`
        : '');
  const fb = el(`
    <div class="feedback ${correct ? '' : 'wrong'}">
      <h3>${correct ? 'Nice!' : 'Not quite!'}</h3>
      <p>${q.why}</p>
      ${wrongAns}
      <button class="btn ${correct ? 'btn-primary' : 'btn-danger'} btn-block btn-lg" id="continue-btn">Continue</button>
    </div>
  `);
  document.body.appendChild(fb);
  $('continue-btn').onclick = () => {
    fb.remove();
    advanceQuestion();
  };
}

function advanceQuestion() {
  const { lesson } = session;
  session.qIdx += 1;
  session.selected = null;
  session.built = [];
  session.typed = '';
  session.answered = false;
  if (session.qIdx >= lesson.questions.length) {
    session.phase = 'complete';
    finishLesson();
    render();
  } else {
    render();
  }
}
