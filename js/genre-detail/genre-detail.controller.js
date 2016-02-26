MovieFinder
	.controller('GenreDetailCtrl',['$scope', '$route', 'GenreDetailFactory', 'MOVIE_IMG_PATH', '$location',  function($scope, $route, GenreDetailFactory, MOVIE_IMG_PATH, $location){
		$scope.gdv = 'Genre Detail View';
		GenreDetailFactory.get($route.current.params.genreId).then(function(genre){
			$scope.genre = genre.data;
		});
		GenreDetailFactory.getMovies($route.current.params.genreId).then(function(data){
			var movies = data.data.results;
			console.log('movies', movies);
			$scope.genreMovies = [];
			movies.forEach(function(movie){
				//console.log('movie',movie);
				if(movie.poster_path !== null) {
					var moviesImg = MOVIE_IMG_PATH + movie.poster_path;
					//console.log('MI', moviesImg);
					$scope.genreMovies.push({
						id: movie.id, 
						path: moviesImg,
						title: movie.title
					});
				}
			});
		});
		$scope.selectMovie = function(movieId){
			console.log(movieId);
			$location.path('/movie/' + movieId);
		};
	}]);