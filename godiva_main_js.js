
var index;
var banner_index;
var timer;
var banner_height;
var mbanner_height;
var scroll_top
var win_height


//section1 휠이벤트
$('.section1').on('scroll mousewheel', function(event){ 
    event.preventDefault();
    event.stopPropagation();
})
$('.section1').on('mousewheel', function(event){
    delta=event.originalEvent.wheelDelta;
    if(delta<0){
        $('.section1').stop().animate({top:'-100%'})
    }
})


//section1 메뉴바
win_height=$(window).height()
$('.section1 .right .menu_up .right_list li').click(function(){
    index=$(this).index();
    $('.section1 .submenu-group  .submenu').not($('.section1 .submenu-group  .submenu').eq(index)).removeClass('view2')
    $('.section1 .submenu-group  .submenu').eq(index).toggleClass('view2')  
})


//section1 로드
$(document).ready(function(){
    $('.section1 ul').hide();
    $('.section1 .bg_sub').hide();
    $('.section1 .under_arrow').hide();
    $('.section1 ul').slideDown(800);
    $('.section1 .bg_sub').fadeIn(800);
    $('.section1 .under_arrow').fadeIn(800);
});


// 배너
$(document).ready(function(){
        $('#slide1').carousel({
            interval:3000
        });
    })
$(document).ready(function(){
        $('#slide2').carousel({
            interval:3000
        });
    })

//상시이벤트
function rolling1(){
    $('.section3 .container .event').first().stop().appendTo('.section3 .container')
}
function rolling2(){
    $('.section3 .m-container li').first().stop().appendTo('.section3 .m-container')
}
$(document).ready(function(){
    timer1=setInterval(rolling1,3000);
    timer2=setInterval(rolling2,3000);
})

$('.section3 .container, .m-container').mouseenter(function(){
    clearInterval(timer1)
    clearInterval(timer2)
})
$('.section3 .container, .m-container').mouseleave(function(){
    timer1=setInterval(rolling1,3000);
    timer2=setInterval(rolling2,3000);
})


// 이벤트 리스트
$('.section4 .list li, .m_list li').mouseover(function(){
  index=$(this).index();
    $('.section4 .card').eq(index+1).addClass('hover')
})
$('.section4 .list li, .m_list li').mouseout(function(){
  index=$(this).index();
  $('.section4 .card').eq(index+1).removeClass('hover')
});


//이메일박스 버튼
$('.section9 .container .sign').mouseover(function(){
    $('.section9 .container .sign span').css({animationName: 'left',
            animationDuration: '0.5s'
            });
});
$('.section9 .container .sign').mouseout(function(){
    $('.section9 .container .sign span').css({animationName: 'right',
            animationDuration: '0.5s'
            });
});

//섹션배경
    $(window).scroll(function(){
        scroll_top=$(window).scrollTop()
        $('.chocobg').css({backgroundPositionY:-scroll_top*0.5})
    })