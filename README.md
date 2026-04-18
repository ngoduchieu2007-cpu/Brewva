# Brewva

A small Duolingo-style web app for learning Java from scratch. Built as a static
site with plain HTML/CSS/JavaScript, no framework and no build step.

Live: [brewva.netlify.app](https://brewva.netlify.app/)


## What's inside

5 units, 14 lessons, around 80 questions covering the basics: what Java is,
printing, variables, math, if/else, and loops.

Question types:
- multiple choice
- true/false
- build the line by tapping tiles into order
- type the code yourself in a textarea

The type-code questions don't run Java (you can't in a browser). They normalize
the input (trim spaces, fix smart quotes, ignore spacing around symbols) and
compare it against the accepted answers, so case and semicolons still matter.

Other stuff: 5 hearts that regenerate over time, XP, a daily streak, and progress
saved in localStorage. It also works as an installable PWA (add to home screen on
your phone).

## Project layout

```
index.html           page shell, loads the CSS and scripts
css/styles.css       all the styling
data/units.js        lesson content (this is where you add questions)
js/
  icons.js           svg icons + the mascot
  helpers.js         small dom/string helpers
  state.js           save/load, hearts, streak
  questions.js       question screen + the 4 types + answer checking
  screens.js         the other screens (home, intro, complete, etc.)
  app.js             router, runs last
```

There's no bundler. The scripts are loaded in order in index.html and share the
global scope, so the order matters:
units, icons, helpers, state, questions, screens, app. app.js defines render()
and calls it once at the end to start things.

## Running it locally

Easiest is to serve the folder over http, because a few browsers block
localStorage on file:// urls:

```
python3 -m http.server 8000
```

then open http://localhost:8000. Or use the Live Server extension in VS Code.

## Deploying

It's a static site, so anything that hosts static files works.

- Netlify: drag the folder onto https://app.netlify.com/drop, or connect the repo
  for auto-deploy on push (config is in netlify.toml, no build command).
- GitHub Pages: the workflow in .github/workflows/deploy-pages.yml publishes on
  every push to main once you turn on Pages with the GitHub Actions source.

## Adding questions

Open data/units.js, find a lesson, and add to its questions array. The shapes:

```js
// multiple choice
{ type:'mc', q:'What is Java?', opts:['A','B','C','D'], ans:1, why:'...' }

// true/false
{ type:'tf', q:'Java is a language.', ans:true, why:'...' }

// build (tap tiles into order)
{ type:'build', q:'Print "Hi"',
  tiles:['System.out.println(','"Hi"',')',';'],
  ans:['System.out.println(','"Hi"',')',';'], why:'...' }

// fill in the blank (____ is the gap)
{ type:'fill', q:'Complete:', template:'int x ____ 5;',
  opts:['=','==','+','-'], ans:0, why:'...' }

// type real code (accept can hold several valid answers)
{ type:'type', q:'Declare an int age = 18.',
  hint:'int name = value;', accept:['int age = 18;'], why:'...' }
```

For a whole new unit, copy an existing object in the UNITS array, give it a new
id, a color, and an icon name that exists in js/icons.js.

## Ideas for later

- more Java units (methods, arrays, classes, exceptions)
- other languages as separate data files (python, c, c++) with a switcher
- a review mode for questions you got wrong
- run Python for real in the browser with Pyodide
- a settings screen and a service worker for offline use

## License

MIT, see LICENSE.
