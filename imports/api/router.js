import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../ui/login.js';
import '../ui/register.js';
import '../ui/homePage.js';

FlowRouter.route ('/', {
  name: 'signIn',
  action () {
    BlazeLayout.render ('login');
  },
});

FlowRouter.route ('/signUp', {
  name: 'register',
  action () {
    BlazeLayout.render ('register');
  },
});


FlowRouter.route ('/homePage', {
  name: 'homePage',
  action () {
    BlazeLayout.render ('homePage');
  },
});