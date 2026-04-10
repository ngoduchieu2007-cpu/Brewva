// All lesson content. Add questions to a lesson's questions array, or a new unit to UNITS.

/* ---------- LESSON DATA ---------- */
const UNITS = [
  {
    id: 'u1',
    name: 'First Sip',
    eyebrow: 'Unit 1',
    color: 'var(--java)',
    shadow: 'var(--java-dark)',
    rawColor: '#FF8C42',
    icon: 'cup',
    lessons: [
      {
        id: 'u1l1',
        title: 'What is Java?',
        intro: {
          title: 'Hello, Java!',
          html: `<p>Hi! I'm Mocha. Welcome to your very first Java lesson! ☕</p><p><b>Java</b> is a programming language — a way to give instructions to a computer. People use Java to build phone apps, websites, games, and big systems that banks and airlines depend on.</p><p>It's been around since 1995 and is one of the most popular languages in the world. By the end of this app, you'll be writing real Java!</p>`
        },
        questions: [
          { type:'mc', q:'What is Java?',
            opts:['A type of computer','A programming language','A web browser','A coffee shop'],
            ans:1,
            why:`Java is a programming language! It's named after coffee though — that's why I'm a coffee cup. ☕` },
          { type:'mc', q:'What can you build with Java?',
            opts:['Only websites','Apps, websites, games, and more','Only games',"Nothing — it's just a name"],
            ans:1,
            why:`Java is super versatile. It runs on phones, computers, servers, even smart cards.` },
          { type:'tf', q:`Java's slogan is "write once, run anywhere".`,
            ans:true,
            why:`Yep! The same Java code can work on Windows, Mac, Linux, Android — pretty cool.` },
          { type:'mc', q:'Programming is...',
            opts:['Drawing pictures on a computer','Watching videos','Giving step-by-step instructions to a computer','Fixing broken hardware'],
            ans:2,
            why:`Programming is just giving the computer instructions, step by step. Java is one way to write those instructions.` },
          { type:'mc', q:'Why might someone learn Java?',
            opts:['To get bored','To break their computer','To build software and apps','It is illegal not to'],
            ans:2,
            why:`Companies hire millions of Java developers. It's one of the most marketable languages.` }
        ]
      },
      {
        id:'u1l2',
        title:'Your first brew',
        intro:{
          title:'Hello, World!',
          html:`<p>Every programmer's first program prints <b>Hello, World!</b> to the screen. In Java, we do this with one special line:</p><pre>System.out.println("Hello, World!");</pre><p>Don't worry, it looks scarier than it is:</p><p>• <code>System.out.println</code> means <i>"print this on a new line"</i><br>• The text in <code>"quotes"</code> is what gets printed<br>• The <code>;</code> at the end says "this line is done" — like a period.</p>`
        },
        questions:[
          { type:'mc', q:'What does this print?', code:`System.out.println("Hi there!");`,
            opts:['Nothing','System.out','Hi there!','Error'],
            ans:2,
            why:`Whatever's inside the quotes gets printed to the screen.` },
          { type:'build', q:'Build a line that prints "Hi"',
            tiles:['System.out.println(','"Hi"',')',';'],
            ans:['System.out.println(','"Hi"',')',';'],
            why:`Order: command, what to print, close paren, semicolon.` },
          { type:'mc', q:'Why do we put quotes around Hello?',
            opts:['They look pretty','To tell Java it is text, not code','They are required by Java law','To make it bold'],
            ans:1,
            why:`Quotes mean "this is text". Without quotes, Java thinks you're naming a variable.` },
          { type:'fill', q:'Complete this line to print "Hi":',
            template:'System.out.____("Hi");',
            opts:['print','println','show','say'],
            ans:1,
            why:`println prints text and adds a new line at the end. (print works too — it just doesn't go to the next line.)` },
          { type:'mc', q:'Which line is correct?',
            opts:[`System.out.println("Hi")`, `System.out.println("Hi");`, `System.out.println(Hi);`, `print("Hi");`],
            mono:true, ans:1,
            why:`Java needs the quotes around text AND the semicolon at the end.` }
        
          ,{ type:'type', q:'Write a line that prints exactly: Hello, World!',
            hint:'System.out.println(...);',
            accept:['System.out.println("Hello, World!");'],
            why:`println prints whatever is in the quotes. Don't forget the semicolon — Java needs it to know the line is finished.` }
        ]
      },
      {
        id:'u1l3',
        title:'Talk to me',
        intro:{
          title:'println & comments',
          html:`<p>Two new things:</p><p><b>1. println vs print</b><br>Both print text. But <code>println</code> adds a new line after, while <code>print</code> stays on the same line.</p><pre>System.out.println("A");
System.out.println("B");
// Prints A, then B on a new line</pre><p><b>2. Comments</b><br>Notes for humans. Java ignores anything starting with <code>//</code>.</p><pre>// This is a comment — Java ignores it
System.out.println("Run me!");</pre>`
        },
        questions:[
          { type:'mc', q:"What's the difference between print and println?",
            opts:['They are identical','print is faster','println adds a new line at the end','println is for numbers only'],
            ans:2,
            why:`Use println when each piece of text should be on its own line.` },
          { type:'mc', q:'What does Java do with lines starting with //?',
            opts:['Prints them','Sends them as emails','Underlines them','Ignores them — they are just notes'],
            ans:3,
            why:`Comments are notes for humans. Java skips right past them.` },
          { type:'mc', q:'What does this print?',
            code:`System.out.println("Hello");
// System.out.println("World");`,
            opts:['Hello and World on two lines','Hello','World','Nothing'],
            ans:1,
            why:`The second line is a comment, so Java ignores it. Only "Hello" prints.` },
          { type:'tf', q:'Comments help you remember what your code does.',
            ans:true,
            why:`Yes! Even good programmers forget what they wrote. Comments are notes-to-future-you.` },
          { type:'mc', q:'Which line is a comment?',
            opts:[`System.out.println("Hi");`, `// Print a greeting`, `print("Hi");`, `comment("hi");`],
            mono:true, ans:1,
            why:`Lines starting with // are comments. Java ignores everything after the //.` }
        
          ,{ type:'type', q:'Write a line that prints: Java rocks!',
            hint:'System.out.println(...);',
            accept:['System.out.println("Java rocks!");'],
            why:`Same pattern as before: System.out.println, your text in double quotes, then a semicolon to end the line.` }
        ]
      }
    ]
  },
  {
    id: 'u2',
    name: 'Storing Beans',
    eyebrow: 'Unit 2',
    color: '#1CB0F6',
    shadow: '#1899D6',
    rawColor: '#1CB0F6',
    icon: 'box',
    lessons: [
      {
        id:'u2l1',
        title:'Whole numbers',
        intro:{
          title:'Meet the int',
          html:`<p>Programs need to remember things. We use <b>variables</b> for that. To store a whole number (like 5, 100, or -3), we use a type called <code>int</code> (short for "integer").</p><pre>int age = 25;</pre><p>Reading right to left:</p><p>• <code>int</code> — "I want to store a whole number"<br>• <code>age</code> — the name (you choose!)<br>• <code>=</code> — "put this value into it"<br>• <code>25</code> — the value<br>• <code>;</code> — end of line</p>`
        },
        questions:[
          { type:'mc', q:'What does int mean in Java?',
            opts:['International','Internet','Integer (whole number)','Interesting'],
            ans:2,
            why:`int is short for "integer" — any whole number like 1, 100, -50, or 0.` },
          { type:'build', q:'Make an int called score with the value 100',
            tiles:['int','score','=','100',';'],
            ans:['int','score','=','100',';'],
            why:`Pattern: type → name → = → value → ;` },
          { type:'mc', q:'Which line is valid?',
            opts:[`int 100 = age;`, `age = int 100;`, `int age = 100;`, `int = age 100;`],
            mono:true, ans:2,
            why:`Format is always: type name = value;` },
          { type:'fill', q:'Fill in the blank to store 7:',
            template:'____ days = 7;',
            opts:['int','str','num','='],
            ans:0,
            why:`Use int for whole numbers.` },
          { type:'mc', q:'What does this print?',
            code:`int x = 10;
System.out.println(x);`,
            opts:['x','10','int','Nothing'],
            ans:1,
            why:`There's no quotes around x in println, so Java prints the VALUE of x, which is 10.` }
        
          ,{ type:'type', q:'Declare an int called age with the value 18.',
            hint:'int name = value;',
            accept:['int age = 18;'],
            why:`The pattern is always: type, then name, then equals, then value, then semicolon. int means whole number.` }
        ]
      },
      {
        id:'u2l2',
        title:'Words',
        intro:{
          title:'Meet the String',
          html:`<p>For text, use the type <code>String</code> (with a capital S!). Strings always need double quotes:</p><pre>String name = "Mocha";
System.out.println(name);
// Prints: Mocha</pre><p>Heads up: <code>String</code> with capital S, <code>"text"</code> in double quotes.</p>`
        },
        questions:[
          { type:'mc', q:'To store text, use which type?',
            opts:['text','String','word','int'],
            mono:true, ans:1,
            why:`String holds text. Capital S — Java is picky!` },
          { type:'mc', q:'Which is correct?',
            opts:[`String name = Mocha;`, `string name = "Mocha";`, `String name = "Mocha";`, `String "name" = Mocha;`],
            mono:true, ans:2,
            why:`Capital S in String, AND quotes around the text.` },
          { type:'build', q:'Store the word "Hanoi" in a String called city',
            tiles:['String','city','=','"Hanoi"',';'],
            ans:['String','city','=','"Hanoi"',';'],
            why:`Same pattern: type name = value;` },
          { type:'mc', q:'What does this print?',
            code:`String greeting = "Hello!";
System.out.println(greeting);`,
            opts:['greeting','"Hello!"','Hello!','String greeting'],
            ans:2,
            why:`Prints the value: Hello! (The quotes are stripped — they were just markers telling Java "this is text".)` },
          { type:'fill', q:'Complete this line:',
            template:'String pet = ____;',
            opts:['dog','"dog"','int dog','dog;'],
            ans:1,
            why:`Strings need double quotes around the text!` }
        
          ,{ type:'type', q:'Make a String called name with the value "Alex".',
            hint:'String name = "value";',
            accept:['String name = "Alex";'],
            why:`Strings need double quotes around the text. Capital S in String matters — Java is case-sensitive!` }
        ]
      },
      {
        id:'u2l3',
        title:'Yes or no',
        intro:{
          title:'Meet the boolean',
          html:`<p>For yes/no values, use <code>boolean</code>. A boolean is always either <code>true</code> or <code>false</code>:</p><pre>boolean isHappy = true;
boolean isHungry = false;</pre><p>Booleans are super useful for making decisions in your code (we'll see how soon!).</p>`
        },
        questions:[
          { type:'mc', q:'A boolean has how many possible values?',
            opts:['Many — any number','Two: true and false','Three: yes, no, maybe','Just one'],
            ans:1,
            why:`Just true or false. (Lowercase!)` },
          { type:'mc', q:'Which is correct?',
            opts:[`boolean isOpen = "true";`, `boolean isOpen = True;`, `boolean isOpen = true;`, `boolean isOpen = 1;`],
            mono:true, ans:2,
            why:`Lowercase true/false. No quotes. Not numbers.` },
          { type:'build', q:'Make a boolean called isReady set to false',
            tiles:['boolean','isReady','=','false',';'],
            ans:['boolean','isReady','=','false',';'],
            why:`Same pattern: type name = value;` },
          { type:'tf', q:'true (boolean) and "true" (String) are the same thing.',
            ans:false,
            why:`Different! true is a boolean (no quotes). "true" is a String (with quotes). Java treats them very differently.` },
          { type:'mc', q:'Which type would you use for "is the user logged in?"',
            opts:['int','String','double','boolean'],
            ans:3,
            why:`It's a yes/no question, so boolean is perfect.` }
        
          ,{ type:'type', q:'Make a boolean called isOpen and set it to true.',
            hint:'boolean name = value;',
            accept:['boolean isOpen = true;'],
            why:`boolean stores true or false. Notice no quotes around true — it's a real boolean, not the word "true".` }
        ]
      },
      {
        id:'u2l4',
        title:'Decimals',
        intro:{
          title:'Meet the double',
          html:`<p>For decimal numbers (like 3.14 or 99.99), use <code>double</code>:</p><pre>double price = 19.99;
double pi = 3.14159;</pre><p>Why "double"? It can store really precise decimal numbers. Just remember: int = whole, double = with decimals.</p>`
        },
        questions:[
          { type:'mc', q:'For storing 3.14, which type?',
            opts:['int','String','double','boolean'],
            ans:2,
            why:`double for decimals. int can't hold 3.14 — it would refuse.` },
          { type:'build', q:'Store 9.99 in a double called price',
            tiles:['double','price','=','9.99',';'],
            ans:['double','price','=','9.99',';'],
            why:`Pattern: type name = value;` },
          { type:'mc', q:'What happens with: int x = 3.7;',
            opts:['Stores 3.7','Java refuses — error!','Stores 3','Stores 4'],
            ans:1,
            why:`Java will refuse this code. ints can't hold decimals. Use double for 3.7.` },
          { type:'mc', q:'For someone\'s height in meters (like 1.75), use:',
            opts:['int','double','String','boolean'],
            ans:1,
            why:`Heights are decimals → double.` },
          { type:'fill', q:'Complete:',
            template:'____ temperature = 36.5;',
            opts:['int','double','String','boolean'],
            ans:1,
            why:`36.5 is a decimal, so double.` }
        
          ,{ type:'type', q:'Make a double called pi with the value 3.14.',
            hint:'double name = value;',
            accept:['double pi = 3.14;'],
            why:`double stores decimal numbers. No quotes — it's a number, not text.` }
        ]
      }
    ]
  },
  {
    id: 'u3',
    name: 'Coffee Math',
    eyebrow: 'Unit 3',
    color: '#CE82FF',
    shadow: '#A560D0',
    rawColor: '#CE82FF',
    icon: 'calc',
    lessons: [
      {
        id:'u3l1',
        title:'Adding it up',
        intro:{
          title:'Java math',
          html:`<p>Java does math like a calculator:<br>• <code>+</code> adds<br>• <code>-</code> subtracts<br>• <code>*</code> multiplies (not × or x!)<br>• <code>/</code> divides</p><pre>System.out.println(5 + 3);   // 8
System.out.println(10 - 4);  // 6
System.out.println(2 * 6);   // 12
System.out.println(20 / 4);  // 5</pre>`
        },
        questions:[
          { type:'mc', q:'What does this print?',
            code:`System.out.println(7 + 3);`,
            opts:['7+3','73','10','Error'],
            ans:2,
            why:`Java does the math: 7 + 3 = 10.` },
          { type:'mc', q:'Which symbol multiplies in Java?',
            opts:['x','×','*','^'],
            mono:true, ans:2,
            why:`Java uses * for multiplication. (x and × are NOT operators.)` },
          { type:'mc', q:'What does this print?',
            code:`System.out.println(20 / 4);`,
            opts:['5','4','24','Error'],
            ans:0,
            why:`20 ÷ 4 = 5.` },
          { type:'build', q:'Print the result of 100 minus 25',
            tiles:['System.out.println(','100','-','25',')',';'],
            ans:['System.out.println(','100','-','25',')',';'],
            why:`Same as before, with math inside the parens.` },
          { type:'mc', q:'What does this print?',
            code:`System.out.println(2 + 3 * 4);`,
            opts:['20','14','9','24'],
            ans:1,
            why:`Like math class — multiplication first! 3 * 4 = 12, then 2 + 12 = 14.` }
        
          ,{ type:'type', q:'Write a line that prints the result of 12 + 8.',
            hint:'System.out.println(...);',
            accept:['System.out.println(12 + 8);'],
            why:`When you put math inside println, Java does the calculation first, then prints the answer (20).` }
        ]
      },
      {
        id:'u3l2',
        title:'Mixing variables',
        intro:{
          title:'Math with variables',
          html:`<p>You can use variables in math too:</p><pre>int apples = 5;
int bananas = 3;
int total = apples + bananas;
System.out.println(total);   // 8</pre><p>Java looks up the values, does the math, and stores the result.</p>`
        },
        questions:[
          { type:'mc', q:'What does this print?',
            code:`int x = 10;
int y = 20;
System.out.println(x + y);`,
            opts:['x + y','xy','30','1020'],
            ans:2,
            why:`Java looks up x (10) and y (20), then adds: 30.` },
          { type:'mc', q:'What is stored in sum?',
            code:`int a = 4;
int b = 6;
int sum = a + b;`,
            opts:['"a + b"','10','46','a, b'],
            ans:1,
            why:`sum holds the result: 4 + 6 = 10.` },
          { type:'build', q:'Calculate total = price + tax',
            tiles:['double','total','=','price','+','tax',';'],
            ans:['double','total','=','price','+','tax',';'],
            why:`Pattern: type name = expression;` },
          { type:'mc', q:'What does this print?',
            code:`int score = 100;
score = score + 50;
System.out.println(score);`,
            opts:['100','50','150','score + 50'],
            ans:2,
            why:`score becomes its old value (100) plus 50 → 150. You CAN update a variable like this.` },
          { type:'fill', q:'To double the variable x:',
            template:'x = x ____ 2;',
            opts:['+','-','*','/'],
            ans:2,
            why:`Multiply by 2 to double: x * 2.` }
        
          ,{ type:'type', q:'Make an int called sum that holds a + b.',
            hint:'int name = ... + ...;',
            accept:['int sum = a + b;'],
            why:`You can use variable names instead of numbers. Java looks up their values when this line runs.` }
        ]
      }
    ]
  },
  {
    id: 'u4',
    name: 'Choices',
    eyebrow: 'Unit 4',
    color: '#FF86B0',
    shadow: '#D6688D',
    rawColor: '#FF86B0',
    icon: 'fork',
    lessons: [
      {
        id:'u4l1',
        title:'The if path',
        intro:{
          title:'Decisions with if',
          html:`<p>Code can make decisions! An <code>if</code> statement runs code only when something is true:</p><pre>int age = 18;
if (age >= 18) {
    System.out.println("You can vote!");
}</pre><p>The condition <code>age >= 18</code> is checked. If true, the code in <code>{ }</code> runs. Otherwise it's skipped.</p><p>Comparison symbols:<br>• <code>></code> greater than &nbsp; <code><</code> less than<br>• <code>>=</code> ≥ &nbsp; <code><=</code> ≤<br>• <code>==</code> equal &nbsp; <code>!=</code> not equal</p>`
        },
        questions:[
          { type:'mc', q:'What does this print?',
            code:`int score = 90;
if (score > 80) {
    System.out.println("Great!");
}`,
            opts:['90','score','Great!','Nothing'],
            ans:2,
            why:`90 IS greater than 80, so the message prints.` },
          { type:'mc', q:'What does this print?',
            code:`int age = 15;
if (age >= 18) {
    System.out.println("Adult");
}`,
            opts:['Adult','15','Nothing','Error'],
            ans:2,
            why:`15 is NOT >= 18, so the if block is skipped. Nothing prints.` },
          { type:'mc', q:'What does == mean in Java?',
            opts:['Assigns a value','Checks if equal','Adds numbers','Negation'],
            ans:1,
            why:`= assigns. == compares. So if (x == 5) checks if x equals 5.` },
          { type:'build', q:'Build the start of: "if x is greater than 10..."',
            tiles:['if','(','x','>','10',')','{'],
            ans:['if','(','x','>','10',')','{'],
            why:`if, then condition in (), then { to start the block.` },
          { type:'mc', q:'What does this print?',
            code:`boolean isOpen = true;
if (isOpen) {
    System.out.println("Come in!");
}`,
            opts:['isOpen','true','Come in!','Nothing'],
            ans:2,
            why:`isOpen is true, so the if runs. (You don't need == true — just the boolean works!)` }
        
          ,{ type:'type', q:'Write the start of an if statement that checks: score is greater than 50. (Just the if line, ending with the open brace {)',
            hint:'if (...) {',
            accept:['if (score > 50) {'],
            why:`if takes a condition in parentheses, then an open brace to start the block of code that runs when the condition is true.` }
        ]
      },
      {
        id:'u4l2',
        title:'Or else',
        intro:{
          title:'When the if is false',
          html:`<p>What if the condition is false? Use <code>else</code> to run different code:</p><pre>int age = 15;
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Not yet!");
}</pre><p>This prints "Not yet!" because age (15) is NOT >= 18, so we fall into the <code>else</code>.</p>`
        },
        questions:[
          { type:'mc', q:'What does this print?',
            code:`int x = 5;
if (x > 10) {
    System.out.println("Big");
} else {
    System.out.println("Small");
}`,
            opts:['Big','Small','Both','Nothing'],
            ans:1,
            why:`5 is NOT greater than 10, so the else block runs.` },
          { type:'mc', q:'When does the else block run?',
            opts:['Always','Never','Only if the if condition is true','Only if the if condition is false'],
            ans:3,
            why:`else means "otherwise" — it runs when if's condition isn't met.` },
          { type:'mc', q:'What does this print?',
            code:`boolean isHungry = false;
if (isHungry) {
    System.out.println("Eat!");
} else {
    System.out.println("Wait!");
}`,
            opts:['Eat!','Wait!','Both','Error'],
            ans:1,
            why:`isHungry is false, so else runs: Wait!` },
          { type:'mc', q:'Which is a valid if/else?',
            opts:[`if (x > 5) {} else {}`, `if x > 5 then else end`, `when (x > 5) {} else {}`, `if (x > 5); else;`],
            mono:true, ans:0,
            why:`if needs (), code in {}, then else with code in {}.` },
          { type:'fill', q:'Fill in the gap:',
            template:`if (raining) { ... } ____ { ... }`,
            opts:['else','otherwise','if not','when not'],
            ans:0,
            why:`else means "otherwise" in Java.` }
        
          ,{ type:'type', q:'Write just this line: } else {',
            hint:'} else {',
            accept:['} else {'],
            why:`else comes right after the closing brace of the if block, with its own open brace for the else block.` }
        ]
      },
      {
        id:'u4l3',
        title:'Many paths',
        intro:{
          title:'else if',
          html:`<p>For more than two choices, chain them with <code>else if</code>:</p><pre>int score = 75;
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("Try again!");
}</pre><p>Java checks each condition top to bottom. <b>The first one that's true wins</b>, and the rest are skipped. With score = 75, the first match is "score >= 70" → it prints C.</p>`
        },
        questions:[
          { type:'mc', q:'What does this print?',
            code:`int x = 5;
if (x > 10) {
    System.out.println("Big");
} else if (x > 0) {
    System.out.println("Positive");
} else {
    System.out.println("Negative or zero");
}`,
            opts:['Big','Positive','Negative or zero','All three'],
            ans:1,
            why:`5 is not > 10, but it IS > 0 → "Positive" prints. Java stops at the first true match.` },
          { type:'mc', q:'How many else if blocks can you have?',
            opts:['One','Two','As many as you want','None'],
            ans:2,
            why:`Chain as many else if blocks as you need!` },
          { type:'mc', q:'What does this print?',
            code:`int n = 100;
if (n > 200) {
    System.out.println("A");
} else if (n > 50) {
    System.out.println("B");
} else if (n > 0) {
    System.out.println("C");
}`,
            opts:['A','B','C','B and C'],
            ans:1,
            why:`100 IS > 50 (B's condition is true), so B prints. Java stops there — won't even look at C.` },
          { type:'mc', q:'What order does Java check the conditions?',
            opts:['Random','Top to bottom','Bottom to top','All at once'],
            ans:1,
            why:`Top to bottom. The first true condition wins.` },
          { type:'mc', q:'What does this print?',
            code:`int day = 3;
if (day == 1) {
    System.out.println("Monday");
} else if (day == 3) {
    System.out.println("Wednesday");
} else {
    System.out.println("Other day");
}`,
            opts:['Monday','Wednesday','Other day','3'],
            ans:1,
            why:`day is 3 → second condition (day == 3) is true → "Wednesday".` }
        
          ,{ type:'type', q:'Write the middle of an if/else if that checks: x equals 5. Just the line, ending with {.',
            hint:'} else if (...) {',
            accept:['} else if (x == 5) {'],
            why:`Use == (two equals) for comparison. else if checks another condition only when the previous if was false.` }
        ]
      }
    ]
  },
  {
    id: 'u5',
    name: 'Repeating',
    eyebrow: 'Unit 5',
    color: '#FF4B4B',
    shadow: '#D33',
    rawColor: '#FF4B4B',
    icon: 'loop',
    lessons: [
      {
        id:'u5l1',
        title:'Round and round',
        intro:{
          title:'while loops',
          html:`<p>A <code>while</code> loop repeats code as long as a condition is true:</p><pre>int count = 1;
while (count <= 3) {
    System.out.println(count);
    count = count + 1;
}</pre><p>This prints 1, 2, 3.</p><p>How it works:<br>1. Check condition (count <= 3?)<br>2. If true, run the block<br>3. Go back to step 1<br>4. If false, exit the loop</p><p><b>Important:</b> Update the variable inside the loop, or it'll loop forever!</p>`
        },
        questions:[
          { type:'mc', q:'What does a while loop do?',
            opts:['Runs code once','Runs code if condition is true','Repeats code while condition is true','Counts to 100'],
            ans:2,
            why:`while keeps repeating until the condition becomes false.` },
          { type:'mc', q:'What does this print?',
            code:`int x = 1;
while (x <= 2) {
    System.out.println("Hi");
    x = x + 1;
}`,
            opts:['Hi (once)','Hi (twice)','Hi (forever)','Nothing'],
            ans:1,
            why:`Loop runs while x is 1 (Hi, x→2), then while x is 2 (Hi, x→3), then x=3 fails the test and it stops.` },
          { type:'mc', q:'What\'s wrong with this?',
            code:`int x = 1;
while (x <= 5) {
    System.out.println(x);
}`,
            opts:['Missing semicolon','x never changes — infinite loop!','Should use double','Nothing\'s wrong'],
            ans:1,
            why:`Don't forget to update the variable inside the loop, or it never ends. This is a classic bug!` },
          { type:'build', q:'Build the start of a while loop with condition count <= 10',
            tiles:['while','(','count','<=','10',')','{'],
            ans:['while','(','count','<=','10',')','{'],
            why:`while ( condition ) { — same shape as if!` },
          { type:'mc', q:'What\'s the LAST number this prints?',
            code:`int n = 1;
while (n < 5) {
    System.out.println(n);
    n = n + 1;
}`,
            opts:['4','5','6','1'],
            ans:0,
            why:`Prints 1, 2, 3, 4. When n=5, n<5 is false → loop stops. Last printed: 4.` }
        
          ,{ type:'type', q:'Write the header of a while loop that runs while x is less than 10. Just the while line, ending with {.',
            hint:'while (...) {',
            accept:['while (x < 10) {'],
            why:`while keeps repeating the block as long as the condition in parentheses is true.` }
        ]
      },
      {
        id:'u5l2',
        title:'Counting',
        intro:{
          title:'for loops',
          html:`<p>A <code>for</code> loop is a tidier way to write counting loops. It packs three things into one line:</p><pre>for (int i = 1; i <= 3; i = i + 1) {
    System.out.println(i);
}</pre><p>The three parts (separated by <code>;</code>):</p><p>1. <code>int i = 1</code> — the start<br>2. <code>i <= 3</code> — keep going while this is true<br>3. <code>i = i + 1</code> — do this after each round</p><p>Same result as a while loop: prints 1, 2, 3. Just more compact!</p>`
        },
        questions:[
          { type:'mc', q:'How many parts inside the for loop\'s parentheses?',
            opts:['1','2','3','4'],
            ans:2,
            why:`Three: start, condition, update. Separated by ;` },
          { type:'mc', q:'What does this print?',
            code:`for (int i = 1; i <= 3; i = i + 1) {
    System.out.println("Hi");
}`,
            opts:['Hi (once)','Hi (3 times)','1 2 3','Nothing'],
            ans:1,
            why:`Loop runs 3 times (when i is 1, 2, and 3). Prints "Hi" each time.` },
          { type:'mc', q:'What does this print?',
            code:`for (int i = 0; i < 3; i = i + 1) {
    System.out.println(i);
}`,
            opts:['1 2 3','0 1 2','0 1 2 3','1 2'],
            ans:1,
            why:`Starts at 0, runs while i < 3. So i = 0, 1, 2 (then i=3 stops it).` },
          { type:'mc', q:'A for loop is basically the same as...',
            opts:['A while loop with a counter','An if statement','A println','Nothing else'],
            ans:0,
            why:`Yep! for and while can do the same things. for is just a tidier shape for counting.` },
          { type:'mc', q:'How many times does this print "yo"?',
            code:`for (int i = 1; i <= 5; i = i + 1) {
    System.out.println("yo");
}`,
            opts:['4','5','6','Forever'],
            ans:1,
            why:`5 times: i = 1, 2, 3, 4, 5. Then i=6 stops it.` }
        
          ,{ type:'type', q:'Write the header of a for loop that counts i from 0 up to 4 (so i < 5). Just the for line, ending with {.',
            hint:'for (start; condition; step) {',
            accept:['for (int i = 0; i < 5; i++) {','for (int i = 0; i < 5; ++i) {'],
            why:`A for loop has 3 parts inside the parens: start (int i = 0), keep going while (i < 5), and what to do each round (i++).` }
        ]
      }
    ]
  }
];
