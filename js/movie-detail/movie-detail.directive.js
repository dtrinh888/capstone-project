MovieFinder
	.directive('movieDetail', function(){
		return{
			//movie-detail directive
			templateUrl: 'js/movie-detail/movie-detail.html',
			restrict: 'E',
			transclude: false,
			scope: true
		};
	});