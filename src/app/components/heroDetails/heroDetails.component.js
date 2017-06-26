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


describe('HeroDetailController', function() {
  var $componentController;

  beforeEach(module('heroApp'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should call the `onDelete` binding, when deleting the hero', function() {
    var onSaveSpy = jasmine.createSpy('saveDetails');
    var bindings = {hero: {}, onDelete: onSaveSpy};
    var ctrl = $componentController('heroDetails', null, bindings);

    ctrl.saveDetails();
    expect(onDeleteSpy).toHaveBeenCalledWith();
  });
});