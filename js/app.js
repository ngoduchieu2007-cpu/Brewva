// Router. Loaded last; render() at the bottom starts the app.

/* ---------- ROUTING ---------- */
function render() {
  const app = $('app');
  app.innerHTML = '';
  maybeRegenHearts();

  if (state.firstOpen) return renderWelcome();
  if (session) {
    if (session.phase === 'intro') return renderIntro();
    if (session.phase === 'q') return renderQuestion();
    if (session.phase === 'complete') return renderComplete();
  }
  if (state.hearts <= 0) return renderNoHearts();
  return renderHome();
}

/* ---------- INIT ---------- */
render();
