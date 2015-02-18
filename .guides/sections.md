---
title: LOOPS
files: []
layout: 2-panels-tree

---
# 'Forking' this module
If you check the url address bar of your browser, if it starts with `https://codio.com/anon/....` then this means it is an anonymous project and any changes you make will be lost when you close down the browser tab. This will be the case if you access the module from the Codio Courses screen.

To avoid losing changes, you can 'fork' the module into your own Codio account where it will appear in your projects list. To do this, select the **'Project->Fork'** menu item and choose a suitable name for the project.

# A few words about the Codio Guide
Before we start with this module here are a few pointers about using this Codio Guide.

If you've already read this in another Guide then skip to the next section.

![](.guides/img/guides-helper.jpg)

# The File Tree
The left most panel is the File Tree **(1)**. This is where your project's files are stored. You can open up files you see listed there by clicking on them.

# About the Codio Guide
The Codio Guide **(2)** is the content you are reading right now. It's worth knowing the following

- if you ever close the Guide tab by mistake, simply open in from the View menu **(3)**.
- you can expand and collapse the Guide's Table of Contents **(4)** with the Hamburger icon **(5)**
- you move from one section of the Guide to the next using either the Table of Contents or the Navigation Buttons (6)

# The Rocket Menu
The Rocket menu **(7)** is a dropdown menu that lets you load code into your file tree when you click it as different sections might want to show different bits of code.

You are usually encouraged to mess around with the live code. It is perfectly likely that you can wreck the code so pressing the Rocket menu button will restore the code again to its original state.

# Previewing
The Preview button **(8)** lets you run your web application. When you press it, it will open up a preview window so you can play with your app.

# Code Tabs
When you open some code from the file tree or the Codio Guide opens a file for you automatically, they will appear within a tab **(9)** in one of the panels. You can have several of these open at one time so you may need to click on the respective tab to get to see the file you want.


---
title: Introduction
files: []
layout: ""

---
Loops are another mainstay of any programming language. There are a few loop types in Javascript

- `for` 
- `while`
- `do` / `while`

each of which we'll explain in this module. There is also another special loop type 

- `for each` / `in`, but we'll cover this in another module.

---
title: "The 'for' loop"
files:
  - path: example.js
    action: open
    ref: // FOR
    lineCount: 9
layout: ""

---
>The code for 'Loops' module is already loaded in your project. Ii you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select 'Loops'. 

'For' loops are incredibly useful and you'll see them all over the place.

Consider the following piece of mind-blowingly dull code..

```
var flowers = ['Daisy', 'Rose', 'Daffodil', 'Weed'];

document.write(flowers[0] + "<br/>");
document.write(flowers[1] + "<br/>");
document.write(flowers[2] + "<br/>");
document.write(flowers[3] + "<br/>");
```

`var flowers = ['Daisy', 'Rose', 'Daffodil', 'Weed']` creates a so-called array, which we have covered fully in the 'Arrays' module. All we need to worry about for now is that an array is a collection of multiple values, all stored in one single variable.

A much better way to write the above code (imagine if the array contained hundreds of flowers) is to use a loop.

```
var flowers = ['Daisy', 'Rose', 'Daffodil', 'Weed'];
var i;
var upperLimit=flowers.length
for(i=0; i<upperLimit; i++) {
	document.write(flowers[i] + "<br/>");	
}
```

Let's look at the constituent parts of the `for` statement

- `i=0` is the *initialization* part; you can initialize one or more variables here, separated by a comma
- `i<upperLimit` is the *condition* part and the loop will continue to execute until this condition is true
- `i++` is the *iteration expression* and at the end of each loop, this expression is executed; it's generally used to update or increment the counter variable (`i` in our case).

So, in plain English, this loop does the following

- *starting at 0, display the 'i'th flower in the flowers array, incrementing the counter `i` at the end of each iteration of the loop. When the upper limit of the array is reached, stop*

---
title: "The 'while' loop"
files:
  - path: example.js
    action: open
    ref: // WHILE
    lineCount: 7
layout: ""

---
A 'while' loop is simply another way of doing the same thing as the 'for' loop.

Let's do the same thing as our previous example but with a 'while' loop.

```
var flowers = ['Daisy', 'Rose', 'Daffodil', 'Weed'];
var i;
var upperLimit=flowers.length;

i=0;
while(i<upperLimit) {
	document.write(flowers[i++] + "<br/>");
}
```
---
title: "The 'do..while' loop"
files:
  - path: example.js
    action: open
    ref: // DO ... WHILE
    lineCount: 6
layout: ""

---
The 'do...while' loop is yet another flavour of loop. 

Again, let's do the same thing as our previous example but with a 'do...while' loop.

```
var flowers = ['Daisy', 'Rose', 'Daffodil', 'Weed'];
var i;
var upperLimit=flowers.length;

i=0;
do {
	document.write(flowers[i] + "<br/>");    
} while(++i<upperLimit);
```
---
title: "Break & Continue"
files:
  - path: "#all"
    action: close
    ref: ""
  - path: "#cmd: bash .guides/restore.sh 02-break-continue, example.js"
    action: open
    ref: ""
layout: ""

---
>We have loaded new content for you but if you need to restore you can do from the ![](.guides/img/rocket.png) Rocket menu, select 'Break & Continue'. 

You will occasionally find the following situations 

- you want to break out of a loop before the natural end of the loop ( when the normal loop condition is met)
- you want to skip the current iteration of your loop and move on to the next one

Let's look at this code to illustrate this properly

```
  var flowers = ['Daisy', 'Rose', 'Daffodil', 'Weed', 'Dandelion', 'Deadly Nightshade'];
  var i;
  var upperLimit=flowers.length;
  
  document.write("<br/>All of our flowers ...<br/>");  
  for(i=0; i<upperLimit; i++) {
    document.write(flowers[i] + "<br/>");	
  }

  document.write("<br/><br/>NOT all of our flowers ...<br/>");  
  for(i=0; i<upperLimit; i++) {
    if(i==2)
      continue;
    if(i==4)
      break;
    document.write(flowers[i] + "<br/>");	
```

In the first loop, we are displaying a list of all flowers, which will look like this (we've added a few new flowers)

```
Daisy
Rose
Daffodil
Weed
Dandelion
Deadly Nightshade
```

The second loop does the same thing, but this time we want to do the following

- if we are on the 3rd array element (i==2, remember that 0 is the first array element) then we want to skip whatever comes next inside our loop and start the next iteration of the loop; we do this using the `continue` statement.
- if we hit the 5th element, we want to abort the entire loop, using the `break` statement

As a result, we will get the following output

```
NOT all of our flowers ...
Daisy
Rose
Weed
```
---
title: Which loop type should I use?
files: []
layout: ""

---
Generally, `for` loops are more commonly used as they are a bit more compact and allow for initialization of variables in the `for` statement.

As you tackle different coding challenges you can decide which one works best.