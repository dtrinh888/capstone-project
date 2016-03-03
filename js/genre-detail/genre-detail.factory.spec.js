describe('Genre Detail Factory', function(){
	beforeEach(module('MovieFinder'));

	it('should return correct genre specific movies', 
	inject(function($rootScope, GenreDetailFactory, $httpBackend){
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/discover/movie?api_key=990ba45b90f56c57b4e00a54fc773d8c&callback=JSON_CALLBACK&sort_by=popularity.desc&with_genres=35').respond(movieDetailResponse);
		var movies;
		GenreDetailFactory.getMovies(35).then(function(results){
			console.log('gdf',results);
			movies = results.data.results;
		});
		$rootScope.$digest();
		$httpBackend.flush();
		expect(movies.length).toBe(2);
	}));

	it('should display the correct genre name',
	inject(function($rootScope, GenreDetailFactory, $httpBackend){
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/genre/35?api_key=990ba45b90f56c57b4e00a54fc773d8c&callback=JSON_CALLBACK').respond(genreDetailResponse);
		var genre;
		GenreDetailFactory.get(35).then(function(results){
			console.log('genreTest', results);
			genre = results.data.name;
		});
		$rootScope.$digest();
		$httpBackend.flush();
		expect(genre).toBe('Comedy');
	}));
});