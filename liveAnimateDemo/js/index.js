/**
 * Created by Administrator on 2017/3/14.
 */
$(document).ready(function () {
    $(document).on("click",".giftList ul li",function () {
        var i = $(this).attr("type");
        $(".giftName input").val(i);
    })

    $(document).on("click",".giftNum",function () {
        var i = $(".numlist").css("display","block");
    })

    $(document).on("click",".giftNum ul li",function () {
        $(".giftNum input").val($(this).html())
    })
    
    $(document).on("click",".sendGift",function () {
        var name = $(".giftName input").val();
        var num = $(".giftNum input").val();
        sendGiftMovie(name, num, "风清扬", 20, 56435)
    })
});