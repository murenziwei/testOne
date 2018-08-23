var slider = {
    set : function(obj){

        this.box = $(obj);
        this.numList = this.box.find(".bnrNum li");
        this.bnrBox = this.box.children(".bnrBox");
        this.setWidth();
        this.nowNum = 1 ;
        this.len = this.box.find(".bnrList img").length;
        this.listFir = this.box.find(".bnrList:first").clone();
        this.listLast = this.box.find(".bnrList:last").clone();
        this.bnrBox.append(this.listFir)
            .prepend(this.listLast)
            .css("left",-this.moveSpace)

    },

    setWidth : function(){
        this.pWidth = this.box.width();
        this.moveSpace = this.pWidth ;
        this.list = this.box.find(".bnrList");
        this.list.width(this.pWidth);
    },

    move : function(){

        this.moveSpace = -( this.pWidth * this.nowNum )
        this.bnrBox.stop().animate({left:this.moveSpace},500)
        this.numList.eq(this.nowNum-1).addClass("active")
            .siblings().removeClass("active")

    },

    setTime : function(t){
        var that = this;
        this.setT = setInterval(function(){
            that.num(1)
        },t)

    },

    clearTime : function(){
        clearInterval(this.setT)
    },

    num : function(v){
        this.nowNum += v ;
        this.numLimit(this.nowNum)
        this.move()
    },

    numLimit: function(v){
        if(v > this.len){
            this.bnrBox.css({left:0});
            v = 1
        }else if(v < 0){
            this.bnrBox.css({left: -(this.len) * this.pWidth});
            v = this.len - 1
        }
        this.nowNum = v
    },

    init : function(obj,lBtn,rBtn,time){
        var that = this;
        this.set(obj);
        this.setTime(time);
        $(window).resize(function(){
            that.setWidth();
        })
        $(lBtn).on("click",function(){
            that.num(-1)
        })
        $(rBtn).on("click",function(){
            that.num(1)
        })
        $(obj).hover(function(){
            that.clearTime();
        },function(){
            that.clearTime();
            that.setTime(time);
        })
        $(obj).find(".bnrNum li").hover(function(){
            var $t = $(this),
                _i = $t.index();
            that.nowNum = _i + 1
            that.move()
        })
    }

}
