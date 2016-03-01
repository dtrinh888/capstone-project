MovieFinder
	.controller('GenreListCtrl', ['$scope', '$route', '$location', 'GenreListFactory', function($scope, $route, $location, GenreListFactory){
		GenreListFactory().then(function(genres){
			console.log('GenreListCtrl', genres);
			$scope.test = 'test';
			$scope.genreList = [{id: null, name: 'Select a Genre'}];
			genres.data.genres.forEach(function(genre){
				//console.log(genre.name);
				$scope.genreList.push(genre);
			});
			$scope.selectedGenre = $scope.genreList[0];
		});
		$scope.navigateGenre = function(){
			if($scope.selectedGenre.id !== null){
				$location.path('genre/' + $scope.selectedGenre.id);
				$scope.selectedGenre = $scope.genreList[0];
			}
		};
	}]);