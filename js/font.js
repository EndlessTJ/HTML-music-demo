/*window.onload=function(){
	//初始化尺寸
	function resize(originSize,type){
		var type=type || "x";
		
		var clientW=document.documentElement.clientWidth;
		var clientH=document.documentElement.height;
		var html=document.getElementsByTagName("html")[0]
		if(type=="x"){
			html.style.fontSize=clientW/originSize*100+"px"
			
		}else if(type=="y"){
			html.style.fontSize=clientH/originSize*100+"px"
		}
	}
	resize(750)
}*/
$(function(){
		function resize(originSize,type){
		var type=type || "x";
		var clientW=$(window).width();
		var clientH=$(window).height();
		if(type=="x"){
			$("html").css({
				fontSize:clientW/originSize*100+"px"
			})
		}else if(type=="y"){
			$("html").css({
				fontSize:clientH/originSize*100+"px"
			})
		}
	}
	resize(750)
})
