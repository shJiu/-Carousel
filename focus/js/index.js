
//$(document).ready(function(){

	$.fn.idear=function(opt){
		var defl={
			type:'mouseover',//用什么事件触发
			speed:1500,//动画执行时间
			ind:3,//触发一次滚动的个数
			prev:'pp',//上按钮
			next:'pp'//下按钮
		}
		var abl=$.extend({},defl,opt)
	var type=abl.type,
		speed=abl.speed,
		ind=abl.ind,
		prev=$(abl.prev),
		next=$(abl.next)
		var ul=$(this).find('ul')
		var w=ul.children('li').outerWidth()
		var len=ul.children('li').length,sum=0
			ul.css('width',w*len)
			next.on(type,function(){
			var uls=$(this).siblings(".box").children("ul");
			$(uls).stop().animate({'margin-left':-w*ind},speed,function(){
				uls.children("li").slice(0,ind).appendTo($(uls))
				uls.css('margin-left',0)
				})
			})
			prev.on(type,function(){
			var ull=$(this).siblings('.box').children('ul')
			$(ull).stop().animate({'margin-left':w*ind},speed,function(){
				ull.children('li').slice(-ind).prependTo($(ull))
				ull.css('margin-left',0)
				})
			})
	}
	

		
//})