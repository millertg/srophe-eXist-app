// Main javascript functions used by place pages
// validate contact forms
$.validator.setDefaults({
	submitHandler: function() { 
	//Ajax submit for contact form
    $.ajax({
            type:'POST', 
            url: $('#email').attr('action'), 
            data: $('#email').serializeArray(),
            dataType: "html", 
            success: function(response) {
                var temp = response;
                if(temp == 'Recaptcha fail') {
                    alert('please try again');
                    Recaptcha.reload();
                }else {
                    $('div#modal-body').html(temp);
                    $('#email-submit').hide();
                    $('#email')[0].reset();
                }
               // $('div#modal-body').html(temp);
        }});
	}
});

$().ready(function() {
    $("#email").validate({
		rules: {
			recaptcha_challenge_field: "required",
			name: "required",
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true,
				minlength: 2
			},
			comments: {
				required: true,
				minlength: 2
			}
		},
		messages: {
			name: "Please enter your name",
            subject: "Please enter a subject",
			comments: "Please enter a comment",
			email: "Please enter a valid email address",
			recaptcha_challenge_field: "Captcha helps prevent spamming. This field cannot be empty"
		}
});


// Toggel for related places
$( "#more-relation" ).click(function() {
  $(this).text($(this).text() == '(see list)' ? '(hide list)' : '(see list)'); 
  $( "#toggle-relation" ).show( "slow");
});

//hide related places
$("#less-relation").click(function(){
  $("#more-relation").text($("#more-relation").text() == '(hide list)' ? '(see list)' : '(hide list)');
  $("#toggle-relation").hide("slow");
});

//more sophisticated toggle for mulitple show/hide
$(".toggle").click(function() {
    var $toggled = $(this).attr('href');
    if ($.trim($(this).text()) === '(hide list)') {
        $($toggled).hide( "slow");
    } else {
        $($toggled).show( "slow");       
    }
    return false;
});

if (navigator.appVersion.indexOf("Mac") > -1 || navigator.appVersion.indexOf("Linux") > -1) {
    $('.get-syriac').show();
}

});