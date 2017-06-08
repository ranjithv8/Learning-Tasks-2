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