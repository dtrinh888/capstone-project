angular.module('MovieFinder')
	.controller('MovieDetailCtrl',['$scope', '$route', 'MovieDetailFactory', 'MovieSearchFactory', function($scope, $route, MovieDetailFactory, MovieSearchFactory){
		$scope.mdv = 'Movie Detail View';
		$scope.movieDetail = function(){
			MovieDetailFactory.get().then(function(movie){
				console.log('MovieDetailCtrl', movie);
			});
		};
	}]);
