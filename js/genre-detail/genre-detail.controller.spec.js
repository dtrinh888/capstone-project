describe('Genre Detail Controller', function(){
	var ctrl, scope, $location, GenreDetailFactory;

	beforeEach(module('MovieFinder'));

	beforeEach(inject(function($controller, $route, $rootScope, _$location_, _GenreDetailFactory_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    scope = $rootScope.$new();
    $location = _$location_;
    GenreDetailFactory = _GenreDetailFactory_;

    $route.current = {
    	params: {
    		genreId: 18
    	}
    };

    ctrl = $controller("GenreDetailCtrl", {
      $scope: scope,
      $location: $location,
      GenreDetailFactory: GenreDetailFactory,
      $route: $route
    });

    $location.path('/genre/18');
  }));

	it('should route to movie when selectMovie is called', 
	inject(function($httpBackend, $rootScope, $route, $location){
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/genre/18?api_key=990ba45b90f56c57b4e00a54fc773d8c&callback=JSON_CALLBACK').respond(200);
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/discover/movie?api_key=990ba45b90f56c57b4e00a54fc773d8c&callback=JSON_CALLBACK&sort_by=popularity.desc&with_genres=18').respond(200);
		$httpBackend.expect('GET', 'js/movie-detail/movie-detail.html').respond(200);
		$httpBackend.expect('GET', 'js/genre-detail/genre-detail.html').respond(200);	

		$rootScope.$apply(function(){
			scope.selectMovie(240832);
		});

		expect($route.current.originalPath).toBe('/movie/:movieId');
		expect($route.current.params.movieId).toBe('240832');
	}));
});