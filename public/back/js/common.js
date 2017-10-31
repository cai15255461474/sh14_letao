/**
 * Created by 蔡成涛 on 2017/10/30.
 */
$(document).ajax(function(){
    // 让进度条显示
    NProgress.start();


})

$(document).ajaxStop(function(){
    setTimeout(function(){
        // 让进度条结束
        NProgress.done();
    },500);

})


