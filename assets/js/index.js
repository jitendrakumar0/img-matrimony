$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
    $("#sidebar").load("sidebar.html"); 
});


//? ############################ Header Toggle ###########################

$(window).scroll(function() {

    if ($(this).scrollTop() > 60){  
        $('.headerFixed').addClass("contentFixed");
    }
    else{
        $('.headerFixed').removeClass("contentFixed");
    }
});


//? ###########################  Home Page Start  ###########################

if ($("[page-name=serviceDetail]").length) {

    var serviceOuterImg = document.querySelectorAll('.serviceOuterImg');
    var serviceListImg = document.querySelectorAll('.serviceListImg');
    let owlServiceDetail = document.querySelector('.owlServiceDetail');
    
    owlServiceDetail.addEventListener('click', (e) => {
        let a = e.currentTarget;

    })

    // serviceListImg.forEach(btn => {
    //     btn.addEventListener('click', (e) => {
    //         var a = e.currentTarget.getAttribute('serviceList-Img');
    //         var b = document.getElementById(a);
    //         var c = b.parentElement;
    //         c.forEach(img => {
    //             img.classList.remove('active');
    //         })
    //         c.classList.add('active');
    //         console.log(b);
    //     })
    // });

    // serviceGalleryList.addEventListener('click', e => {
        // var a = e.currentTarget.
    // });
}

//Home page 
