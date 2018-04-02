$(function(){
	myScroll = new IScroll('#wrapper', {
//	scrollX: true
		click:true,
		bounce:false
	});
	
	
	
//侧滑菜单

function toggleMenu (){
			if (swiper.previousIndex == 0){swiper.slidePrev()}
		}
		menuButton = document.getElementsByClassName('menu-button')[0]
		swiper = new Swiper('.swiper-container-menu', {
			slidesPerView: 'auto'
			, initialSlide:1
			, resistanceRatio: .00000000000001
			, onSlideChangeStart: function(slider) {
				if (slider.activeIndex == 0) {
					menuButton.removeEventListener('click', toggleMenu, false)
				}
			}
			, onSlideChangeEnd: function(slider) {
				
				if (slider.activeIndex == 0)
					menuButton.removeEventListener('click', toggleMenu, false)
				else
					menuButton.addEventListener('click', toggleMenu, false)
			}
			, slideToClickedSlide: true
		})
	
//	swiper动画
	
	var mySwiper2 = new Swiper('.swiper-container-banner',{
		autoplay:5000,
		visibilityFullFit : true,
		loop:true,
		pagination : '.pagination',
  	});

  var tabsSwiper = new Swiper('.swiper-container-index',{
    speed:500,
    autoHeight: true,
    resistanceRatio : 0,
    onSlideChangeStart: function(){
      	$(".tabs .active").removeClass('active')
      	$(".tabs a").eq(tabsSwiper.activeIndex).addClass('active')  
      	
      	if(tabsSwiper.activeIndex==3){
      		$(".swiper-container-banner").css("display","none")
      	}else{
      		$(".swiper-container-banner").css("display","block")
      	}
      myScroll.refresh();
     	
    },
   
  })
  $(".tabs a").on('touchstart mousedown',function(e){
    e.preventDefault()
	/*var curHeight=$(".swiper-container-index .swiper-slide").eq($(this).index()).height()
		console.log(curHeight)
		$("#scroller").height(curHeight)*/
    $(".tabs .active").removeClass('active')
    $(this).addClass('active')
    tabsSwiper.slideTo( $(this).index() )
  })
  $(".tabs a").click(function(e){
    e.preventDefault()
  })

})
