//config block to create routes specific to searched movie

angular.module('MovieFinder')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/movie-detail', {
				templateUrl: 'js/movie-detail/movie-detail.html',
				controller: 'MovieDetailCtrl'
			});
	}]);