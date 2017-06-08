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
  
