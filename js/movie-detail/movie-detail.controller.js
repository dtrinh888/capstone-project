MovieFinder
	.controller('MovieDetailCtrl',['$scope', '$route', 'MovieDetailFactory', 'MOVIE_IMG_PATH', '$location', function($scope, $route, MovieDetailFactory, MOVIE_IMG_PATH, $location){
		$scope.mdv = 'Movie Detail View';
		MovieDetailFactory($route.current.params.movieId).then(function(movie){
			console.log('MovieDetailCtrl', movie);
			$scope.movieImg = MOVIE_IMG_PATH + movie.data.poster_path;
			$scope.title = movie.data.title;
			$scope.overview = movie.data.overview;
			$scope.year = movie.data.release_date.slice(0,4);
			$scope.release_date = movie.data.release_date;
			$scope.runtime = movie.data.runtime;
			$scope.tagline = movie.data.tagline;
			$scope.ratings = movie.data.vote_average;
			$scope.revenue = movie.data.revenue;
			$scope.votes = movie.data.vote_count;
			$scope.genres = [];
			movie.data.genres.forEach(function(genre){
				$scope.genres.push({id: genre.id, name: genre.name});
			});
			$scope.similar = [];
			movie.data.similar.results.forEach(function(similarMovie){
				//console.log(similarMovie);
				if(similarMovie.poster_path !== null){
					var similarImg = MOVIE_IMG_PATH + similarMovie.poster_path;
					$scope.similar.push({
						id: similarMovie.id, 
						path: similarImg,
						title: similarMovie.title
					});
				}
			});
			$scope.languages = [];
			movie.data.spoken_languages.forEach(function(language){
				$scope.languages.push(language.name);
			});
		});

		$scope.similarSelect = function(movieId){
			$location.path('/movie/' + movieId);
		};
	}]);
