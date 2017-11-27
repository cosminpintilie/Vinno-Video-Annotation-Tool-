
$(document).ready(function() {
    $count=0;
    $(".hidden-p").hide();
    $(".show-sep").hide();


    $(".visible-p").click(function(){
        if($count==0){
            $(".hidden-p").show(300);
            $(".show-sep").show();
            $(".hidden-sep").hide();
            $count=1;
        }
        else{
            $(".hidden-p").hide(300);
            $(".show-sep").hide();
            $(".hidden-sep").show();
            $count=0;
        }

    });

});


