//메뉴 등장
$('.menu_btn').click(function(){  
    $('.menu_btn').toggleClass('open');

    if($(this).hasClass('open')){
        $('.menu_bg').animate({left:0},500);
    } else {
        $('.menu_bg').animate({left:'-100%'},500);        
    }
});



//슬라이드 작동

const swiper = new Swiper('.swiper', {
    loop: true,    
    pagination: {
    el: '.swiper-pagination',
    type: "fraction",
    },
    navigation: {
        nextEl: '.next_btn',
        prevEl: '.prev_btn',
    }
});



//로고(h1)을 클릭하면 첫 시작 화면으로 
$('h1').click(function(){
    swiper.slideTo(1);
})






