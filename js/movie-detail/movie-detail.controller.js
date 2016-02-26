MovieFinder
	.controller('MovieDetailCtrl',['$scope', '$route', 'MovieDetailFactory', 'MOVIE_IMG_PATH', '$location', function($scope, $route, MovieDetailFactory, MOVIE_IMG_PATH, $location){
		$scope.mdv = 'Movie Detail View';
		MovieDetailFactory($route.current.params.movieId).then(function(movie){
			console.log('MovieDetailCtrl', movie);
			$scope.movieImg = MOVIE_IMG_PATH + movie.data.poster_path;
			$scope.genres = [];
			movie.data.genres.forEach(function(genre){
				console.log('push', genre);
				$scope.genres.push({id: genre.id, name: genre.name});
			});
			$scope.similar = [];
			movie.data.similar.results.forEach(function(similarMovie){
				console.log('similar', similarMovie);
				$scope.similar.push({
					id: similarMovie.id, 
					path: MOVIE_IMG_PATH + similarMovie.poster_path
				});
			});
		});

		$scope.similarSelect = function(movieId){
			$location.path('/movie/' + movieId);
		};
	}]);
