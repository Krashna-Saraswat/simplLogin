import { Template } from 'meteor/templating';

import './register.html';

Template.register.events({
	'submit #register' (event) {
		event.preventDefault();
		if (!$('#email').val()) {
			alert ("Enter Email address");
			return false;
		} else if (!$('#password').val()) {
			alert ("Enter Password");
			return false;
		} else if ($('#password').langth < 6) {
			alert ("Password length atleast 6 character");
			return false;
		} else if (!$('#cpassword').val()) {
			alert ("Enter Confirm Password");
			return false;
		}else if (!$('#name').val()) {
			alert ("Enter Name");
			return false;
		} else if ($('#password').val() !== $('#cpassword').val()) {
			alert ("Password not match");
			return false;
		}
		const user = {
			email: $('#email').val(),
			password: $('#password').val(),
			profile: {
				name: $('#name').val()
			}
		};
		Accounts.createUser(user, (err) => {
			if (err) {
				alert ('Error: User not registered');
			} else {
				$('#email, #name, #password, #cpassword').val('');
				Meteor.logout();
				FlowRouter.go('/');
			}
		});
	},
});