var mouseIsDown = false;
var mouseIsDownX;
var windowWidth;
var windowPercent;
var clickedOnMap = false;
const totalImageWidth = 78000;
const scroller = document.getElementById('scrollingImages');
const map = document.getElementById('map');
const handle = document.getElementById('mapHandle');

// "map" = mini map at top of screen
// "scroll = main house viewing area

map.addEventListener('mouseover', mouseOver);
map.addEventListener('mousedown', mouseOnMap);
map.addEventListener('mousemove', mouseMoveOnMap);
scroller.addEventListener('mousedown', mouseOnScroll);
scroller.addEventListener('mousemove', mouseMoveOnScroll);
addEventListener('mouseup', mouseUp);
addEventListener('mousemove', moveMap);

// -- for touch screens -- //
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

// -- changes cursor on map -- //
function mouseOver() {
  map.classList.add('active');
}



function mouseOnMap(e) {
//  console.log('mouse down on map at ' + e.pageX);
  mouseIsDown = true;
  clickedonMap = true;
  windowWidth = window.innerWidth;
  windowPercent = e.pageX / windowWidth;
  scroller.scrollLeft = windowPercent * totalImageWidth;
  handle.style.left = e.pageX - (.02 * windowWidth) + 'px';
  e.preventDefault();
  map.classList.add('active');
  handle.classList.add('active');
  document.getElementById("scrollPosition").innerHTML = scroller.scrollLeft;}

function mouseMoveOnMap(e) {
  if (clickedOnMap == true) {
    console.log('mouse position is ' + e.pageX);
    windowWidth = window.innerWidth;
    windowPercent = e.pageX / windowWidth;
    scroller.scrollLeft = 1.05 * windowPercent * totalImageWidth;
    handle.style.left = e.pageX - (.02 * windowWidth) + 'px';
    document.getElementById("scrollPosition").innerHTML = scroller.scrollLeft;}}

// -- updates even when mouse is moving off map until mouseUp event -- //

function moveMap(e) {
  if (clickedOnMap == true) {
    windowWidth = window.innerWidth;
    windowPercent = e.pageX / windowWidth;
      handle.style.left = e.pageX - (.02 * windowWidth) + 'px';
  e.preventDefault();
  map.classList.add('active');
  handle.classList.add('active');
    scroller.scrollLeft = 1.05 * windowPercent * totalImageWidth;
//    handle.style.left = e.pageX - (.02 * windowWidth) + 'px';
    document.getElementById("scrollPosition").innerHTML = scroller.scrollLeft;}}





/*
function moveMap(e) {
  if (clickedOnMap == true) {
    windowWidth = window.innerWidth;
    windowPercent = e.pageX / windowWidth;
    scroller.scrollLeft = 1.05 * windowPercent * totalImageWidth;
    handle.style.left = e.pageX - (.02 * windowWidth) + 'px';
    document.getElementById("scrollPosition").innerHTML = scroller.scrollLeft;}}
*/

function mouseOnScroll(e) {
  mouseIsDown = true
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
  clickedOnMap = false;
  scroller.classList.remove('active');
  map.classList.remove('active');
  handle.classList.remove('active');
//  console.log("mouse up at " + e.pageX);
} 

document.getElementById("scrollPosition").innerHTML = scroller.scrollLeft;
