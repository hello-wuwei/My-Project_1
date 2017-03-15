
    // function barrageSend(text) {
    //     if (text == "") {
    //         return;
    //     };
    //     var _lable = $("<div class='textDiv' style='right:20px;top:0px;opacity:1;color:" + getRandomColor() + ";'>" + text + "</div>");
    //     $(".danmutext").append(_lable.show());
    //     init_barrage();
    // }
    // //初始化弹幕技术
    // function init_barrage() {
    //     var _top = 0;
    //     $(".danmutext .textDiv").show().each(function () {
    //         var _left = $(".danmutext").width(); //浏览器最大宽度，作为定位left的值
    //         var _height = $(".danmutext").height(); //浏览器最大高度
    //         _top += 75;
    //         if (_top >= (_height - 130)) {
    //             _top = 0;
    //         }
    //         $(this).css({
    //             left: _left,
    //             top: _top,
    //             color: getRandomColor()
    //         });
    //         //定时弹出文字
    //         var time = 10000;
    //         if ($(this).index() % 2 == 0) {
    //             time = 15000;
    //         }
    //         $(this).animate({
    //             left: "-" + _left + "px"
    //         }, time, function () {
    //             $(this).remove();
    //         });
    //     });
    // }
    // //获取随机颜色
    // function getRandomColor() {
    //     return '#' + (function (h) {
    //         return new Array(7 - h.length).join("0") + h
    //     })((Math.random() * 0x1000000 << 0).toString(16))
    // }



    //礼物序列帧动画效果
    function startAnimate(type, width, height, N, Boolean, who, giftName,wealthlv) {
        var Anipw = $(".liveContent").width() - width;
        var Aniph = $(".liveContent").height() - height;
        var left = Math.random()*Anipw;
        var top = Math.random() * Aniph;
        var divStyle = { "position": "absolute", "overflow": "hidden", "width": width, "height": height,"left":left,"top":top}
        var oDiv = $("<div>").addClass("gift_"+type).appendTo(".liveContent");
        oDiv.css(divStyle);
        var n = 0;
        if (Boolean == true) {
            var clock = setInterval(function () {
                oDiv.css("background-position", n + "px 0px");
                n = (n - width);
                if (n <= (-width * (N + 1))) {
                    clearInterval(clock);
                    oDiv.remove();
                }
            }, 80);
        } else if (Boolean == false) {
            var clock = setInterval(function () {
                oDiv.css("background-position", "0px " + n + "px");
                n = (n - height);
                if (n <= (-height * (N + 1))) {
                    clearInterval(clock);
                    oDiv.remove();
                }
            }, 80);
        }
        giftLine(who, giftName, wealthlv, type);
    }

//礼物横幅效果
    //giftLine();
    function giftLine(name, giftname, Lv, type) {
        var oDIV = $("<div>").css({ "position": "relative", "width": "100%", "height": "40px", "margin-top": "10px" }).appendTo(".HengfuBlock");
        if(giftname == "LOVE气球"||giftname == "金牌主播"||giftname == "钻戒"){
            var oDivStyle = { "position": "absolute", "width": "100%", "height": "40px", "background": "#fff", "top": "0px", "background": "url(img/animate/paivel.png) no-repeat center" };
            var str = "<i style='margin-left:10px; color:#005aff;'>" + name + "送出" + giftname + "</i>";
        } else {
            var oDivStyle = { "position": "absolute", "width": "100%", "height": "40px", "background": "#fff", "top": "0px", "background": "url(img/animate/rich.png) no-repeat center" };
            var str = "<i style='margin-left:10px; color:#fff;'>" + name + "送出" + giftname + "</i>";
        }
        var oTextStyle = { "width": "600px", "padding": "6px 0px", "margin": "auto", "font-size": "18px", "text-align": "center", "color": "#005aff" };
        var oDiv = $("<div>").css(oDivStyle).appendTo(oDIV);
        var oText = $("<div>").css(oTextStyle).appendTo(oDiv);
        var oImg = $("<span>").css({"background-repeat": "no-repeat" }).css("margin-top","-5px").addClass("wealth"+ Lv).appendTo(oText);
        oText.append(str);
        oDiv.animate({ "opacity": 0 }, 6000, function () {
            $(this).remove;
            oDIV.remove();
        });
    }
    

    var gift_array = new Array();

    window.setInterval(function () {
        
        for (var i in gift_array) // 用户层
        {
            for( var j in gift_array[i] )// 礼物层
            {
                var now_time = new Date().getTime();
                if ((now_time - gift_array[i][j].time) > 15000 && (gift_array[i][j].time != 0))
                {
                    gift_array[i][j].num = 0;
                    gift_array[i][j].time = 0;
                }
            }
        }

    }, 2000);




    function doubleHit(type, knum, name, Lv, uid) {
        knum = parseInt(knum);
        var oDIVstyle = { "position": "relative", "width": "100%", "height": "80px", "background": "url(img/animate/douhit.png) no-repeat center", "margin-top": "10px" };
        var oDivStyle = { "position": "absolute", "width": "80px", "height": "100%", "top": "0", "left": "160px"};
        var oSpanStyle = { "position": "absolute", "left": "100%", "top": "20px", "font-size": "30px", "color": "#252ff6" };
        var oSpanst = { "position": "absolute", "width": "220px", "height": "20px", "right": "100%", "top": "30px", "font-size": "14px", "color": "#252ff6","text-align":"right" }
        if (knum >= 66) {
            var oDIV = $("<div>").css(oDIVstyle).appendTo("#doubleGift")
            var dounum = 0;
            var oLast = $("<div>");
            var clock = setInterval(function () {
                oLast.remove();
                if ((knum - dounum) < 10) {
                    dounum++;
                } else {
                    dounum = dounum + 10;
                }
                var oDiv = $("<div>").css(oDivStyle).addClass("doubImg_" + type).appendTo(oDIV);
                oLast = oDiv;
                var oSpan = $("<span>").css(oSpanStyle).html("X" + dounum).appendTo(oDiv);
                var oSifo = $("<div>").css(oSpanst).appendTo(oDiv);
                var oImg = $("<span>").css({ "background-repeat": "no-repeat","margin-top":"-5px"}).addClass("wealth" + Lv).appendTo(oSifo);
                var str = name + "送出";
                oSifo.append(str);
                oDiv.animate({
                    "opacity": 0
                }, 2000, function () {
                    $(this).remove();
                });
                if (dounum-1 >= knum) {
                    clearInterval(clock);
                    dounum = 0;
                    oDIV.remove();
                }
            },200);
        } else if (type != "yinliao" && type != "shouhuan")
        {
            if (gift_array[name] == null)
            {
                gift_array[name] = new Array();
                gift_array.length++;

                gift_array[name][type] = new Object();
                gift_array[name].length++;

                gift_array[name][type].num = knum;
                gift_array[name][type].time = new Date().getTime();
            } else
            {
                if (gift_array[name][type] == null)
                {
                    gift_array[name][type] = new Object();
                    gift_array[name].length++;

                    gift_array[name][type].num = knum;
                    gift_array[name][type].time = new Date().getTime();

                } else
                {
                    gift_array[name][type].num += knum;
                    gift_array[name][type].time = new Date().getTime();
                }
               
            }

            $(".div"+uid).remove();
            var oDIV = $("<div>").addClass("div"+uid).css(oDIVstyle).appendTo("#doubleGift");
            var oDiv = $("<div>").addClass("doubImg_" + type).appendTo(".div"+uid);
            //oSc = oDiv;
            oDiv.css(oDivStyle);
            var oSpan = $("<span>").css(oSpanStyle).html("X" + gift_array[name][type].num).appendTo(oDiv);
            var oSifo = $("<div>").css(oSpanst).appendTo(oDiv);
            var oImg = $("<span>").css({ "background-repeat": "no-repeat", "margin-top": "-5px" }).addClass("wealth" + Lv).appendTo(oSifo);
            var str = name + "送出";
            oSifo.append(str);
            oDiv.animate({
                "opacity": 0
            }, 2000, function () {
                oDIV.remove();
            });
        }
        
}


    function sendGiftMovie(giftType, Gn, mingzi, level, userid) {
        if (giftType == "LOVE气球") {

            startAnimate("qiqiu", 400, 585, 50, true, mingzi, giftType, level);
        }
        if (giftType == "钻戒") {
            startAnimate("zuanjie", 400, 539, 51, true, mingzi, giftType, level);
        }
        if (giftType == "游艇") {
            startAnimate("youting", 870, 500, 60, false, mingzi, giftType, level);
        }
        if (giftType == "法拉利") {
            startAnimate("falali", 1660, 400, 50, false, mingzi, giftType, level);
        }
        if (giftType == "金牌主播") {
            startAnimate("jinpai", 400, 539, 50, true, mingzi, giftType, level);
        }
        if (giftType == "功能性饮料") {
            doubleHit("yinliao", Gn, mingzi, level, userid)
        }
        if (giftType == "运动手环") {
            doubleHit("shouhuan", Gn, mingzi, level, userid)
        }
        if (giftType == "冲锋头盔") {
            doubleHit("toukui", Gn, mingzi, level, userid)
        }
        if (giftType == "打气筒") {
            doubleHit("qitong", Gn, mingzi, level, userid)
        }
        if (giftType == "骑行服") {
            doubleHit("qixing", Gn, mingzi, level, userid)
        }

    }


//有车用户进入房间横幅提示
    //CarLine()
    function CarLine(nick, carName, carImg, Lv) {
        var oDivStyle = { "width": "100%", "background": "url(img/animate/comein.png) no-repeat center","height":"62px"};
        var oTextStyle = {  "padding": "6px 0px", "margin": "auto", "font-size": "18px", "color": "#333", "text-align": "center","line-height":"46px"};
        var oDiv = $("<div>").css(oDivStyle).appendTo(".HengfuBlock");
        var oText = $("<div>").css(oTextStyle).appendTo(oDiv);
        var oImg = $("<span>").css({ "background-repeat": "no-repeat" }).css("margin-top", "-5px").addClass("wealth" + Lv).appendTo(oText);
        var str = "<i style='margin-left:10px; color:#ffe523;'>" + nick + "</i>驾驶超炫酷的" + carName + "<span class='cailine'><img style='width:80px;vertical-align: middle;' src='img/CarPng/" + carName + ".png'></span>进入直播间";
        oText.append(str);
        oDiv.animate({ "opacity": 0 }, 6000, function () {
            $(this).remove();
        });
    }
//提交评论

