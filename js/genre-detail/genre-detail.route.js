//config block to create routes specific to searched category from dropdown

angular.module('MovieFinder', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/genre-detail', {
			templateUrl: 'js/genre-detail/genre-detail.html',
			controller: 'GenreDetailCtrl'
		});
	});