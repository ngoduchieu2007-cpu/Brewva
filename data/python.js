// Python lesson content. Structure mirrors data/units.js.

const PYTHON_UNITS = [
  {
    id: 'pu1',
    name: 'Getting Started',
    eyebrow: 'Unit 1',
    color: '#3776AB',
    shadow: '#2B5E8E',
    rawColor: '#3776AB',
    icon: 'cup',
    lessons: [
      {
        id: 'pu1l1',
        title: 'What is Python?',
        intro: {
          title: 'Hello, Python!',
          html: `<p>Time to learn Python! Python is one of the most popular languages in the world — used in web dev, data science, AI, automation, and more.</p><p>Unlike Java, Python is designed to read like plain English. No curly braces <code>{}</code>, no semicolons <code>;</code>, no type declarations. Code just looks clean.</p><p>Python was created in 1991 by Guido van Rossum. Named after Monty Python the comedy group, not the snake.</p>`
        },
        questions: [
          { type:'mc', q:'What is Python?',
            opts:['A snake species','A programming language','A type of database','A web browser'],
            ans:1, why:'Python is a programming language. (Named after Monty Python, not the snake.)' },
          { type:'mc', q:'Which of these does Python NOT require?',
            opts:['Quotes around strings','Variable names','Semicolons at line ends','The = sign to assign'],
            ans:2, why:'No semicolons in Python. Lines just end when they end.' },
          { type:'tf', q:'Python uses curly braces {} to group code blocks.',
            ans:false, why:'Python uses indentation (spaces) instead of {}. That\'s one thing that makes it so readable.' },
          { type:'mc', q:'Python is popular for...',
            opts:['Only games','Only mobile apps','AI, data science, web, automation, and more','Only operating systems'],
            ans:2, why:'Python powers Netflix recommendations, Instagram, most AI research, and countless automation tools.' },
          { type:'mc', q:'Compared to Java, Python is generally...',
            opts:['More verbose','Requires more symbols','More concise with less boilerplate','Harder to read'],
            ans:2, why:'Less boilerplate is a big reason beginners love Python. No types, no semicolons, no {}.' }
        ]
      },
      {
        id: 'pu1l2',
        title: 'Say something',
        intro: {
          title: 'print()',
          html: `<p>Printing in Python:</p><pre>print("Hello, World!")</pre><p>Compare to Java:<br>Java: <code>System.out.println("Hello, World!");</code><br>Python: <code>print("Hello, World!")</code></p><p>Key differences:<br>• No <code>System.out.</code> prefix<br>• No <code>;</code> at the end<br>• Single quotes work too: <code>print('Hello!')</code></p>`
        },
        questions: [
          { type:'mc', q:'What does this print?',
            code:`print("Welcome!")`,
            opts:['Nothing','Welcome!','print','Error'],
            ans:1, why:"Whatever's in the parentheses and quotes gets printed." },
          { type:'mc', q:'Which is valid Python?',
            opts:['System.out.println("Hi");',"print('Hi')",'println("Hi");','PRINT("Hi")'],
            mono:true, ans:1, why:"Just print(). No System.out prefix, no semicolon. Case-sensitive, so PRINT() fails." },
          { type:'build', q:'Print the word "Brew"',
            tiles:['print(', '"Brew"', ')'],
            ans:['print(', '"Brew"', ')'],
            why:'print(), text in quotes, close paren. No semicolon.' },
          { type:'fill', q:'Complete to print "Hi":',
            template:'____("Hi")',
            opts:['print','println','say','echo'],
            ans:0, why:'Just print(). No System.out. prefix in Python.' },
          { type:'tf', q:'In Python, you must end every line with a semicolon.',
            ans:false, why:'No semicolons in Python. Java needs them; Python does not.' },
          { type:'type', q:'Write a line that prints exactly: Hello, Python!',
            hint:"print('...')",
            expected_output: 'Hello, Python!',
            why:"print() works just like Java's println but much shorter. Single or double quotes both work." }
        ]
      },
      {
        id: 'pu1l3',
        title: 'Notes to self',
        intro: {
          title: 'Comments',
          html: `<p>Comments in Python use <code>#</code> (not <code>//</code> like Java):</p><pre># This is a comment
print("Only this runs")</pre><p>Everything after <code>#</code> on that line is ignored by Python.</p><p>For multi-line comments, use triple quotes:</p><pre>"""
This whole block
is ignored
"""</pre>`
        },
        questions: [
          { type:'mc', q:'How do you write a comment in Python?',
            opts:['// like this','/* like this */','# like this','-- like this'],
            mono:true, ans:2, why:'# starts a comment in Python. Java uses //, but Python uses #.' },
          { type:'mc', q:'What does this print?',
            code:`# print("Hidden")
print("Visible")`,
            opts:['Hidden','Visible','Both','Nothing'],
            ans:1, why:'The first line is a comment — Python skips it. Only "Visible" prints.' },
          { type:'tf', q:'Python uses // for single-line comments.',
            ans:false, why:'Java uses //. Python uses #.' },
          { type:'build', q:'Write a comment that says: my code',
            tiles:['#', 'my', 'code'],
            ans:['#', 'my', 'code'],
            why:'# followed by your text. The rest of the line is ignored.' },
          { type:'mc', q:'Which is a valid Python comment?',
            opts:['// note', '# note', '/* note */', '-- note'],
            mono:true, ans:1, why:'# is the Python comment character.' },
          { type:'type', q:'Write a line that prints exactly: I love Python',
            hint:"print('...')",
            expected_output: 'I love Python',
            why:'print() with your text in quotes. No semicolon.' }
        ]
      }
    ]
  },
  {
    id: 'pu2',
    name: 'Storing Things',
    eyebrow: 'Unit 2',
    color: '#58CC02',
    shadow: '#46A302',
    rawColor: '#58CC02',
    icon: 'box',
    lessons: [
      {
        id: 'pu2l1',
        title: 'Numbers',
        intro: {
          title: 'Variables',
          html: `<p>In Java you declared the type: <code>int age = 25;</code></p><p>Python figures it out for you:</p><pre>age = 25       # whole number (int)
height = 1.75  # decimal (float)</pre><p>Just name = value. No type, no semicolon. Python infers whether it's an int or a float automatically.</p>`
        },
        questions: [
          { type:'mc', q:'How do you store the number 5 in a variable called x in Python?',
            opts:['int x = 5;', 'x = 5', 'var x = 5', 'x := 5'],
            mono:true, ans:1, why:'Just name = value. No type, no semicolon.' },
          { type:'mc', q:'What does this print?',
            code:`score = 100
print(score)`,
            opts:['score','100','"100"','Nothing'],
            ans:1, why:'No quotes around score in print(), so Python prints the value: 100.' },
          { type:'build', q:'Store 42 in a variable called answer',
            tiles:['answer', '=', '42'],
            ans:['answer', '=', '42'],
            why:'name = value. Clean and simple.' },
          { type:'fill', q:'Store a decimal:',
            template:'pi ____ 3.14',
            opts:['=', '==', 'is', ':='],
            ans:0, why:'= assigns. == compares. You want to assign here.' },
          { type:'mc', q:'In Python, what\'s wrong with: int x = 10',
            opts:['Nothing','Needs a semicolon','int is not used to declare variables in Python','x is a reserved word'],
            ans:2, why:'Python does not use type names to declare variables. Just write x = 10.' },
          { type:'type', q:'Store the number 18 in a variable called age.',
            hint:'name = value',
            accept:['age = 18'],
            why:'No int, no semicolon. Just name = value and Python handles the rest.' }
        ]
      },
      {
        id: 'pu2l2',
        title: 'Text',
        intro: {
          title: 'Strings',
          html: `<p>Strings work like Java but with a bonus: single and double quotes both work:</p><pre>name = "Mocha"
city = 'Hanoi'   # also valid</pre><p>You can also combine variables and text with an <b>f-string</b>:</p><pre>name = "Mocha"
print(f"Hi, {name}!")   # Hi, Mocha!</pre>`
        },
        questions: [
          { type:'mc', q:'Which are valid Python strings?',
            opts:['"hello" only',"'hello' only","Both \"hello\" and 'hello'","Neither"],
            ans:2, why:'Both double and single quotes work for strings in Python. Pick one style.' },
          { type:'mc', q:'What does this print?',
            code:`city = "Hanoi"
print(city)`,
            opts:['"Hanoi"','city','Hanoi','Nothing'],
            ans:2, why:'Prints the value: Hanoi. Quotes are just markers, not part of the output.' },
          { type:'build', q:'Store "Brewva" in a variable called app',
            tiles:['app', '=', '"Brewva"'],
            ans:['app', '=', '"Brewva"'],
            why:'name = "value". Same pattern as numbers, just add quotes.' },
          { type:'fill', q:'Complete the f-string:',
            template:'print(____"Hello, {name}!")',
            opts:['f', 's', 'str', 'format'],
            ans:0, why:'f before the opening quote makes it an f-string. {variable} inside gets replaced with its value.' },
          { type:'tf', q:'In Python, "hello" and \'hello\' produce the same string.',
            ans:true, why:'Both are valid. Pick one style and be consistent.' },
          { type:'type', q:'Store the text "Python" in a variable called language.',
            hint:'name = "value"',
            accept:['language = "Python"', "language = 'Python'"],
            why:'Strings can use single or double quotes. Both are accepted here.' }
        ]
      },
      {
        id: 'pu2l3',
        title: 'True or False',
        intro: {
          title: 'Booleans',
          html: `<p>Booleans in Python are like Java, but capitalized:</p><pre>is_open = True    # capital T!
is_closed = False  # capital F!</pre><p>Java: <code>true</code> / <code>false</code> (lowercase)<br>Python: <code>True</code> / <code>False</code> (capital first letter)</p><p>This is one of the most common mistakes when switching from Java to Python.</p>`
        },
        questions: [
          { type:'mc', q:'Which is correct Python?',
            opts:['boolean isOpen = true;', 'isOpen = true', 'isOpen = True', 'bool isOpen = True'],
            mono:true, ans:2, why:'Just name = True. No type declaration, no semicolon, capital T.' },
          { type:'tf', q:'In Python, boolean values are written as true and false (lowercase).',
            ans:false, why:'Python uses True and False with capital first letters. Java uses lowercase. Classic gotcha.' },
          { type:'build', q:'Set a variable called done to False',
            tiles:['done', '=', 'False'],
            ans:['done', '=', 'False'],
            why:'Capital F in False.' },
          { type:'mc', q:'What does this print?',
            code:`playing = True
print(playing)`,
            opts:['true','True','playing','1'],
            ans:1, why:'Python prints the boolean as True (capital T).' },
          { type:'fill', q:'Complete:',
            template:'is_raining = ____',
            opts:['True','true','TRUE','"True"'],
            ans:0, why:"Capital T in True. No quotes — that would make it the string 'True', not a boolean." },
          { type:'type', q:'Store True in a variable called is_ready.',
            hint:'name = True',
            accept:['is_ready = True'],
            why:'Capital T in True. No type declaration, no semicolon.' }
        ]
      }
    ]
  },
  {
    id: 'pu3',
    name: 'Math Time',
    eyebrow: 'Unit 3',
    color: '#CE82FF',
    shadow: '#A560D0',
    rawColor: '#CE82FF',
    icon: 'calc',
    lessons: [
      {
        id: 'pu3l1',
        title: 'Operators',
        intro: {
          title: 'Python math',
          html: `<p>Most operators are the same as Java. One important difference:</p><pre>print(10 / 4)   # 2.5  ← always decimal in Python!
print(10 // 4)  # 2    ← floor division (drops decimal)
print(10 % 3)   # 1    ← remainder
print(2 ** 8)   # 256  ← power (2 to the 8th)</pre><p>In Java, <code>10 / 4</code> on two ints gives <code>2</code>. In Python it always gives <code>2.5</code>. Use <code>//</code> for whole-number division.</p>`
        },
        questions: [
          { type:'mc', q:'What does this print?',
            code:`print(10 / 4)`,
            opts:['2','2.5','3','Error'],
            ans:1, why:'/ in Python always returns a float: 10 / 4 = 2.5. Different from Java where int / int = int.' },
          { type:'mc', q:'What does // do in Python?',
            opts:['A comment','Regular division','Floor division (whole number result)','Multiply twice'],
            mono:true, ans:2, why:'10 // 3 = 3. Divides and drops the decimal part.' },
          { type:'mc', q:'What does this print?',
            code:`print(7 % 2)`,
            opts:['3','1','3.5','0'],
            ans:1, why:'7 % 2 = 1. That\'s the remainder after dividing 7 by 2.' },
          { type:'build', q:'Print 2 to the power of 8',
            tiles:['print(', '2', '**', '8', ')'],
            ans:['print(', '2', '**', '8', ')'],
            why:'** is the power operator. 2 ** 8 = 256.' },
          { type:'mc', q:'What does 9 ** 2 equal?',
            opts:['18','11','81','92'],
            ans:2, why:'9 ** 2 = 9 × 9 = 81.' },
          { type:'type', q:'Write a line that prints the result of 15 + 7.',
            hint:'print(...)',
            expected_output: '22',
            why:'Python evaluates the math first, then prints the result. 15 + 7 = 22.' }
        ]
      },
      {
        id: 'pu3l2',
        title: 'Variable math',
        intro: {
          title: 'Math with variables',
          html: `<p>Use variables in math just like Java:</p><pre>a = 10
b = 3
print(a + b)   # 13</pre><p>Python also has shortcut operators:</p><pre>x = 5
x += 3   # x = x + 3 → 8
x *= 2   # x = x * 2 → 16
print(x) # 16</pre>`
        },
        questions: [
          { type:'mc', q:'What does this print?',
            code:`a = 6
b = 4
print(a * b)`,
            opts:['ab','64','24','10'],
            ans:2, why:'a * b = 6 * 4 = 24.' },
          { type:'mc', q:'What does x += 5 mean?',
            opts:['x is now 5','x is compared to 5','x = x + 5','Error'],
            mono:true, ans:2, why:'+= adds to the current value. x += 5 is shorthand for x = x + 5.' },
          { type:'mc', q:'What does this print?',
            code:`score = 10
score += 5
print(score)`,
            opts:['10','5','15','score'],
            ans:2, why:'score starts at 10, then += 5 makes it 15.' },
          { type:'build', q:'Calculate total = price + tax',
            tiles:['total', '=', 'price', '+', 'tax'],
            ans:['total', '=', 'price', '+', 'tax'],
            why:'name = expression. No type declarations.' },
          { type:'fill', q:'To halve variable n:',
            template:'n ____ 2',
            opts:['//=','/=','*=','+='],
            ans:1, why:'/= divides and stores back. n /= 2 is shorthand for n = n / 2.' },
          { type:'type', q:'Store the result of a + b in a variable called total.',
            hint:'name = ...',
            accept:['total = a + b'],
            why:'Just assign the expression. Python evaluates a + b and stores the result.' }
        ]
      }
    ]
  },
  {
    id: 'pu4',
    name: 'Decisions',
    eyebrow: 'Unit 4',
    color: '#FF86B0',
    shadow: '#D6688D',
    rawColor: '#FF86B0',
    icon: 'fork',
    lessons: [
      {
        id: 'pu4l1',
        title: 'if',
        intro: {
          title: 'Making decisions',
          html: `<p>Python if works like Java but with two key differences:</p><pre>age = 18
if age >= 18:
    print("You can vote!")</pre><p>1. End the condition with <code>:</code> (colon), not <code>{</code><br>2. Indent the code inside (4 spaces or 1 tab) — not optional!</p><p>Python uses indentation to define what's "inside" the if. Wrong indentation = syntax error.</p>`
        },
        questions: [
          { type:'mc', q:'What ends the condition line in a Python if statement?',
            opts:['{ (open brace)','; (semicolon)',': (colon)','nothing'],
            mono:true, ans:2, why:'Always end the if line with a colon. Then indent the block below it.' },
          { type:'mc', q:'What does this print?',
            code:`score = 90
if score > 80:
    print("Great!")`,
            opts:['score','Great!','Nothing','Error'],
            ans:1, why:'90 > 80 is true, so the indented block runs and prints Great!' },
          { type:'mc', q:'What does this print?',
            code:`age = 15
if age >= 18:
    print("Adult")`,
            opts:['Adult','15','Nothing','Error'],
            ans:2, why:'15 >= 18 is false, so the block is skipped. Nothing prints.' },
          { type:'build', q:'Start an if that checks x is greater than 0',
            tiles:['if', 'x', '>', '0', ':'],
            ans:['if', 'x', '>', '0', ':'],
            why:'if condition: — colon at the end, not a curly brace.' },
          { type:'tf', q:'Python uses indentation instead of {} to define code blocks.',
            ans:true, why:'Yes! Indentation is required and meaningful in Python. Misindenting is a syntax error.' },
          { type:'type', q:'Write the if line that checks: score is greater than 50. End with the colon.',
            hint:'if ...:',
            accept:['if score > 50:'],
            why:'Python if: condition followed by a colon. The indented block below is the body.' }
        ]
      },
      {
        id: 'pu4l2',
        title: 'else',
        intro: {
          title: 'The other path',
          html: `<p>else works the same as Java, but again — no curly braces, just a colon:</p><pre>age = 15
if age >= 18:
    print("Adult")
else:
    print("Not yet!")</pre><p>else: must be indented at the same level as if, and its body must be indented further.</p>`
        },
        questions: [
          { type:'mc', q:'What does this print?',
            code:`x = 3
if x > 10:
    print("Big")
else:
    print("Small")`,
            opts:['Big','Small','Both','Nothing'],
            ans:1, why:'3 is not > 10, so the else block runs: Small.' },
          { type:'mc', q:'What goes at the end of the else line?',
            opts:['{ (open brace)',': (colon)','; (semicolon)','nothing'],
            mono:true, ans:1, why:'else: — colon, just like if.' },
          { type:'build', q:'Write the else line',
            tiles:['else', ':'],
            ans:['else', ':'],
            why:'Just else: — no condition needed, just a colon.' },
          { type:'mc', q:'What does this print?',
            code:`hungry = False
if hungry:
    print("Eat!")
else:
    print("Wait!")`,
            opts:['Eat!','Wait!','Both','Error'],
            ans:1, why:'hungry is False, so the else block runs: Wait!' },
          { type:'fill', q:'Complete the else line:',
            template:'____ :',
            opts:['else','elif','then','otherwise'],
            ans:0, why:"else means 'otherwise'. Colon at the end." },
          { type:'type', q:'Write just this line: else:',
            hint:'else:',
            accept:['else:'],
            why:"else: has a colon just like if. No condition needed — it runs when the if was false." }
        ]
      },
      {
        id: 'pu4l3',
        title: 'elif',
        intro: {
          title: 'Multiple choices',
          html: `<p>Python uses <code>elif</code> instead of Java's <code>else if</code>:</p><pre>score = 75
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("Try again!")</pre><p>Python checks top to bottom. First true condition wins. score = 75 prints C.</p>`
        },
        questions: [
          { type:'mc', q:'Python uses ___ instead of "else if".',
            opts:['elseif','else if','elif','or if'],
            mono:true, ans:2, why:"elif is Python's single-keyword version of else if. No space!" },
          { type:'mc', q:'What does this print?',
            code:`x = 5
if x > 10:
    print("Big")
elif x > 0:
    print("Positive")
else:
    print("Zero or less")`,
            opts:['Big','Positive','Zero or less','All three'],
            ans:1, why:'5 is not > 10, but 5 IS > 0, so Positive prints. Python stops at the first true match.' },
          { type:'build', q:'Write the elif line checking x equals 5',
            tiles:['elif', 'x', '==', '5', ':'],
            ans:['elif', 'x', '==', '5', ':'],
            why:'elif condition: — colon at the end, same as if.' },
          { type:'mc', q:'How does Python pick between multiple elif blocks?',
            opts:['Runs all of them','Picks randomly','Top to bottom, stops at first true','Bottom to top'],
            ans:2, why:'Top to bottom. Once a true condition is found, the rest are skipped.' },
          { type:'tf', q:'You can chain as many elif blocks as you want.',
            ans:true, why:'As many as needed. Python checks them in order.' },
          { type:'type', q:'Write the elif line that checks: temperature is less than 0. End with colon.',
            hint:'elif ...:',
            accept:['elif temperature < 0:'],
            why:'elif condition: — same pattern as if, but only runs when previous conditions were false.' }
        ]
      }
    ]
  },
  {
    id: 'pu5',
    name: 'Loops',
    eyebrow: 'Unit 5',
    color: '#FF4B4B',
    shadow: '#D33',
    rawColor: '#FF4B4B',
    icon: 'loop',
    lessons: [
      {
        id: 'pu5l1',
        title: 'while',
        intro: {
          title: 'while loops',
          html: `<p>while in Python: same idea as Java, different syntax:</p><pre>count = 1
while count <= 3:
    print(count)
    count += 1
# prints 1, 2, 3</pre><p>Colon at the end of the while line, indented body. And don't forget to update the counter — or it loops forever.</p>`
        },
        questions: [
          { type:'mc', q:'What does a while loop do?',
            opts:['Runs once','Checks a condition once','Repeats while condition is true','Counts to 10 automatically'],
            ans:2, why:'while keeps repeating until the condition becomes false.' },
          { type:'mc', q:'What does this print?',
            code:`x = 1
while x <= 2:
    print("Hi")
    x += 1`,
            opts:['Hi (once)','Hi (twice)','Hi (three times)','Nothing'],
            ans:1, why:'Loop runs when x=1 (Hi, x→2) and x=2 (Hi, x→3). Then 3 <= 2 is false, stops.' },
          { type:'build', q:'Start a while loop with condition n < 10',
            tiles:['while', 'n', '<', '10', ':'],
            ans:['while', 'n', '<', '10', ':'],
            why:'while condition: — colon at the end, same pattern as if.' },
          { type:'mc', q:"What's the bug here?",
            code:`x = 1
while x <= 5:
    print(x)`,
            opts:['Missing colon','x never changes — infinite loop!','Wrong operator','Nothing'],
            ans:1, why:"x never changes so the condition is always true. Classic infinite loop — always update your variable!" },
          { type:'tf', q:'A Python while line ends with a colon.',
            ans:true, why:'while condition: — yes, colon required, just like if.' },
          { type:'type', q:'Write a while loop header that runs while count is less than 5. End with colon.',
            hint:'while ...:',
            accept:['while count < 5:'],
            why:'while condition: — colon, then indent the body. Same idea as Java but no curly braces.' }
        ]
      },
      {
        id: 'pu5l2',
        title: 'for and range',
        intro: {
          title: 'for loops',
          html: `<p>Python's for loop is very different from Java's. You loop over a sequence:</p><pre>for i in range(5):
    print(i)
# prints 0, 1, 2, 3, 4</pre><p><code>range(5)</code> gives 0 through 4. Starts at 0, stops before 5.</p><p>Variants:</p><pre>range(1, 6)      # 1, 2, 3, 4, 5
range(0, 10, 2)  # 0, 2, 4, 6, 8 (step of 2)</pre>`
        },
        questions: [
          { type:'mc', q:'What does range(4) produce?',
            opts:['1, 2, 3, 4','0, 1, 2, 3, 4','0, 1, 2, 3','4'],
            ans:2, why:'range(4) → 0, 1, 2, 3. Starts at 0, does NOT include 4.' },
          { type:'mc', q:'What does this print?',
            code:`for i in range(3):
    print("Go!")`,
            opts:['Go! (once)','Go! (3 times)','0 1 2','Nothing'],
            ans:1, why:'range(3) loops 3 times (i = 0, 1, 2). Prints "Go!" each time.' },
          { type:'build', q:'Write the for loop header to loop 5 times',
            tiles:['for', 'i', 'in', 'range(5)', ':'],
            ans:['for', 'i', 'in', 'range(5)', ':'],
            why:"for variable in range(n): — much cleaner than Java's 3-part for loop." },
          { type:'mc', q:'range(1, 4) gives you:',
            opts:['0, 1, 2, 3','1, 2, 3','1, 2, 3, 4','4'],
            ans:1, why:'range(start, stop) — starts at 1, stops BEFORE 4. So: 1, 2, 3.' },
          { type:'mc', q:'How many times does range(0, 10, 2) iterate?',
            opts:['10','5','2','8'],
            ans:1, why:'Produces 0, 2, 4, 6, 8 — 5 values. Step of 2 so every other number.' },
          { type:'type', q:'Write a for loop header that loops 3 times. End with colon.',
            hint:'for i in range(...):',
            accept:['for i in range(3):'],
            why:"Python's for loop uses 'in range()'. Much shorter than Java's three-part for(int i=0; i<3; i++)." }
        ]
      }
    ]
  }
];