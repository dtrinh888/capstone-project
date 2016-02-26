MovieFinder
	.factory('GenreDetailFactory', ['$http', 'BASE_URL', 'SPECIFIC_GENRE_LIST_URL', 'GENRE_DETAIL_URL', 'API_KEY', function($http, BASE_URL, SPECIFIC_GENRE_LIST_URL, GENRE_DETAIL_URL, API_KEY){
		return {
			getMovies: function(genreId){
				return $http.jsonp(BASE_URL + SPECIFIC_GENRE_LIST_URL, {
					params: {
						api_key: API_KEY,
						sort_by: 'popularity.desc',
						with_genres: genreId,
						callback: 'JSON_CALLBACK'
					}
				});
			}, get: function(genreId){
				return $http.jsonp(BASE_URL + GENRE_DETAIL_URL.replace('%s', genreId), {
					params: {
						api_key: API_KEY,
						callback: 'JSON_CALLBACK'
					}
				});
			}
		};
	}]);