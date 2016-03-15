describe('Movie Search Controller', function(){
	var ctrl, scope;

	beforeEach(module('MovieFinder'));

	beforeEach(inject(function(_$location_, _MovieSearchFactory_, $rootScope, $route, $controller){
		scope = $rootScope.$new();
		$location = _$location_;
		MovieSearchFactory = _MovieSearchFactory_;

		$route.current = {
			params: {
				genreId: 123456
			}
		};

		ctrl = $controller('MovieSearchCtrl', {
			$scope: scope,
			$location: $location,
			$route: $route,
			MovieSearchFactory: MovieSearchFactory
		});
	}));

	it('should route to correct movie search when navigateMovie() fires', 
		inject(function($httpBackend, $rootScope, $route){
			$httpBackend.expect('GET', 'js/movie-detail/movie-detail.html').respond(200);

			$rootScope.$apply(function(){
				scope.navigateMovie();
			});

			expect($route.current.originalPath).toBe('/movie/:movieId');
			expect($route.current.params.genreId).toBe(123456);
		}));
});