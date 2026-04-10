/* ---------- ICONS ---------- */
const ICONS = {
  heart: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.5-9.5-9c-1.6-3.5.5-7 3.8-7 2 0 3.5 1.2 4.7 2.8 1.2-1.6 2.7-2.8 4.7-2.8 3.3 0 5.4 3.5 3.8 7-2 4.5-9.5 9-9.5 9z"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c0 4-4 5-4 9a4 4 0 0 0 8 0c0-1.5-.5-2.5-1-3 .5 0 2 1 2 3 0 4-3 7-7 7s-6-3-6-7c0-3 2-5 4-7 1-1 2-1 4-2z"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>`,
  crown: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18l-1-9-4 3-3-7-3 7-4-3z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .5-5.5 4.5L18 22l-6-3.5L6 22l1.5-8L2 9.5 9 9z"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 10V8a6 6 0 0 1 12 0v2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2zm10 0V8a4 4 0 0 0-8 0v2z"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  cup: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 8h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5zm12 1h2a3 3 0 0 1 0 6h-1.5a6.9 6.9 0 0 0 .5-2.5zM7 3c0 1 .8 1 .8 2S7 6 7 7M11 3c0 1 .8 1 .8 2s-.8 1-.8 2M15 3c0 1 .8 1 .8 2s-.8 1-.8 2"/></svg>`,
  box: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 7l9-4 9 4-9 4-9-4zm0 2.5L12 13l9-3.5V18l-9 4-9-4V9.5z"/></svg>`,
  calc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="4" y="3" width="16" height="18" rx="2" fill="currentColor"/><path stroke="white" d="M8 7h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"/></svg>`,
  fork: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="5" r="2.2" fill="currentColor"/><circle cx="6" cy="19" r="2.2" fill="currentColor"/><circle cx="18" cy="19" r="2.2" fill="currentColor"/><path d="M12 7v3l-6 7M12 10l6 7"/></svg>`,
  loop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 12a8 8 0 0 1 14-5l1-2 1 4-4-1 1.5-1A6 6 0 0 0 6 12zM20 12a8 8 0 0 1-14 5l-1 2-1-4 4 1-1.5 1A6 6 0 0 0 18 12z" fill="currentColor"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>`,
  reset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 16-5.5L21 4v6h-6l3-3A7 7 0 1 0 19 12"/></svg>`
};

/* ---------- MASCOT ---------- */
function mascotSVG(mood = 'happy') {
  // mood: happy, think, sad, celebrate
  let mouth = `<path d="M86 110 Q100 122 114 110" stroke="#3C2A1E" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  let leftEye = `<ellipse cx="84" cy="92" rx="6" ry="7" fill="#3C2A1E"/>`;
  let rightEye = `<ellipse cx="116" cy="92" rx="6" ry="7" fill="#3C2A1E"/>`;
  let glints = `<circle cx="86" cy="89" r="1.8" fill="white"/><circle cx="118" cy="89" r="1.8" fill="white"/>`;
  let blush = `<ellipse cx="74" cy="106" rx="6" ry="3.5" fill="#FFB199" opacity="0.6"/><ellipse cx="126" cy="106" rx="6" ry="3.5" fill="#FFB199" opacity="0.6"/>`;
  let extras = '';

  if (mood === 'celebrate') {
    mouth = `<path d="M82 105 Q100 130 118 105 L82 105z" fill="#3C2A1E"/><path d="M85 108 Q100 122 115 108" fill="#FF6B7A"/>`;
    leftEye = `<path d="M78 88 Q84 80 90 88" stroke="#3C2A1E" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    rightEye = `<path d="M110 88 Q116 80 122 88" stroke="#3C2A1E" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    glints = '';
    extras = `<text x="40" y="60" font-size="22" fill="#FFC800">★</text><text x="150" y="50" font-size="18" fill="#FF8C42">✦</text>`;
  } else if (mood === 'sad') {
    mouth = `<path d="M86 116 Q100 104 114 116" stroke="#3C2A1E" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    leftEye = `<ellipse cx="84" cy="94" rx="5" ry="6" fill="#3C2A1E"/><circle cx="80" cy="103" r="3" fill="#7DD3FC" opacity="0.7"/>`;
    rightEye = `<ellipse cx="116" cy="94" rx="5" ry="6" fill="#3C2A1E"/>`;
    glints = '';
    blush = '';
  } else if (mood === 'think') {
    leftEye = `<ellipse cx="84" cy="92" rx="6" ry="7" fill="#3C2A1E"/>`;
    rightEye = `<ellipse cx="116" cy="92" rx="6" ry="7" fill="#3C2A1E"/>`;
    mouth = `<ellipse cx="100" cy="113" rx="6" ry="4" fill="#3C2A1E"/>`;
    extras = `<text x="148" y="50" font-size="26" fill="#3C2A1E">?</text>`;
  }

  return `<svg class="mascot mascot-bob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="Mocha the mascot">
    <!-- steam -->
    <path d="M82 30 Q78 22 84 16 Q90 10 86 4" stroke="#D4B896" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M100 28 Q96 20 102 14 Q108 8 104 2" stroke="#D4B896" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>
    <path d="M118 30 Q114 22 120 16" stroke="#D4B896" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.6"/>

    <!-- handle -->
    <path d="M155 90 a18 18 0 0 1 0 36 v-8 a10 10 0 0 0 0-20 z" fill="#FF8C42" stroke="#C4621E" stroke-width="3"/>

    <!-- mug body -->
    <path d="M50 70 L50 140 a25 25 0 0 0 25 25 h50 a25 25 0 0 0 25 -25 L150 70 z" fill="white" stroke="#3C2A1E" stroke-width="4"/>

    <!-- coffee top -->
    <ellipse cx="100" cy="70" rx="50" ry="12" fill="#4A2511" stroke="#3C2A1E" stroke-width="4"/>
    <ellipse cx="100" cy="68" rx="44" ry="8" fill="#6B3A1E"/>
    <ellipse cx="92" cy="66" rx="6" ry="2" fill="#8B5A3C" opacity="0.6"/>

    <!-- mug rim band -->
    <rect x="48" y="78" width="104" height="6" fill="#FF8C42"/>

    <!-- arms -->
    <ellipse cx="48" cy="115" rx="7" ry="5" fill="white" stroke="#3C2A1E" stroke-width="3"/>
    <ellipse cx="155" cy="115" rx="7" ry="5" fill="white" stroke="#3C2A1E" stroke-width="3"/>

    <!-- face -->
    ${blush}
    ${leftEye}
    ${rightEye}
    ${glints}
    ${mouth}
    ${extras}
  </svg>`;
}
