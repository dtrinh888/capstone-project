describe('Movie Search Factory', function(){
	beforeEach(module('MovieFinder'));

	it('should return correct searched movie detail', 
	inject(function($httpBackend, $rootScope, MovieSearchFactory){
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/search/movie?api_key=990ba45b90f56c57b4e00a54fc773d8c&callback=JSON_CALLBACK&query=26607&search_type=ngram').respond(movieSearchResponse);

		var searchedMovies;
		var firstMovieDetail;
		MovieSearchFactory(26607).then(function(results){
			console.log('MSF', results);
			searchedMovie = results.data.results;
			firstMovieDetail = results.data.results[0];
			console.log('movieDetail', firstMovieDetail);
		});

		$rootScope.$digest();
		$httpBackend.flush();

		expect(searchedMovie.length).toBe(2);
		expect(firstMovieDetail.title).toBe('Above the Rim');
	}));
});