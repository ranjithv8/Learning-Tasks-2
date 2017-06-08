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

