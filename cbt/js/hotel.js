$(".city_select").hover(function () {
    $(".citys").css("display", "block");
    $(".start_out_city ").addClass("city_down").removeClass("city_up");
    $(".select_change").addClass("select_down").removeClass("select_up");
}, function () {
    $(".citys").css("display", "none");
    $(".start_out_city ").removeClass("city_down").addClass("city_up");
    $(".select_change").removeClass("select_down").addClass("select_up");
});
//景点详情页inoput +-
$(function () {
    var t = $("#text_box");
    $("#add").click(function () {
        t.val(parseInt(t.val()) + 1);
        setTotal();
    });
    $("#min").click(function () {
        t.val(parseInt(t.val()) - 1);
        setTotal();
    });

    function setTotal() {
        var tt = $("#text_box").val();
        var pbinfoid = $("#pbinfoid").val();
        if (tt <= 0) {
            alert('不能小于1！');
            t.val(parseInt(t.val()) + 1)
        }
    }

})

//签证详情页inoput +-
$(function () {
    var Ct = $("#Ctext_box");
    $("#Cadd").click(function () {
        Ct.val(parseInt(Ct.val()) + 1);
        CsetTotal();
    });
    $("#Cmin").click(function () {
        Ct.val(parseInt(Ct.val()) - 1);
        CsetTotal();
    });

    function CsetTotal() {
        var Ctt = $("#Ctext_box").val();
        var Cpbinfoid = $("#Cpbinfoid").val();
        if (Ctt <= 0) {
            Ct.val(parseInt(Ct.val()) + 1)
        }
    }

    var Rt = $("#Rtext_box");
    $("#Radd").click(function () {
        Rt.val(parseInt(Rt.val()) + 1);
        RsetTotal();
    });
    $("#Rmin").click(function () {
        Rt.val(parseInt(Rt.val()) - 1);
        RsetTotal();
    });

    function RsetTotal() {
        var Rtt = $("#Rtext_box").val();
        var Rpbinfoid = $("#Rpbinfoid").val();
        if (Rtt <= 0) {
            Rt.val(parseInt(Rt.val()) + 1)
        }
    }

})

//景点/签证详情页的Tab
$(".con").eq(0).show();
$(".btn ul li").click(function () {
    var num = $(".btn ul li").index(this);
    $(".con").hide();
    $(".con").eq(num).show();
    $(this).addClass('scenic_active').siblings().removeClass('scenic_active');
})
$(".con_two").eq(0).show();
$(".btn_two ul li").click(function () {
    var num = $(".btn_two ul li").index(this);
    $(".con_two").hide();
    $(".con_two").eq(num).show();
    $(this).addClass('scenic_active').siblings().removeClass('scenic_active');
})

//景点/签证详情页Tab 固定定位
var navH = $(".fis_box").offset().top;
$(window).scroll(function () {
    var scroH = $(this).scrollTop();
    if (scroH >= navH) {
        $(".fis_box").css({"position": "fixed", "top": 0});
    } else if (scroH < navH) {
        $(".fis_box").css({"position": "static"});
    }
})

