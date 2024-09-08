**ALERT FUNCTION**
so alert functions creates a pop up in the browser with out desired text or any input

```javascript
alert(your message)
```

**DATA TYPES**
data types is basically the classification of types of data, in javascript there are mainly 2 types of data types which are further classified
the 2 types are

1.  Primittive Data Types
    Primitive Data Types basically refers to the most cellular level of classification or we can say kisi object ke andar yaa kahi bhi koi bhi data dena hai koi bhi input dena hai toh vo kis type ka ho sakta hai
    we have 7 types of primitive data types

        1.String

        2.Number

        3.Boolean

        4.undefined

        when we use typeof on a undefined variable it returns undefined so the undefined datatype is an undefined.

        5.null

        null is used as no entry or no data

        when we use typeof on a null variable it returns object so the null datatype is an object

        6.symbol

        7.bigint

2.  Reference Data Types
    reference data types are used to classify the ways in which you can store data or in ways which can be used to store the primitve data types.
    there are three types of reference data types:

        1.Objects

        2.Arrays

        3.Functions

**VARIABLES**
var is a very old technique and should not be used anymore however for old codebases kya kar sakta hai tu toh kar lena use.
var stands for variable

variables are used to store data temporarily its like cartons we use to store things and organise them properly different things in different boxes

earlier var keyword was used but after es6 we use let and const keyword

commonly single quotes are used to enclose 'strings'

let myFirstVar='pehla var hai mera'

console.log(myFirstVar)

when you define a function but dont initialise it the function remains undefined

multiple variables can be defined in a single line like:let firstName='Abhay',lastName='Kumar'; however this practice is not recommended and you should always define only one variable in one line.

```javascript
var meraNaam = "Abhay";
```

var is a mutable datatype and hence can be changed even after it is defined
variable is nothing but a container which can used to store your data

**IDENTIFIERS**

keywords cant be used as identifiers

naam ka matlab hona chahiye abc se nahi hota hai your name should explain your functionality

identifiers cant start with numbrrs

space and - cant be used to show separation conventionally underscores are used

use pascalCasing/camelCasing for increased readability

**STRING CONCATENATION**
string concatenation is nothing but adding of two strings.. it is used to print outputs from various strings
**Length Function**
Length function is used to obtain length of a string..
will it work over other data types? let's try

```javascript
myName.length;
```

so when we try to find the length of a datatype other than string it does not give an error but rather it throws an output which says undefined so basically the length of number or boolean is undefined


**Slice Function**
slice function lets you slice your string upto a certain number
```javascript
myName.slice(x,y)
```
this will slice upto y-1 character

**Upper Case Function**
this will help you create your string to all upper case...
```javascript
myName.touppercase();

```
**Lower Case Function**
this will help you create your string to all lower case...
```javascript
myName.tolowercase();
```