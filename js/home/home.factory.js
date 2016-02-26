MovieFinder
	.factory('HomeFactory', ['$http', 'BASE_URL', 'TOP_RATED_URL', 'API_KEY', function($http, BASE_URL, TOP_RATED_URL, API_KEY){
		return function(topRatedId){	
			return $http.jsonp(BASE_URL + TOP_RATED_URL, {
				params: {
					api_key: API_KEY,
					callback: 'JSON_CALLBACK'
				}
			});
		};
	}]);