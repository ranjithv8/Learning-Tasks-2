var angular = require('angular'),
	routeProvider = require('angular-ui-router');

var app = angular.module("heroApp",['ui.router']);

require("./components/heroListItem/heroListItem.component");
require("./components/heroList/heroList.component");
require("./components/dashboard/dashboard.component");
require("./components/heroDetails/heroDetails.component");
require("./services/heroService");
		
app.config(function($stateProvider,$urlRouterProvider){
			
	$urlRouterProvider.otherwise('/dashboard');
	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			component:'dashboard'
		})
		.state('heroes', {
			url: '/heroes',
			component: 'herolist'
		})
		.state('details',{
			url: '/details/:id',
			component: 'herodetails'
		});

});


		
