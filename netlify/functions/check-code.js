// Netlify Function: proxies requests to the Claude API.
// The CLAUDE_API_KEY environment variable must be set in the Netlify dashboard.
// It is never exposed in source code.

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: 'Bad Request' };
  }

  const { question, code, language, lesson_title, expected, run_error, run_output } = body;

  const prompt = buildPrompt({ question, code, language, lesson_title, expected, run_error, run_output });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 200,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!response.ok) {
      return { statusCode: 502, body: 'Upstream error' };
    }

    const data = await response.json();
    const hint = data.content?.[0]?.text || '';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hint })
    };
  } catch {
    return { statusCode: 500, body: 'Internal error' };
  }
};

function buildPrompt({ question, code, language, lesson_title, expected, run_error, run_output }) {
  const lang = language === 'python' ? 'Python' : 'Java';
  const langNote = language === 'python'
    ? 'Python uses indentation for blocks, no semicolons, no type declarations. True/False are capitalised.'
    : 'Java requires semicolons, type declarations (int, String, boolean), and curly braces for blocks.';

  const lines = [
    `You are a concise programming tutor for absolute beginners learning ${lang}.`,
    `Key ${lang} facts to keep in mind: ${langNote}`,
    ``,
    `## Context`,
    `Lesson topic: ${lesson_title || 'unknown'}`,
    `Question asked: ${question}`,
    ``,
    `## Student submission`,
    '```',
    code || '(empty)',
    '```',
  ];

  if (expected) {
    lines.push('', `## Expected answer`, '```', expected, '```');
  }

  if (run_error) {
    lines.push('', `## Runtime error the student got`, run_error);
  } else if (run_output !== undefined && run_output !== '') {
    lines.push('', `## What their code actually printed`, run_output);
    if (expected !== undefined) {
      lines.push(`(expected: ${expected})`);
    }
  }

  lines.push(
    ``,
    `## Your task`,
    `Write exactly 2-3 sentences:`,
    `- Sentence 1: identify the specific mistake (be precise, not vague)`,
    `- Sentence 2: explain the rule or concept they need to fix it`,
    `- Sentence 3 (optional): a small nudge if still needed`,
    ``,
    `Constraints: no code in your hint, no empty encouragement ("Great try!"), `,
    `do not reveal the expected answer verbatim, use language a beginner can understand.`
  );

  return lines.join('\n');
}