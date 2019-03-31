//creating canvas variable to select the canvas html element
var canvas = document.querySelector("canvas");
console.log(canvas);

//in order to set the canvas element to be the full width and height
//of the window we set the canvas element to inner width and height
//of entire window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// creating variable c that represents CONTEXT
//returning a drawing context to variable named c
var c = canvas.getContext("2d");
// c.fillRect(x, y, width, height);
c.fillRect(100, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
c.fillRect(500, 500, 100, 100);
console.log(canvas);
