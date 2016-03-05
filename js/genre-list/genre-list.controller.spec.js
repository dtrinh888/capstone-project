describe('Genre List Controller', function(){
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

		ctrl = $controller('GenreListCtrl', {
			$scope: scope,
			$location: $location,
			GenreListFactory: GenreListFactory,
			$route: $route
		});
	}));

	it('should route to correct genre when navigateGenre() is called',
	inject(function($httpBackend, $rootScope, $route, $location){
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/genre/movie/list?api_key=990ba45b90f56c57b4e00a54fc773d8c&callback=JSON_CALLBACK').respond(200);
		$httpBackend.expect('GET', 'js/genre-detail/genre-detail.html').respond(200);

		$rootScope.$apply(function(){
			$location.path('/genre/18');
		});

		/*$rootScope.$apply(function(){
			scope.navigateGenre();
		});*/

		expect($route.current.originalPath).toBe('/genre/:genreId');
		/*expect($route.current.params.genreId).toBe();*/

	}));
});