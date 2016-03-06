describe('Home Controller', function(){
	var scope, ctrl;

	beforeEach(module('MovieFinder'));

	beforeEach(inject(function(_HomeFactory_, $rootScope, _$location_, $controller, $route){
		scope = $rootScope.$new();
		var $location = _$location_;
		var HomeFactory = _HomeFactory_;

		$route.current = {
			params: {
				topRatedId: 240832
			}
		};

		scope.topRatedSelect = {
			id: 240832,
			path: 'bar',
			title: 'foo'
		};

		ctrl = $controller('HomeCtrl', {
			$scope: scope,
			$location: $location,
			HomeFactory: HomeFactory,
			$route: $route
		});
	}));

	fit('should route to the correct movie when topRatedSelect() is fired',
	inject(function($httpBackend, $rootScope, $route, $location){
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/movie/top_rated?api_key=990ba45b90f56c57b4e00a54fc773d8c&callback=JSON_CALLBACK').respond(200);
		$httpBackend.expect('GET', 'js/movie-detail/movie-detail.html').respond(200);
		$httpBackend.expect('GET', 'js/home/home.html').respond(200);

		$rootScope.$apply(function(){
			$location.path('/movie/240832');
		});

		$rootScope.$apply(function(){
			scope.topRatedSelect(240832);
		});

		expect($route.current.originalPath).toBe('/movie/:movieId');
		expect($route.current.params.movieId).toBe('240832');
	}));
});