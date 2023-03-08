
function mouseenter_wrap(){
    $('.section4 .text .p1').css({fontSize: '0.9em', top: '10px', fontWeight:'400'})
    $('.section4 .text .p2').css({display:'block'} )
    $('.section4 .text .p3').css({fontFamily:'Parisienne', color:'#ceb56f', display:'block', top:'-15px'} ) 
}
function mouseleave_wrap(){
    $('.section4 .text .p1').css({fontSize: '1em', top: 0, fontWeight:'900'} )
    $('.section4 .text .p2').hide()
    $('.section4 .text .p3').hide()
    $('.section4 .text .p1').text('What’s now?')
}

$('.section4 .wrap .left').mouseenter(function(){
    mouseenter_wrap()
    $('.section4 .text .p1').text('봄맞이 시즌음료')
    $('.section4 .text .p2').text('스트로베리 초콜렉사')
    $('.section4 .text .p3').text('Strawberry chocolixir')
})
$('.section4 .wrap .right').mouseenter(function(){
    mouseenter_wrap()
    $('.section4 .text .p1').text('2020 스프링시즌한정')
    $('.section4 .text .p2').text('앙샹뜨 컬렉션')
    $('.section4 .text .p3').text('Enchanteur Collection')
})
$('.section4 .wrap').mouseleave(function(){
    mouseleave_wrap()
})

