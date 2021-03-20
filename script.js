var mouseIsDown = false;
var mouseIsDownX;
var windowWidth;
var windowPercent;
const totalImageWidth = 64000;
const scroller = document.getElementById('scrollingImages');
const map = document.getElementById('map');
const handle = document.getElementById('mapHandle');

map.addEventListener('mouseover', mouseOver);
map.addEventListener('mousedown', mouseOnMap);
map.addEventListener('mousemove', mouseMoveOnMap);
scroller.addEventListener('mousedown', mouseOnScroll);
scroller.addEventListener('mousemove', mouseMoveOnScroll);
addEventListener('mouseup', mouseUp);

window.onload = function() {
  map.addEventListener('touchmove', function(e) {
  var touch = e.targetTouches[0];
  e.preventDefault();
  mapHandle.style.left = touch.pageX + 'px';
  windowWidth = window.innerWidth;
  windowPercent = touch.pageX / windowWidth;
  scroller.scrollLeft = windowPercent * totalImageWidth;
//   console.log(touch.pageX + ' - ' + touch.pageY);
}, false);
}

function mouseOver() {
  map.classList.add('active');
}

function mouseOnMap(e) {
  console.log('mouse down on map at ' + e.pageX);
  mouseIsDown = true;
  windowWidth = window.innerWidth;
  windowPercent = e.pageX / windowWidth;
  scroller.scrollLeft = windowPercent * totalImageWidth;
  handle.style.left = e.pageX - (.02 * windowWidth) + 'px';
  e.preventDefault();
  map.classList.add('active');
  handle.classList.add('active');
  document.getElementById("scrollPosition").innerHTML = scroller.scrollLeft;}

function mouseMoveOnMap(e) {
  if (mouseIsDown == true) {
    console.log('mouse position is ' + e.pageX);
    windowWidth = window.innerWidth;
    windowPercent = e.pageX / windowWidth;
    scroller.scrollLeft = 1.05 * windowPercent * totalImageWidth;
    handle.style.left = e.pageX - (.025 * windowWidth) + 'px';
    document.getElementById("scrollPosition").innerHTML = scroller.scrollLeft;}}

function mouseOnScroll(e) {
  mouseIsDown = true;
  mouseIsDownX = e.pageX;
  e.preventDefault();
  scroller.classList.add('active');}

function mouseMoveOnScroll(e) {
  if (mouseIsDown == true) {
    scroller.scrollLeft += (mouseIsDownX - e.pageX)/20;
    handle.style.left = scroller.scrollLeft / totalImageWidth * windowWidth + 'px';
    document.getElementById("scrollPosition").innerHTML = scroller.scrollLeft;}}

function mouseUp(e) {
  mouseIsDown = false;
  scroller.classList.remove('active');
  map.classList.remove('active');
  handle.classList.remove('active');
  console.log("mouse up at " + e.pageX);} 

document.getElementById("scrollPosition").innerHTML = scroller.scrollLeft;
