MovieFinder
	.controller('HomeCtrl', ['$scope', '$route', 'HomeFactory', 'MOVIE_IMG_PATH', '$location', function($scope, $route, HomeFactory, MOVIE_IMG_PATH, $location){
		$scope.home = 'Home View';
		HomeFactory().then(function(topMovieData){
			console.log('topdata', topMovieData);
			$scope.topRatedMovies = [];
			topMovieData.data.results.forEach(function(topMovie){
				$scope.topRatedMovies.push({
					id: topMovie.id,
					path: MOVIE_IMG_PATH + topMovie.poster_path
				});
			});
		});
	}]);
