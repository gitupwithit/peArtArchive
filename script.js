

/*
ideas: 

scroll wheel for zoom?
minimap at top for quick navigation?
top-down for navigation?

*/

document.getElementById("scrollPosition").innerHTML = scrollX;

const scroller = document.getElementById('scrollingImages');
const map = document.getElementById('map');
const handle = document.getElementById('mapHandle');
var scrollX;
var startX;
var endX;
var movement;
var mouseIsDown = false;
var windowWidth;
var windowPercent;

addEventListener('mousedown', mouseDown);
addEventListener('mouseup', mouseUp);
addEventListener('mousemove', mouseMove);

window.onload = function() {
  map.addEventListener('touchmove', function(e) {
  var touch = e.targetTouches[0];
  e.preventDefault();
  mapHandle.style.left = touch.pageX + 'px';
  windowWidth = window.innerWidth;
  windowPercent = toch.pageX / windowWidth;
  scroller.scrollLeft = windowPercent * totalImageWidth;
//   console.log(touch.pageX + ' - ' + touch.pageY);
}, false);
}

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
