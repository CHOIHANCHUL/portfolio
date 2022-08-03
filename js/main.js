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


//proflile

$(window).ready(function(){
    draw(60, '.pie-chart1', '#29d40b');
   draw(60, '.pie-chart2', '#29d40b');
   draw(50, '.pie-chart3','#d47a0b');
   draw(50, '.pie-chart4','#d47a0b');
   draw(40, '.pie-chart5','#d40b1c');
   draw(40, '.pie-chart6','#d40b1c');
 });
 
 function draw(max, classname, colorname){
    var i=1;
     var func1 = setInterval(function(){
       if(i<max){
           color1(i,classname,colorname);
           i++;
       } else{
         clearInterval(func1);
       }
     },10);
 }
 function color1(i, classname,colorname){
    $(classname).css({
         "background":"conic-gradient("+colorname+" 0% "+i+"%, #ffffff "+i+"% 100%)"
    });
 }
 
 
 function replay(){
   draw(60, '.pie-chart1', '#29d40b');
   draw(60, '.pie-chart2', '#29d40b');
   draw(50, '.pie-chart3','#d47a0b');
   draw(50, '.pie-chart3','#d47a0b');
   draw(40, '.pie-chart3','#d40b1c');
   draw(40, '.pie-chart3','#d40b1c');
 }







