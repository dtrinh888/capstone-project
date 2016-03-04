/*describe('Genre List Controller', function(){
	var ctrl, scope;

	beforeEach(module('MovieFinder'));

	beforeEach(inject(function($controller, $route, $rootScope, _$location_, _GenreListFactory_){
		scope = $rootScope.$new();
		var $location = _$location_;
		var GenreListFactory = _GenreListFactory_;

		$route.current = {
			params: {
				genreId: 18
			}
		};

		ctrl = $controller('GenreListController', {
			$scope: scope,
			$location: $location,
			GenreListFactory: GenreListFactory,
			$route: $route
		});
	}));

	fit('should route to correct genre when navigateGenre() is called',
	inject(function($httpBackend, $rootScope, $route){
		$httpBackend.expect('JSONP', 'nba.com').respond(200);
		$httpBackend.expect('GET', 'js/genre-list/genre-list.html').respond(200);

		$rootScope.$apply();

	}));
});*/