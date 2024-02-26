$(document).ready(function(){

    // alert("Hello!");
    $(this).keydown(function(event){
        if(event.key==='y'){
            $('#hide').css({
                "backgroundColor":"green",
                "color":"whitesmoke"
            });
        }
    })

    $(this).keyup(function(){
        $('#show').css({
            "backgroundColor":"purple",
            "color":"whitesmoke"
        });
    })

    //Function to hide the para
$("#hide").click(function(){
    $("p").hide();
});

//Function to show the para
    $("#show").click(function(){
        $("p").show();
    });


$("body").css({
    "backgroundColor":"darkslateblue",
    "color":"whitesmoke",
});

$("ul").css({
    "backgroundColor":"black",
    "box-shadow":"0px 0px 20px 1px pink",
});

$(".content").css({
    "margin-top":"50px",
    "margin-right":"750px",
})

$("#b1").css("border","crimson solid 2px");
$("#b1").css("color","yellow");
$("#b2").css("border","pink solid 2px")
$("#b2").css("color","orange");


$(".one, .two, .three").css({
    "border" : "palegreen solid 4px",
    "margin" : "10px",
    "padding" : "15px",
    "backgroundColor" : "deeppink",
    "font-style" : "oblique"
});

$("#box").css({
    "border" : "crimson solid 4px",
    "height" : "100px",
    "width" : "100px",
});

$("#box").click(function(){
    $(this).css({
        "backgroundColor" : "yellow"
    })
});

$("#box").dblclick(function(){
    $(this).css({
        "backgroundColor" : "plum"
    })
});

$("#box").mouseenter(function(){
    $(this).css({
        "backgroundColor" : "lightgreen"
    })
});

$("#box").mouseleave(function(){
    $(this).css({
        "backgroundColor" : ""
    })
});





  });