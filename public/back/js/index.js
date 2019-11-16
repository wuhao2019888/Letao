$(function () {
    //表单校验功能
    $("#Form").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields:{
            username:{
                validators:{
                    notEmpty:{
                        message:"用户名不能为空"
                    },
                    stringLength:{
                        min:2,
                        max:12,
                        message: '用户名长度必须在2到12之间'
                    },
                    callback:{
                        message:'用户名错误'
                    }
                }
            },
            password:{
                validators: {
                    notEmpty: {
                        message:"密码不能为空"
                    },
                    stringLength: {
                        min: 6,
                        max: 16,
                        message:'密码长度必须在6到16位之间'
                    },
                    callback:{
                        message:'密码错误'
                    }
                }
            }
        }
    })
    //表单提交功能
    $("#Form").on('success.form.bv', function (e) {
        e.preventDefault();
        location.href="index.html";
        $.ajax({
            type:"post",
            url:"/employee/employeeLogin",
            data:$("#Form").serialize(),
            dataType:"json",
            success:function (info) {
                if(info.error(1000)){
                    $("#Form").data("bootstrapValidtor").updateStatus("username","INVALID","callback");
                }
                if(info.error(1001)){
                    $("#Form").data("bootstrapValidtor").updateStatus("password","INVALID","callback");
                }
            }
        })
    });
    //表单内容重置功能
    $('[type="reset"]').click(function () {
        $("#Form").data("bootstrapValidator").resetForm();
    })
})