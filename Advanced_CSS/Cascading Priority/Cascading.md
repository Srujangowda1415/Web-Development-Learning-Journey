we are studying about the preference of css styles
the priority of css styles is decided by 4 main things which are...

1. POSITION -->
2. SPECIFICITY
3. TYPE
4. IMPORTANCE

POSITION

the style which is defined later will be considered or given more priority
suppose
color:red
color:blue
here the text of the colour will be blue, or fir neeche agar kuch or daal diya toh fir vo ho jayega
so basically the lower you go the more the importance increases or we can the last style defined will be considered.

SPECIFICITY

now how we define a selector also influences its importance or priority
so there are primarily 4 ways to select an element
one is to select the element type like h1 or p or body
second is two use the class name
third is to defined the element type with its attributes like h1[draggable]
fourth is to use the element id

the priority of the specifity is in this order itself, here it is arranged in increasing order.
in short, the element id will have the most priority.

TYPE

priority of the styles also depend on the linking type, or how you link the stylesheet to your html file
the priority order is as follows:
Extrernal CSS File < Internal CSS File < Inline Style Tag

External CSS File is linked using the link tag
Internally css is defined using the style tag in the head of the html file
inline style tag toh pata hi hona chahiye tujhe

we have done a simple exercise to practice the same....
check that out!
