angular.module('MovieFinder')
	.controller('MovieDetailCtrl',['$scope', '$route', 'MovieDetailFactory', function($scope, $route, MovieDetailFactory){
		$scope.mdv = 'Movie Detail View';
		MovieDetailFactory($route.current.params.movieId).then(function(movie){
			console.log('MovieDetailCtrl', movie);
		});
	}]);
