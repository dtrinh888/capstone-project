angular.module('MovieFinder')
	.constant('MOVIE_IMG_PATH', 'http://image.tmdb.org/t/p/w300/')
	.controller('MovieDetailCtrl',['$scope', '$route', 'MovieDetailFactory', 'MOVIE_IMG_PATH', function($scope, $route, MovieDetailFactory, MOVIE_IMG_PATH){
		$scope.mdv = 'Movie Detail View';
		MovieDetailFactory($route.current.params.movieId).then(function(movie){
			console.log('MovieDetailCtrl', movie);
			$scope.movieImg = MOVIE_IMG_PATH + movie.data.backdrop_path;
		});
	}]);
