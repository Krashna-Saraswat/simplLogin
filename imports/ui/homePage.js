import { Template } from 'meteor/templating';

import './homePage.html';

Template.homePage.helpers({
	'userName' () {
		if (Meteor.users.findOne(Meteor.userId))
			return Meteor.users.findOne(Meteor.userId()).profile.name.toUpperCase();
		return '';
	},
});

Template.homePage.events({
	'click #logout' (event) {
		event.preventDefault();
		Meteor.logout();
		FlowRouter.go('/');
	},
});