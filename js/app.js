MovieFinder = angular.module('MovieFinder', ['ngRoute', 'autocomplete'])
	.constant('API_KEY', '990ba45b90f56c57b4e00a54fc773d8c')
	.constant('BASE_URL', 'http://api.themoviedb.org/3/')
	.constant('TOP_RATED_URL', 'movie/top_rated')
	.constant('MOVIE_SEARCH_URL', 'search/movie')
	.constant('MOVIE_DETAIL_URL', 'movie/%s')
	.constant('MOVIE_GENRE_URL', 'genre/movie/list')
	.constant('SPECIFIC_GENRE_LIST_URL', 'discover/movie')
	.constant('GENRE_DETAIL_URL', 'genre/%s')
	.constant('MOVIE_IMG_PATH', 'http://image.tmdb.org/t/p/w300/')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				//home page route
				templateUrl: 'js/home/home.html',
				controller: 'HomeCtrl'
			})
			.when('/404', {
				template: '<p>Error - Page Not Found</p>'
			})
			.otherwise('/404');
		}]);