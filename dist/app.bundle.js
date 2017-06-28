webpackJsonp([0],{

/***/ 59:
/***/ (function(module, exports) {

var heroListItemComponent = (function(){
	angular.module("heroApp").component('dashboard',{
		bindings: {},
		template:'<ul class="heroes">'+
					'<div class = "hero-dashboard-item" ng-repeat="hero in $ctrl.heroes">'+
						'<a ui-sref= "details({id:{{hero.id}}})">'+
							'<span>{{hero.id}}</span>.'+
							'<span>{{hero.name}}</span>'+
						'</a>'+
					'</div>'+
				  '</ul>',
		controller: function(heroService){
			var heroes = heroService.getHeroes().concat([]);
			this.heroes = heroes.splice(0,4);
		}
	});
})();

module.exports = heroListItemComponent;



/***/ }),

/***/ 60:
/***/ (function(module, exports) {

var heroDetailsComponent = (function(){
	angular.module("heroApp").component('herodetails',{
		bindings: {},
		template:'<div class = "hero-details-container">'+
					'<div>'+
						'<label>ID</label>:<span class="badge">{{$ctrl.hero.id}}</span>'+
					'</div>'+
					'<label>Name</label>:<input ng-model = "$ctrl.hero.name"/>'+
					'<button ng-click = $ctrl.saveDetails()>Save</button>'+
				  '</div>',
		controller: function($stateParams,heroService,$state){
			var id = $stateParams.id;
			this.hero = heroService.getHeroById(id);
			this.saveDetails = function() {
				heroService.setHero(this.hero.id,this.hero.name);
				$state.go("heroes");
			}
		}		
	});
})();

module.exports = heroDetailsComponent;




/***/ }),

/***/ 61:
/***/ (function(module, exports) {

var heroListItemComponent = (function(){
	angular.module("heroApp").component('herolistitem',{
		bindings: {
			hero: "<"
		},
		template:'<li>'+
					 '<a ui-sref = "details({id:{{$ctrl.hero.id}}})">'+
						'<span class="badge">{{$ctrl.hero.id}}</span>'+
						'{{$ctrl.hero.name}}'+
					 '</a>'+
				 '</li>'
	});
})();

module.exports = heroListItemComponent;



/***/ }),

/***/ 62:
/***/ (function(module, exports) {

var heroListComponent = (function(){
	angular.module("heroApp").component('herolist',{
		bindings: {},		
		template:'<ul class="heroes">'+
					'<herolistitem ng-repeat="hero in $ctrl.heroes" hero="hero"></herolistitem>'+
				 '</ul>',
		controller: function(heroService){
			this.heroes = heroService.getHeroes();
		}
	});
})();

module.exports = heroListComponent;
  


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

var heroService = (function(){
	angular.module("heroApp").service("heroService",function() {
		this.heroes = [
			{ id: 11, name: 'Mr. Nice' },
			{ id: 12, name: 'Narco' },
			{ id: 13, name: 'Bombasto' },
			{ id: 14, name: 'Celeritas' },
			{ id: 15, name: 'Magneta' },
			{ id: 16, name: 'RubberMan' },
			{ id: 17, name: 'Dynama' },
			{ id: 18, name: 'Dr IQ' },
			{ id: 19, name: 'Magma' },
			{ id: 20, name: 'Tornado' }
		]
		this.getHeroes = function() {
			return this.heroes;
		}
		this.getHeroById= function(id) {
			var hero = this.heroes.filter(function(val) {
				return val.id === parseInt(id);
			});
			return hero[0] || null;
		}
		this.setHero = function(id, name) {
			var hero = this.heroes.filter(function(val) {
				return val.id === parseInt(id);
			});			
			hero[0].name = name;
		}
	}); 
})()

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__(11),
	routeProvider = __webpack_require__(23);

var app = angular.module("heroApp",['ui.router']);

__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(63);
		
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


		


/***/ })

},[93]);