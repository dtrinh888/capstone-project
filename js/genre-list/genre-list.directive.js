angular.module('MovieFinder')
	.directive('genreList', function(){
		return{
			templateUrl: 'js/genre-list/genre-list.html',
			restrict: 'E',
			transclude: false,
			scope: true
		};
	});