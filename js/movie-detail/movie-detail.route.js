//config block to create routes specific to searched movie

angular.module('MovieFinder', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/movie-detail', {
				templateUrl: 'js/movie-detail/movie-detail.html',
				controller: 'MovieDetailCtrl'
			});
	});