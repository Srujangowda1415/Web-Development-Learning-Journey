so we need to put the jquery cdn in the script tag to connect jquery,
ek or cheez, dekho jquery script ke saath apni bhi toh script daalega na.. toh make sure to include jquery cdn before your script so that the jquery library is loaded first and then your script is processed
otherwise the computer wont understand your code and throw an error

or ye toh pehle se hi pata hai tujhe ki script tags at the end of the body tag hi daalte hai taaki pehle poora html structure load ho or fir functionality load ho
but jquery use karoge toh fir head tag me daal sakte hai because jquery offers a ready function
vo use karo or uss function ke andar saara script code likho

we saw how minification works...
so basically when open source projects give their codes, they release two versions one is human readable and is for us users to customise it for our personal use and the other one is for the computer and it is really difficult for a human to read
so what is this minified code anyway?
it is nothing, the computer just removes the indentations and unnecesary spaces to reduce the file size and hence processing time
these spaces and indentations are not essential for the code to run.
then why are they added in the first place?
to improve the readability of the code

**_SELECTING AN ELEMENT IN jQUERY_**
to select an element in js you use
document.querySelector('kkkk')
but here you only need to write

```javascript
$("kkkk");
```

now this will work for both selecting one element and selecting all the elements with that path
i dont know what happens when there a lot of elements with the same reference but i want to select only the first one.

**_ MANIPULATING THE STYLES USING jQUERY _**

now we can just ask the computer to tell us about the styles element is having

```javascript
$("kkkk").css("color");
```

or we can also manipulate the styles

```javascript
$("kkkk").css("color", "red");
```

but this method of manipulating style of an element is very weird, as this will result in your script having info about your styles and that is definitely not we want it will make our code very unorganised and messy
so there is a better way to this
we can first define style to a new class in our stylesheet and then

```javascript
$("kkkk").addClass("newClass");
```

so this will add all the styles you added to the new class and our code will also be organised and not messy
similary we can remove a class too

```javascript
$("kkkk").removeClass("newClass");
```

or we can check if our element is getting styled by a particular class

```javascript
$("kkkk").hasClass("newClass");
```

**MANIPULATING THE HTML INSIDE AN ELEMENT USING jQUERY**
conventionally when we use vanilla javascript, to manipulate the html we use
('element').innerHTML aisa kuch
but now in jQuery we can use

```javascript
$("kkkk").text("naya text");
// to update the text
$("kkkk").html("<a>Hello ANchor</a>");
// to use html tags
```

**ATTRIBUTES IN jQUERY**
we saw almost everything now we will be discussing the attributes the image tags and the anchor tags

```javascript
$("kkkk").attr("class");
// this will return the class of the kkkk element
$("kkkk").attr("href");
// this will return the link of the kkkk element
// now to set the href of the kkkk element
$("kkkk").attr("href", "your link here");
```

**EVENT LISTENERS IN jQUERY**

```javascript
$("kkkk").click(function () {
  $("kkkk").css("color", "green");
});
```

lets try to make a very simple dark mode button

```javascript
$("button").click(function () {
  $(document).css("color", "black");
});
```

** ADDING AND REMOVING ELEMENTS USING jQUERY **
earlier we saw manipulating html but in that we saw how to manipulate the contents of an html element but we couldnt learn how to add or remove an html event
so now we see how to add an element

```javascript
$("h1").before("<a>Hello Anchor</a>");
// this adds an element of anchor type just before the h1
$("h1").after("<a>Bye Anchor</a>");
// this adds an element of anchor type just after the h1

// so now we will see two more methods to add html but dont get confused as they are a lil similar
$("h1").prepend("<button> this will get added before h1 in h1</button>");
// this will add an element of button type in h1 but before the content that is pre defined
$("h1").append("<button> this will get added after h1 in h1");
// so this will add an element of button type in h1 but after the content that is pre defined

// the basic difference between (before,after) and (prepend,append) is that, the former adds elements outside the selected element and the latter adds element inside the selected element.
```

** ANIMATIONS IN jQUERY **

```javascript
$("button").on("click", function () {
  $("kkkk").hide();
});
// this will hide the element
$("button").on("click", function () {
  $("kkkk").show();
});
// this will show the element
$("button").on("click", function () {
  $("kkkk").toggle();
});
// when you click on the button it will hide the kkkk element and when you click on the button again it will show and the loop goes on
$("button").on("click", function () {
  $("h1").fadeToggle();
});
// similar to hide show but in terms of fading
$("button").on("click", function () {
  $("h1").slideToggle();
});
// similarly slide karega up down
//  ANIMATE FUNCTION
$("button").on("click", function () {
  $("kkkk").animate({ opacity: 0.5 });
});
// so the thing with animate function is that you can only change things which have a numeric value for instance margin  padding opacity but not colours and position

// chaining of elements

$("button").on("click", function () {
  $("kkkk").slideUp().slideDown().animate({ margin: 50 });
});
```
