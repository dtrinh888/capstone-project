angular.module('MovieFinder')
	.controller('GenreListCtrl', ['$scope', '$route', '$location', 'GenreListFactory', function($scope, $route, $location, GenreListFactory){
		GenreListFactory().then(function(genres){
			console.log('GenreListCtrl', genres);
			$scope.test = 'test';
		});
	}]);