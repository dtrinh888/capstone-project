//config block to create routes specific to searched movie

MovieFinder
	.config(['$routeProvider', function($routeProvider){
		console.log('test');
		$routeProvider
			.when('/movie/:movieId', {
				templateUrl: 'js/movie-detail/movie-detail.html',
				controller: 'MovieDetailCtrl'
			});
	}]);