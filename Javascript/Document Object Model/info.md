The Document method querySelector() returns the first Element within the document that matches the specified CSS selector, or group of CSS selectors. If no matches are found, null is returned.

If the specified selector matches an ID that is incorrectly used more than once in the document, the first element with that ID is returned.

So we start Document Object Model today.. a new day and a new beginning
So till now we saw how we will have to understand the HTML structure of the webpage to fully utilise the powers of DOM manipulation
We saw how HTML Structure is like a tree with two roots one being head and the other being body
which further has many nodes or you can say children

DOM Manipulation is done using a method document, this method has a lot of functions
so we will be seeing all the functions now...
**GetElementById()**
so this functions requires you to put the id tag you mentioned in the stylesheet, basically call this function with the id as the parameter and store it in a variable and voila! you have targetted and selected the element already.

```javascript
const hellovar = document.GetElementById("myfirstelementid");
```

**GetElementByClassName()**
here you give the class name of the element as a parameter

```javascript
const hellovar2 = document.GetElementByClassName("myfirstelementclass");
```

**GetElemmentByTagName()**
you give the tag name of html as the parameter
html tags are basic names of the html elements like h1,h2,p,a,li,

```javascript
const hellovar2 = document.GetElementByTagName("myfirsttagclass");
```

**querySelector()**
this is basically the same as the above ones but ye kya karta hai suppose you give a class name it will go thru the html tree and check for the class or jaha bhi match kar gaya vo store kar dega variable me basically _ek hi element lega or first lega_

```javascript
const el = document.querySelector("div.user-panel.main input[name='login']");
```

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<STYLING AN ELEMENT>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
to style an element using DOM Manipulation we use the style function

```javascript
const title = document.querySelector("#main-heading");
title.style.color = "red";

const hello = document.querySelectorAll(".list-items");
```

toh ab baat sun use toh tu mostly queryselector hi karega toh ab usme agar html tags diye tab toh normally quotes ke andar tag dede
but agar class de rha hai toh css ki tarah . daal de
or agar id use ho rhi hai toh same css ki tarah ek # lagega

So mainly DOM has 4 pillars or you can say 4 steps... to learn DOM you need to master all these steps
the first one is element selection: you need to know how to select the required element so that you can target and manipulate it later after storing it in some variable

the second is manipulating the html of the element
the third is manipulating the css of the element
and the fourth is event listener as of now i have no idea what it is

we have already seen how to target an element now we will be seeing how to manipulate the html of the element.

HTML Manipulation

```javascript
const hello = document.querySelector("hello");
hello.innerHTML;
// this will return the innerHTML of the element
hello.innerHTML = "naya hello";
//  this will manipulate the innerhtml and update it to naya hello
//  suppose you update the innerHTML of an element and you give in the values in between arrows or
// basically inside html tags then it will treat that element as that html element tag itself
// so if you give the content between h1 tags you will get the text in the format of h1 itself
```

CSS Manipulation

the style property is used to manipulate the style of the element
so we use

```javascript
const bye = document.querySelector("hello");
bye.style.backgroundColour = "red";
// similary style. laga ke css ki koi bhi property daal do
// but there is a catch css properties has spaces or dashes between them so in that case use
// camelCasing to write the properties
```

EVENT LISTENERS
event listeners let you interact with the element in the real time suppose you want to make a bulb which turns on when you click on it and then turns off when you click on it again so that can be done using event listeners

```javascript

```
