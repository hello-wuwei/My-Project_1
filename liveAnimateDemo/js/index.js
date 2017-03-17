/**
 * Created by Administrator on 2017/3/14.
 */
$(document).ready(function () {
    $(document).on("click",".giftList > ul li",function () {
        var i = $(this).attr("type");
        $(".giftName input").val(i);
    })

    $(document).on("click",".giftNum",function () {
        $(".numlist").css("display","block");
    })

    $(document).on("mouseleave",".giftNum",function () {
        $(".numlist").css("display","none");
    })

    $(document).on("click",".numlist ul li",function () {
        $(".giftNum input").val($(this).html())
    })
    
    $(document).on("click",".sendGift",function () {
        var name = $(".giftName input").val();
        var num = $(".giftNum input").val();
        sendGiftMovie(name, num, "风清扬", 20, 56435)
    })


    changeSize();

    function changeSize() {
        var ww = $(window).width();
        var fixWidth = $("#Left").width() + $("#Right").width();
        $("#Middle").width(ww - fixWidth);
    }

    window.onresize=function () {
        changeSize()
    }
});