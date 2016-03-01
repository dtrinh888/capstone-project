describe('Genre Detail Routes', function(){
	var ctrl, scope, $q, $route, $location, GenreDetailCtrl;

	beforeEach(module('MovieFinder'));

	it('should load the correct controller and template for Genre Detail route', inject(function($httpBackend, $rootScope, $route, $location){
		$httpBackend.expect('GET', 'js/genre-detail/genre-detail.html').respond(200);

		$rootScope.$apply(function(){
			$location.path('/genre/35');
		});

		expect($route.current.controller).toBe('GenreDetailCtrl');
		expect($route.current.loadedTemplateUrl).toBe('js/genre-detail/genre-detail.html');
	}));
});