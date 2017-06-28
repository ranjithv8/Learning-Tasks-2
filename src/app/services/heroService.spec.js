describe("heroService",function() {
	beforeEach(module('heroApp')),
	beforeEach(function(){
		inject(function($injector) {
    		heroMockService = $injector.get('heroService');
  		});
	});

	it("Test Heroes in service",function() {
		expect(heroMockService.heroes).toBeDefined();
	});

	it("Call get Heroes",function() {
		expect(heroMockService.getHeroes).toBeDefined();
	});

	it("Call getHeroById",function() {
		var hero= heroMockService.getHeroById(11);
		expect(hero).toEqual({ id: 11, name: 'Mr. Nice' });
	});

	it("Call SetHero",function() {
		heroMockService.setHero("12","Stub");
		var hero = heroMockService.getHeroById(12);
		expect(hero.name).toBe("Stub");
	});



});
