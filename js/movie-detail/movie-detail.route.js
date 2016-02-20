//config block to create routes specific to searched movie

angular.module('MovieFinder')
	.config(['$routeProvider', function($routeProvider){
		console.log('test');
		$routeProvider
			.when('/movie/:id', {
				templateUrl: 'js/movie-detail/movie-detail.html',
				controller: 'MovieDetailCtrl'
			});
	}]);