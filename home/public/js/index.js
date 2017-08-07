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
    });
//小轮播图时间间隔
    $('.carousel').carousel({
        interval: 2000,//2秒切换轮播
    });
// 优惠推荐
    var i =0;
    //点击右上角正方形索引切换
    $(".recommend-title-right ul li").click(function () {
        i = $(this).index();
        moveList()
    });
    // 点击左右方向切换
    $(".btnR").click(function () {
        i++;
        if(i > 2){
            i = 2;
        }
        moveList();
    });
    $(".btnL").click(function () {
        i--;
        if(i < 0){
            i = 0;
        }
        moveList();
    });
    //优惠秒杀核心函数
    function moveList() {
        listW = $(".recommend-item-list ul").width();
        $(".recommend-item-list").animate({marginLeft:-listW*i});
        $(".recommend-title-right ul li").eq(i).addClass("active").siblings().removeClass("active");
    }
//    倒计时
    var targetTime = new Date("2017-8-8 24:00");
    var nowTime = new Date();
    var objTime = (targetTime-nowTime)/1000; //秒
    var timer2 = null;
    //启动倒计时
    countDown();
    //倒计时核心函数
    function countDown() {
        clearInterval(timer2);
        timer2 = setInterval(function () {
            objTime--;
             h = Math.floor(objTime/60/60);
             m = Math.floor(objTime%3600/60);
             s = Math.floor(objTime%60);
            h=h<10?"0"+h : h;
            m=m<10?"0"+m : m;
            s=s<10?"0"+s : s;
            $(".raceListTime .hours").html(h);
            $(".raceListTime .minutes").html(m);
            $(".raceListTime .seconds").html(s);
        },1000)
    }

//官方推荐tab滑块效果
   var liArr =  $(".brandPromotion .recommend-title-left ul li");
    $(".logoBox").eq(0).show();
    liArr.hover(function () {
        $(this).addClass("red-color").siblings().removeClass("red-color");
        idx = $(this).index();
        $(".logoBox").eq(idx).show().siblings(".logoBox").hide();
    //    滑块效果
        $(".titleSlider").stop().animate({left:idx*liArr.width()},300)
    })
//    触碰商标滑动特效
    $(".logoBox li").mouseenter(function () {
        $(this).find("a img").stop().animate({marginLeft:"-100px"});
    });
    $(".logoBox li").mouseleave(function () {
        $(this).find("a img").stop().animate({marginLeft:"0"});
    })

//右边固定栏显示
    $(".l5").mouseenter(function () {
        $(this).find("div").show();
    });
    $(".l5").mouseleave(function () {
        $(this).find("div").hide();
    });
    $(".l6").mouseenter(function () {
        $(this).find("div").show();
    });
    $(".l6").mouseleave(function () {
        $(this).find("div").hide();
    });

//    回滚顶部
    $(".l7").click(function () {
        $("body").animate({scrollTop:0},500)
    })
//左侧楼层导航
    $(".fixDiv li i").css({opacity:1}).siblings().css({opacity:0});
//     $(".floorOneOn").show().siblings().hide();

    $(".fixDiv li").on("mouseenter",function () {
        $(this).find("a:last-child").stop().animate({opacity:1,width:"70px"});
    });
    $(".fixDiv li").on("mouseleave",function () {
        $(this).find("a").stop().animate({width:"30px",opacity:0}).siblings("i").css({opacity:1});
    });
    $(".floorBack").click(function () {
        $("body").animate({scrollTop:0},500);
    });
    //获取各楼层距离
    var floor1 = $("#1F").offset().top-200;
    var floor2 = $("#2F").offset().top-200;
    var floor3 = $("#3F").offset().top-200;
    var floor4 = $("#4F").offset().top-200;
    var floor5 = $("#5F").offset().top-200;
    var scrollT;
    console.log(floor1);
    $(".floorOne").on("click",function () {
        $("html,body").animate({scrollTop:floor1},500);
        $(".floorOneOn").css({opacity:1}).siblings().css({opacity:0});
    });
    $(".floorTwo").click(function () {
        $("html,body").animate({scrollTop:floor2},500);
        $(this).find(".floorTwoOn").css({opacity:1}).siblings().css({opacity:0});
    });
    $(".floorThree").click(function () {
        $("html,body").animate({scrollTop:floor3},500);
        $(this).find(".floorThreeOn").css({opacity:1}).siblings().css({opacity:0});
    });
    $(".floorFour").click(function () {
        $("html,body").animate({scrollTop:floor4},500);
        $(this).find(".floorFourOn").css({opacity:1}).siblings().css({opacity:0});
    });
    $(".floorFive").click(function () {
        $("html,body").animate({scrollTop:floor5},500);
        $(this).find(".floorFiveOn").css({opacity:1}).siblings().css({opacity:0});
    });
    $(window).scroll(function () {
         scrollT = $(window).scrollTop();
        console.log(scrollT);
        if(scrollT >= 1100){
            $(".fixDiv ul li").stop().show().animate({margin:"0"});
        }else {
            $(".fixDiv ul li").stop().hide().animate({margin:"30px 0"});
        }
        if(scrollT >= 1300&&scrollT < floor2){
            $(".fixDiv li a").css({opacity:0}).siblings("i").css({opacity:1});
            $(".fixDiv li .floorOneOn").css({opacity:1}).siblings().css({opacity:0});

        }else if(scrollT >= floor2&&scrollT <floor3){
            $(".fixDiv li a").css({opacity:0}).siblings("i").css({opacity:1});
            $(".fixDiv li .floorTwoOn").css({opacity:1}).siblings().css({opacity:0});
        }
        else if(scrollT >= floor3&& scrollT < floor4){
            $(".fixDiv li a").css({opacity:0}).siblings("i").css({opacity:1});
            $(".fixDiv li .floorThreeOn").css({opacity:1}).siblings().css({opacity:0});
        }
        else if(scrollT >= floor4&& scrollT < floor5){
            $(".fixDiv li a").css({opacity:0}).siblings("i").css({opacity:1});
            $(".fixDiv li .floorFourOn").css({opacity:1}).siblings().css({opacity:0});
        }
        else if(scrollT >= floor5 && scrollT<5100){
            $(".fixDiv li a").css({opacity:0}).siblings("i").css({opacity:1});
            $(".fixDiv li .floorFiveOn").css({opacity:1}).siblings().css({opacity:0});
        }else {
            $(".fixDiv li a").css({opacity:0}).siblings("i").css({opacity:1});
        }

    });
});