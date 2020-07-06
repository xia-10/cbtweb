$(".city_select").hover(function () {
    $(".citys").css("display", "block");
    $(".start_out_city ").addClass("city_down").removeClass("city_up");
    $(".select_change").addClass("select_down").removeClass("select_up");
}, function () {
    $(".citys").css("display", "none");
    $(".start_out_city ").removeClass("city_down").addClass("city_up");
    $(".select_change").removeClass("select_down").addClass("select_up");
});