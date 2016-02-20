angular.module('MovieFinder')
	.factory('MovieSearchFactory', ['$http','API_KEY','BASE_URL', 'MOVIE_SEARCH_URL', function($http, API_KEY, BASE_URL, MOVIE_SEARCH_URL){
		return function(query){
			console.log('query', query);
			return $http.jsonp(BASE_URL + MOVIE_SEARCH_URL, {
				params: {
					api_key: API_KEY,
					query: query,
					// 'ngram' is for searching for autocomplete
					search_type: 'ngram',
					callback: 'JSON_CALLBACK'
				}
			});
		};
	}]);