$(document).ajaxStart(function () {
    //开启进度条
    NProgress.start();
})
$(document).ajaxStop(function () {
    // 关闭进度条
    NProgress.done();
})


$(function () {
    //侧滑功能
    $(".slid").click(function () {
        $(".child").stop().slideToggle();
    })
    //菜单位移功能
    $(".Cai").click(function () {
        $(".Le-left").toggleClass("le-left-l");
        $(".Lt_icon").toggleClass("Lt_icon_l");
        $(".Le-top").toggleClass("Le-top_l");
    })
    //退出功能模态框
    $(".Out").click(function () {
        $("#outModal").modal("show");
    })
    $("#logoutBtn").click(function () {
        $.ajax({
            type:"get",
            url:"/employee/employeeLogout",
            dataType:"json",
            success:function (info) {
                console.log(info);
                if (info.success){
                    alert(1);
                }
            }
        })
    })
    //拦截功能
    // if (location.href.indexOf("login.html")===-1){
    //     $.ajax({
    //         url: "/employee/checkRootLogin",
    //         type: "get",
    //         success: function( info ) {
    //             console.log( info )
    //             if ( info.success ) {
    //                 console.log( "登陆了" );
    //                 // 啥也不用干
    //             }
    //
    //             if ( info.error === 400 ) {
    //                 // 进行拦截, 拦截到登录页
    //                 location.href = "login.html";
    //             }
    //         }
    //     })
    // }
})