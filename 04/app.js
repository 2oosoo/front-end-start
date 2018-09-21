var wrap = document.querySelector('.wrap');

var str = '';
for(var i=0; i<4; i++) {
    for(var j=0; j<4; j++) {
        str += `<div class='${(i + j) % 2 == 0 ? 'b' : 'w'}'></div>`;
    }
}
// for(var i=0; i<4; i++) {
//     if(i%2==0) {
//         for(var j=0; j<4; j++) {
//             if(j%2==0) {
//                 str +='<div class="b"></div>';
//             } else {
//                 str +='<div class="w"></div>';
//             }
//         }
//     } else {
//         for(var j=0; j<4; j++) {
//             if(j%2==0) {
//                 str +='<div class="w"></div>';
//             } else {
//                 str +='<div class="b"></div>';
//             }
//         }
//     }
// }

wrap.innerHTML = str;

var blocks = document.querySelectorAll('.wrap > div');
var selectedDom = null;

function selectblocks(event) {
    console.log('selected');
    var block = event.currentTarget;
    console.log('block');

    if(selectedDom) {
        selectedDom.className =  selectedDom.className.replace(' select', '');
    }

    block.className += ' select';

    selectedDom = block;
}
for(var i=0; i<blocks.length; i++){
    blocks[i].addEventListener('click', selectblocks);
  }    
// blocks.forEach(function(block) {
//     block.addEventListener('click', function(event) {
//         block.style.backgroundColor = 'yellow';
//     }) 
// });
// blocks.forEach(function(block) {
//     block.addEventListener('click', function(event) {
//         block.style.backgroundColor = 'black';
//     })
// });
// for(var i=0; i<16; i++) {
//     blocks[i].addEventListener('click', function(event) {
//         blocks[i].style.backgroundColor = 'yellow';
//     });
// }