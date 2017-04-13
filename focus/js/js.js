;(function($){
	$.fn.a=function(opt){
		var obj={
			type:'click',
			ind:3,
			speed:300,
			next:'',
			prev:''
		}
	var set=$.extend(obj,opt);
	var type=set.type,
		ind=set.ind,
		speed=set.speed,
		next=$(set.next),
		prev=$(set.prev);
	var ul=$(this).find('ul');
	var w=ul.children('li').outerWidth(),
		len=ul.children('li').length;

		ul.width(w*len);
		next.on(type,function(){
			ul.stop().animate({'margin-left':-ind*w},speed,function(){
				ul.children('li').slice(0,ind).appendTo(ul);
				ul.css('margin-left',0);
			})
		})
		prev.on(type,function(){
			ul.css('margin-left',-ind*w);
			ul.children('li').slice(-ind).appendTo(ul);
			
			ul.stop().animate({'margin-left':0},speed)
		})

	}
})(jQuery)