let just_search = 1;
$("#search").click(function () {
    if (just_search === 1) {
        just_search = 0;
        $("#search-open").addClass("show");

    } else {
        just_search = 1;
        $("#search-open").removeClass("show");
    }
});
$(".fa-window-close").click(function () {
    just_search = 1;
    $("#search-open").removeClass("show");
});


let group_dis_erweima_just = 1;
$(".group_dis_erweima_div_img").click(function () {
    if (group_dis_erweima_just === 1) {
        group_dis_erweima_just = 0;
        $(".display-password").hide();
        $(".display-erweima").show();
        $(".group_dis_erweima_div_img_erweima").show();
        $(".group_dis_erweima_div_img_zhanghao").hide();
    } else {
        group_dis_erweima_just = 1;
        $(".display-password").show();
        $(".display-erweima").hide();
        $(".group_dis_erweima_div_img_erweima").hide();
        $(".group_dis_erweima_div_img_zhanghao").show();
    }
});

$(".btnClick_cf").on("click", function (e) {
    $(".btnClick_cf_div").css("display", "block");
    $(".btnClick_dd_div").css("display", "none");
    $(document).one("click", function () {
        $(".btnClick_cf_div").css("display", "none");
    });
    e.stopPropagation();
});

$(".btnClick_dd").on("click", function (e) {
    $(".btnClick_dd_div").css("display", "block");
    $(".btnClick_cf_div").css("display", "none");
    $(document).one("click", function () {
        $(".btnClick_dd_div").css("display", "none");
    });
    e.stopPropagation();
});


let departuretime = 1;
let landingtime = 1;
let ticketprice = 1;
$(".departuretime").click(function () {
    if (departuretime === 1) {
        departuretime = 0;
        $(".departuretime img").attr("src", "../img/images/ticketprice_03.png");
    } else if (departuretime === 0) {
        departuretime = 2;
        $(".departuretime img").attr("src", "../img/images/27_05.jpg");
    } else if (departuretime === 2) {
        departuretime = 1;
        $(".departuretime img").attr("src", "../img/images/depaturetime.png");
    }
});
$(".landingtime").click(function () {
    if (landingtime === 1) {
        landingtime = 0;
        $(".landingtime img").attr("src", "../img/images/ticketprice_03.png");
    } else if (landingtime === 0) {
        landingtime = 2;
        $(".landingtime img").attr("src", "../img/images/27_05.jpg");
    } else if (landingtime === 2) {
        landingtime = 1;
        $(".landingtime img").attr("src", "../img/images/depaturetime.png");
    }
});
$(".ticketprice").click(function () {
    if (ticketprice === 1) {
        ticketprice = 0;
        $(".ticketprice img").attr("src", "../img/images/ticketprice_03.png");
    } else if (ticketprice === 0) {
        ticketprice = 2;
        $(".ticketprice img").attr("src", "../img/images/27_05.jpg");
    } else if (ticketprice === 2) {
        ticketprice = 1;
        $(".ticketprice img").attr("src", "../img/images/depaturetime.png");
    }
});
let just = 1;
let just2 = 1;
$("#dd-show").click(function () {
    if (just == 1) {
        just = 0;
        $("#dd-hide").hide(300);
        $("#dd-show").html("展开")
    } else {
        just = 1;
        $("#dd-hide").show(300);
        $("#dd-show").html("收起")
    }
})
$("#dj-show").click(function () {
    if (just2 == 1) {
        just2 = 0;
        $("#dj-hide").hide(300);
        $("#dj-show").html("展开")
    } else {
        just2 = 1;
        $("#dj-hide").show(300);
        $("#dj-show").html("收起")
    }
})

$(".panel_ul li").click(function () {
    $(this).siblings('li').removeClass('panel_color');
    $(this).addClass('panel_color');
});

$(".btnClick_color_div div").click(function () {
    $(this).siblings('div').removeClass('panel_color');
    $(this).addClass('panel_color');
});