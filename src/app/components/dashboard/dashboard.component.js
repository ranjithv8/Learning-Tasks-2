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


beforeEach(function(){
	module(function($provide){
		$provide.service('heroServiceMock',function() {
			this.heroes = "foo";
			this.getHeroes = function() {
				return "all heroes";
			}

			this.getHeroById = funcion(id){
				return "hero with id"+id;
			}

			this.setHero = function() {
				this.heroes = "heroset";
			}
		}]);
	});
})

