$(window).ready(function () {
//    侧边导航栏，触摸显示分类列表功能
    $(".nav-l-side li").on("mouseenter",function () {
        $(this).find(".side-item").show();
    });
    $(".nav-l-side li").on("mouseleave",function () {
        $(this).find(".side-item").hide();
    })

//    轮播图
    var slideLi = $(".bigImg>li");
    var navLi = $(".bigImg-nav>li");
    var timer;
    var index = 0;
    clearInterval(timer);
    //默认显示第一张
    slideLi.eq(index).stop().fadeIn().siblings().stop().fadeOut();
    //自动轮播
    timer = setInterval(autoPlay,3000);
    //鼠标触摸停止轮播，离开继续
    slideLi.on("mouseenter",function () {
        clearInterval(timer);
    });
    slideLi.on("mouseleave",function () {
        timer = setInterval(autoPlay,3000);
    });
    //触摸导航点换图
    navLi.on("mouseenter",function () {
        clearInterval(timer);
        index = $(this).index();
        slideLi.eq(index).stop().fadeIn().siblings().stop().fadeOut();
        navLi.eq(index).addClass('active').siblings().removeClass('active');
    });
    //幻灯片核心函数
    function autoPlay() {
        index++;
        if(index>slideLi.length-1){
            index = 0;
        }
        slideLi.eq(index).fadeIn().siblings().fadeOut();
        navLi.eq(index).addClass('active').siblings().removeClass('active');
    }
//    活动tab切换功能
    $(".mainMid").first().show();
    $(".mainLeft-nav ul li").on("mouseenter",function () {
        $(this).addClass("on").siblings().removeClass("on");
         idx = $(this).index();
        $(".mainMid").eq(idx).show().siblings(".mainMid").hide();
    })
//    右边信息tab切换
    $(".indexTabNewCon").first().show();
    $(".mainRight-info>ul>li").on("mouseenter",function () {
        $(this).addClass("on").siblings().removeClass("on");
        idx = $(this).index();
        $(".indexTabNewCon").eq(idx).show().siblings(".indexTabNewCon").hide();
    })
//小轮播图时间间隔
    $('.carousel').carousel({
        interval: 2000,
    })







});