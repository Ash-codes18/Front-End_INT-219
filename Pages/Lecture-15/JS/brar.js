$(document).ready(function(){

    let a = $("#inp").val();

    $("#btn1").click(function(){
        $("#p1").before(a);
    });

    $("#btn2").click(function(){
        $("#p1").after(a);
    });

});