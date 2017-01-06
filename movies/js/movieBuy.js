var data={
	"name":"movies列表",
	"content":[
	{
		"msTitle":"我不是潘金莲",
		"year":"2016",
		"howLong":"104",
		"msLocation":"中国大陆",
		"director":"冯小刚",
		"act":["范冰冰","范伟"],
		"cover":{
			"url":"img/ms001.jpg",
			"alt":"我不是潘金莲"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	},{
		"msTitle":"七月与安生",
		"year":"2016",
		"howLong":"134",
		"msLocation":"中国大陆",
		"director":"曾国祥",
		"act":["周冬雨","马思纯"],
		"cover":{
			"url":"img/ms002.jpg",
			"alt":"七月与安生"
		}
	}]
};



function movieBuy(data,dom,page){
	this.data=data;
	this.dom=dom;
	this.page=page;
	this.length=data.length;
	this.boxWidth=602;
	this.pageNum=0;
}
movieBuy.prototype={
	bindBasicDom:function(data){
		var str='';
		str+='<li>';
	    str+='<div class="item-img">';		
		str+='<a href="#"><img src="'+data.cover.url+'" alt="'+data.cover.alt+'"></a>';
		str+='</div>';
		str+='<h2 class="item-h">'+data.msTitle+'</h2>';
		str+='<div class="item-star">';
		str+='<img src=""alt="">';
		str+='<span></span>';
		str+='</div>';
		str+='<button class="item-btn btn-buy">选座购票</button>'
		str+='<div class="float-info-box" >';
		str+='<h2 class="info-h">';
		str+=data.msTitle+'<span class="info-h-year">'+data.year+'</span>';
		str+='</h2>';
		str+='<div class="item-star info-star"></div>';
		str+='<div class="info-other">';
		str+='<p class="other-floor1">'+data.director+'</p>';
		str+='<p class="other-floor2">'+this.initAct(data.act)+'</p>';
		str+='</div>';
		str+='</div>';
		str+='</li>';
		return str;
	},
	bindDom:function(){
		str='<ul>';
		for(var i=0;i<this.length;i++)
		{
			str+=this.bindBasicDom(this.data[i]);
		}
		str+='</ul>';
		this.dom.html(str);
	},
	initAct:function(data){
		var str='';
		for(var i=0;i<data.length-1;i++)
		{
			str+=data[i];
			str+='/';
		}
		str+=data[i];
		return str;
	},
	setWidth:function(){
		this.boxWidth=this.length*148;
		this.dom.css('width',this.boxWidth);
	},
	getPage:function(){
		this.pageNum=parseInt(this.boxWidth/602)+1;
		this.page.find('.all-page').text(this.pageNum);
	},
	bindEvent:function(){
		this.dom.find('li').hover(function(){
			$(this).find('.float-info-box').show();
		},function(){
			$(this).find('.float-info-box').hide();
		})
	},
	init:function(){
		this.bindDom();
		this.setWidth();
		this.getPage();
		this.bindEvent();
	}
}


$(function(){
	console.log(data.content);
var buy=new movieBuy(data.content,$('#moviesBuyList'),$('#numberPage'));
buy.init();
var eg=new movieShow($('#moviesBuyList'),$('#preNext .pre'),$('#preNext .next'),$('#numberPage .current-page'),$('#numberPage .all-page'),602);
	eg.bindEvent();
});

