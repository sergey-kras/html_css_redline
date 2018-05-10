$('.burger').on('click',function(){
    $(this).siblings('nav').toggle();
});

$('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top }, 800);
    return false;
});

$('body').on('mousemove',function (e) {
    var block = $('.main');
    var width = block.width();
    var height = block.height();
    var xPosition = e.pageX;
    var yPosition = e.pageY;
    block.css({
        'background-position-x': width  / 2 * 0.1 -  width * 0.07  - xPosition * 0.07,
        'background-position-y': height / 2 * 0.1 - height * 0.07 - yPosition * 0.03
    })
});
function checkPosition() {
    var height = $('.main .city').height();
    $('.main .container').css({
        'bottom' : height * 0.827 - 60 - 50 - $('.main__text').height() - $('.main__toBottom').height()
    });
}
checkPosition();
setInterval(checkPosition(),1);

var $win = $(window);
var $block = $('.products__product');
$win.scroll(function() {
    for (var $i = 0; $i < $block.length ; $i++) {
        if ($win.scrollTop() + $win.height() >= $($block[$i]).offset().top - 1300) {
            console.log($i);
            $($block[$i]).animate({'margin-top': 30 + 'px'}, 1200);
        }
    }
});