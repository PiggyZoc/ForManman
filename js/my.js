var jq = jQuery.noConflict();
jq( document ).ready(function() {
	init();
	
	jq('.prev').on('click',showprev);
	jq('a.next').on('click',shownext);
	
});
var array=new Array();
var prev;
var next;
var init=function(){
	var div1=jq('<div>');
	var div_1=jq('<div>');
	var img1=jq('<img>');
	var span1=jq('<span>');
	img1.attr({
		'src':'images/page1_img1.jpg',
		'alt':'pic',
		'width': '209px',
		'height': '131px'
	});
	span1.text('扇贝');
	div_1.addClass('col_grp_box').append(img1);
	div1.addClass('col_grp').append(div_1).append(span1);

	array.push(div1);

	var div2=jq('<div>');
	var div_2=jq('<div>');
	var img2=jq('<img>');
	var span2=jq('<span>');
	img2.attr({
		'src':'images/page1_img2.jpg',
		'alt':'pic',
		'width': '209px',
		'height': '131px'
	});
	span2.text('海鲜面');
	div_2.addClass('col_grp_box').append(img2);
	div2.addClass('col_grp').append(div_2).append(span2);
	
	array.push(div2);
	var div3=jq('<div>');
	var div_3=jq('<div>');
	var img3=jq('<img>');
	var span3=jq('<span>');
	img3.attr({
		'src':'images/page1_img3.jpg',
		'alt':'pic',
		'width': '209px',
		'height': '131px'
	});
	span3.text('海菜包子');
	div_3.addClass('col_grp_box').append(img3);
	div3.addClass('col_grp').append(div_3).append(span3);
	
	array.push(div3);
	var div4=jq('<div>');
	var div_4=jq('<div>');
	var img4=jq('<img>');
	var span4=jq('<span>');
	img4.attr({
		'src':'images/page1_img4.jpg',
		'alt':'pic',
		'width': '209px',
		'height': '131px'
	});
	span4.text('海胆');
	div_4.addClass('col_grp_box').append(img4);
	div4.addClass('col_grp').append(div_4).append(span4);
	
	array.push(div4);

	var div5=jq('<div>');
	var div_5=jq('<div>');
	var img5=jq('<img>');
	var span5=jq('<span>');
	img5.attr({
		'src':'images/page1_img5.jpg',
		'alt':'pic',
		'width': '209px',
		'height': '131px'
	});
	span5.text('蓬莱小面');
	div_5.addClass('col_grp_box').append(img5);
	div5.addClass('col_grp').append(div_5).append(span5);

	array.push(div5);

	var div6=jq('<div>');
	var div_6=jq('<div>');
	var img6=jq('<img>');
	var span6=jq('<span>');
	img6.attr({
		'src':'images/page1_img6.jpg',
		'alt':'pic',
		'width': '209px',
		'height': '131px'
	});
	span6.text('鲅鱼水饺');
	div_6.addClass('col_grp_box').append(img6);
	div6.addClass('col_grp').append(div_6).append(span6);
	
	array.push(div6);
	var div7=jq('<div>');
	var div_7=jq('<div>');
	var img7=jq('<img>');
	var span7=jq('<span>');
	img7.attr({
		'src':'images/page1_img7.jpg',
		'alt':'pic',
		'width': '209px',
		'height': '131px'
	});
	span7.text('樱桃');
	div_7.addClass('col_grp_box').append(img7);
	div7.addClass('col_grp').append(div_7).append(span7);
	
	array.push(div7);
	var div8=jq('<div>');
	var div_8=jq('<div>');
	var img8=jq('<img>');
	var span8=jq('<span>');
	img8.attr({
		'src':'images/page1_img8.jpg',
		'alt':'pic',
		'width': '209px',
		'height': '131px'
	});
	span8.text('苹果');
	div_8.addClass('col_grp_box').append(img8);
	div8.addClass('col_grp').append(div_8).append(span8);
	
	array.push(div8);
	var div9=jq('<div>');
	var div_9=jq('<div>');
	var img9=jq('<img>');
	var span9=jq('<span>');
	img9.attr({
		'src':'images/page1_img9.jpg',
		'alt':'pic',
		'width': '209px',
		'height': '131px'
	});
	span9.text('海参');
	div_9.addClass('col_grp_box').append(img9);
	div9.addClass('col_grp').append(div_9).append(span9);
	
	array.push(div9); 
	for(var i=0;i<4;i++){
		array[i].attr('id','init'+i);
		jq('.grid_3').append(array[i]);
	}
	next=4;
	prev=8;

}

var shownext=function(){
	array[prev].css({'left':'-241px'});
	array[prev].insertBefore(jq('.grid_3').find(':first'));
	
	var a=jq('.grid_3').children();
	for(var i=0;i<a.length;i++){
		if(a[i].classList.contains('_'+(i-1)))
			a[i].classList.remove('_'+(i-1))
		a[i].classList.add('_'+i);
	}
	jq('.grid_3 ._0').animate({
		left:'0px'
	}, 500 );
	jq('.grid_3 ._1').animate({
		left:'241px'
	}, 500 );
	jq('.grid_3 ._2').animate({
		left:'482px'
	}, 500 );
	jq('.grid_3 ._3').animate({
		left:'723px'
	}, 500 );
	var last=jq('.grid_3').children().last();
	last.animate({
		left:'964px',
	}, 500, removeLast);
}
var showprev=function(){
	array[next].css({'left':'964px'});
	jq('.grid_3').append(array[next]);
	
	var a=jq('.grid_3').children();
	for(var i=0;i<a.length;i++){
		var j=i-1;
		if(a[i].classList.contains('_'+(j+1)))
			a[i].classList.remove('_'+(j+1))
		a[i].classList.add('_'+j);
	}
	
	jq('.grid_3 ._3').animate({
		left:'723px'
	}, 500 );
	jq('.grid_3 ._2').animate({
		left:'482px'
	}, 500 );
	jq('.grid_3 ._1').animate({
		left:'241px'
	}, 500 );
	jq('.grid_3 ._0').animate({
		left:'0px'
	}, 500 );
	var first=jq('.grid_3').children().first();
	first.animate({
		left:'-241px'
	}, 500,removeFirst);
}


var removeFirst=function(){
	jq('.grid_3').children().first().remove();
	console.log(1);
	next++;
	if(next>8) next=0;
	if(next>=5) prev=next-5;
	else prev=next+4;
}
var removeLast=function(){
	jq('.grid_3').children().last().remove();

	prev--;
	if(prev<0) prev=8;
	if(prev>=4) next=prev-4;
	else next=prev+5;
 }