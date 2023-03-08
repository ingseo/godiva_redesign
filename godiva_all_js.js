var num;

//스크롤바
$('html').niceScroll({
    cursorcolor:"#3c2820",
    cursorwidth:"7px",
});

// 메뉴바 - 이프구문이용해서 드롭다운메뉴 완성해야함!!(아직 안배움) 
$('.navi .right i').click(function(){
    $('.navi .right .search').toggleClass('clicksearch');
    $('.navi .right .search input').toggle();
});
    $('.menu_group .downmenu>li').mouseenter(function(){
        num         =$(this).index();
        active_sub  =$('.submenu_group>.submenu').eq(num);
        active_sub.stop().slideDown(400);
        $('.submenu_group>.submenu').not(active_sub).stop().slideUp(200)
    })
    
    $('.menu_group .downmenu>li').mouseleave(function(){
        $('.submenu_group>.submenu').slideUp(200)
    })
    
    $('.submenu_group>.submenu').mouseenter(function(){
        num_sub       =$(this).index();
        $(this).stop().show();
    });
    $('.submenu_group>.submenu').mouseleave(function(){
        $(this).stop().slideUp(200)
    })


// 모바일 메뉴바
$('.m_btn .menu_btn').click(function(){
    $('.m_btn').toggleClass('active')
    $('.m_menu .submenu').removeClass('view')
    $('.m_menu').toggleClass('view')
    $('.bgblack').toggleClass('black')
    $("body").toggleClass("hiddenscroll")
})
$('.m_menu .downmenu li').click(function(){
    num=$(this).index();
    $('.m_menu .submenu').eq(num).addClass('view');
});
$('.m_menu .subbottom li:nth-child(1)').click(function(){
    $('.m_menu .submenu').removeClass('view')
})
$('.bgblack').click(function(){
    $('.m_btn').removeClass('active');
    $('.m_menu').removeClass('view');
    $('.m_menu .submenu').removeClass('view');
    $('.bgblack').removeClass('black');
    $("body").removeClass("hiddenscroll");
});


// 탑버튼
$('.top').click(function(){
    $('html, body').stop().animate({scrollTop:0});
});
$(document).ready(function(){
        scroll_top=$(window).scrollTop();
        if(scroll_top<=100){
            $('.top').hide();
        }else{
            $('.top').show();
        }
    });
$(window).scroll(function(){
        scroll_top=$(window).scrollTop();
        if(scroll_top<=100){
            $('.top').fadeOut();
        }else{
            $('.top').fadeIn();
        }
    });