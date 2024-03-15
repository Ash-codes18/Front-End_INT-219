$(document).ready(function(){
    let val="";

    $("#val").change(function(){
        val = $(this).val();
    });


    $("#hide").click(function(){
        if(val=="Para 1"){
            $("#p1").hide();
        }
        else if(val=="Para 2"){
            $("#p2").hide();
        }
        else if(val=="Para 3"){
            $("#p3").hide();
        }
    })

    $("#show").click(function(){
        if(val=="Para 1"){
            $("#p1").show();
        }
        else if(val=="Para 2"){
            $("#p2").show();
        }
        else if(val=="Para 3"){
            $("#p3").show();
        }
    })


})