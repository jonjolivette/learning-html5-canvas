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
// fillStyle controls the style that would fill the element
// mind you if placed above all the elements it will effect
// everything below it but if you place fillStyle above each
// object the scope changes
c.fillStyle = "rgba(0,0,0,0.5";
c.fillRect(300, 300, 100, 100);
c.fillStyle = "rgba(255,255,255,1";
c.fillRect(500, 500, 100, 100);
console.log(canvas);

//=========   LINE   ==========

// Black CENTER Line
// this indicates to canvas that we are beginning a path
// and DO NOT connect this path to anything proceeding it
c.beginPath();
// c.moveTo(x,y);
// declares where on the canvas we want to START
c.moveTo(100, 100);
// c.lineTo(x, y);
// dictates where on the canvas our line ENDS
// 500px to right, 500px down
c.lineTo(500, 500);
// stroke function serves to execute the canvas rules
c.stroke();

//Bottom OUTTER Line1
c.beginPath();
// c.moveTo(x,y);
// declares where on the canvas we want to START
c.moveTo(101, 200);
// c.lineTo(x, y);
// dictates where on the canvas our line ENDS
// 501px to right, 599px down
c.lineTo(501, 599);
//strokeStyle allows you to color
c.strokeStyle = "white";
// stroke function serves to execute the canvas rules
c.stroke();

//Top OUTTER Line2
c.beginPath();
// c.moveTo(x,y);
// declares where on the canvas we want to START
c.moveTo(200, 100);
// c.lineTo(x, y);
// dictates where on the canvas our line ENDS
// 500px to right, 500px down
c.lineTo(600, 500);
//strokeStyle allows you to color
c.strokeStyle = "white";
// stroke function serves to execute the canvas rules
c.stroke();

//=======   CIRCLE   ========
c.beginPath();
c.arc(150, 150, 30, 0, Math.PI * 2, false);
// c.arc(x: Int, y: Int, r: Int, startAngle:
//   Float, endingAngle: Float,
//   drawCounterClockwise: Bool (false));
c.stroke();
