/**
 * Created by 蔡成涛 on 2017/10/30.
 */


$(function() {
    //1 密码用户名不能为空
    //2 密码必须是6-12位
    var $form = $('#form');
    $form.bootstrapValidator({

        //校验时使用的图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //配置校验规则
        fields: {
            //配置所有的字段的规则,对应表单中的name属性
            username: {
                validators: {
                    notEmpty: {
                        message: "用户名不能为空"
                    },
                    callback: {
                        message: "用户名错误"
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: "用户密码不能为空"
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: "用户密码必须是6-12位"
                    },
                    callback: {
                        message: "用户密码错误"
                    }
                }
            }
        }
    });
    // 表单校验初始化之后就会有一个校验实例
    var validator = $form.data("bootstrapValidator");

//给表单注册一个校验成功事件
    $form.on("success.form.bv", function(e){
        //当校验成功时
        e.preventDefault();
        $.ajax({
            type:"post",
            url:" /employee/employeeLogin",
            data:$form.serialize(),
            success:function(data){
                if(data.success){
                    location.href = "index.html";
                }else{
                    if(data.error ===1000){
                        //使用js代码usrname这个字段校验失败
                        validator.updateStatus("username","INVALID","callback");

                    }
                    if(data.error ===1001){
                        validator.updateStatus("password","INVALID","callback");
                    }
                }
            }
        })


    })

//表单重置功能

$("[type='reset']").on("click",function(){
    $form.data("bootstrapValidator").resetForm();
})

//调用插件的重置表单方法



})
