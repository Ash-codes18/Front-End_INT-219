$(document).ready(function () {
    
    let pno=1;

    $("#val").change(function(){
        pno = parseInt($(this).val());
    });


    $("#btn1").click(function(){
        if(pno == 1){
            alert($("#p1").text());
        } 
        else if(pno == 2){
            alert($("#p2").text());
        } 
        else{
            alert($("#inp").val());
        }
    });

    $("#btn2").click(function(){
        if(pno == 1){
            alert($("#p1").html());
        }
        else if(pno == 2){
            alert($("#p2").html());
        } 
        else{
            alert($("#p3").html());
        }
    });

});
