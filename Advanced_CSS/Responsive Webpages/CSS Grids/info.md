CSS Grids versus CSS Flexbox
Flexbox is a flexible layout and should be used when you want a flexible layout, whereas, grids are more like a rigid structure use them when you want a grid like structure.

grid will by default occupy the whole width of the webpage like a block element does, however it will only take as much height as your content requires like an inline element does.

display:grid this will set your div to display it's items as a grid

grid-template-columns: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
grid-template-rows: neechee

auto will make your div take only the amount of space required by your content
you already know how fr works
minmax gives a min and max values and your div stays in that dimension

repeat(n, width) n is the number of times you want it to repeat... width is obviously width
this is used to reiterate.. suppose grid me 120 rows daalne hai repeat(120,300px)

grid-auto-rows:400px this is used to set width of any row or column that is left out of grid or will be added later on

gap:300px you already know why this is used
