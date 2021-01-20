

/*
ideas: 

scroll wheel for zoom?
minimap at top for quick navigation?
top-down for navigation?

*/

document.getElementById("scrollPosition").innerHTML = scrollX;

const scroller = document.getElementById('scrollingImages');
var scrollX;
var startX;
var endX;
var movement;
var mouseIsDown = true;

addEventListener('mousedown', mouseDown);
addEventListener('mouseup', mouseUp);
addEventListener('mousemove', mouseMove);

function mouseDown(e) {
  mouseIsDown = true;
  e.preventDefault();
  scroller.classList.add('active');
  console.log("mouse down at " + e.pageX);
  startX = e.pageX;
}

function mouseUp(e) {
  mouseIsDown = false;
  scroller.classList.remove('active');
  console.log("mouse up at " + e.pageX);
  
 // scroller.scrollLeft -= (endX - startX);
}

function mouseMove(e) {
  if (mouseIsDown == false) {
    return;
  }
  endX = e.pageX;
  scroller.scrollLeft -= (endX - startX)/3;
  scrollX = scroller.scrollLeft;
  document.getElementById("scrollPosition").innerHTML = scrollX;
}