var angular = require('angular'),
	routeProvider = require('angular-ui-router');
	
//var	herolistItemComponent = require("./components/heroListItem/heroListItem.component");	
/*	herolistComponent = require("./components/heroList/heroList.component");

console.log(herolistItemComponent);*/

var app = angular.module("heroApp",['ui.router']);

app.component('herolistitem', require("./components/heroListItem/heroListItem.component"));
app.component('herolist', require("./components/heroList/heroList.component"));
		
app.config(function($stateProvider,$urlRouterProvider){
			
	$urlRouterProvider.otherwise('/dashboard');
	$stateProvider
		.state('dashboard', {
			url: '/dashboard',
			component:'herolistitem'
		})
		.state('heroes', {
			url: '/heroes',
			component: 'herolist'
		});

});


		
