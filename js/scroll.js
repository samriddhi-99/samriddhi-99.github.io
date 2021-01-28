
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});









const activate=(url)=>{
    // console.log(111,url);

    $(".nav_menu_portfolio a").each(function () {
        
        if (url == (this.href)) {
            // console.log(222,this.href);
            $(this).closest("li").addClass("active");

        }
        else {
            $(this).closest("li").removeClass("active");
        }
        
    });
}


function myFunction() {
    
    activate(window.location.href);
    if(window.location.href.split('#')[1]!="aboutme"){
        document.getElementById('buttontotop').style.visibility='visible';
        document.getElementById('buttontotop').style.opacity=1;
    }
    else{
        document.getElementById('buttontotop').style.visibility='hidden';
        document.getElementById('buttontotop').style.opacity=0;
    }
    
}
// var btn222 = $('#buttontotop');
$("#content").bind('scroll', function (e) {
    // if ($(window).scrollTop() > 300) {
    //     btn222.addClass('show');
    // } else {
    //     btn222.removeClass('show');
    // }
    $('.section_nav').each(function () {
        if (
            $(this).offset().top < window.pageYOffset + 10
            
            && $(this).offset().top + $(this).height() > window.pageYOffset + 10
            
        ) {
            
            activate(window.location.href.split('#')[0]+ '#'+ $(this).attr('id'));
            if($(this).attr('id')!="aboutme"){
                document.getElementById('buttontotop').style.visibility='visible';
                document.getElementById('buttontotop').style.opacity=1;
            }
            else{
                document.getElementById('buttontotop').style.visibility='hidden';
                document.getElementById('buttontotop').style.opacity=0;
            }
            
        }
    });
    // if ($(window).scrollTop() > 300) {
    //     btn222.addClass('show');
    // } else {
    //     btn222.removeClass('show');
    // }
});
// function tothetop(){
//     // alert('u fool');
//     // $(window).scrollTop(0);
//     $("html").scrollTop( $("#aboutme").offset().top);
//     // $('html, body').animate({scrollTop:0}, '300');
// }

// $(window).scroll(function() {
//         console.log('sam scrolling');
//     if ($(window).scrollTop() > 300) {
//         btn222.addClass('show');
//     } else {
//         btn222.removeClass('show');
//     }
// });

// btn222.on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({scrollTop:0}, '300');
// });