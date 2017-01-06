// // 假装从后台接受的数据
// var data={
// 	"name":"图片列表",
// 	"content":[{
// 		"url":"img/1.jpg",
// 		"target":"1.html"
// 	},{
// 		"url":"img/2.jpg",
// 		"target":"1.html"
// 	},{
// 		"url":"img/3.jpg",
// 		"target":"1.html"
// 	},{
// 		"url":"img/4.jpg",
// 		"target":"1.html"
// 	},{
// 		"url":"img/5.jpg",
// 		"target":"1.html"
// 	},]
// };

function moveImg(data,domEG,domDot){
	this.imgData=data;
	this.imgNum=data.length;
	this.imgWidth=0;
	this.currentIndex=0;
	this.domEG=domEG;
	this.domDot=domDot;
	this.key=0;
}
moveImg.prototype={
	getImgWidth:function(){
		this.imgWidth=parseInt(this.domEG.css('width'));
	},
	bindImg:function(){
		this.domEG.css('width',((this.imgNum+1)*this.imgWidth)+'px');
		var str='';
		for(var i=0;i<this.imgNum;i++)
		{
			str+='<a href="'+this.imgData[i].target+'"><img src="'+this.imgData[i].url+'"/></a>';
		}
		this.domEG.html(str);
		this.domEG.append(this.domEG.find('img').eq(0).clone());
	},
	bindDot:function(){
		var domDot=this.domDot;
		var str='';
		for(var i=0;i<this.imgNum;i++)
		{
			str+='<span data-id="'+i+'"></span>';
		}
		domDot.html(str);
		var w=domDot.get(0);
		domDot.css('margin-left',-(w.offsetWidth/2)+'px');
		domDot.find('span').eq(0).addClass('active');
	},
	init:function(){
		this.getImgWidth();
		this.bindImg();
		this.bindDot();
		this.bindEvent();
	},
	move:function(){
		if(this.currentIndex>=this.imgNum)
		{
			this.currentIndex=0;
			this.domEG.css('left',0);
		}
		this.currentIndex++;
		this.key++;
		this.animateImg(-(this.imgWidth*this.currentIndex));
		if(this.key>=this.imgNum)
		{
			this.key=0;
		}
		this.moveDot(this.key);

	},
	moveDot:function(index){
		this.domDot.find('span').eq(index).addClass('active')
					.siblings().removeClass('active');
	},
	animateImg:function(index){
		this.domEG.animate({'left':index+'px'},1500);
	},
	bindEvent:function(){
		var that=this;
		this.domDot.find('span').click('click',function(){
			// console.log($(this).attr('data-id'));
			var index=$(this).attr('data-id');
			that.key=that.currentIndex=index-1;
			that.animateImg(-(index*that.imgWidth));
			that.moveDot(index);
		});
		
	},

}

var eg=new moveImg(data.content,$('#imgBox'),$('#imgDot'));
eg.init();
window.setInterval(function(){
	eg.move();
},2000);
