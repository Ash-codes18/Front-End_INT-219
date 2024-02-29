$(document).ready(function(){

    $('#one').focus(function(){
        $(this).css("backgroundColor","orange");
    });

    $('#one').blur(function(){
        $(this).css("backgroundColor","");
    });
    
    $('#three').change(function(){
        $(this).css("backgroundColor","cyan");
    });

    $('#two').select(function (){
        $(this).css({
            "backgroundColor" : "pink"
        });
    });

    $('form').submit(function(){
        alert("Oh! You clicked Submit....How sad.")
    });

});