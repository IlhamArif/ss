var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');
canvas.height = 480;
canvas.width = 450;
var render = function(){
r1()
r2()
r3()
bl1()
bl2()
player()
sdisplay()
}
var score = 0
var sdisplay = function(){
ctx.fillStyle = "White"
ctx.font = "50px Arial"
ctx.fillText(score, 210, 50)
}
var r1 = function(){
ctx.fillStyle = "Red";
ctx.fillRect(0, 0, 150, 480);
}
var r2 = function(){
ctx.fillStyle = "Green";
ctx.fillRect(150, 0, 150, 480);
}
var r3 = function(){
ctx.fillStyle = "Blue";
ctx.fillRect(300, 0, 150, 480);
}
var pos = 2;
var p1 = {
height: 50,
width: 50,
x: 200,
y: 400
}
var player = function(){
ctx.fillStyle = "Yellow";
ctx.fillRect(p1.x, p1.y, p1.width, p1.height);
}
var b1 = {
y: 0,
x: 0,
height: 50,
width: 50
}
var b2 = {
y: 0,
x: 0,
height: 50,
width: 50
}
var bl1 = function(){
ctx.fillStyle = "Silver"
ctx.fillRect(b1.x, b1.y, b1.width, b1.height)
}
var bl2 = function(){
ctx.fillStyle = "Silver"
ctx.fillRect(b2.x, b2.y, b2.width, b2.height)
}
window.onload = function(){
var xpos = Math.floor(Math.random() * 3);
var bpos = xpos;
if (bpos == 0) {
b1.x = 50
b2.x = 350
}
if (bpos == 1) {
b1.x = 50
b2.x = 200
}
if (bpos == 2) {
b1.x = 200
b2.x = 350
}
setInterval(function(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
render()
fspeed = 10
if (score >= 20) {
fspeed = 20
}
if (score >= 40) {
fspeed = 40
}
b1.y += fspeed, b2.y += fspeed
if (b1.y > 430 && b2.y > 430) {
score += 1
b1.y = 0, b2.y = 0
var xpos = Math.floor(Math.random() * 3);
var bpos = xpos;
if (bpos == 0) {
b1.x = 50
b2.x = 350
}
if (bpos == 1) {
b1.x = 50
b2.x = 200
}
if (bpos == 2) {
b1.x = 200
b2.x = 350
}
}
if (b1.x == p1.x && b1.y == p1.y || b2.x == p1.x && b2.y == p1.y) {
alert("You Lost!\nScore: " + score)
score = 0;
fspeed = 10;
pos = 2;
if (pos == 2) {
p1.x = 200
}
b1.y = 0, b2.y = 0;
var xpos = Math.floor(Math.random() * 3);
var bpos = xpos;
if (bpos == 0) {
b1.x = 50
b2.x = 350
}
if (bpos == 1) {
b1.x = 50
b2.x = 200
}
if (bpos == 2) {
b1.x = 200
b2.x = 350
}
}
},33)
}
function Right() {
pos += 1
if (pos == 1) {
p1.x = 50
}
if (pos == 2) {
p1.x = 200
}
if (pos == 3) {
p1.x = 350
}
if (pos < 1) {
pos += 1
}
if (pos > 3) {
pos -= 1
}
}
function Left() {
pos -= 1
if (pos == 1) {
p1.x = 50
}
if (pos == 2) {
p1.x = 200
}
if (pos == 3) {
p1.x = 350
}
if (pos < 1) {
pos += 1
}
if (pos > 3) {
pos -= 1
}
}