$(function () {
    $("#fullpage").fullpage({
        verticalCentered: false,
        navigation: true,
        //设置滚动的速度
        scrollingSpeed: 1500,
        //设置每一屏的颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],

        //当进入到当前屏幕的时候
        afterLoad: function (anchorLink, index) {
            $(".down").fadeIn();

            $(this).addClass("animate");
        },
        //当离开某一屏进入到下一屏的动作
        onLeave: function (index, nextindex, direction) {
            $(".down").fadeOut();

            //第二屏进入第三屏,沙发掉落动画
            if (index == 2 && nextindex == 3) {
                $(".screen02 .hide").addClass("animated");
            }
        },
        //页面结构加载完成后
        afterRender: function () {
            $(".down").on("click", function () {
                $.fn.fullpage.moveSectionDown();
            })
        }
    });
});