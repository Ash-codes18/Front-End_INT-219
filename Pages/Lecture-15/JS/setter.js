$(document).ready(function(){

    let a = $("#id1").val();

    $("#btn1").click(function(){
        $("#p1").text(a);
    });

    $("#btn2").click(function(){
        $("#h1").text(a);
    });

});