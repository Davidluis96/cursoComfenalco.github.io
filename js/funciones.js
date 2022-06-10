jQuery(document).ready(listo);
jQuery(document).ready(up);

function up(){

    $(".boton-up").click(function(e){
        e.preventDefault();
        $("body,html").animate({"scrollTop": 0},500);
    });
    $(".boton-up").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $(".boton-up").fadeIn();
        }
        else{
            $(".boton-up").fadeOut();
        }
    });
}

function listo(){
    

    jQuery(".hamb").click(function(e){
        e.preventDefault();
        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-times");
    });

    jQuery("header .container nav a").click(function(){
        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-times");
        
        var dev = jQuery(this).attr("href");
        
        jQuery("html,body").animate({
            "scrollTop":jQuery(dev).offset().top - 76
        })
    })

}
