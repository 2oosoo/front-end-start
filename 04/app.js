var wrap = document.querySelector('.wrap');

var str = '';
for(var i=0; i<4; i++) {
    if(i%2==0) {
        for(var j=0; j<4; j++) {
            if(j%2==0) {
                str +='<div class="b"></div>';
            } else {
                str +='<div class="w"></div>';
            }
        }
    } else {
        for(var j=0; j<4; j++) {
            if(j%2==0) {
                str +='<div class="w"></div>';
            } else {
                str +='<div class="b"></div>';
            }
        }
    }
    
}

wrap.innerHTML = str;