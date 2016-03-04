describe('Genre Detail Controller', function(){
	var ctrl, scope;

	beforeEach(module('MovieFinder'));

	beforeEach(inject(function(_MovieDetailFactory_, _$location_, $rootScope, $controller, $route){
		scope = $rootScope.$new();
		var MovieDetailFactory = _MovieDetailFactory_;
		var $location = _$location_;

		$route.current = {
			params: {
				genreId: 240832
			}
		};

		ctrl = $controller('MovieDetailCtrl', {
			$scope: scope,
			$route: $route,
			$location: $location,
			MovieDetailFactory: MovieDetailFactory
		});
	}));

	fit('should route to correct movie when similarSelect() is fired', 
	inject(function($httpBackend, $route, $rootScope){
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/movie/undefined?api_key=990ba45b90f56c57b4e00a54fc773d8c&append_to_response=reviews,similar,rating,videos&callback=JSON_CALLBACK').respond(200);
		$httpBackend.expect('GET', 'js/movie-detail/movie-detail.html').respond(200);

		$rootScope.$apply(function(){
			scope.similarSelect(240832);
		});

		expect($route.current.originalPath).toBe('/movie/:movieId');
		expect($route.current.params.movieId).toBe('240832');
	}));
});