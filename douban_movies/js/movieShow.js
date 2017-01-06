function movieShow(data,btnLeft,btnRight,showPage,allPage,useWidth){
	this.box=data;
	this.showPage=showPage;
	this.imgNum=parseInt(allPage.text());
	this.imgWidth=useWidth;
	this.currentIndex=0;
	this.btnLeft=btnLeft;
	this.btnRight=btnRight;
}
movieShow.prototype={
	moveRight:function(){
		if(this.currentIndex<this.imgNum-1)
		{
			this.currentIndex++;
			this.animateImg(-(this.imgWidth*this.currentIndex));
			this.bindPage();
		}
	},
	moveLeft:function(){
		if(this.currentIndex>0)
		{
			this.currentIndex--;
			this.animateImg(-(this.imgWidth*this.currentIndex));
			this.bindPage();
		}
	},
	animateImg:function(index){
		this.box.animate({'left':index+'px'},1000);
	},
	bindPage:function(){
		this.showPage.text(this.currentIndex+1);
	},
	bindEvent:function(){
		var that=this;
		this.btnLeft.click('click',function(){
			that.moveLeft();
		});
		this.btnRight.click('click',function(){
			that.moveRight();
		})
		
	},

};