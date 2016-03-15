//had to remove:
//$scope.genreList = [{id: null, name: 'Select a Genre'}];
//$scope.selectedGenre = $scope.genreList[0];
//from the .then() because when testing it gets weird when the .then will trigger
//even though the httpBackend.expect are set up to respond with a 200, if we
//don't simulate a deferred promise and resolve it, the .then will never trigger
//which means any code inside of them won't be executed, so in our case,
//key scope models and methods were never being created
MovieFinder
	.controller('GenreListCtrl', ['$scope', '$route', '$location', 'GenreListFactory', function($scope, $route, $location, GenreListFactory){
		$scope.genreList = [{id: null, name: 'Select a Genre'}];
		$scope.selectedGenre = $scope.genreList[0];

		GenreListFactory().then(function(genres){
			console.log('GenreListCtrl', genres);
			$scope.test = 'test';
			genres.data.genres.forEach(function(genre){
				//console.log(genre.name);
				$scope.genreList.push(genre);
			});
			console.log('genreList', $scope.genreList);
		});
		console.log('genreList', $scope.genreList);
		$scope.navigateGenre = function(){
			if($scope.selectedGenre.id !== null){
				$location.path('genre/' + $scope.selectedGenre.id);
				$scope.selectedGenre = $scope.genreList[0];
			}
		};
	}]);