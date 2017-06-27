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


});
