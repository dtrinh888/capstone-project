//Endpoint where i need to hit commented below
//BASE_URL + MOVI_DETAIL_URL.replace('%s', movieId)
angular.module('MovieFinder')
	.factory('MovieDetailFactory', ['$http', function($http){
		return function(movieId){
			console.log('movieId', movieId);
			return $http.jsonp(BASE_URL + MOVIE_DETAIL_URL.replace('%s', movieId),{
				params: {
					api_key: API_KEY,
					append_to_response: 'reviews, similar, rating, videos',
					callback: 'JSON_CALLBACK'
				}
			});
		};
	}]);