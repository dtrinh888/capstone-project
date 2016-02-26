MovieFinder
	.factory('GenreListFactory', ['$http', 'BASE_URL','MOVIE_GENRE_URL', 'API_KEY', function($http, BASE_URL, MOVIE_GENRE_URL, API_KEY){
		return function(){
			return $http.jsonp(BASE_URL + MOVIE_GENRE_URL, {
				params: {
					api_key: API_KEY,
					callback: 'JSON_CALLBACK'
				}
			});
		};
	}]);