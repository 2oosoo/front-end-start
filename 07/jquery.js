// document.querySelector('h1').innerHTML = 'hi';
// $('h1')
//     .fadeOut()
//     .delay(1000)
//     .fadeIn();

// var $div = $('div');

// $div
//     .css("background-color", 'yellow')
//     .css("border", '1px solid red');
//  var divs = document.querySelectorAll(‘div’);
// for(var i = 0; i < divs.length; i++) {
// 	divs[i].style.backgroundColor = ‘red’;
// }

// $('ul').css({'list-style':'none','border':'1px solid red'});


// var $btn = $('#btn');
// var $txt = $('#txt');
// var $debug = $('#debug');

// $btn.on('click', function(event){
//     console.log('click')
//     if($txt.var() == '') {
//         alert('값을 넣어주세요.')
//         return;
//     }

//     $debug.html($txt.val());
// });  

// document.querySelector('h1').innerHTML = 'hi';

//  $('h1').fadeOut().delay(1000).fadeIn();

// var $div = $('div')

// $div
//   .css('background-color', 'yellow')
//   .css('border', '1px solid red');



// var divs = document.querySelectorAll('div');
// for(var i=0 ; i < divs.length; i++) {
//   divs[i].style.backgroundColor = 'red';
// }




var $btn = $('#btn');
var $txt = $('#txt');
var $debug = $('#debug');

$btn.on('click', function(event){
  console.log('click')

  $('h1').hide('slow',function(){ console.log('hide ok!') });
  $('h1').delay(1000);
  $('h1').show('fast');
//   if($txt.val() === '') {
//     alert('값을 넣어주세요')
//     return;
//   }

  $debug.html($txt.val());

});

$('.wrap').on('click', 'div', function(event) {
    $(event.target).fadeOut();
});