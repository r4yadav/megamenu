//Navigation function
function closeMenu(){
      $( "body" ).animate({right:0});
}
function resetopennav(){
    var bodyPos = parseInt($("body").css('right')); 
    if(bodyPos != 0){
        var navWidth = parseInt( $(".navigation").css("width"));
        $( "body" ).css({right:navWidth+"px"});
    }
}
function openMenu(){
      var navWidth = parseInt( $(".navigation").css("width"));
      $( "body" ).animate({right:navWidth+"px"});
}
//Navigation function

$(document).ready(function(){
      //mobiile menu stsrts
        $(".hamburger").click(function(){
            var windowWidth = parseInt( $(window).width());    
            if(windowWidth < 992){
                var bodyPos = parseInt($("body").css('right')); 
                if(bodyPos == '0'){
                    openMenu();
                }else{
                    closeMenu();
                }
            }
            
        });
        $(".navigation ul > li a").click(function(){
            var windowWidth = parseInt( $(window).width());
            if(windowWidth < 992){
                $(this).parent().find(".submenuWrap").slideToggle();
                $(this).parent().toggleClass("active");
                $(this).parent().siblings().removeClass("active");
                $(this).parent().siblings().find(".submenuWrap").slideUp();
            }
        })
    //mobiile menu ends
});

$(window).resize(function(){
   var windowWidth = parseInt( $(window).width());
        if(windowWidth < 992){
            resetopennav();
        }else{
            $( "body" ).css({"right":0});
            $(".submenuWrap").removeAttr('style');
        }
})
