$(document).ready(function(){
    $('.animated').each(function(index, obj) {
        setTimeout(function() {
            console.log(index);
            $(obj).addClass('after');
        }, index * 80);
    });
});