---
title: LOOPS
files: []
editable: true
layout: ""

---
Loops is another mainstay of any programming language. There are a few loop types in Javascript

- `for` 
- `while`
- `do` / `while`

each of which we'll explain in this module. There is also another special loop type 

- `for each` / `in`, but we'll cover this in another module.

---
title: "The 'for' loop"
files: []
editable: true
layout: ""

---
>Select 'Loops' from the ![](.guides/img/rocket.png) Rocket menu at the top to load some code or restore it if you mess it up.

For loops are incredibly useful and you'll see them all over the place.

Consider the following piece of mind-blowingly dull code..

```
var flowers = ['Daisy', 'Rose', 'Daffodil', 'Weed'];

document.write(flowers[0] + "<br/>");
document.write(flowers[1] + "<br/>");
document.write(flowers[2] + "<br/>");
document.write(flowers[3] + "<br/>");
```

`var flowers = ['Daisy', 'Rose', 'Daffodil', 'Weed']` creates a so-called array, which we'll cover fully in the 'Arrays' module. All we need to worry about for now is that an array is a collection of multiple values, all stored in one single variable.

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

- `i=0` is the *initialization* part; you can initalize one or more variables here, separated by a comma
- `i<upperLimit` is the *condition* part and the loop will continue to execute until this condition is true
- `i++` is the *interation expression* and at the end of each loop, this expression is executed; it's generally used to update or increment the counter variable (`i` in our case).

So, in plain English, this loop does the following

- *starting at 0, display the 'i'th flower in the flowers array, incrementing the counter `i` at the end of each iteration of the loop. When the upper limit of the array is reached, stop*

---
title: "The 'while' loop"
files: []
editable: true
layout: ""

---
A while loop is simply another way of doing the same thing as the for loop.

Let's do the same thing as our previous example but with a while loop.

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
files: []
editable: true
layout: ""

---
The do...while loop is yet another flavour of loop. 

Again, let's do the same thing as our previous example but with a do...while loop.

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
files: []
editable: false
layout: ""

---
>Select 'Break & Continue' from the ![](.guides/img/rocket.png) Rocket menu at the top to load some code or restore it if you mess it up.

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
title: "#Which loop type should I use?"
files: []
editable: false
layout: ""

---
Generally, `for` loops are more commonly used as they are a bit more compact and allow for initialization of variables in the `for` statement.

As you tackle different coding challenges you can decide which one works best.