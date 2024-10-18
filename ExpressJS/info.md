**WHAT IS NODE JS?**
You already know javascript intitially could be run only in the browsers, node js is nothing but the same js put outside, it uses the v8 engine of google chrome built in cpp.

** A few global variables**
**dirname: gives path to the current directory
**filename: gives name of the file
require: will be used as an alternative to import
module: ye toh pata hi hai
process:info about the env where the program is being executed.

**MODULES**
here we are using CommonJS and every file is a module by default in CJS
also, module is nothing but like a unit of code you can import this module anywhere and use it

so here we saw, we created 3 files, one file has the code to console log the function say hi and the names, the other files has the names stored in a const variable and the third file has the function sayHi defined in it.
we tried to run the code but obviously it threw an error, toh ab kya kre? so we have to first export the modules using
module.exports={}
and then import these modules using import or require wherever you want to use them.

whenever we write a module we always share the most minimum amount of code that can be shared, jitna kam utna badhiya
we saw a way to write the export syntax that is module.exports={},so here we have defined the export function as an object or called it or stored in an object basically we can store it in other ways too, for example
module.exports.listItem=["li1',"li2']
or
module.exports.person={
person1:"Abhay"
}

you dont actually have to create a variable and then export it
directly hi module.exports.helloname=['hello1','hello2','hello3']
