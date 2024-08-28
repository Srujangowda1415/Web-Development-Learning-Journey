Bootstrap is a css framework, it has pre defined classes which we can use.

container
container-sm
container-md
container-lg
container-xl
container-fluid

all these are used to select the container ka size
suppose sm ya normal container use kiya toh vo small screens pe toh 100% width le leta hai but jaise jaise screen size badhti hai vo apni width static kar deta hai, isse kya hoga...
webpage responsive hoga..
Phone me toh one div one time ka system hota hai taaki responsive rahe kyuki width kam hoti hai but
desktop or laptop pe aisa nahi hota hai.. toh uss time width limit karega ye or baki divs ko bhi jagah lene dega...
container-fluid hamesha hi 100% width pe operate karta hai

col-2
col-4
col-6
aise agar dega toh, the whole screen will be divided in 12 units and then 2,4,6 units respectively de diya jayega... ye method badhiya hai jaise navbar banana hai side me toh usey col-2 dede or main section ko col-10

breakpoints de de
jaise sm,md,lg,xl,xxl
isse kya hota hai, tere code ko tere breakpoints samajh aayenge
suppose you give col-sm-2
col-sm-4
col-sm-6
toh fir this means... give the columns width in the ratio of 2:4:6 respectively for all screen sizes above small... small kaise define hota hai? vo bootstrap ke website pe defined hai, sm ka ek specified width hai lg ka bhi or similary xl ka bhi
.... theek hai small badi hui toh ratio me mil jayega width.. bilkul...
or agar small hui screen size toh??
toh fir width 100% aayega or column aa jayenge wrapping me full width leke jaise tujhe phone me chahiye...
toh isse fayda kya? responsive ho gaya na webpage

suppose you give col-md col-md col-md toh fir kya hoga?
toh fir medium screen sizes and above ke liye 1:1:1 ka width mil jayega or fir medium se kam hua screen size toh fir vahi same.. 100% width and div wrapping

**MULTIBLE BREAKPOINT**
ab dekh.. suppose tujhe chahiye ki small sized screen pe toh 12 me se 12 unit rakhe vo but jaise hi screen medium size ki ho fir container lele 6 units or jab large size ho tab 4 units lele.... isse hoga kya?
vahi responsive ho jayegi na webpage.. mobile pe poora dikhne lagega wrap karke jaisa chahiye or badi screens pe multiple divs aayega ek line me...
hoga kaise ye?
col-sm-12 col-md-6 col-lg-4

**Mix and Match**
isme kya hota hai bhai?
isme kuch div ke liye width dede or kuch ke liye chodh de... acha... fir jinka chodh diya vo kaise lenge width?
jo jagah bachegi naa saari defined width dene ke baad... usme se bache hui jagah le lenge

**Buttons in Bootstrap**
Soo... bootstrap already has pre defined classes for buttons just like it has classes for everything else
btn btn-primary
btn btn-secondary
btn btn-success
btn btn-danger and much moree....

**Cards**
