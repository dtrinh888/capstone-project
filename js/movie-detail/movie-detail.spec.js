describe('Movie Detail Routes', function (){
	beforeEach(module('MovieFinder'));

	it('should load correct controller and template for Movie Detail',
	inject(function($rootScope, $httpBackend, $location, $route){
		$httpBackend.expect('GET', 'js/movie-detail/movie-detail.html').respond(200);

		$rootScope.$apply(function(){
			$location.path('/movie/23304');
		});

		expect($route.current.controller).toBe('MovieDetailCtrl');
		expect($route.current.loadedTemplateUrl).toBe('js/movie-detail/movie-detail.html');
	}));
});