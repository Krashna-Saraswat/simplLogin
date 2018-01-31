import { Template } from 'meteor/templating';

import './login.html';

Template.login.events({
	'submit #login' (event) {
		event.preventDefault();
		if (!$('#email').val()) {
			alert ("Enter Email address");
			return false;
		} else if (!$('#password').val()) {
			alert ("Enter Password");
			return false;
		} else if ($('#password').val() == $('#cpassword').val()) {
			alert ("Password not match");
			return false;
		}
		const user = {
			email: $('#email').val(),
			password: $('#password').val()
		};
		Meteor.loginWithPassword(user.email, user.password, (err) => {
			
			if (err) {
				alert ('Error: User not login');
			} else {
				$('#email, #password').val('');
				FlowRouter.go('/homePage');
			}
		});
	},
});