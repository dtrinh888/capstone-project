angular.module('MovieFinder', ['ngRoute'])
	.constant('API_KEY', '990ba45b90f56c57b4e00a54fc773d8c')
	.constant('BASE_URL', 'http://api.themoviedb.org/3/')
	.constant('TOP_RATED_URL', 'movie/top_rated')
	.constant('MOVIE_SEARCH_URL', 'search/movie')
	.constant('MOVIE_DETAIL_PATH', 'movie/%s')
	.constant('MOVIE_GENRE_URL', 'genre/movie/list')
	.constant('SPECIFIC_GENRE_LIST_URL', 'discover/movie')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				//home page route
				templateUrl: 'js/home/home.html'
			})
			.when('/404', {
				templateUrl: '<p>Error - Page Not Found</p>'
			})
			.otherwise('/404');
		}])
	.factory('', ['$http', function($http){
		//factory for home page displaying top rated movies of all time
	}])
	.factory('', ['$http', function($http){
		//factory for auto-complete search bar
	}])
	.factory('', ['$http', function($http){
		//factory for dropdown
	}])
	.factory('', ['$http', function($http){
		//
	}]);

