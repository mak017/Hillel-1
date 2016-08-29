
$(document).ready(function () {
	$('form#login').on('submit', function(event) {
		event.preventDefault();
		var login;
		var password;
		var CORRECT_LOGIN = 'admin';
		var CORRECT_PASSWORD = 'SecretP@ssword';
		
		login = $('#login .login__input').val();
		password = $('#login .login__password').val();
		
		if (login === CORRECT_LOGIN && password === CORRECT_PASSWORD) {
			message = "You successfully authorized";
		} else {
			message = "Wrong login password";
		}
		
		$('.login__message').text(message);
	});
});

