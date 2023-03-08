var win_width=$(window).width()

$('.section1 .menu_group li:nth-child(1)').click(function(){
    if(win_width>640){
        $(this).css({background: '#f8f4eb', color: '#3c2820'})
        $('.section1 .menu_group li:nth-child(2)').css({background: 'none', color: '#f8f4eb'})
        $('.news').stop().animate({left:0})
        $('.event').stop().animate({left:'100%'})
    }else if(win_width<640){
        $(this).css({background: '#f8f4eb', color: '#3c2820', borderBottom: 'none'})
        $('.section1 .menu_group li:nth-child(2)').css({background: 'black', color: '#f8f4eb', borderTop : 'none'})
        $('.news').stop().animate({left:0})
        $('.event').stop().animate({left:'100%'})
    }
})
$('.section1 .menu_group li:nth-child(2)').click(function(){
    if(win_width>640){
        $(this).css({background: '#f8f4eb', color: '#3c2820'})
        $('.section1 .menu_group li:nth-child(1)').css({background: 'none', color: '#f8f4eb'})
        $('.news').stop().animate({left:'-100%'})
        $('.event').stop().animate({left:0})
    }else if(win_width<640){
        $(this).css({background: '#f8f4eb', color: '#3c2820', borderBottom: 'none'})
        $('.section1 .menu_group li:nth-child(1)').css({background: 'black', color: '#f8f4eb', borderTop : 'none'})
        $('.news').stop().animate({left:'-100%'})
        $('.event').stop().animate({left:0})
    }
})
