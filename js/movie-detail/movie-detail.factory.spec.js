describe('Movie Detail Factory', function(){
	beforeEach(module('MovieFinder'));

	fit('should return correct movie details',
	inject(function($httpBackend, $rootScope, MovieDetailFactory){
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/movie/244786?api_key=990ba45b90f56c57b4e00a54fc773d8c&append_to_response=reviews,similar,rating,videos&callback=JSON_CALLBACK').respond(movieResponse);
		var runtime;
		MovieDetailFactory(244786).then(function(results){
			console.log('movie', results);
			runtime = results.data.runtime;
		});

		$rootScope.$digest();
		$httpBackend.flush();

		expect(runtime).toBe(105);
	}));
});