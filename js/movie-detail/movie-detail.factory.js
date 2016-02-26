//Endpoint where i need to hit commented below
//BASE_URL + MOVIE_DETAIL_URL.replace('%s', movieId)
MovieFinder
	.factory('MovieDetailFactory', ['$http', 'API_KEY', 'BASE_URL', 'MOVIE_DETAIL_URL', function($http, API_KEY, BASE_URL, MOVIE_DETAIL_URL){
		return function(movieId){
			console.log('movieId', movieId);
			return $http.jsonp(BASE_URL + MOVIE_DETAIL_URL.replace('%s', movieId),{
				params: {
					api_key: API_KEY,
					append_to_response: 'reviews,similar,rating,videos',
					callback: 'JSON_CALLBACK'
				}
			});
		};
	}]);