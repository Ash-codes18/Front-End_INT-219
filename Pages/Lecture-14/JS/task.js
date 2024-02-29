$(document).ready(function(){

    $("#content").css({
        "display": "flex",
        "margin": "30px"
    });

    $("#u1, #u2, #u3").css({
        "padding": "15px",
        "margin": "10px"
    })

    $("#u1, #u3").css({
        "border": "solid 5px crimson",
        "border-radius": "30px"
    })

    $("#u2").css({
        "border-bottom": "solid 5px crimson",
        "border-top": "solid 5px crimson"
    })


    $(window).resize(function(){
        for(let i =0;i<5;i++){
            let z ="";
            for(let j=0;j<=i;j++){
                z+="*";
            }
            console.log(z);
        }
      });
})


