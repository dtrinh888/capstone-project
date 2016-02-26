MovieFinder
	.controller('MovieSearchCtrl', ['$scope','MovieSearchFactory', '$location', function($scope, MovieSearchFactory, $location){
		$scope.movies = [];
		var titlesToId = {};
		$scope.updateMovies = function(){
			if($scope.query.length >= 3){
				MovieSearchFactory($scope.query).then(function(dataResults){
					console.log('dataResults', dataResults);
					$scope.movies = [];	
					titlesToId = {};
					dataResults.data.results.forEach(function(movie){
						$scope.movies.push(movie.title);
						titlesToId[movie.title] = movie.id;
					});
				});
			}
		};
		$scope.navigateMovie = function(movieTitle){
			console.log(movieTitle, titlesToId[movieTitle]);
			$location.path('/movie/' + titlesToId[movieTitle]);
		};
	}]);