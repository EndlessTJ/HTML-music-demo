$(function(){
	
	function resize(originSize,type){
		var type=type || "x"
		var widths=$(window).width();
		var heights=$(window).height();
		if(type=="x"){
			$("html").css("font-size",widths/originSize*100+"px")
		}else if(type=="y"){
			$("html").css("font-size",heights/originSize*100+"px")
		}
		console.log($("html").css("font-size"))
	}
	resize(1334,"y")
	  var mySwiper = new Swiper ('.swiper-container', {
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } ,
   
    pagination: '.swiper-pagination'
    
 
  })
});
