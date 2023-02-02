$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
});

$(window).scroll(function() {

    if ($(this).scrollTop() > 60){  
        $('.headerFixed').addClass("contentFixed");
    }
    else{
        $('.headerFixed').removeClass("contentFixed");
    }
});

//Home page 
