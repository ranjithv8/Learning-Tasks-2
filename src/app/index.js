var angular = require('angular'),
	routeProvider = require('angular-ui-router'),
	herolistItemComponent = require("./component/heroListItem/heroListItem.component.js"),	
	herolistComponent = require("./component/heroList/heroList.component.js");

angular.module("heroApp",['ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			
			$urlRouterProvider.otherwise('/dashboard');
			$stateProvider
				.state('dashboard', {
					url: '/dashboard',
					component:"herolistitem"
				})
				.state('heroes', {
					url: '/heroes',
					component: 'herolist'
				});

		});
		
