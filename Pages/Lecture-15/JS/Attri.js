$(document).ready(function(){
    $("#inp").on('input', function() {
        let a = $(this).val();
        
        if (a !== "") {
            $("#btn").prop('disabled', false);
        } else {
            $("#btn").prop('disabled', true);
        }
    });
});
