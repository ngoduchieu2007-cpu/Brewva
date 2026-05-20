// Lazy Pyodide loader and Python runner.
// Pyodide is ~10MB so we only fetch it when the first Python lesson opens.

let _pyodide = null;
let _loadPromise = null;

function ensurePyodide() {
  if (_pyodide) return Promise.resolve(_pyodide);
  if (_loadPromise) return _loadPromise;

  _loadPromise = (async () => {
    if (!window.loadPyodide) {
      await new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
        s.onload = resolve;
        s.onerror = () => reject(new Error('Failed to load Pyodide'));
        document.head.appendChild(s);
      });
    }
    _pyodide = await window.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'
    });
    return _pyodide;
  })();

  return _loadPromise;
}

// Run Python code and capture stdout.
// testCode is appended after userCode (useful for checking variable values).
async function runPython(userCode, testCode) {
  const py = await ensurePyodide();
  const fullCode = testCode ? `${userCode}\n${testCode}` : userCode;

  let output = '';
  py.setStdout({ batched: line => { output += line + '\n'; } });
  py.setStderr({ batched: () => {} });

  try {
    await py.runPythonAsync(fullCode);
    return { ok: true, output: output.trim() };
  } catch (e) {
    const lines = e.message.split('\n').filter(Boolean);
    return { ok: false, error: lines[lines.length - 1] || e.message, output: '' };
  }
}

// Start loading Pyodide in the background when entering a Python lesson.
function preloadPyodide() {
  ensurePyodide().catch(() => {});
}