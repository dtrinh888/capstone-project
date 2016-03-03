describe('Home Factory', function(){
	beforeEach(module('MovieFinder'));

	it('should return correct top rated movie details', 
	inject(function($rootScope, HomeFactory, $httpBackend){
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/movie/top_rated?api_key=990ba45b90f56c57b4e00a54fc773d8c&callback=JSON_CALLBACK').respond(topRatedResponse);
		var genreId;
		HomeFactory(18).then(function(results){
			console.log('res', results);
			genreId = results.data.results.genre_ids;
		});

		$rootScope.$digest();
		$httpBackend.flush();

		expect(genreId.length).toBe(2);
	}));
});