MovieFinder
	.directive('genreDetail', function(){
		return {
			//genre-detail directive
			templateUrl: 'js/genre-detail/genre-detail.html',
			restrict: 'E',
			transclude: false,
			scope: true
		};
	});