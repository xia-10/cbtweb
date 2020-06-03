let just_search = 1;
    $("#search").click(function () {
          if (just_search === 1) {
            just_search = 0;
            $("#search-open").addClass("show");

        }else {
            just_search = 1;
            $("#search-open").removeClass("show");
        }
    });
     $(".fa-window-close").click(function () {
         just_search = 1;
         $("#search-open").removeClass("show");
     });


let group_dis_erweima_just = 1;
    $(".group_dis_erweima_div_img").click(function(){
        if (group_dis_erweima_just === 1) {
            group_dis_erweima_just = 0;
            $(".display-password").hide();
            $(".display-erweima").show();
            $(".group_dis_erweima_div_img_erweima").show();
            $(".group_dis_erweima_div_img_zhanghao").hide();
        }else {
            group_dis_erweima_just = 1;
            $(".display-password").show();
            $(".display-erweima").hide();
            $(".group_dis_erweima_div_img_erweima").hide();
            $(".group_dis_erweima_div_img_zhanghao").show();
        }
    });