var $window = $('window');
var $up = $('#up');

function checkScroll() {
    
    var scrollTop = $window.scrollTop();
    
    if(scrollTop > 100) {
        $up.fadeIn();
    }
}

function goTop() {
    $('html, body').animate(
        {scrollTop : 0}, 400);
}


$window.on('scroll', checkScroll);
$up.click(goTop);