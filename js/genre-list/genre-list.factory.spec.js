describe('Genre List Factory', function(){
	beforeEach(module('MovieFinder'));

	it('should return correct genre name', 
	inject(function($rootScope, GenreListFactory, $httpBackend){
		$httpBackend.expect('JSONP', 'http://api.themoviedb.org/3/genre/movie/list?api_key=990ba45b90f56c57b4e00a54fc773d8c&callback=JSON_CALLBACK').respond(genreListResponse);
		var genreName;
		var genreId;
		GenreListFactory(35).then(function(results){
			console.log('res',results);
			genreName = results.data.name;
			genreId = results.data.id;
		});
		$rootScope.$digest();
		$httpBackend.flush();

		expect(genreName).toBe('Comedy');
		expect(genreId).toBe(35);
	}));
});