// var box = document.querySelector('.box');
// var left = 0;
// var maxLeft = 500;

// function move () {
//   if(left >= maxLeft) {
//     clearInterval(timerId);
//     return;
//   }
//   left += 10;
//   box.style.left = left + 'px';
// }

// var timerId = setInterval(move, 10);

var boxWidth = 400;
var bugWidth = 20;
var $bug = document.querySelector('#bug');
var $box = document.querySelector('.box');
var bugSpeed = 2000;
var timer = 0;

var $point = document.getElementById('point');
var $life = document.getElementById('life');
var point = 0;
var life = 10;

function move() {
    var x = random(boxWidth - bugWidth);
    var y = random(boxWidth - bugWidth);
    console.log(x, y);

    $bug.style.left = x + 'px';
    $bug.style.top = y + 'px';
}

function random(max) {
    return Math.floor(Math.random() * max);
}



//catchBug == addPoint
function catchBug() {
    point = point + 1;
    $point.innerHTML = point;
    dieBug();
    event.stopPropagation();
}

function dieBug() {
    start();
    move();
}

//missClick = minusLife
function missClick() {
    life = life - 1;
    $life.innerHTML = life;
    
    if(life == 0) {
        gameover();
    }
}

function start() {
    clearInterval(timer);
    setInterval(move, bugSpeed);
}

function gameover() {
    clearInterval(timer);
    alert('GAMEOVER');
}

$bug.addEventListener('click', catchBug);
$box.addEventListener('click', missClick);