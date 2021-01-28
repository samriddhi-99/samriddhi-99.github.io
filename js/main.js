// $(document).ready(function() {
//     $('.ab-link-blink a.smooth-scroll').on('click', function(e) {
//         if (this.pathname == window.location.pathname && this.protocol == window.location.protocol && this.host == window.location.host) {
//             if (this.hash !== "") {
//                 e.preventDefault();
//                 var hash = this.hash;
 
//                 $('html, body').animate({
//                     scrollTop: $(hash).offset().top
//                 }, 800, function() {
//                         window.location.hash = hash;
//                     }
//                 );
//             }
//         } else {
//             window.location = window.location;
//         }
//     });
// });

(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

const btn = document.getElementById('submit_contact');

function fade_out() {
	setTimeout(()=>{
		$("#message_status").html("");
	}, 6000);
	
}



document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerHTML = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_jxj83tk';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
	  btn.value = 'Send Email';
	  document.getElementById('from_name').value="";
	  document.getElementById('from_email').value="";
	  document.getElementById('subject').value="";
	  document.getElementById('message').value="";
	  document.getElementById('message_status').innerHTML="Message sent!";
	  btn.innerHTML = 'Submit';
	  fade_out();
		
	
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

// var btn = $('#button-to-top');

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });