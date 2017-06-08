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
