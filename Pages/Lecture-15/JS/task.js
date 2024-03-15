$(document).ready(function(){
    $("input").each(function(){
        alert($(this).val());
    });
    $(":input").each(function(){
        alert($(this).val());
    });
});