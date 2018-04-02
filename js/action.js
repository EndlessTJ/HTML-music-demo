$(function(){
//	整体滑动

 var swiperIndex = new Swiper('.swiper-container-index', {
	 	
    });
	
	 var swiper = new Swiper('.swiper-container', {
	 	initialSlide :2,
//      pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 0,
            stretch: 200,
            depth: 120,
            modifier: 1,
            slideShadows : true
        }
    });
    
    
//  位置的动画
var swiperTxt = new Swiper('.swiper-container-txt', {
		freeMode : true,
//		loop:true,
//		autoplay:2000,
		direction : 'vertical',
	 	initialSlide :2,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView:3,
        coverflow: {
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
        }
    });

// 歌词轮播   
var swiperTxtTwo = new Swiper('.swiper-container-txtT', {
		freeMode : true,
		loop:true,
		autoplay:2000,
		autoplayDisableOnInteraction : false,
		direction : 'vertical',
	 	initialSlide :2,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView:"auto",
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
        }
    });
})


