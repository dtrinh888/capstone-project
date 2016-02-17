angular.module('MovieFinder', ['ngRoute'])
	.constant('API_KEY', '990ba45b90f56c57b4e00a54fc773d8c')
	.constant('BASE_URL', 'http://api.themoviedb.org/3/')
	.constant('TOP_RATED_URL', 'movie/top_rated')
	.constant('MOVIE_SEARCH_URL', 'search/movie')
	.constant('MOVIE_DETAIL_PATH', 'movie/%s')
	.constant('MOVIE_GENRE_URL', 'genre/movie/list')
	.constant('SPECIFIC_GENRE_LIST_URL', 'discover/movie')
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				//home page route
				templateUrl: 'view/home.html'
			});
		})
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
	}])
	.directive('movieDetail', function(){
		return{
			//movie-detail directive
			templateUrl: 'movie-detail.html',
			restrict: 'E',
			transclude: false,
			scope: true
		};
	})
	.directive('genreDetail', function(){
		return {
			//genre-detail directive
			templateUrl: 'genre-detail.html',
			restrict: 'E',
			transclude: false,
			scope: true
		};
	})