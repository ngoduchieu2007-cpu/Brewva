/* ---------- STATE ---------- */
const SAVE_KEY = 'brewva-save-v1';
const DEFAULT_STATE = {
  hearts: 5,
  maxHearts: 5,
  lastHeartLoss: 0,
  xp: 0,
  streak: 0,
  lastDate: null,
  completed: {},     // lessonId → true
  introsSeen: {},    // lessonId → true
  firstOpen: true,
  currentLang: 'java'
};

let state = loadState();
let session = null;  // active lesson session

function loadState() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return {...DEFAULT_STATE};
    const parsed = JSON.parse(raw);
    return {...DEFAULT_STATE, ...parsed};
  } catch(e) { return {...DEFAULT_STATE}; }
}
function saveState() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); } catch(e){}
}

/* ---------- DATE / STREAK ---------- */
function todayStr() {
  const d = new Date();
  return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
}
function yesterdayStr() {
  const d = new Date(); d.setDate(d.getDate()-1);
  return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
}
function bumpStreak() {
  const t = todayStr();
  if (state.lastDate === t) return false;
  if (state.lastDate === yesterdayStr()) state.streak += 1;
  else state.streak = 1;
  state.lastDate = t;
  saveState();
  return true;
}

/* ---------- HEARTS REGEN ---------- */
const HEART_REGEN_MS = 25 * 60 * 1000; // 25 min
function maybeRegenHearts() {
  if (state.hearts >= state.maxHearts) { state.lastHeartLoss = 0; return; }
  if (!state.lastHeartLoss) return;
  const elapsed = Date.now() - state.lastHeartLoss;
  const gained = Math.floor(elapsed / HEART_REGEN_MS);
  if (gained > 0) {
    state.hearts = Math.min(state.maxHearts, state.hearts + gained);
    state.lastHeartLoss = state.hearts >= state.maxHearts ? 0 : state.lastHeartLoss + gained * HEART_REGEN_MS;
    saveState();
  }
}